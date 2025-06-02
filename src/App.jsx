import { useSnapshot } from 'valtio';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import SellingPage from './pages/SellingPage';
import state from './store';

function App() {
  const snap = useSnapshot(state);

  return (
    <main className="app transition-all ease-in">
      {!snap.showSellingPage ? (
        <>
          <Home />
          <Canvas />
          <Customizer />
        </>
      ) : (
        <SellingPage />
      )}
    </main>
  )
}

export default App
