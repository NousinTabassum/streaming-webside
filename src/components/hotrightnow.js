import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Topitems from './topitems';
import rect from '/public/Rectangle 13.png'
import pic3 from '/public/pic3.png'

const Hotrightnow = () => {
    return (
        <div className='m-0 col-span-3 grid md:grid-cols-5 bg-no hover:scale-110  duration-300'>
            <div className=' md:col-span-2  text-white'>
                <div className="card-body gap-0">
                    <h2 className=" text-3xl text-warning m-auto ">Hot Right Now</h2>
                    <div className='m-auto'>
                        <Image className="m-auto" src={rect} alt="" width={56} height={56}></Image>
                        <p className='text-xl'>Angs Latest
                            <br />
                            <small>99k Subscribers</small>
                        </p>

                        <br />
                        <small>Gaming · MMO ·  <br />
                            Prime · Adventure</small>
                    </div>
                    <div className="card-actions justify-center bg-slate-400 rounded-md">
                        <Link href='/channel'>
                            <button className=" focus:outline-none focus:ring focus:ring-violet-300">Go to Channel</button></Link>
                    </div>
                </div>

            </div>
            <div className=' md:col-span-3 '>
                <Topitems></Topitems>
                <div className="card drop-shadow-xl" >
                    <figure className='w-full'>
                        <Image src={pic3} alt='stream' />
                    </figure>
                </div>
            </div>

        </div >
    );
};

export default Hotrightnow;