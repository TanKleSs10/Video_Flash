import Header from "./components/Header";
import Player from "./components/player/Player";
import Viewer from "./components/viewer/Viewer";
import NewLibrary from "./components/library/NewLibrary";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-200 dark:bg-gray-800 font-Josefin">
      <Header />
      <main className="w-full h-full flex items-center flex-1 relative overflow-hidden">
        <Viewer />
        <NewLibrary />
      </main>
      <Player />
    </div>
  );
}
export default App;
