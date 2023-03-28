import Image from 'next/image';
import React from 'react';
import p1 from '/public/unsplash_et_78QkMMQs.png'
import p2 from '/public/unsplash_hpTH5b6mo2s.png'
import p3 from '/public/unsplash_kh4W-5vUdaU.png'
import p4 from '/public/unsplash_mEZ3PoFGs_k.png'
import p5 from '/public/unsplash_WT6wJ7EGJSQ.png'


const Topchannel = () => {
    return (
        <div className='col-span-2 card bg-no p-5 hover:scale-110  duration-300'>
            <div>
                <h1 className='text-warning text-3xl mb-2'>Top Channels</h1>
            </div>
            <table className=" w-full bg-blue ">



                <tbody >

                    <tr className=' text-white '>

                        <td >
                            <div className="flex items-center space-x-3  ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={p1} alt=""></Image>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Yhid111</div>
                                    <div className="text-sm opacity-50 ">Live Hacks</div>
                                </div>
                            </div>
                        </td>

                        <td className='flex'> <div className='w-5 bg-green-700 h-5 rounded-full mx-2'> </div> 58.2k</td>

                    </tr>
                    <tr className=' text-white bg-sidebar  '>

                        <td >
                            <div className="flex items-center space-x-3   ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={p2} alt=""></Image>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Liv Pars</div>
                                    <div className="text-sm opacity-50 ">ASMR</div>
                                </div>
                            </div>
                        </td>

                        <td className='flex'> <div className='w-5 bg-red-700 h-5 rounded-full mx-2'> </div> 556k</td>

                    </tr>
                    <tr className=' text-white '>

                        <td >
                            <div className="flex items-center space-x-3  ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={p3} alt=""></Image>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50 ">RON DIES</div>
                                </div>
                            </div>
                        </td>

                        <td className='flex'> <div className='w-5 bg-green-700 h-5 rounded-full mx-2'> </div> 44.2k</td>

                    </tr>
                    <tr className=' text-white bg-sidebar '>

                        <td >
                            <div className="flex items-center space-x-3  ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={p4} alt=""></Image>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">ichijo</div>
                                    <div className="text-sm opacity-50 ">Travel 100</div>
                                </div>
                            </div>
                        </td>

                        <td className='flex'> <div className='w-5 bg-green-700 h-5 rounded-full mx-2'> </div> 25.5k</td>

                    </tr>
                    <tr className=' text-white '>

                        <td >
                            <div className="flex items-center space-x-3  ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <Image src={p5} alt=""></Image>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">iAM007</div>
                                    <div className="text-sm opacity-50 ">Carnival</div>
                                </div>
                            </div>
                        </td>

                        <td className='flex'> <div className='w-5 bg-red-700 h-5 rounded-full mx-2'> </div> 442k</td>

                    </tr>



                </tbody>



            </table>
        </div>
    );
};

export default Topchannel;