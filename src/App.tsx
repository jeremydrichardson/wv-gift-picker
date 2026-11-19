import { useAppState } from './state';
import { Setup } from './components/Setup';
import { Shopping } from './components/Shopping';
import { Summary } from './components/Summary';

export default function App() {
  const [state, dispatch] = useAppState();
  const currentKid = state.kids.find((k) => k.id === state.currentKidId) ?? state.kids[0];

  return (
    <div className="app">
      <div className="snow" aria-hidden="true" />
      <header className="app-header">
        <h1>
          <span aria-hidden="true">🎄</span> Gift Elves
        </h1>
        <p className="tagline">Spend your budget on gifts that change lives</p>
      </header>

      <main>
        {state.phase === 'setup' && <Setup kids={state.kids} dispatch={dispatch} />}
        {state.phase === 'shopping' && (
          <Shopping kids={state.kids} kid={currentKid} dispatch={dispatch} />
        )}
        {state.phase === 'summary' && <Summary kids={state.kids} dispatch={dispatch} />}
      </main>

      <footer className="app-footer">
        Gifts and prices from the{' '}
        <a href="https://donate.worldvision.org/giftcatalog" target="_blank" rel="noreferrer">
          World Vision Gift Catalog
        </a>
        . Prices are the catalog's "starting at" amounts.
      </footer>
    </div>
  );
}
