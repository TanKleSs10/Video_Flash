import { useState, useEffect } from 'react'
import trackData from '../data/trackData'

function AudioPlayer() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const currentSoundRef = useRef(null);
    const [isTrackLoaded, setIsTrackLoaded] = useState(false);
    const [isTrackEnded, setIsTrackEnded] = useState(null);
    const [autoPlay, setAutoPlay] = useState(false);
    const tracks = trackData();
    
    const playNextTrack = () => {
        const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % tracks.length;
        playTrack(tracks[nextIndex]);
      };

    useEffect(() => {
        // Crea una nueva instancia de Howl cuando cambia la pista actual
        if (currentTrack) {
            currentSoundRef.current = new Howl({
                src: [`/src/audio/${currentTrack.track}`],
                onplay: () => setIsPlaying(true),
                onpause: () => setIsPlaying(false),
                onload: () => setIsTrackLoaded(true),
                onend: () => {
                    setIsPlaying(false); // Pausa la reproducción al finalizar el track
                    setIsTrackEnded(true); // Establece el estado como "terminado" al finalizar el track
                    if (autoPlay) {
                        playNextTrack()
                    }
                },
            });
            currentSoundRef.current.play(); // Iniciar la reproducción de la nueva pista
        } else {
            // Si no hay pista actual, reinicia la referencia
            if (currentSoundRef.current) {
                currentSoundRef.current.stop();
                currentSoundRef.current = null;
                setIsTrackLoaded(false);
            }
        }
    }, [currentTrack]);
}

export default AudioPlayer