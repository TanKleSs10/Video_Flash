import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow, faBackwardStep, faPlay, faForwardStep, faShuffle, faRepeat} from '@fortawesome/free-solid-svg-icons';

function Player() {
    return (
        <section className='w-full col-start-4 col-end-13 row-start-2 row-end-6 flex justify-center'>
            <div className='w-11/12 h-full bg-timberWolf rounded-lg px-8 py-4'>
                <div className='w-full flex justify-between'>
                    <p className='text-3xl text-onix'>Catalogo</p>
                    <span className='text-onix font-semibold'>0 / 0</span>
                </div>
                <div className='w-full flex'>
                    <div className='w-1/2 pt-2 space-y-4'>
                        <figure className='w-10/12 rounded-lg'>
                            <img className='w-full rounded-lg' src="https://catalogo-videoflash.web.app/assets/img/track1.jpg" alt="" />
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
                            <p className='text-3xl text-onix capitalize'>Name Track</p>
                            <p className='text-kepple text-lg uppercase'>id track</p>
                        </div>
                        <div className='flex justify-center gap-5'>
                            <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'>
                                <FontAwesomeIcon icon={faBackwardStep} />
                            </button>
                            <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                            <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'>
                                <FontAwesomeIcon icon={faForwardStep} />
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center flex-col gap-10'>
                            <input type="range" name="" id="" />
                            <div className='space-x-5'>
                                <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'><FontAwesomeIcon icon={faRepeat} /></button>
                                <button className='inline-flex items-center justify-center w-12 h-12 text-xl rounded-full bg-kepple'><FontAwesomeIcon icon={faShuffle} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Player