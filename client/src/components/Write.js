import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Context } from '../context/Context';
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {console("prob "+ err.Context)}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
    console.log(newPost)
  };
  return (


    <div className="write">
    {file && (
      <img className="writeImg" 
      src={URL.createObjectURL(file)} 
      alt="" 
   
      />
    )}
    <form className="writeForm" onSubmit={handleSubmit}>
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Title"
          className="writeInput"
          autoFocus={true}
          onChange={e=>setTitle(e.target.value)}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          placeholder="Whats the Yarn..."
          type="text"
          className="writeInput writeText"
          onChange={e=>setDesc(e.target.value)}
        ></textarea>
      </div>
      <button className="writeSubmit" type="submit">
        Publish
      </button>
    </form>
  </div>
//     <div>
//       <div className='write'>
// {file &&
// <img src={URL.createObjectURL("file")} alt="" className='writeImg'/>
// }
    
//         <form action="" className='writeForm' onSubmit={handleSubmit}>
//             <div className='writeFormGroup'>
              
//                 <label htmlFor="fileInput">  
//                     <i className="writeIcon fa-regular fa-plus"></i> 
//                 </label>
//                 <input type="file" id="fileInput" style={{display:"none"}} 
//                 onChange={e=>setFile(e.target.files)} /> 
//                 <input type="text" placeholder='Title' id="fileInput" className='writeInput' autoFocus={true} 
//                  onChange={e=>setTitle(e.target.value)}/>
//                 </div>
//                 <div className='writeFormGroup'> 
//                     <textarea 
//                         type="text" 
//                         placeholder='Whats the yarn?' 
//                         id="fileInput" 
//                         className='writeInput writeText'  
//                     ></textarea>
           
           
//             </div> <button className='writeSubmit' type='submit' > Publish</button>
//         </form>
//       </div>
//       </div>
   
  )
}
