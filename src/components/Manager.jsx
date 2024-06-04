import React, { useRef } from 'react';

const Manager = () => {
    const ref = useRef();

    const savePassword = () => {

    }
    const showPassword = () => {
        // alert("show the password");
        if (ref.current.src.includes("/icons/hide.png")) {
            ref.current.src = "icons/show.png"
        } else {
            ref.current.src = "icons/hide.png"
        }

    }
    return (
        <>
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="mx-auto mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-700'> &lt;</span>
                    Pass
                    <span className='text-green-700'>OP/ &gt;</span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your Own Password Manager</p>
                <div className='text-white flex flex-col p-4  gap-8 items-center'>
                    <input placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='' id='' />
                    <div className="flex w-full justify-between gap-9">
                        <input placeholder='Enter User Name' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='' id='' />
                        <div className="relative">
                            <input placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='' id='' />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={29} src="/icons/show.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center gap-4 items-center bg-green-600 hover:bg-green-400 rounded-full px-4 py-2 w-fit border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Password</button>
                </div>
            </div>
        </>
    );
}

export default Manager;
