// import React from 'react'
import {useLocation} from 'react-router'
import {useContext, useEffect, useState} from 'react'
import image from '../images/Tech.png';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Context } from '../context/Context';




export default function SinglePost() {
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const location = new useLocation();
 const path = location.pathname.split("/")[2];
 const [post, setPost] = useState([])
 useEffect(()=>{
  const getPost = async ()=>{
    const res = await axios.get("/posts/"+ path);
    setPost(res.data);
  };
  getPost()
 },[path]);
 const handleDelete = async()=>{
  try {
      await axios.delete(`/posts/${post._id}` ,{ data:{username:user.username}});
      window.location.replace("/" );
  } catch (err) {
    
  }
 }
  return (

    <div classnaName="singlePost">
       <div className="singlePostWrapper">     
        {post.photo &&(<img className='singlePageImg' src={ PF+ post.photo} alt=""/>)}
        <h1 className="singlePostTitle"> 
        {post.title}   
         {post.username === user?.username &&
         (<div className="singlePostEdit" >  
         <i class="singlePostIcon fa-solid fa-pen-to-square"></i> 
         <i class="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
         </div>
         )}
      </h1>
     
        <div className="singlePostInfo"> 
        <span className="singlePostAuthor"> Author:<Link className ="lnk" to={`/?user=${post.username}`}><b>{post.username}</b></Link> </span>
        <span className="singlePostDate"><em>{new Date(post.createdAt).toDateString()} </em> </span>
        </div>
        <p className="singlePostDesc">  {post.desc}
        </p>
       </div>
      </div>
     

  )
}
