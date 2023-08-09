import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Boton from './Boton'
import { changeKeyName } from '../utils/utils'
import { useState } from 'react';

function Modal({ track }) {

    const [Modal, SetModal] = useState(false);

    const keys = Object.getOwnPropertyNames(track);

    const handleModal = () => {
        Modal == false ? SetModal(track.id) : SetModal(false);
    }
    
    return (
        <>
            <Boton colorLight={'kepple'} colorDark={'indigo-800'} event={handleModal}>
                <FontAwesomeIcon className='text-white group-hover/button:text-kepple dark:group-hover/button:text-indigo-800 transition-all duration-300'
                    icon={faCircleInfo} />
            </Boton>
            <div className={`absolute w-full flex h-full ${Modal ? 'opacity-100' : 'opacity-0 pointer-events-none '} flex-col px-4 py-3 items-center flex-wrap rounded-lg top-0 left-0 bg-timberWolf dark:bg-gray-900 transition-opacity duration-500`}>
                <h3 className='text-black dark:text-white bg-re text-xl mb-3'>Informacion del track</h3>
                <div className='flex flex-col w-full mb-4'>
                    {keys.map((key, i) => (
                        <div key={i} className='w-full  h-min flex gap-2 items-center'>
                            {key == 'track' || key == 'img' ? '' :
                                <>
                                    <span className='text-kepple dark:text-indigo-800 text-lg capitalize'>{changeKeyName(key)}:</span>
                                    <p className='text-base capitalize text-onix dark:text-timberWolf'>{track[key]}</p>
                                </>
                            }
                        </div>
                    ))}
                </div>
                <Boton colorLight={'red-500'} colorDark={'red-500'} event={handleModal}>
                    <span className='text-black group-hover/button:bg-transparent dark:text-white group-hover/button:text-red-500 dark:group-hover/button:text-red-500 transition-all'>Cerrar</span>
                </Boton>
            </div>
        </>
    )
}

export default Modal