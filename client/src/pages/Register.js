import {useState} from 'react';
import axios from 'axios'
// import{ useNavigate} from 'react-router-dom';
import{ Link} from 'react-router-dom';
const  Register =()=>{

    const [username, setUsername]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState(false);

// const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
      try{  const res = await axios.post("/auth/register", {
            username, 
            email,
            password,
        });
        res.data && window.location.replace("/login")
        }catch(err){ 
            console.log(err);
            setError(true)
        }
        // console.log(res)
    };
    return( 
    <div className="register"> 
    <span className="registerTitle"> Register</span>
             <form className='registerForm' onSubmit={handleSubmit}>
         
                <label >  username</label>
            <input className="registerInput"
             type="text"
              placeholder='Username' 
              onChange={e=>setUsername(e.target.value)}
              />
                <label >  Email</label>
            <input className="registerInput" type="email" placeholder='Email'
              onChange={e=>setEmail(e.target.value)} 
              />
                <label >  Password</label>
            <input className="registerInput" type="password" placeholder='Password'  
             onChange={e=>setPassword(e.target.value)}/>
            <button className='registerButton' type="submit">Register</button>
            <div className='errMsg'> </div>
           </form>
           {error && <span className='spn'><em className='spn'>Something Went Wrong !</em></span>}
           <button className="liRegisterButton">
            
    <Link to='/login' className="lnk" > Login</Link> 
</button>












        {/* this needs to be refactored */}
  {/*      <form className="form" onSubmit ={handleSubmit}>
        
        // <h1>Register</h1>
        //   <label htmlFor="username"> username</label>
        //     <div className="form-row">
           
        //     <input type='text' className='form-input' id='name'
        //         value={name}
        //         onChange={(e)=> setName(e.target.value)}
        //     />     
        //     </div>     <label htmlFor="email"> email</label>
        //     <div className="form-row">
           
        //     <input type='text' className='form-input' id='email'
        //         value={email}
        //         onChange={(e)=> setEmail(e.target.value)}
        //     />     
        //     </div>
         
        //     <button type="">Register</button>
            
            
        </form> */}
    </div>
    )
}
export default Register;