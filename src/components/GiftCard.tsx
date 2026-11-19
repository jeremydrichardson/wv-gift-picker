import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import type { Gift } from '../data/gifts';

export function GiftImage({ gift, size }: { gift: Gift; size: 'large' | 'small' }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`gift-image ${size}`}>
      {failed ? (
        <span className="gift-emoji" aria-hidden="true">
          {gift.emoji}
        </span>
      ) : (
        <img src={gift.image} alt="" loading="lazy" draggable={false} onError={() => setFailed(true)} />
      )}
      {size === 'large' && !failed && (
        <span className="gift-emoji-badge" aria-hidden="true">
          {gift.emoji}
        </span>
      )}
    </div>
  );
}

interface CardProps {
  gift: Gift;
  remaining: number;
  inBasket: number;
  onAdd: () => void;
  onBlocked: () => void;
  shaking: boolean;
}

export function GiftCard({ gift, remaining, inBasket, onAdd, onBlocked, shaking }: CardProps) {
  const affordable = gift.price <= remaining;
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `pool:${gift.id}`,
    data: { giftId: gift.id, from: 'pool' },
    disabled: !affordable,
  });

  return (
    <article
      ref={setNodeRef}
      className={[
        'gift-card',
        affordable ? 'affordable' : 'too-expensive',
        isDragging ? 'dragging' : '',
        shaking ? 'shake' : '',
      ].join(' ')}
      {...listeners}
      {...attributes}
      role="group"
      aria-label={`${gift.name}, $${gift.price}`}
      aria-disabled={!affordable}
      tabIndex={-1}
    >
      <GiftImage gift={gift} size="large" />
      {inBasket > 0 && <span className="in-basket-badge">×{inBasket} in basket</span>}
      <div className="gift-info">
        <h3>{gift.name}</h3>
        <div className="gift-bottom">
          <span className="price">${gift.price.toLocaleString()}</span>
          {affordable ? (
            <button
              type="button"
              className="add-btn"
              aria-label={`Add ${gift.name} for $${gift.price}`}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={onAdd}
            >
              +
            </button>
          ) : (
            <button
              type="button"
              className="locked"
              aria-label={`${gift.name} costs $${gift.price}. You need $${gift.price - remaining} more.`}
              onClick={onBlocked}
            >
              🔒 Need ${(gift.price - remaining).toLocaleString()} more
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export function GiftCardPreview({ gift }: { gift: Gift }) {
  return (
    <div className="gift-card affordable drag-preview">
      <GiftImage gift={gift} size="large" />
      <div className="gift-info">
        <h3>{gift.name}</h3>
        <span className="price">${gift.price.toLocaleString()}</span>
      </div>
    </div>
  );
}
