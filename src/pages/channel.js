
import Playlist from '@/components/playlist';
import Sidebar from '@/components/sidebar';
import Swiperadd from '@/components/swiperadd';

import Image from 'next/image';
import Frame from '../../public/Frame.png'
import videoFrame from '/public/video-frame.png'


const Channel = () => {
    return (
        <div className='flex'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <div className='flex justify-center flex-auto w-full'>
                    <Image src={Frame} alt=""></Image>
                </div>
                <Playlist></Playlist>
                <div className=' mt-6  grid grid-cols-1 md:grid-cols-5 '>
                    <div className="card shadow-xl mr-6 col-span-1 md:col-span-2 ">
                        <figure>
                            <Image src={videoFrame} alt=''></Image>
                        </figure>
                        <div className='text-warning bg-sidebar'>
                            <p className='flex justify-between'>
                                <span>Live <small>14 minutes ago</small></span>
                                <span><small>Streaming with</small>  ichijo</span>
                            </p>
                        </div>
                    </div>
                    <div className='col-span-3 '>
                        <div>
                            <h1 className='font-bold text-3xl text-white'>Trending</h1>
                            <span className=' text-lg text-white opacity-75 mt-auto'>See whats all the rage in stream </span>
                        </div>
                        <Swiperadd ></Swiperadd>
                        <div className=' text-white mt-8 '>
                            <h3 className='font-bold text-2xl'>April Merch</h3>
                            <p>Have a look at this months crispy merch! Only for the all the ace bois.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Channel;