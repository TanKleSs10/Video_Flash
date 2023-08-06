import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faPlay, faForwardStep, faPause, faShuffle, faRepeat, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import Tag from './Tag';

function Player() {

    const {
        currentTrack,
        tracks,
        isPlaying,
        playTrack,
        duration,
        handleTimeChange,
        progress,
        nextTrack,
        handlerAutoPlay,
        autoplay,
        looping,
        handlerLoop,
        handleVolChange,
        handleMute
    } = useContext(MyContext);

    // Manejar el evento de clic en el botón Back (Anterior)
    const backTack = () => {
        // Encuentra el índice de la pista actual en la lista de pistas
        const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);

        // Obtiene el índice de la pista anterior
        const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;

        // Reproduce la pista anterior
        playTrack(tracks[prevIndex]);
    };

    return (
        <section className={`w-full flex flex-col bg-timberWolf fixed left-0 ${currentTrack ? 'bottom-0' : '-bottom-14'} transition-all duration-500`}>
            <input type="range" className='appearance-none h-1 bg-kepple outline-none' min={0} max={duration} value={progress} onChange={handleTimeChange} />
            <div className='flex'>
                <div className='flex w-1/2 items-center px-2 py-1 gap-4'>
                    <figure className='min-w-max max-h-10 h-10 rounded-xl'>
                        <img className='w-full h-full object-cover rounded-lg' src={currentTrack ? currentTrack.img : ''} alt="" />
                    </figure>
                    <div className='overflow-hidden'>
                        <p className='text-lg capitalize overflow-hidden text-ellipsis whitespace-nowrap'>{currentTrack ? currentTrack.name : ''}</p>
                        <Tag><span className='font-light text-sm md:text-base text-white capitalize'>#Hip-Hop</span></Tag>
                    </div>
                </div>
                <div className='w-1/2 md:w-2/3 flex justify-center items-center gap-4'>
                    <button onClick={handlerAutoPlay} className={`hidden sm:inline  md:text-xl ${autoplay ? 'text-black' : 'text-onix'}`}><FontAwesomeIcon icon={faShuffle} /></button>
                    <button onClick={backTack} className='text-2xl md:text-3xl'><FontAwesomeIcon icon={faBackwardStep} /></button>
                    <button onClick={()=>{playTrack(currentTrack)}} className='text-2xl md:text-3xl'><FontAwesomeIcon icon={isPlaying && currentTrack ? faPause : faPlay} /></button>
                    <button onClick={nextTrack} className='text-2xl md:text-3xl'><FontAwesomeIcon icon={faForwardStep} /></button>
                    <button onClick={handlerLoop} className={`hidden sm:inline  md:text-xl ${looping ? 'text-black' : 'text-onix'}`}><FontAwesomeIcon icon={faRepeat} /></button>
                </div>
                <div className='hidden md:flex justify-center items-center gap-2 md:w-1/3'>
                    <button onClick={handleMute} className='text-2xl'><FontAwesomeIcon icon={faVolumeLow} /></button>
                    <input type="range" min={0} max={1} step={0.1} onChange={handleVolChange}/>
                </div>
            </div>
        </section>
    )
}

export default Player