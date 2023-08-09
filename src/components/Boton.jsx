function Boton({ children, colorLight, colorDark, event }) {
    return (
        <button className={`min-w-min h-10 px-2 py-1 outline-${colorLight} bg-${colorLight} hover:border-${colorLight} hover:shadow-${colorLight} dark:outline-${colorDark} dark:bg-${colorDark} dark:hover:border-${colorDark} dark:hover:shadow-${colorDark} group/button rounded-lg box-border hover:border hover:bg-transparent dark:hover:bg-transparent border-transparent duration-300 transition-all hover:shadow-in`}
            onClick={event}
        >
            {children}
        </button>
    )
}

export default Boton