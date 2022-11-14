import React from 'react'
import image from '../images/Tech.png'
export default function SinglePost() {
  return (

    <><div classnaName="singlePost">
       <div className="singlePostWrapper">
        <img className='singlePageImg' src={image} alt=""/>
        <h1 className="singlePostTitle"> A post about Tech.
        <div className="singlePostEdit">  <i class="singlePostIcon fa-solid fa-pen-to-square"></i> <i class="singlePostIcon fa-solid fa-trash"></i></div>
        </h1>
        <div className="singlePostInfo"> 
        <span className="singlePostAuthor"> Author: <b>Sudo-Si</b></span>
        <span className="singlePostDate"><em>1 hour ago</em> </span>
        </div>

        <p className="singlePostDesc">  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis 
        nunc sed id. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. 
        Laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum. Sapien 
        eget mi proin sed libero enim. Molestie at elementum eu facilisis. Ultricies leo 
        integer malesuada nunc vel risus commodo viverra maecenas. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis 
        nunc sed id. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. 
        Laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum. Sapien 
        eget mi proin sed libero enim. Molestie at elementum eu facilisis. Ultricies leo 
        integer malesuada nunc vel risus commodo viverra maecenas. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis 
        nunc sed id. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. 
        Laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum. Sapien 
        eget mi proin sed libero enim. Molestie at elementum eu facilisis. Ultricies leo 
        integer malesuada nunc vel  
        integer malesuada nunc vel risus commodo viverra maecenas. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis 
        nunc sed id. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. 
        Laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum. Sapien 
        eget mi proin sed libero enim. Molestie at elementum eu.
        </p>
       </div>
      </div>
      </>

  )
}
