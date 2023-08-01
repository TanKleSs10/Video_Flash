import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinesLeaning } from '@fortawesome/free-solid-svg-icons';
import ItemTrack from './ItemTrack';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function Library() {
    
    const { tracks } = useContext(MyContext);
    
    return (
        <section
            className='bg-timberWolf w-full py-4 px-2 box-border ms-2 rounded-lg col-start-1 col-end-4 row-start-2 row-end-6'>
            <div className='flex gap-4 w-full h-1/6 px-4 text-onix'>
                <span className='text-2xl'><FontAwesomeIcon icon={faLinesLeaning} /></span>
                <h3 className='text-2xl font-semibold'>Biblioteca</h3>
            </div>
            <div className="overflow-y-auto w-full h-5/6">
                {tracks.map((track) => (
                    <ItemTrack key={track.id} track={track} />
                ))}
            </div>
        </section>
    )
}

export default Library