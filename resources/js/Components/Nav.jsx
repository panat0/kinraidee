import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";

function Nav() {
    return (
        <>
            <div className="w-full h-[64px] bg-navcolor">
                <div className="px-[72px] flex justify-between items-center w-full h-full">
                    <div className="text-[32px] font-[700] font-inter italic">
                        <h1>Makinnumgun</h1>
                    </div>
                    <div className="bg-white py-1 px-2 rounded-xl">
                        <div className="flex justify-center items-center gap-x-1">
                            <div className="">
                                <MagnifyingGlassIcon className="w-6 h-6 text-black" />
                            </div>
                            <input
                                type="text"
                                placeholder="ค้นหาเมนู..."
                                className="w-full py-2 font-inter border-none bg-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-x-28">
                        <div className="">
                            <ul className='flex justify-center items-center space-x-11 text-2xl italic font-semibold'>
                                <li className='cursor-pointer'>Home</li>
                                <li className='cursor-pointer'>About</li>
                                <li className='cursor-pointer'>Menu</li>
                                <li className='cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                        <div className="text-2xl font-semibold text-white">
                            <button className='bg-green-500 px-5 py-1 rounded-xl flex justify-center items-center gap-x-2'>
                                <UserIcon className="w-6 h-6 text-white" />
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav
