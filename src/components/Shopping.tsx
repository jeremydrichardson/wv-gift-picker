import { useEffect, useMemo, useRef, useState, type CSSProperties, type Dispatch, type ReactNode } from 'react';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  pointerWithin,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import { CATEGORIES, GIFTS, type CategoryId, type Gift } from '../data/gifts';
import { displayName, getGift, remainingFor, spentBy, type Action, type Kid } from '../state';
import { celebrate, sparkle } from '../confetti';
import { Basket } from './Basket';
import { GiftCard, GiftCardPreview } from './GiftCard';

interface Props {
  kids: Kid[];
  kid: Kid;
  dispatch: Dispatch<Action>;
}

type SortKey = 'price-asc' | 'price-desc' | 'name';
type DragState = { gift: Gift; from: 'pool' | 'basket' } | null;

const CHEAPEST = Math.min(...GIFTS.map((g) => g.price));

function GiftPool({ children, active }: { children: ReactNode; active: boolean }) {
  const { setNodeRef, isOver } = useDroppable({ id: 'pool' });
  return (
    <section ref={setNodeRef} className={`pool ${active ? 'drop-back' : ''} ${active && isOver ? 'over' : ''}`}>
      {children}
    </section>
  );
}

export function Shopping({ kids, kid, dispatch }: Props) {
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('price-asc');
  const [query, setQuery] = useState('');
  const [onlyAffordable, setOnlyAffordable] = useState(false);
  const [drag, setDrag] = useState<DragState>(null);
  const [shakeId, setShakeId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  const kidIndex = kids.findIndex((k) => k.id === kid.id);
  const name = displayName(kid, kidIndex);
  const remaining = remainingFor(kid);
  const spent = spentBy(kid);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 6 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 8 } }),
  );

  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  };

  // Celebrate once when a kid has spent so much that nothing else fits.
  const celebratedFor = useRef<string | null>(null);
  useEffect(() => {
    const allUsed = spent > 0 && remaining < CHEAPEST;
    const key = `${kid.id}:${spent}`;
    if (allUsed && celebratedFor.current !== key) {
      celebratedFor.current = key;
      celebrate();
    }
  }, [kid.id, spent, remaining]);

  const visibleGifts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = GIFTS.filter(
      (g) =>
        (category === 'all' || g.categories.includes(category)) &&
        (!q || g.name.toLowerCase().includes(q)) &&
        (!onlyAffordable || g.price <= remaining),
    );
    return list.sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      return sort === 'price-asc' ? a.price - b.price : b.price - a.price;
    });
  }, [category, sort, query, onlyAffordable, remaining]);

  const addGift = (gift: Gift, origin?: { x: number; y: number }) => {
    if (gift.price > remaining) {
      blocked(gift);
      return;
    }
    dispatch({ type: 'addGift', kidId: kid.id, giftId: gift.id });
    sparkle(origin);
    showToast(`${gift.emoji} ${gift.name} added!`);
  };

  const blocked = (gift: Gift) => {
    setShakeId(gift.id);
    window.setTimeout(() => setShakeId(null), 500);
    showToast(`Oops! ${gift.name} costs $${gift.price}, but you only have $${remaining} left.`);
  };

  const onDragStart = (e: DragStartEvent) => {
    const data = e.active.data.current as { giftId: string; from: 'pool' | 'basket' } | undefined;
    const gift = data && getGift(data.giftId);
    if (gift && data) setDrag({ gift, from: data.from });
  };

  const onDragEnd = (e: DragEndEvent) => {
    const current = drag;
    setDrag(null);
    if (!current || !e.over) return;
    if (current.from === 'pool' && e.over.id === 'basket') {
      const rect = e.active.rect.current.translated;
      const origin = rect
        ? { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight }
        : undefined;
      addGift(current.gift, origin);
    } else if (current.from === 'basket' && e.over.id === 'pool') {
      dispatch({ type: 'removeGift', kidId: kid.id, giftId: current.gift.id });
      showToast(`Took out ${current.gift.name}`);
    }
  };

  const nextKid = (() => {
    const ordered = [...kids.slice(kidIndex + 1), ...kids.slice(0, kidIndex)];
    return ordered.find((k) => !k.done);
  })();

  return (
    <DndContext sensors={sensors} collisionDetection={pointerWithin} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={() => setDrag(null)}>
      <nav className="kid-tabs" aria-label="Whose turn">
        {kids.map((k, i) => {
          const left = remainingFor(k);
          return (
            <button
              key={k.id}
              type="button"
              className={`kid-tab ${k.id === kid.id ? 'active' : ''}`}
              style={{ '--kid-color': k.color } as CSSProperties}
              aria-current={k.id === kid.id ? 'true' : undefined}
              onClick={() => dispatch({ type: 'selectKid', kidId: k.id })}
            >
              <span className="kid-tab-avatar" aria-hidden="true">
                {k.avatar}
              </span>
              <span className="kid-tab-text">
                <strong>{displayName(k, i)}</strong>
                <span>{k.done ? '✅ Done' : `$${left} left`}</span>
              </span>
            </button>
          );
        })}
      </nav>

      <div className="turn-banner" style={{ '--kid-color': kid.color } as CSSProperties}>
        <span className="turn-avatar" aria-hidden="true">
          {kid.avatar}
        </span>
        <div>
          <h2>It's {name}'s turn!</h2>
          <p>
            You have <strong>${kid.budget}</strong> to give. Drag gifts into your basket.
          </p>
        </div>
        <div className="turn-actions">
          <button type="button" className="btn ghost" onClick={() => dispatch({ type: 'goTo', phase: 'setup' })}>
            ⚙️ Kids & budgets
          </button>
          <button type="button" className="btn primary" onClick={() => dispatch({ type: 'finishTurn', kidId: kid.id })}>
            {nextKid && nextKid.id !== kid.id
              ? `I'm done! Next: ${displayName(nextKid, kids.indexOf(nextKid))} →`
              : "I'm done! See everyone's gifts →"}
          </button>
        </div>
      </div>

      <div className="shop-layout">
        <GiftPool active={drag?.from === 'basket'}>
          <div className="filters">
            <div className="category-chips" role="group" aria-label="Category">
              <button
                type="button"
                className={`chip ${category === 'all' ? 'active' : ''}`}
                onClick={() => setCategory('all')}
              >
                ⭐ All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`chip ${category === c.id ? 'active' : ''}`}
                  onClick={() => setCategory(c.id)}
                >
                  {c.emoji} {c.label}
                </button>
              ))}
            </div>
            <div className="filter-row">
              <input
                type="search"
                className="search"
                placeholder="Search gifts…"
                aria-label="Search gifts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)} aria-label="Sort gifts">
                <option value="price-asc">Cheapest first</option>
                <option value="price-desc">Priciest first</option>
                <option value="name">A to Z</option>
              </select>
              <label className="toggle">
                <input type="checkbox" checked={onlyAffordable} onChange={(e) => setOnlyAffordable(e.target.checked)} />
                Only what I can afford
              </label>
            </div>
          </div>

          {visibleGifts.length === 0 ? (
            <p className="muted empty-pool">
              {onlyAffordable && remaining < CHEAPEST
                ? "You've used up your budget! 🎉"
                : 'No gifts match. Try another category or search.'}
            </p>
          ) : (
            <div className="gift-grid">
              {visibleGifts.map((gift) => (
                <GiftCard
                  key={gift.id}
                  gift={gift}
                  remaining={remaining}
                  inBasket={kid.picks[gift.id] ?? 0}
                  shaking={shakeId === gift.id}
                  onAdd={() => addGift(gift)}
                  onBlocked={() => blocked(gift)}
                />
              ))}
            </div>
          )}
        </GiftPool>

        <Basket
          kid={kid}
          name={name}
          drag={drag}
          onRemove={(giftId) => dispatch({ type: 'removeGift', kidId: kid.id, giftId })}
          onAddMore={(giftId) => {
            const gift = getGift(giftId);
            if (gift) addGift(gift);
          }}
          onClear={() => dispatch({ type: 'clearPicks', kidId: kid.id })}
        />
      </div>

      <DragOverlay dropAnimation={null}>{drag ? <GiftCardPreview gift={drag.gift} /> : null}</DragOverlay>

      <div className={`toast ${toast ? 'show' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </DndContext>
  );
}
