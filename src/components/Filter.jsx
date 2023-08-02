import Tag from './Tag'

function Filter() {
    return (
        <div className='w-full px-3 py-4 space-y-4'>
            <h2 className='text-xl capitalize'>Filtro por tags:</h2>
            <div className='space-x-3'>
                <Tag>
                    <span className='font-light text-base md:text-lg text-white tracking-wider capitalize'>
                        #Hip-Hop
                    </span>
                </Tag>
                <Tag>
                    <span className='font-light text-base md:text-lg text-white tracking-wider capitalize'>
                        #Hip-Hop
                    </span>
                </Tag>
                <Tag>
                    <span className='font-light text-base md:text-lg text-white tracking-wider capitalize'>
                        #Hip-Hop
                    </span>
                </Tag>
            </div>
        </div>
    )
}

export default Filter