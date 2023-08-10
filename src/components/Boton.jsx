function Boton({ children, classes, event }) {
    return (
        <button className={`${classes} min-w-min h-10 px-2 py-1 group/button rounded-lg box-border hover:border hover:bg-transparent dark:hover:bg-transparent border-transparent duration-300 transition-all hover:shadow-in`}
            onClick={event}
        >
            {children}
        </button>
    )
}

export default Boton