import React, { useContext, useEffect, useState } from "react";
import './Sidebar.css';
import {assets} from '../../assets/assets.js';
import { Context } from "../../context/Context.jsx";
import { RiMenuFold4Fill } from "react-icons/ri";
import { MdOutlineMenuOpen } from "react-icons/md";
        
const Sidebar = () => {
    const [extended,setExtended]=useState(false);
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context);
    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    
    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
             <div className="top">
                <MdOutlineMenuOpen className=" text-richblack-100 w-10 h-10 cursor-pointer" onClick={()=>{setExtended(!extended)}}/>
                {/* <RiMenuFold4Fill className="menu" onClick={()=>{setExtended(!extended)}}/> */}
                {/* <img className="menu" onClick={()=>{setExtended(!extended)}} src={assets.menu_list} alt="" /> */}
                <div onClick={()=>newChat()}className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended?<p>New chat</p>:null}
                </div>
                {extended?
                    <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return(
                            <div onClick={()=>loadPrompt(item)} className="recent-entry hover:text-richblack-5">
                                <img src={assets.message_icon} alt="" />
                                <p className=" text-richblack-700 hover:text-richblack-5">{item.slice(0,18)}...</p>
                            </div>
                        )
                    })}
                            
                        
                    
                    
                </div>
                : null
            }
                
             </div>
             <div className="bottom ">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p className="">Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>History</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}
                </div>
             </div>
        </div>
    );
};
export default Sidebar;