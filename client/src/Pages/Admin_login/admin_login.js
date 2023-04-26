import React, { useState } from 'react'
import './admin_login.css'

function Adminlogin() {
    const [id, setId]=useState('');
    const [pass,setPass]= useState('');
    const [userTyp,setUsertyp]=useState('A');
    const [message,setMessage]=useState('');

    

    const handleForm=async (e)=>{
        e.preventDefault();
        const response=await fetch('/adminLogin',{
            method:'POST',
            body:JSON.stringify({
                userTyp,
                id,
                pass,
            }),
            headers: { "Content-type": "application/json" },
        });

        const json= await response.json();
        if(json.err==='FAILED')
        {
            setMessage(json.msg);
        }
        else{
            window.location.replace('http://localhost:3000/adminoptions')
        }
        console.log(json);

    }

    // if (window.location.pathname === 'http://localhost:3000/adminlogin') {
    //     setUsertyp('A');
    //   }

  return (
    <div className='admin_login'>
        <form className='admin_login_container' onSubmit={handleForm}>
            <div className='heading'>Admin Login</div>
            <div className='inputs'>
                <div>
                <label>Admin ID</label>
                <br/>
                <input type="text" placeholder='XXXXXXXXXX' onChange={(e)=>setId(e.target.value)}></input>
                </div>
                <div>
                <label>Password</label>
                <br/>
                <input type="password" placeholder='*********' onChange={(e)=>setPass(e.target.value)}></input>
                </div>
                {message && <p style={{color: 'red', textAlign: 'center'}}>{message}</p>}
                <div>
                    <button type='submit' >Login</button>
                </div>
            </div>
            
        </form>
    </div>
  )
}

export default Adminlogin