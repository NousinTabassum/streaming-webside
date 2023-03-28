import Image from 'next/image';

import React from 'react';
import Hotrightnow from './hotrightnow';
import Topchannel from './topchannel';

import adimg from '/public/adimg.png'


const Topbar = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-7 gap-2 justify-center items-end'>
            <div className='col-span-2 card hover:scale-105  duration-300'>
                <figure>
                    <Image src={adimg} alt=''></Image>
                </figure>
            </div>
            <Topchannel></Topchannel>
            <Hotrightnow></Hotrightnow>

        </div>
    );
};

export default Topbar;