import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';

function ItemTrack({ track }) {
    return (
        <div className='flex w-60 flex-col gap-4 hover:bg-neutral-400 p-2 rounded-lg group/play transition-all'>
            <div className='flex items-center gap-4'>
                <figure className='w-20 relative rounded-lg'>
                    <img className='w-full object-cover rounded-lg group-hover/play:opacity-0 transition-opacity'
                        src={track.img} alt="" />
                    <span className='cursor-pointer absolute top-2 left-3 text-2xl opacity-0 group-hover/play:opacity-100 transition-opacity'><FontAwesomeIcon icon={faPlay} /></span>
                </figure>
                <p className='text-lg w-5/6 font-normal text-onix capitalize'> {track.name} </p>
            </div>
            <div className='flex w-full justify-between'>
                <span className='font-base text-sm text-white bg-teal-500 px-3 py-1 rounded-lg'>$ {track.price} </span>
                <span className='text-xl cursor-pointer'><FontAwesomeIcon icon={faCircleInfo} /></span>
            </div>
        </div>
    )
}

export default ItemTrack