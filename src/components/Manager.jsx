import React, { useEffect, useRef, useState } from 'react';

const Manager = () => {
    const ref = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const savePassword = () => {
        console.log(form);
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
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
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your Own Password Manager</p>
                <div className='text-white flex flex-col p-4  gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='site' id='' />
                    <div className="flex w-full justify-between gap-9">
                        <input value={form.username} onChange={handleChange} placeholder='Enter User Name' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='username' id='' />
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="password" name='password' id='' />
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
                <div className="passwords">
                    <h2 className='font-bold text-2xl p-5 flex items-center justify-center'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Website Url</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item) => {
                                    return <tr key={item.index}>
                                        <td className='py-2 border border-white text-center w-32'><a href={item.site} target='_blank'>{item.site}</a></td>
                                        <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                                        <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    );
}

export default Manager;
