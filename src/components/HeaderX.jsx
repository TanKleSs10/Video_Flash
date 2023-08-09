import { faBoltLightning, faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { MyContext } from "../context/MyContext"

function HeaderX() {
    const { theme, changeMode } = useContext(MyContext)
    return (
        <header className="w-full bg-timberWolf dark:bg-gray-900 flex max-h-16">
            <a href="#" className="flex items-center m-auto cursor-pointer duration-1000 group/brand">
                <figure className="w-16">
                    <img className="w-full object-cover dark:f" src="https://catalogo-videoflash.web.app/assets/img/logo.png" alt="" />
                </figure>
                <h1 className="text-2xl dark:text-platinum font-bold transition-all group-hover/brand:scale-105 group-hover/brand:tracking-widest">Video Flash</h1>
            </a>
            <div className="flex items-center px-4">
                <label htmlFor="Toggle" className="w-10 h-10 border-none flex items-center justify-center text-3xl dark:text-white cursor-pointer">
                    <FontAwesomeIcon icon={theme == 'dark' ? faBoltLightning : faCloudBolt} />
                </label>
                <input id="Toggle" className="hidden" type="checkbox" checked={theme == 'light' ? false : true} onChange={changeMode} />
            </div>
        </header>
    )
}

export default HeaderX