import React from 'react'
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

const Gemini = () => {
  return (
    <>
        <div className=' flex max-h-[100vh] p-0 m-0'>
          <Sidebar/> 
          <Main/>
        </div>
    </>
  )
}

export default Gemini
