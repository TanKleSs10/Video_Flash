import { createContext, useState, useEffect } from 'react';
import { tracks as data } from '../data/track';

export const MyContext = createContext();

export function MyContextProvider(props) {

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        setTracks(data);
    }, []);
    
    console.log(tracks);

    return (
        <MyContext.Provider
            value={{ tracks: tracks }}
        >
            {props.children}
        </MyContext.Provider>
    )
}