import SeekableProgressBar from "../shared/SeekableProgressBar";

export default function Duration() {
  return (
    <div className="flex w-full items-center justify-center gap-4 dark:text-timberWolf text-nigth">
      <span>0:00</span>
      <SeekableProgressBar />
      <span>0:00</span>
    </div>
  );
}
