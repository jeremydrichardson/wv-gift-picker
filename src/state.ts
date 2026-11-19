import { useEffect, useReducer } from 'react';
import { GIFTS, type Gift } from './data/gifts';

export interface Kid {
  id: string;
  name: string;
  avatar: string;
  color: string;
  budget: number;
  picks: Record<string, number>;
  done: boolean;
}

export type Phase = 'setup' | 'shopping' | 'summary';

export interface AppState {
  phase: Phase;
  kids: Kid[];
  currentKidId: string | null;
}

export type Action =
  | { type: 'addKid' }
  | { type: 'updateKid'; kidId: string; changes: Partial<Pick<Kid, 'name' | 'avatar' | 'budget'>> }
  | { type: 'removeKid'; kidId: string }
  | { type: 'startShopping' }
  | { type: 'selectKid'; kidId: string }
  | { type: 'addGift'; kidId: string; giftId: string }
  | { type: 'removeGift'; kidId: string; giftId: string; all?: boolean }
  | { type: 'clearPicks'; kidId: string }
  | { type: 'finishTurn'; kidId: string }
  | { type: 'goTo'; phase: Phase }
  | { type: 'resetPicks' };

export const AVATARS = ['🦌', '⛄', '🧝', '🐧', '🎅', '🤶', '🐻‍❄️', '🦊', '🐰', '🦄', '🐶', '🐱'];
export const COLORS = ['#e63946', '#2a9d8f', '#f4a261', '#7b5ea7', '#3a86ff', '#ff6fae', '#43aa8b', '#f9c74f'];
export const BUDGET_PRESETS = [25, 50, 100, 150, 250];

const STORAGE_KEY = 'gift-budget-elves:v1';
const giftsById = new Map(GIFTS.map((g) => [g.id, g]));

export function getGift(id: string): Gift | undefined {
  return giftsById.get(id);
}

export function spentBy(kid: Kid): number {
  return Object.entries(kid.picks).reduce(
    (sum, [id, qty]) => sum + (getGift(id)?.price ?? 0) * qty,
    0,
  );
}

export function remainingFor(kid: Kid): number {
  return kid.budget - spentBy(kid);
}

export function picksOf(kid: Kid): { gift: Gift; qty: number }[] {
  return Object.entries(kid.picks)
    .map(([id, qty]) => ({ gift: getGift(id), qty }))
    .filter((p): p is { gift: Gift; qty: number } => !!p.gift && p.qty > 0);
}

let idCounter = 0;
function newId(): string {
  idCounter += 1;
  return `${Date.now().toString(36)}-${idCounter}`;
}

function makeKid(index: number): Kid {
  return {
    id: newId(),
    name: '',
    avatar: AVATARS[index % AVATARS.length],
    color: COLORS[index % COLORS.length],
    budget: 100,
    picks: {},
    done: false,
  };
}

function initialState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as AppState;
      if (Array.isArray(parsed.kids) && parsed.kids.length > 0) return parsed;
    }
  } catch {
    // ignore corrupt saved state
  }
  return { phase: 'setup', kids: [makeKid(0), makeKid(1)], currentKidId: null };
}

function mapKid(state: AppState, kidId: string, fn: (kid: Kid) => Kid): AppState {
  return { ...state, kids: state.kids.map((k) => (k.id === kidId ? fn(k) : k)) };
}

export function displayName(kid: Kid, index: number): string {
  return kid.name.trim() || `Kid ${index + 1}`;
}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'addKid':
      return { ...state, kids: [...state.kids, makeKid(state.kids.length)] };

    case 'updateKid':
      return mapKid(state, action.kidId, (kid) => {
        const next = { ...kid, ...action.changes };
        if (action.changes.budget !== undefined) {
          next.budget = Math.max(0, Math.round(action.changes.budget));
        }
        return next;
      });

    case 'removeKid': {
      if (state.kids.length <= 1) return state;
      const kids = state.kids.filter((k) => k.id !== action.kidId);
      return {
        ...state,
        kids,
        currentKidId: state.currentKidId === action.kidId ? kids[0].id : state.currentKidId,
      };
    }

    case 'startShopping': {
      // A lowered budget could leave earlier picks over the limit, so drop them.
      const kids = state.kids.map((k) => (spentBy(k) > k.budget ? { ...k, picks: {}, done: false } : k));
      const next = kids.find((k) => !k.done) ?? kids[0];
      return { ...state, kids, phase: 'shopping', currentKidId: next.id };
    }

    case 'selectKid':
      return { ...state, phase: 'shopping', currentKidId: action.kidId };

    case 'addGift':
      return mapKid(state, action.kidId, (kid) => {
        const gift = getGift(action.giftId);
        if (!gift || gift.price > remainingFor(kid)) return kid;
        return {
          ...kid,
          done: false,
          picks: { ...kid.picks, [gift.id]: (kid.picks[gift.id] ?? 0) + 1 },
        };
      });

    case 'removeGift':
      return mapKid(state, action.kidId, (kid) => {
        const qty = kid.picks[action.giftId] ?? 0;
        const picks = { ...kid.picks };
        if (action.all || qty <= 1) delete picks[action.giftId];
        else picks[action.giftId] = qty - 1;
        return { ...kid, done: false, picks };
      });

    case 'clearPicks':
      return mapKid(state, action.kidId, (kid) => ({ ...kid, picks: {}, done: false }));

    case 'finishTurn': {
      const kids = state.kids.map((k) => (k.id === action.kidId ? { ...k, done: true } : k));
      const idx = kids.findIndex((k) => k.id === action.kidId);
      const ordered = [...kids.slice(idx + 1), ...kids.slice(0, idx)];
      const next = ordered.find((k) => !k.done);
      return next
        ? { ...state, kids, currentKidId: next.id }
        : { ...state, kids, phase: 'summary' };
    }

    case 'goTo':
      return { ...state, phase: action.phase };

    case 'resetPicks':
      return {
        ...state,
        phase: 'setup',
        currentKidId: null,
        kids: state.kids.map((k) => ({ ...k, picks: {}, done: false })),
      };
  }
}

export function useAppState() {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);
  return [state, dispatch] as const;
}
