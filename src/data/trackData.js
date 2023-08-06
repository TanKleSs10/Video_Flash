import { useState, useEffect } from 'react'
import { tracks as data } from './track'

function trackData() {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        setTracks(data);
    }, []);

    return tracks;
}

export default trackData