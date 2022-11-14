// import {useState} from 'react';
// import{ useNavigate} from 'react-router-dom';
import{ Link} from 'react-router-dom';
const  Register =()=>{
    // const [name, setName]= useState('');
    // const [email, setEmail]= useState('');

    // const navigate = useNavigate();

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     if(!name || !email) return;
    //     setUser({name:name, email:email});
    //     navigate('/dashboard');
    //     // console.log(name, email);
    // };
    return( 
    <div className="register"> 
    <span className="registerTitle"> Register</span>
             <form className='registerForm'>
         
                <label >  username</label>
            <input className="registerInput" type="text" placeholder='Username' />
                <label >  Email</label>
            <input className="registerInput" type="email" placeholder='Email' />
                <label >  Password</label>
            <input className="registerInput" type="password" placeholder='Password' />
            <button className='registerButton'>Register</button>
           
            

            </form> <button className="liRegisterButton">
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