import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets"; 
import { Context } from "../../context/Context";

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

    
    
    return (
        <div className="main">
            <div className="nav">
                <div className="nav-part">
                    <img className="result-data-pi" src={assets.advance} alt="" />
                    <p>YourHelper</p>
                </div>
                <div>
                    <img src={assets.new_profile} alt="" />
                </div>
            </div>
             <div className="main-container">
                {!showResult
                ?<>
                <div className="greet">
                    <p><span>Hello...</span></p>
                    <p>How can I help you ?</p>

                </div>
                <div className="cards">
                    <div className="card">
                        <p className="card-text">Suggest beautiful places to see on an upcoming road trip.</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly Summarize this concept : Urban Planning.</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat.</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readibility of the following code.</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                : <div className="result">
                    <div className="result-title">
                        <img src={assets.new_profile} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img className="result-data-pic" src={assets.advance} alt="" />
                        {
                            loading 
                            ?<div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                            :
                            <p dangerouslySetInnerHTML={{__html: resultData}}/>
                    
                        }
                        </div>
                        
                </div>
                }
                
                <div className="main-bottom mt-10">
                <div className="search-box">
                    <input onChange={(e) =>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                       {input? <img onClick={()=>onSent(input)} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info mt-4">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
             </div>
             </div>
             
        </div>
    );
};
export default Main;