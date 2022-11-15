// import React from 'react'
import { Link } from 'react-router-dom'
import programming from'../images/Programming.png'
import post from "./Posts"


export default function Post({post}) {
  // console.log(posts.title)
  return (
    <div className='post'>
      {
        post.photo &&(
          <Link to={`/post/${post._id}`} className="lnk" >     
       <img className='postImg' src={programming}  />
       </Link>
        )
      }
      {/* <h1>Hi Si</h1> */}
   

      <div className="postInfo">
            <div className='postCats'>
         {post.categories.map(c=>(
              <span className='postCat'>{c.name}</span>
            ))
            }
                
            </div>
            <span className='postTitle'> 
            <Link to={`/post/${post._id}`} className="lnk" > 
           { post.title}
            </Link> 
            </span>
            <hr/>
            <span className='postDate'>{new Date(post.createdAt).toDateString()} </span>
            <p className='postDescription'> {post.desc}
     
         
    </p>
      </div>
    </div>
  )
}
 
// postDate postTitle postInfo postImg post  postCats postCat
