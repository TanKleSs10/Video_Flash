import InputRange from "../InputRange";
import Controls from "./Controls";
import SongDetails from "./SongDetails";
import Volume from "./Volume";

export default function NewPlayer() {
  return (
    <footer
      className={`w-full flex flex-col items-center bg-transparent fixed left-0 transition-all duration-500`}
    >
      <section className="flex w-full md:w-10/12 bg-timberWolf dark:bg-gray-900 rounded-lg px-4 py-3 shadow-content dark:shadow-contentInv flex-wrap">
        <InputRange NameClass="w-full mb-2 range" />
        <SongDetails />
        <Controls />
        <Volume />
      </section>
    </footer>
  );
}
