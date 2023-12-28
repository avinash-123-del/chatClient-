import React, { useState } from 'react'

const LoginPage = ({ setIsLoginPage }) => {

    const [input, setInput] = useState({ email: "", password: "" })

    function handleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("login" , input);
    }

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={handleChange} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input onChange={handleChange} type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>

                <button onClick={() => setIsLoginPage(false)} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 ml-3 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</button>

            </form>

        </div>
    )
}

export default LoginPage