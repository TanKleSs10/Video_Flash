import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Tag from './Tag'
// eslint-disable-next-line react/prop-types
function ItemTrack({ track }) {

    const { playTrack, currentTrack, isPlaying } = useContext(MyContext);
    
    const handlePlayClick = () => {
        playTrack(track);
    };

    return (
        <div className='w-full max-h-96 h-max flex flex-col'>
            <div className='flex flex-col'>
                <figure className='w-full max-h-60 relative group/play'>
                    <img className='w-full h-full object-cover transition-opacity rounded-lg'
                        src={track.img} alt="" />
                    <span onClick={handlePlayClick}
                        className='
                    cursor-pointer 
                    bg-timberWolf 
                    w-12
                    h-12
                    flex
                    justify-center
                    items-center
                    rounded-full 
                    absolute 
                    bottom-2 
                    right-4 
                    text-2xl md:opacity-0 md:group-hover/play:opacity-100 transition-opacity'>
                        <FontAwesomeIcon icon={isPlaying && currentTrack && currentTrack.id === track.id ? faPause : faPlay} /></span>
                </figure>
            </div>
            <div className='px-4 overflow-hidden'>
                <div className='w-full flex gap-4 justify-between'>
                    <p className='text-kepple text-base md:text-xl'>${track.price}</p>
                    <p className='text-onix font-light md:text-xl'>{track.bpm} BPM</p>
                </div>
                <p className={`text-lg overflow-hidden text-ellipsis whitespace-nowrap md:text-xl mb-1 font-normal capitalize ${isPlaying && currentTrack && currentTrack.id === track.id ? 'text-kepple font-semibold' : 'text-onix'}`}> {track.name} </p>
                <div className='flex justify-between'>
                    <Tag>
                        <span className='font-light text-base md:text-lg text-white tracking-wider capitalize'>
                            #Hip-Hop
                        </span>
                    </Tag>
                    <button className='bg-onix p-2 rounded-lg'>
                        <span className='text-white'><FontAwesomeIcon icon={faCircleInfo} /></span>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default ItemTrack