import { NavLink , Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import simon from '../images/simon.png'

import About from '../pages/About'
// import Single from "../pages/single/Single";
import Write from "./Write";
import Register from "../pages/Register";
const  Navbar =()=>
{
    const user =
    true;
    // false;
    return (
        <nav className="navbar">
        <NavLink 
        to ='/'
        className={({isActive}) =>(isActive ? 'link active': 'link')}
        >
        </NavLink> 
        
        <div className="navbar">
            <div className="top-left">
                <i class="top-icon fab fa-instagram-square"></i>
                <i class="top-icon fab fa-tiktok"></i>
                <i class="top-icon fab fa-linkedin"></i>
                <i class="top-icon fab fa-etsy"></i>
            </div>
            <div className="links top-center">
            <NavLink to='/' className="lnk" element={<Home/>}>Home</NavLink>
            
            <NavLink to='/about' className="lnk" element={<About/>}>About</NavLink>
            <NavLink to='/write' className="lnk" element={<Write />}>Write</NavLink>

            {/* <NavLink to='/contact' className="lnk" element={<About/>}>Contact</NavLink> */}
            {/* <NavLink to='/write' className="lnk" element={<About/>}>Write</NavLink> */}
            {/* <NavLink to='/login' className="lnk" element={<Login/>}>Login</NavLink>  */}
            {/* <NavLink to='/logout' className="lnk" element={user ? <Login/> :}>Logout</NavLink> */}
            </div>
            <div className="top-right">
                {user ? (   
                <img 
                className="top-search-icon" 
                src={simon} 
                alt=""/>
                ) :(
                    <>
                <Link to='/login' className="lnk" element={<Login/>}>Login</Link> 
                <Link to='/register' className="lnk" element={<Register/>}>Register</Link> 
                </>
                )}
             
            <i class="fas fa-search"></i>
              
            </div>
        </div>
        </nav>
        
        )
}
export default Navbar;