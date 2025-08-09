import Header from "./components/Header";
import Library from "./components/Library";
import NewPlayer from "./components/player/NewPlayer";
import Player from "./components/player/Player";

function App() {
  return (
    <main className="w-screen h-screen relative bg-platinum dark:bg-gray-800 font-Josefin transition-all">
      <Header />
      <Library />
      <NewPlayer />
    </main>
  );
}
export default App;
