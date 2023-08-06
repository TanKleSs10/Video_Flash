import React, { createContext, useState, useEffect, useRef } from 'react';
import trackData from '../data/trackData';
import { Howl } from 'howler';
import { faL } from '@fortawesome/free-solid-svg-icons';

export const MyContext = createContext();

export function MyContextProvider(props) {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTrackEnded, setIsTrackEnded] = useState(false);
    const [autoplay, setAutoplay] = useState(false);
    const [looping, setLooping] = useState(false);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const [mute, setMute] = useState(false)
    const [vol, setVol] = useState(1);
    const currentSoundRef = useRef(null);
    const tracks = trackData();



    // Controlar la reproducción de la pista actual
    useEffect(() => {
        setIsTrackEnded(false);
        // Crea una nueva instancia de Howl cuando cambia la pista actual
        if (currentTrack) {
            currentSoundRef.current = new Howl({
                src: [`/src/audio/${currentTrack.track}`],
                html5: true,
                onplay: () => setIsPlaying(true),
                loop: looping,
                volume: vol,
                onpause: () => { setIsPlaying(false) },
                onload: () => {
                    if (currentSoundRef.current) {
                        setDuration(currentSoundRef.current.duration());
                    }
                },
                onseek: () => setProgress(currentSoundRef.current.seek()),
                onend: () => {
                    setIsPlaying(false); // Pausa la reproducción al finalizar el track
                    setIsTrackEnded(true); // Establece el estado como "terminado" al finalizar el track
                }
            })
            slider()
            currentSoundRef.current.play(); // Iniciar la reproducción de la nueva pista
        } else {
            // Si no hay pista actual, reinicia la referencia
            if (currentSoundRef.current) {
                currentSoundRef.current.stop();
                currentSoundRef.current = null;
            }
        }
    }, [currentTrack, currentSoundRef]);

    useEffect(() => {
        if (autoplay && isTrackEnded && looping === false) {
            nextTrack();
        }
    }, [autoplay, isTrackEnded, looping, vol, mute]);


    const slider = () => {
        let progressInterval;
        if (isPlaying) {
            progressInterval = setInterval(() => {
                setProgress(currentSoundRef.current.seek());
            }, 100);

        } else {
            clearInterval(progressInterval);
        };
    }

    // Función para reproducir/pausar una pista
    const playTrack = (track) => {
        if (currentSoundRef.current && currentTrack && currentTrack.id === track.id) {
            // Si la pista actual es la misma que la que se quiere reproducir, se pausa o reanuda la reproducción.
            setIsPlaying((prevIsPlaying) => !prevIsPlaying);
            currentSoundRef.current.playing() ? currentSoundRef.current.pause() : currentSoundRef.current.play();
        } else {
            // Si es una pista diferente, se detiene la pista actual (si existe) y se carga y reproduce la nueva pista.
            if (currentSoundRef.current) {
                currentSoundRef.current.stop();
            }

            setCurrentTrack(track);
            setIsPlaying(true);
        }
    };

    // Función para detener la reproducción de la pista actual
    const stopTrack = () => {
        setIsPlaying(false);
        if (currentSoundRef.current) {
            currentSoundRef.current.stop();
        }
    };

    const getDuration = () => {
        if (currentSoundRef.current) {
            const min = Math.floor(duration / 60)
            const seg = Math.floor(duration % 60)
            const minString = min < 10 ? `0${min}` : `${min}`;
            const segString = seg < 10 ? `0${seg}` : `${seg}`;
            return `${minString}:${segString}`
        }
    };
    const nextTrack = () => {
        // Encuentra el índice de la pista actual en la lista de pistas;
        const indexTrack = tracks.findIndex((track) => track.id === currentTrack.id)

        // Obtiene el índice de la siguiente pista
        const nextIndex = (indexTrack + 1) % tracks.length;
        setIsTrackEnded(false);
        // Reproduce la siguiente pista
        playTrack(tracks[nextIndex]);
    };

    const handleTimeChange = (event) => {
        const newTime = parseFloat(event.target.value);
        currentSoundRef.current.seek(newTime); // Asegúrate de que el método seek se esté llamando correctamente
        setProgress(newTime);
    };
    const handleVolChange = (event) => {
        const newVol = parseFloat(event.target.value);
        currentSoundRef.current.volume(newVol); // Asegúrate de que el método seek se esté llamando correctamente
        setVol(newVol);
    };
    const handleMute = () => {
        setMute(!mute)
        currentSoundRef.current.mute(!mute)
    }
    const handlerAutoPlay = () => setAutoplay(!autoplay)
    const handlerLoop = () => {
        setLooping(!looping)
        currentSoundRef.current.once('play', () => {
            setIsTrackEnded(false)
        })
        if (currentSoundRef.current) {
            currentSoundRef.current.loop(!looping);
        }
    };

    // Pasa las funciones junto con los estados en el valor del contexto
    const contextValue = {
        tracks,
        autoplay,
        isPlaying,
        currentTrack,
        currentSoundRef,
        autoplay,
        looping,
        duration,
        progress,
        nextTrack,
        playTrack,
        stopTrack,
        handlerLoop,
        handlerAutoPlay,
        handleTimeChange,
        handleVolChange,
        handleMute
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}
