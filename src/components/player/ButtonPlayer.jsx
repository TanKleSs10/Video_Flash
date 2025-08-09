import React from 'react'

function ButtonPlayer({ children, event, }) {
    return (
        <button onClick={event}
            className='outline-kepple dark:outline-indigo-800 dark:text-timberWolf flex items-center justify-center text-xl md:text-2xl w-10 h-10 transition-transform'>
            {children}
        </button>
    )
}

export default ButtonPlayer