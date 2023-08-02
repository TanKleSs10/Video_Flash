import React, { createContext, useState, useEffect, useRef } from 'react';
import trackData from '../data/trackData';
import { Howl } from 'howler';

export const MyContext = createContext();

export function MyContextProvider(props) {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isTrackEnded, setIsTrackEnded] = useState(null);
    const currentSoundRef = useRef(null);
    const tracks = trackData();



    // Controlar la reproducción de la pista actual
    useEffect(() => {
        // Crea una nueva instancia de Howl cuando cambia la pista actual
        if (currentTrack) {
            currentSoundRef.current = new Howl({
                src: [`/src/audio/${currentTrack.track}`],
                onplay: () => setIsPlaying(true),
                onpause: () => setIsPlaying(false),
                onend: () => {
                    setIsPlaying(false); // Pausa la reproducción al finalizar el track
                    setIsTrackEnded(true); // Establece el estado como "terminado" al finalizar el track
                },
            });
            currentSoundRef.current.play(); // Iniciar la reproducción de la nueva pista
        } else {
            // Si no hay pista actual, reinicia la referencia
            if (currentSoundRef.current) {
                currentSoundRef.current.stop();
                currentSoundRef.current = null;

            }
        }
    }, [currentTrack]);

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


    // Pasa las funciones junto con los estados en el valor del contexto
    const contextValue = {
        tracks,
        isPlaying,
        currentTrack,
        currentSoundRef,
        playTrack,
        stopTrack,
    };

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    );
}
