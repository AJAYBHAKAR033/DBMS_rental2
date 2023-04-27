import React, { useState } from 'react'
import './Staff_login.css'
function Staf_Login() {
    const [id, ChangeStaffId] = useState('');
    const [pass, ChangePassword] = useState('');
    const [userTyp,setUsertyp]=useState('S');
    const [message, setMeassage] = useState('');


    const handleForm=async()=>{
        const response=await fetch('/staffLogin',{
            method:'POST',
            body:JSON.stringify({
                userTyp,
                id,
                pass,
            }),
            headers: { 'Content-type': 'application/json' },
        });
        const json=await response.json();
        console.log(json);
        if(json.err==='FAILED')
        {
            setMeassage('Try Again!');
        }
        else{
            window.location.replace('http://localhost:3000/afterStaffLogin')
        }
    }

    return (
        <div className='e-login_2' >
            <form className='login-form_2' name="stafflogin" onSubmit={handleForm}>
                <div className='main-container_2'>
                    <div className='reg-con_2' id='reg-con_2' >
                        <div className="register_2"> <div> Staff Login<br /></div></div>
                        <div className='content-1_2_special'>
                            <div className=' special_content_2'>
                           
                            </div>

                        </div>
                        <div className='content-1_2'>
                            <div className='sub-content-2_2'>
                            <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='inp_2' type='text' value={id} placeholder="Staff Id" onChange={(e) => ChangeStaffId(e.target.value)} ></input>
                            </div>

                        </div>
                        <div className='content-1_2'>
                            <div className='sub-content-2_2'>
                                <span class="material-symbols-outlined">
                                    lock
                                </span>
                                <input className='inp_2' type='text' value={pass} placeholder="Password" onChange={(e) => ChangePassword(e.target.value)} ></input>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='Buttons1_2'>
                    <button className='submit-button_2' type='submit' >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default Staf_Login