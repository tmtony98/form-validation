import { useState } from 'react';
import './App.css';

function App() {
  //js part

const [username,setUsername]=useState('')  
const [email,setEmail]=useState('')
const [mobno,setMobno]=useState('') 
const [password,setPassword] =useState('')

const userDetails=(e)=>{
     alert(`Username: ${username} , Mobile number ${mobno},   
     Email id:${email},   Password : ${password}
     `)
 
}

  return (
    <>

<div className='container-fluid  justify-content-center  p-1 d-flex mt-2 text-align-center'>
  <div style={{width:"600px",backgroundColor:"whitesmoke", padding:"25px",marginTop:"100px", fontSize:'16px' }}>
    <h1 className='p-1 mb-4 fw-bold '>Register Form</h1>
    <form >
            {/*username input */}
      <div className='field  mb-3'>
        <label className='form-label'>Username</label>
        <input className="form-control" type='text' name='username'
        value={username} onChange={(e)=>setUsername(e.target.value)} 
        placeholder='Username'/>
      </div>

      {/**Email input */}
      <div className='field mb-3'>
        <label  className='form-label'>Email</label>
        <input className="form-control"  type='Email' name='email'
        value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='E-mail'/>
      </div>
           {/**mob no */}
           <div className='field mb-3'>
        <label  className='form-label'>Mobile Number</label>
        <input className="form-control"  name='mobno'
      value={mobno} onChange={(e)=>setMobno(e.target.value)}
        placeholder='mobile number'/>
      </div>

       {/*password input */}
            <div className='field mb-3'>
        <label  className='form-label'>Password</label>
        <input className="form-control"  type='password'  name='password'
        value={password} onChange={(e)=>setPassword(e.target.value)}
         placeholder='password'/>
      </div>
    </form>
           {/*button goes here*/}
           <div className='d-flex  mx-auto W-100'> 
           <button onClick={userDetails} className='btn p-3  btn-primary mt-3 ms-1'>Submit</button>
</div>
  </div>
</div>

    </>
  );
}

export default App;
