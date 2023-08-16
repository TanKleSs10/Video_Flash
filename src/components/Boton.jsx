import { getChildrenColors, getColors } from '../utils/utils'

function Boton({ children, light, dark, textColorLight, textColorDark, event }) {

    return (
        <button className={`
        min-w-max max-w-max h-10 
        px-2 py-1 
        group/button 
        rounded-lg 
        box-border 
        border-2
        border-transparent
        hover:border-2
        hover:bg-transparent 
        duration-300 
        transition-all 
        hover:shadow-in
        ${getColors(light, dark, textColorLight, textColorDark)}
        `}
            onClick={event}
        >
            <span className={`${getChildrenColors(light, dark)} capitalize group-hover/button:bg-transparent transition-all duration-300`}>
                {children}
            </span>
        </button >
    )
}

export default Boton