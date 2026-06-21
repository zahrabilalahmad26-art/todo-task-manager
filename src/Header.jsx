import React from 'react'

const Header = () => {
    return (
        <div className='mt-[0px] sticky h-[70px] bg-olive-500 flex text-black '>
            <p className='pl-[10px] font-extrabold text-xl' >&#x2124;<br></br>ZAZI TASKS</p>
            <ul className='flex  justify-center items-center ml-[150px]'>
                <li className='pl-[60px] hover:font-bold transition-all cursor-pointer'>Home</li>
                <li className='pl-[60px] hover:font-bold transition-all cursor-pointer'>My Tasks</li>
                <li className='pl-[60px] hover:font-bold transition-all cursor-pointer'>Contact</li>
                <li className='pl-[60px] hover:font-bold transition-all cursor-pointer'>More</li>
                <li className='pl-[60px] hover:font-bold transition-all cursor-pointer'>AI</li>
            </ul>
        </div>
    )
}

export default Header
