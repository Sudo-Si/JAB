// import {useState} from 'react';
import{ Link} from 'react-router-dom';
const  Login =()=>{
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
    <div className="login"> 
    <span className="loginTitle"> Login</span>
             <form className='loginForm'>
         
                <label >  Email</label>
            <input className="loginInput" type="email" placeholder='email' />
                <label >  Password</label>
            <input className="loginInput" type="password" placeholder='password' />
            <button className='loginButton'>Login</button>
           
            

            </form> 
            

<button className="liRegisterButton">
    <Link to='/register' className="lnk" > Register</Link> 
</button>











        {/* this needs to be refactored */}
  {/*      <form className="form" onSubmit ={handleSubmit}>
        
        // <h1>Login</h1>
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
         
        //     <button type="">Login</button>
            
            
        </form> */}
    </div>
    )
}
export default Login;