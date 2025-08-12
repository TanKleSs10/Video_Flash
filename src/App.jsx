import Header from "./components/Header";
import Player from "./components/player/Player";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-200 dark:bg-gray-800 font-Josefin">
      <Header />
      <main className="w-full h-full flex justify-center items-center flex-1 relative overflow-hidden">
        <Player />
      </main>
    </div>
  );
}
export default App;
