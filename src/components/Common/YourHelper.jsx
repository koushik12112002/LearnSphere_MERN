import React from 'react'
import { Link } from 'react-router-dom'
import { BsEmojiAstonished } from "react-icons/bs";

const YourHelper = () => {
  return (
    <Link to={"YourHelper"}>
        <div className=' relative'>
            <div className=' absolute'>
                <button className="fixed bottom-4 right-6 border border-yellow-50 bg-transparent cursor-pointer gap-x-2 rounded-full py-2 px-5 font-bold text-richblack-900 bg-yellow-50 z-20 flex">
                    <BsEmojiAstonished 
                    className=' w-5 h-5 mt-1'
                    />
                    Your Helper
                </button>
            </div>
            <div className='fixed bottom-4 right-6 bg-yellow-50 z-10 w-5 h-4'>

            </div>
        </div>
        
    </Link>
  )
}

export default YourHelper
