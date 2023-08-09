import HeaderX from './components/HeaderX'
import Library from './components/Library'
import Player from './components/Player/Player'

function App() {
  return (
    <main className="w-screen h-screen relative bg-platinum dark:bg-gray-800 font-Josefin transition-all">
      <HeaderX />
      <Library />
      <Player />
    </main>
  );
}
export default App;
