import Image from 'next/image';
import React from 'react';
import { BiAlbum } from "react-icons/bi";
import rect from '/public/Rectangle 13.png'

const Topitems = () => {
    return (
        <div className=' flex justify-between'>

            <div className="badge rounded-md badge-outline badge-error bg-zinc-700 ">
                <span className='text-lg'>< BiAlbum /></span> <span>Live</span>
            </div>

            <div className='flex '>

                <div className="w-6">
                    <Image src={rect} alt='' ></Image>
                </div>

                <div className="badge badge-md ">4.1k Watching</div>
            </div>
        </div>
    );
};

export default Topitems;