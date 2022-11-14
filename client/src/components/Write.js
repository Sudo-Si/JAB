import React from 'react'
import Outdoors from '../images/Outdoors.png'
export default function write() {
  return (
    <div>
      <div className='write'>
    <img src={Outdoors} alt="" className='writeImg'/>
        <form action="" className='writeForm'>
            <div className='writeFormGroup'>
              
                <label htmlFor="fileInput">  
                    <i className="writeIcon fa-regular fa-plus"></i> 
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} /> 
                <input type="text" placeholder='Title' id="fileInput" className='writeInput' autoFocus={true} />
                </div>
                <div className='writeFormGroup'> 
                    <textarea 
                        type="text" 
                        placeholder='Whats the yarn?' 
                        id="fileInput" 
                        className='writeInput writeText'  
                    ></textarea>
           
           
            </div> <button className='writeSubmit' > Publish</button>
        </form>
      </div>
      </div>
   
  )
}
