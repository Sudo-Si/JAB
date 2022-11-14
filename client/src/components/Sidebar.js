import React from 'react'
import simon from '../images/simon.png';
import{ Link} from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="sidebarItem">
    <span className='sideBarTitle'> <Link to='/about'  > About Me</Link></span>   
  
<img className="abtImage" src={simon} alt=""/>    
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Amet nisl purus in mollis 
    nunc sed id. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. 
    Laoreet non curabitur gravida arcu. Amet massa vitae tortor condimentum. Sapien 
    eget mi proin sed libero enim. Molestie at elementum eu facilisis. Ultricies leo 
    integer malesuada nunc vel risus commodo viverra maecenas. .</p>
      </div>


      <div className="sidebarItem">
         <span className='sideBarTitle'> Catagories</span>   
        
        <ul className='sideBarList'>
            <li className='sideBarListItem'> Programming</li>
            <li className='sideBarListItem'> 3D Printing </li>
            <li className='sideBarListItem'> Outdoors</li>
            <li className='sideBarListItem'> Tv Shows </li>
            <li className='sideBarListItem'> Music </li>
            <li className='sideBarListItem'> Tech </li>
        </ul>
      </div>
       <div className="sidebarItem">
    <span className='sideBarTitle'> Follow Me</span>   
  <div className='sideBarIcon'>
    <i class="sideBarIcon fab fa-instagram-square"></i>
                <i class="sideBarIcon fab fa-tiktok"></i>
                <i class="sideBarIcon fab fa-linkedin"></i>
                <i class="sideBarIcon fab fa-etsy"></i>
     </div>
      </div>
    </div>
  )
}
