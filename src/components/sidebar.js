import Image from "next/image";
import Link from "next/link";
import { BiCaretDownCircle, BiAnalyse, BiArchive, BiUserCircle } from "react-icons/bi";

import logo from '../../public/Vector.png'

const Sidebar = () => {
    return (
        <div className=" bg-black text-white w-10">
            <Link href='/'><Image className="mt-5" src={logo} alt=""></Image></Link>
            <div className="h-10   m-1  text-2xl mt-52">
                <p className="my-10">
                    <BiArchive />
                </p>
                <p className="my-10">
                    <BiAnalyse />
                </p>
                <p className="my-10">
                    <BiCaretDownCircle />
                </p>
            </div>
            <div className="  m-1  text-2xl mt-60">
                <p className="my-6  ">
                    <BiUserCircle />
                    <small className="text-sm">user</small>
                </p>
                <p className="my-6  ">
                    <BiCaretDownCircle />
                    <small className="text-sm">settings</small>
                </p>

            </div>
        </div>
    );
};

export default Sidebar;