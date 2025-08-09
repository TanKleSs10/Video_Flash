import Controls from "./Controls";
import SongDetails from "./SongDetails";
import Volume from "./Volume";

export default function NewPlayer() {
  return (
    <footer className={`w-full h-full max-h-[140px] bg-transparent`}>
      <section
        className="
        flex w-full
        gap-y-2
        md:w-10/12 bg-timberWolf 
        dark:bg-gray-900 rounded-lg 
        p-3 shadow-content 
        dark:shadow-contentInv flex-wrap
        absolute bottom-2 left-1/2 -translate-x-1/2
        "
      >
        <SongDetails />
        <Controls />
        <Volume />
      </section>
    </footer>
  );
}
