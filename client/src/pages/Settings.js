import React from 'react'
import Sidebar from '../components/Sidebar'
import pp from "../images/simon.png"

export default function settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'> 
        <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span> 
            <span className='settingsDeleteTitle'>Delete Your Account</span> 
            </div>
            <form className='settingsForm'>
                <label> Profile Picture</label>
                <div className='settingsPP' > 
                <img src={pp} />
                <label htmlFor='fileInput'>  

                <i class="settingsPPIcon fa-solid fa-user-circle"> </i>
                </label>
                <input type="file" id="fileInput" className='writeInput'style={{display:"none"}} 
                />
               
                </div>
                <label>  Username</label>
            <input type="text" placeholder='Sudo-Si' />
                <label >  Email</label>
            <input type="email" placeholder='simanater@gmail.com' />
                <label >  Password</label>
            <input type="password" placeholder='****' />
            <button className='settingsButton'>Update</button>

            </form>
        </div>
            <Sidebar />
        
   
    </div>
  )
}
