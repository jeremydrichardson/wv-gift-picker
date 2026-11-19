import type { CSSProperties, Dispatch } from 'react';
import { AVATARS, BUDGET_PRESETS, type Action, type Kid } from '../state';

interface Props {
  kids: Kid[];
  dispatch: Dispatch<Action>;
}

export function Setup({ kids, dispatch }: Props) {
  const hasStarted = kids.some((k) => Object.keys(k.picks).length > 0);

  return (
    <section className="panel setup">
      <h2>Who's shopping this year?</h2>
      <p className="muted">
        Give each kid a name and a budget. Then they take turns dragging gifts into their basket.
      </p>

      <ul className="kid-setup-list">
        {kids.map((kid, i) => (
          <li key={kid.id} className="kid-setup" style={{ '--kid-color': kid.color } as CSSProperties}>
            <button
              type="button"
              className="avatar-btn"
              title="Change avatar"
              aria-label={`Change avatar for ${kid.name || `kid ${i + 1}`}`}
              onClick={() => {
                const next = AVATARS[(AVATARS.indexOf(kid.avatar) + 1) % AVATARS.length];
                dispatch({ type: 'updateKid', kidId: kid.id, changes: { avatar: next } });
              }}
            >
              {kid.avatar}
            </button>

            <div className="kid-setup-fields">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={kid.name}
                  placeholder={`Kid ${i + 1}`}
                  maxLength={20}
                  onChange={(e) => dispatch({ type: 'updateKid', kidId: kid.id, changes: { name: e.target.value } })}
                />
              </label>

              <label>
                <span>Budget</span>
                <div className="money-input">
                  <span>$</span>
                  <input
                    type="number"
                    min={0}
                    step={5}
                    inputMode="numeric"
                    value={kid.budget}
                    onChange={(e) =>
                      dispatch({ type: 'updateKid', kidId: kid.id, changes: { budget: Number(e.target.value) || 0 } })
                    }
                  />
                </div>
              </label>

              <div className="presets" role="group" aria-label="Budget presets">
                {BUDGET_PRESETS.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`chip ${kid.budget === amount ? 'active' : ''}`}
                    onClick={() => dispatch({ type: 'updateKid', kidId: kid.id, changes: { budget: amount } })}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>

            {kids.length > 1 && (
              <button
                type="button"
                className="icon-btn remove-kid"
                aria-label={`Remove ${kid.name || `kid ${i + 1}`}`}
                onClick={() => dispatch({ type: 'removeKid', kidId: kid.id })}
              >
                ✕
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="setup-actions">
        <button type="button" className="btn secondary" onClick={() => dispatch({ type: 'addKid' })}>
          + Add a kid
        </button>
        <button type="button" className="btn primary big" onClick={() => dispatch({ type: 'startShopping' })}>
          {hasStarted ? 'Keep shopping →' : "Let's go shopping! →"}
        </button>
      </div>
      {hasStarted && (
        <p className="muted small">
          Lowering a budget below what a kid already picked will empty that kid's basket.
        </p>
      )}
    </section>
  );
}
