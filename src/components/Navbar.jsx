import React from 'react';


const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-14 py-5  h-12">
                <div className="flex  logo font-bold text-2xl">
                    <img className='mx-4' width={30} src="/fav.png" alt="" />
                    <a href="">
                        <span className='text-green-700'> &lt;</span>
                        Pass
                        <span className='text-green-700'>OP/&gt;</span>
                    </a>
                </div>
                {/* <ul>
                    <li className='flex gap-12'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
                <a href="https://github.com/81nilesh">
                    <button className='text-white bg-green-500 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 p-1' src="/icons/icons8-github.svg" alt="github icon" />
                        <span className='font-bold px-2'>GitHub</span>
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
