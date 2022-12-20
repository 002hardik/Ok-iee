import React, { useState } from 'react'
import "./Join.css";
import image2 from "../../images/image2.jpg";
import {Link} from "react-router-dom";
import video2 from "../../images/video2.mp4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let user;

const sendUser=()=>{
   toast("you are connected");
  user=document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";
  <ToastContainer/>
}


const Join = () => {
  
  const [name,setname]=useState("")

  return (
    <>
    <div className='main'>
        <video src={video2} autoPlay loop muted />
        <div className="content">
            {/* <h1>Welcome</h1>
            <p>To my site.</p> */}
            <div className='JoinPage'>
      <div className='JoinContainer'>
      <img src={image2}  alt='logo'/>
        <h1>Ok-iee 🤖</h1>
        <input onChange={(e) => setname(e.target.value)} placeholder='Enter your name' type="text" id="joinInput"/>
        <Link onClick={(event)=> !name ?event.preventDefault():null} to="/chat"> <button onClick={sendUser} className='joinbtn'>Login In</button> <ToastContainer/> </Link>
      </div>
    </div>
        </div>
    </div>
    {/* <div className='JoinPage'>
      <div className='JoinContainer'>
      <img src={image2} alt='logo'/>
        <h1>Ok-iee 🤖</h1>
        <input onChange={(e) => setname(e.target.value)} placeholder='Enter Your Name' type="text" id="joinInput"/>
        <Link onClick={(event)=> !name ?event.preventDefault():null} to="/chat"> <button onClick={sendUser} className='joinbtn'>Login In</button> </Link>
      </div>
    </div> */}
    </>
  )
}

export default Join
export {user}
