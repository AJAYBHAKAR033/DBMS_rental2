import React, { useState } from 'react'
import './owner_login.css'

function Ownerlogin() {
    const [id, setId]=useState('');
    const [pass,setPass]= useState('');
    const [userTyp,setUsertyp]=useState('O');
    const [message,setMessage]=useState('');

    

    const handleForm=async (e)=>{
        e.preventDefault();
        const response=await fetch('/ownerLogin',{
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
            window.location.replace('http://localhost:3000/owneroptions')
        }
        console.log(json);

    }



  return (
    <div className='owner_login'>
        <form className='owner_login_container' onSubmit={handleForm}>
            <div className='heading'>Owner Login</div>
            <div className='inputs'>
                <div>
                <label>Owner ID</label>
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

export default Ownerlogin