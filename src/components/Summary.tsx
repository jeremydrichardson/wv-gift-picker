import { useEffect, type CSSProperties, type Dispatch } from 'react';
import { displayName, picksOf, remainingFor, spentBy, type Action, type Kid } from '../state';
import { celebrate } from '../confetti';
import { GiftImage } from './GiftCard';

interface Props {
  kids: Kid[];
  dispatch: Dispatch<Action>;
}

export function Summary({ kids, dispatch }: Props) {
  const familyTotal = kids.reduce((sum, k) => sum + spentBy(k), 0);
  const giftCount = kids.reduce((sum, k) => sum + picksOf(k).reduce((s, p) => s + p.qty, 0), 0);

  useEffect(() => {
    if (familyTotal > 0) celebrate();
  }, [familyTotal]);

  return (
    <section className="summary">
      <div className="panel summary-hero">
        <h2>🎉 Look at all the good you're doing!</h2>
        <p>
          Together you picked <strong>{giftCount}</strong> {giftCount === 1 ? 'gift' : 'gifts'} worth{' '}
          <strong>${familyTotal.toLocaleString()}</strong>.
        </p>
        <div className="summary-actions no-print">
          <button type="button" className="btn ghost" onClick={() => window.print()}>
            🖨️ Print list
          </button>
          <button type="button" className="btn ghost" onClick={() => dispatch({ type: 'goTo', phase: 'shopping' })}>
            ← Back to shopping
          </button>
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              if (window.confirm('Clear every basket and start over?')) dispatch({ type: 'resetPicks' });
            }}
          >
            Start over
          </button>
        </div>
      </div>

      <div className="summary-grid">
        {kids.map((kid, i) => {
          const picks = picksOf(kid);
          return (
            <article key={kid.id} className="panel summary-kid" style={{ '--kid-color': kid.color } as CSSProperties}>
              <header>
                <span className="turn-avatar" aria-hidden="true">
                  {kid.avatar}
                </span>
                <div>
                  <h3>{displayName(kid, i)}</h3>
                  <span className="muted small">
                    Spent ${spentBy(kid).toLocaleString()} of ${kid.budget.toLocaleString()}
                    {remainingFor(kid) > 0 && ` · $${remainingFor(kid)} left`}
                  </span>
                </div>
              </header>
              {picks.length === 0 ? (
                <p className="muted">No gifts picked yet.</p>
              ) : (
                <ul className="summary-list">
                  {picks.map(({ gift, qty }) => (
                    <li key={gift.id}>
                      <GiftImage gift={gift} size="small" />
                      <a href={gift.url} target="_blank" rel="noreferrer">
                        {qty > 1 && `${qty} × `}
                        {gift.name}
                      </a>
                      <span className="price">${(gift.price * qty).toLocaleString()}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>

      <p className="muted small summary-note">
        Ready to give? Click any gift to open it on World Vision's site, or visit the{' '}
        <a href="https://donate.worldvision.org/giftcatalog" target="_blank" rel="noreferrer">
          full Gift Catalog
        </a>
        . Order by December 9 for delivery by Christmas.
      </p>
    </section>
  );
}
