import React from 'react'
import { Link } from 'react-router-dom'
import programming from'../images/Programming.png'


export default function Post() {
  return (
    <div className='post'>
      {/* <h1>Hi Si</h1> */}
      <Link to='/post/5156' className="lnk" >      <img className='postImg' src={programming}  /></Link>

      <div className="postInfo">
            <div className='postCats'>
                <span className='postCat'>music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'> 
            <Link to='/post/5156' className="lnk" > 
            My Post
            </Link> 
            </span>
            <hr/>
            <span className='postDate'> 1 hour ago </span>
            <p className='postDescription'> 
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
    integer malesuada nunc vel risus commodo viverra maecenas. 
         
    </p>
      </div>
    </div>
  )
}
 
// postDate postTitle postInfo postImg post  postCats postCat
