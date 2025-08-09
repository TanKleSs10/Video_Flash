import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ icon, ...props }) {
  return (
    <button
      className="min-w-10 min-h-10 rounded-full flex justify-center items-center p-3 group disabled:text-neutral-600 dark:disabled:text-neutral-500
      hover:scale-110 hover:bg-nigth/10 active:scale-90 transition-all duration-300 dark:text-timberWolf
      "
      {...props}
    >
      <FontAwesomeIcon className="w-6 h-6" icon={icon} />
    </button>
  );
}
