import React from 'react';

const Manager = () => {
    return (
        <>
            <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="mx-auto bg-slate-50 mycontainer">
                <h1>PassOP</h1>
                <p>Your Own Password Manager</p>
                <div className='text-white flex flex-col p-4'>
                    <input className='rounded-full' type="text" name='' id='' />
                    <div className="flex">
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Manager;
