import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

function ItemTrack({ track }) {

    const { playTrack, currentTrack, isPlaying } = useContext(MyContext);

    const handlePlayClick = () => {
        playTrack(track);
    };

    return (
        <div className='flex w-60 flex-col gap-4 hover:bg-neutral-400 p-2 rounded-lg group/play transition-all'>
            <div className='flex items-center gap-4'>
                <figure className='w-20 relative rounded-lg'>
                    <img className='w-full object-cover rounded-lg group-hover/play:opacity-0 transition-opacity'
                        src={track.img} alt="" />
                    <span onClick={handlePlayClick} className='cursor-pointer absolute top-2 left-3 text-2xl opacity-0 group-hover/play:opacity-100 transition-opacity'>
                        <FontAwesomeIcon icon={isPlaying && currentTrack && currentTrack.id === track.id ? faPause : faPlay} /></span>
                </figure>
                <p className={`text-lg w-5/6 font-normal capitalize ${isPlaying && currentTrack && currentTrack.id === track.id ? 'text-kepple font-semibold' : 'text-onix'}`}> {track.name} </p>
            </div>
            <div className='flex w-full justify-between'>
                <span className='font-base text-sm text-white bg-teal-500 px-3 py-1 rounded-lg'>$ {track.price} </span>
                <span className='text-xl cursor-pointer'><FontAwesomeIcon icon={faCircleInfo} /></span>
            </div>
        </div>
    )
}

export default ItemTrack