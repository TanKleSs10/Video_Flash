import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { changeMode, theme } = useTheme();

  return (
    <header className="w-full min-h-20 py-2 px-4 bg-timberWolf dark:bg-gray-900 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <picture className="block w-16">
          <img
            className="w-full h-full object-cover"
            src="https://catalogo-videoflash.web.app/assets/img/logo.png"
            alt="Logo tipo de video flash"
          />
        </picture>

        <h1 className="text-3xl dark:text-platinum font-bold transition-all group-hover/brand:scale-105 group-hover/brand:tracking-widest">
          Video Flash
        </h1>
      </div>
      <div className="flex items-center">
        <button
          className="w-10 h-10 border-none flex items-center justify-center text-3xl dark:text-white cursor-pointer"
          onClick={changeMode}
        >
          {theme == "dark" ? <Sun fill="true" /> : <Moon fill="true" />}
        </button>
      </div>
    </header>
  );
}
