import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, [])

    const copyText = (text) => {
        toast('copyed to clip board', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setForm({ site: "", username: "", password: "" })
            toast('Password Saved successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast('Msg: Password not Saved');

        }
    }

    const deletePassword = (id) => {
        console.log("Deleting password with id", id);
        let c = confirm("Do You really want to delete this password?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id));
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Password deleted successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const editPassword = (id) => {
        console.log("Editing password with id", id);
        setForm(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        toast('Password edite', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const showPassword = () => {
        // alert("show the password");
        passwordRef.current.type = "text";
        if (ref.current.src.includes("/icons/hide.png")) {
            ref.current.src = "icons/show.png"
            passwordRef.current.type = "password";
            toast('Hide Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            ref.current.src = "icons/hide.png"
            passwordRef.current.type = "text";
            toast('Show Password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="p-3 md:p-0 md:container mx-auto min-h-[88.2vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-700'> &lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-700 text-lg text-center'>Your Own Password Manager</p>
                <div className='text-white flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='site' id='site' />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-9">
                        <input value={form.username} onChange={handleChange} placeholder='Enter User Name' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="text" name='username' id='username' />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1 text-black' type="password" name='password' id='password' />
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
                        Save Password
                    </button>
                </div>
                <div className="md:passwords">
                    <h2 className='font-bold text-2xl p-5 flex items-center justify-center'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-center'>No Passwords to Show</div>}
                    {passwordArray.length !== 0 &&
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                                <thead className='bg-green-800 text-white'>
                                    <tr>
                                        <th className='py-2'>Website URL</th>
                                        <th className='py-2'>Username</th>
                                        <th className='py-2'>Password</th>
                                        <th className='py-2'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-green-100'>
                                    {passwordArray.map((item) => {
                                        return <tr key={item.id}>
                                            <td className='py-2 border border-white text-center'>
                                                <div className='flex items-center justify-center'>
                                                    <a href={item.site} target='_blank' rel="noopener noreferrer">{item.site}</a>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "10px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-2 border border-white text-center'>
                                                <div className='flex items-center justify-center'>
                                                    <span>{item.username}</span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "10px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-2 border border-white text-center'>
                                                <div className='flex items-center justify-center'>
                                                    <span>{item.password}</span>
                                                    <div className="lordiconcopy size-7 cursor-pointer" onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "10px" }}
                                                            src="https://cdn.lordicon.com/depeqmsz.json"
                                                            trigger="hover"
                                                        >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-2 border border-white text-center'>
                                                <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/wvdxdmpi.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                                <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div >
        </>
    );
}

export default Manager;
