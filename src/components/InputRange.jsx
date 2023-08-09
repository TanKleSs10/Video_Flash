function InputRange({ event, ma, val, NameClass}) {


    
    return (
        <>
            <input className={`${NameClass} appearance-none h-1 outline-none bg-kepple dark:bg-indigo-800`}
                type="range"
                min={0} max={ma} value={val} onChange={event} step={0.1} />
        </>
    )
}

export default InputRange