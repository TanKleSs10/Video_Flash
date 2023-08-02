import ItemTrack from './ItemTrack';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Library() {

    const { tracks } = useContext(MyContext);

    return (
        <section
            className='w-full h-full px-3 py-4 grid grid-cols-autoFit gap-4 mx-auto'>

            {tracks.map((track) => (
                <ItemTrack key={track.id} track={track} />
            ))}

        </section>
    )
}

export default Library