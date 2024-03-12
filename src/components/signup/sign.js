import React, { useState } from 'react'
import './sign.css'

export default function sign() {
 const [name,setName]=useState('');
 const [password ,setPassword] = useState('');

  return (
    <div className='.container'>
        <div className='content'>
            <h2>Create a new account</h2>
            <p>It's quick and easy</p>
            <input type='text' id='t1' onChange={()=> setName((prev)=>t1.value) }></input>
            <input type='text'></input><br></br><br></br>
            <input type='password' id='p1' onChange={()=>setPassword((prev)=>p1.value)}></input><br></br>
            <label>Date of birth ?</label><br></br>
            <input type='date'></input><br></br><br></br>
            <label >Gender ?</label>
            <input type='radio' name='gender'>Female</input>
            <input type='radio'name='gender'>Male</input>
            <input type='radio'name='gender'>Custom</input><br></br><br></br>
            <p>People who use our service may have uploaded your contact
                information to Facebook.<a href='#'>Learn more</a>
            </p><br></br>
            <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. 
                You may receive SMS notifications from us and can opt out at any time.</p>
            <br></br>
            <input type='button' id='btn'>Sign Up</input><br></br><br></br>
            <a href='#'>Already have an account?</a>
        </div>
    </div>
  )
}
