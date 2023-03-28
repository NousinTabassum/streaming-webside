import Image from 'next/image';

import { BiAlbum } from "react-icons/bi";
import Topitems from './topitems';


const Ootyvlogs = () => {
    return (
        <div className=''>
            {/* titlename */}
            <div className='my-4  md:flex gap-8'>
                <h1 className='font-bold text-5xl text-white'>Ooty Vlogs</h1>
                <span className=' text-lg text-white opacity-80 mt-auto'>Explore the queen of hill stations</span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 '>

                {['pic5', 'pic6', 'pic7', 'pic8'].map((path) => {
                    return (

                        <div className='overflow-hidden bg-black-400 hover:scale-110  duration-300' key={path}>
                            <Topitems></Topitems>
                            <div className="card drop-shadow-xl" >
                                <figure >
                                    <Image src={`/${path}.png`} alt='stream' width={370} height={230} />
                                </figure>
                            </div>
                        </div>
                    )
                })}
            </div>



        </div >
    );
};

export default Ootyvlogs;