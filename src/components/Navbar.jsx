import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-purple-200 flex items-center px-14 justify-between h-12'>
            <div className="logo font-bold">Passop</div>
            <ul>
                <li className='flex gap-12'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="#">About</a>
                    <a className='hover:font-bold' href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
