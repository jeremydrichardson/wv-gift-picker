import { useDraggable, useDroppable } from '@dnd-kit/core';
import type { Gift } from '../data/gifts';
import { picksOf, remainingFor, spentBy, type Kid } from '../state';
import { GiftImage } from './GiftCard';

interface Props {
  kid: Kid;
  name: string;
  drag: { gift: Gift; from: 'pool' | 'basket' } | null;
  onRemove: (giftId: string) => void;
  onAddMore: (giftId: string) => void;
  onClear: () => void;
}

function BasketItem({
  gift,
  qty,
  canAddMore,
  onRemove,
  onAddMore,
}: {
  gift: Gift;
  qty: number;
  canAddMore: boolean;
  onRemove: () => void;
  onAddMore: () => void;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `basket:${gift.id}`,
    data: { giftId: gift.id, from: 'basket' },
  });

  return (
    <li ref={setNodeRef} className={`basket-item ${isDragging ? 'dragging' : ''}`} {...listeners} {...attributes} role="listitem" tabIndex={-1}>
      <GiftImage gift={gift} size="small" />
      <div className="basket-item-info">
        <span className="basket-item-name">{gift.name}</span>
        <span className="muted small">
          ${gift.price.toLocaleString()} {qty > 1 && `× ${qty} = $${(gift.price * qty).toLocaleString()}`}
        </span>
      </div>
      <div className="qty-controls" onPointerDown={(e) => e.stopPropagation()}>
        <button type="button" className="icon-btn" aria-label={`Remove one ${gift.name}`} onClick={onRemove}>
          −
        </button>
        <span className="qty">{qty}</span>
        <button
          type="button"
          className="icon-btn"
          aria-label={`Add another ${gift.name}`}
          disabled={!canAddMore}
          onClick={onAddMore}
        >
          +
        </button>
      </div>
    </li>
  );
}

export function Basket({ kid, name, drag, onRemove, onAddMore, onClear }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: 'basket' });
  const spent = spentBy(kid);
  const remaining = remainingFor(kid);
  const picks = picksOf(kid);
  const pct = kid.budget > 0 ? Math.min(100, (spent / kid.budget) * 100) : 100;
  const fromPool = drag?.from === 'pool';
  const dragFits = fromPool && drag.gift.price <= remaining;

  return (
    <aside
      ref={setNodeRef}
      className={['basket', fromPool ? 'drag-active' : '', isOver && fromPool ? 'over' : '', isOver && fromPool && !dragFits ? 'reject' : '']
        .join(' ')}
      aria-label={`${name}'s gift basket`}
    >
      <div className="budget">
        <div className="budget-numbers">
          <div>
            <span className="label">Left to spend</span>
            <span className={`remaining ${remaining === 0 ? 'zero' : ''}`}>${remaining.toLocaleString()}</span>
          </div>
          <div className="budget-side">
            <span>Budget ${kid.budget.toLocaleString()}</span>
            <span>Spent ${spent.toLocaleString()}</span>
          </div>
        </div>
        <div
          className="meter"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={kid.budget}
          aria-valuenow={spent}
          aria-label="Budget spent"
        >
          <div className="meter-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="basket-title">
        <h2>
          <span aria-hidden="true">🧺</span> {name}'s basket
        </h2>
        {picks.length > 0 && (
          <button type="button" className="link-btn" onClick={onClear}>
            Empty
          </button>
        )}
      </div>

      {picks.length === 0 ? (
        <div className="basket-empty">
          <span className="big-emoji" aria-hidden="true">
            🎁
          </span>
          <p>Drag gifts here!</p>
          <p className="muted small">or tap the + on a gift</p>
        </div>
      ) : (
        <ul className="basket-list">
          {picks.map(({ gift, qty }) => (
            <BasketItem
              key={gift.id}
              gift={gift}
              qty={qty}
              canAddMore={gift.price <= remaining}
              onRemove={() => onRemove(gift.id)}
              onAddMore={() => onAddMore(gift.id)}
            />
          ))}
        </ul>
      )}

      {drag && (
        <div className="drop-hint" aria-hidden="true">
          {fromPool ? (dragFits ? 'Drop it in! ✨' : 'Not enough budget left') : 'Drop it on the gifts to take it out'}
        </div>
      )}
    </aside>
  );
}
