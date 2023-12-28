import React from 'react'

const DashBoard = () => {

    const chats = [
        {
            name: "siya",
            img: "/dummy.png"
        },
        {
            name: "Vias",
            img: "/dummy.png"
        },
        {
            name: "Kumar",
            img: "/dummy.png"
        },
        {
            name: "Chandan",
            img: "/dummy.png"
        },
        {
            name: "Prakash",
            img: "/dummy.png"
        }
    ]
    return (
        <div className='h-screen flex justify-between text-slate-200'>
            <div className='w-[25%] bg-gray-800 pt-4 cursor-pointer'>
                <hr />
                <div className='flex justify-start items-center gap-2 px-5 my-2'>
                    <img src="/dummy.png" height={50} width={50} alt="" />
                    <div className='flex flex-col'>
                        <span>Avinash</span>
                        <small>My Account</small>
                    </div>
                </div>
                <hr />

                <div className="grid grid-cols-1 gap-5 justify-center cursor-pointer">
                    <h1 className='text-center my-3 w-[100%] bg-gray-600 py-3'>Messages</h1>
                    {chats.map((e, i) => (
                        <div key={i} className='flex justify-start items-center gap-2 px-5 my-2'>
                            <img src={e.img} height={50} width={50} alt="" />
                            <div className='flex flex-col'>
                                <span>{e.name}</span>
                                <small>avialable</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className='w-[50%] bg-gray-900 relative'>

                <div className='bg-neutral-950 p-2'>
                    <div className='flex justify-start items-center gap-2 px-5 my-2'>
                        <img src="/dummy.png" height={50} width={50} alt="" />
                        <div className='flex flex-col'>
                            <span>Avinash</span>
                            <small>Online</small>
                        </div>
                    </div>
                </div>

                <div className='h-[500px] overflow-y-scroll scrollBar'>
                    <div>
                        <div className='bg-blue-800 rounded-lg rounded-tl-none p-2 w-[45%] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate unde, dolores voluptatum consequatur sequi neque facilis aut natus saepe?</div>

                        <div className='bg-slate-700 p-2 rounded-lg rounded-tr-none ml-[400px] w-[45%] m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vel sunt tempora sequi molestias voluptate placeat magni delectus aliquid asperiores.</div>

                    </div>
                    <div>

                        <div className='bg-blue-800 rounded-lg rounded-tl-none p-2 w-[45%] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate unde, dolores voluptatum consequatur sequi neque facilis aut natus saepe?</div>

                        <div className='bg-slate-700 p-2 rounded-lg rounded-tr-none ml-[400px] w-[45%] m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vel sunt tempora sequi molestias voluptate placeat magni delectus aliquid asperiores.</div>

                    </div>
                    <div>

                        <div className='bg-blue-800 rounded-lg rounded-tl-none p-2 w-[45%] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate unde, dolores voluptatum consequatur sequi neque facilis aut natus saepe?</div>

                        <div className='bg-slate-700 p-2 rounded-lg rounded-tr-none ml-[400px] w-[45%] m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vel sunt tempora sequi molestias voluptate placeat magni delectus aliquid asperiores.</div>

                    </div>
                    <div>

                        <div className='bg-blue-800 rounded-lg rounded-tl-none p-2 w-[45%] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate unde, dolores voluptatum consequatur sequi neque facilis aut natus saepe?</div>

                        <div className='bg-slate-700 p-2 rounded-lg rounded-tr-none ml-[400px] w-[45%] m-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae vel sunt tempora sequi molestias voluptate placeat magni delectus aliquid asperiores.</div>

                    </div>
                   
                </div>

                <div className='bg-slate-900 border border-slate-300 py-2 rounded-lg absolute bottom-0 flex justify-between items-center w-full'>
                    <div class="mb-6 w-[80%] ml-4">
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Send Message</label>
                        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            send
                        </span>
                    </button>

                </div>
            </div>


            <div className='w-[25%] bg-gray-800'>3</div>
        </div>
    )
}

export default DashBoard