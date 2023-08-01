import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow, faBackwardStep, faPlay, faForwardStep, faShuffle, faRepeat, faPause } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Player() {

    const { 
        currentTrack,
        tracks, 
        isPlaying, 
        stopTrack, 
        playTrack, 
    } = useContext(MyContext);

    // Obtener el índice de la pista actual
    const currentTrackIndex = tracks.findIndex((track) => track.id === currentTrack?.id);

    // Obtener el número de la pista actual (comenzando desde 1)
    const currentTrackNumber = currentTrackIndex !== -1 ? currentTrackIndex + 1 : 0;

    const allTracks = tracks.length;

    // Manejar el evento de clic en el botón Play/Pause
    const togglePlay = () => {
        if (isPlaying) {
            // Si está reproduciendo, pausar la pista
            stopTrack();
        } else {
            // Si no está reproduciendo, reproducir la pista
            playTrack(currentTrack);
        }
    };

    // Manejar el evento de clic en el botón Next (Siguiente)
    const nextTrack = () => {
        // Encuentra el índice de la pista actual en la lista de pistas
        const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);

        // Obtiene el índice de la siguiente pista
        const nextIndex = (currentIndex + 1) % tracks.length;

        // Reproduce la siguiente pista
        playTrack(tracks[nextIndex]);
    };

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
        <section className='w-full col-start-4 col-end-13 row-start-2 row-end-6 flex justify-center'>
            {!currentTrack ? (
                <h1>Selecciona un track</h1>
            ) : (
                <div className='w-11/12 h-full bg-timberWolf rounded-lg px-8 py-4'>
                    <div className='w-full flex justify-between'>
                        <p className='text-3xl text-onix'>Catalogo</p>
                        <span className='text-onix font-semibold'>{currentTrackNumber} / {allTracks}</span>
                    </div>
                    <div className='w-full flex'>
                        <div className='w-1/2 pt-2 space-y-4'>
                            <figure className='w-10/12 rounded-lg'>
                                <img className='w-full rounded-lg' src={currentTrack.img} alt="" />
                            </figure>
                            <div className='flex gap-5 items-center'>
                                <p className='bg-onix inline-block leading-8 w-10 h-8 text-center rounded-full text-white'>50</p>
                                <div className='flex gap-3'>
                                    <span className='bg-onix w-8 h-8 leading-8 inline-block text-center rounded-full text-white'>
                                        <FontAwesomeIcon icon={faVolumeLow} />
                                    </span>
                                    <input type="range" name="" id="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 space-y-10'>
                            <div className='w-full text-center'>
                                <p className='text-3xl text-onix capitalize'>{currentTrack.name}</p>
                                <p className='text-kepple text-lg uppercase'>{currentTrack.id}</p>
                            </div>
                            <div className='flex justify-center gap-5'>
                                <button onClick={backTack} className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'>
                                    <FontAwesomeIcon icon={faBackwardStep} />
                                </button>
                                <button onClick={togglePlay} className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'>
                                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                                </button>
                                <button onClick={nextTrack} className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'>
                                    <FontAwesomeIcon icon={faForwardStep} />
                                </button>
                            </div>
                            <div className='w-full flex justify-center items-center flex-col gap-10'>
                                <input 
                                type="range" 
                                />
                                <div className='space-x-5'>
                                    <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'><FontAwesomeIcon icon={faRepeat} /></button>
                                    <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'><FontAwesomeIcon icon={faShuffle} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </section>
    )
}

export default Player