import React, { useEffect, useState } from 'react'
import './Add_client.css'
function Add_Client() {
    // const [count, changeCount] = useState(0);
    const [Div1PosClient, changePosDivClient] = useState(0);
    // const [OpacityClient, changeOpecClient] = useState(1);
    // const [Opacity1Client, changeOpec1Client] = useState(0);
    // const [Opacity2Client, changeOpec2Client] = useState(0);
    // const [Div1Pos1Client, changePosDiv1Client] = useState(100);
    // const [Div1Pos2Client, changePosDiv2Client] = useState(200);
    const [LastNameClient, changelnameClient] = useState('');
    const [FirstNameClient, changeNameClient] = useState('');
    const [MaxRentClient, changeMaxRentClient] = useState('');
    const [TypeClient, changeTypeClient] = useState('');
    const [ClientEmail, changeClientEmail] = useState('');
    const [ClientContact, changeClientContact] = useState('');
    const [currentDate, setCurrentDate] = useState(new Date());
    const [branchId,setBranchId]=useState('');
    const [data, setData] = useState([]);
    const [DOB, setDOB] = useState('');
    const [EmpId,setEmpId]=useState('');


    // const [ClientTelPhoneNumber, changeClientTelNumber] = useState('');
    // const [ClientPersonalColor, changeClientPersonalColor] = useState('#a0b3b0');
    // const [ClientBusinessColor, changeClientBusinessColor] = useState('#13232f')

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(DOB);
        const response = await fetch('/clientReg', {
            method: 'POST',
            body: JSON.stringify({
                FirstNameClient,
                LastNameClient,
                currentDate,
                MaxRentClient,
                TypeClient,
                ClientEmail,
                branchId,
                EmpId,
                ClientContact,
                DOB
            }),
            headers: { "Content-type": "application/json" },
        });
        const json=await response.json();
        if(json.status="SUCCESS")
        {
            await window.alert('Employee added Scuccessfully');
            window.location.replace('http://localhost:3000/clientloginoption')
        }
    }

    useEffect(() => {
        async function fetchBranches() {
            const data = await fetch('/getBranches', { method: 'POST' });
            const json = await data.json();
            console.log(json);
            if (json.status === '400') {
                // setMessage('Error!')
            }

            setData(json);
        }
        fetchBranches();
    }, []);

    return (
        <div className='Client_Registeration'>
            <form className='Client-Registeration-div' onSubmit={handleForm}>
                <div className='register_details_Client'>
                    <div className='register-content-Client'> Client registeration</div>
                    <div className='Div-line-Client'>
                        <div className='Div-line-width-Client'></div>
                    </div>
                </div>
                <div className='Client-registeration-form'>
                    <div className='Client_FirstPage' style={{ left: `${Div1PosClient}%` }}>
                        <div className='Client-content-div'>
                            <div className='Client-content-1'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='Client-Input' type='text' value={FirstNameClient} placeholder="FirstName" onChange={(e) => changeNameClient(e.target.value)} ></input>
                            </div>
                            <div className='Client-content-1'>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <input className='Client-Input' type='text' value={LastNameClient} placeholder="LastName" onChange={(e) => changelnameClient(e.target.value)} ></input>
                            </div>

                        </div >
                        <div className='Client-content-div'>
                            <div className='Client-content-1'> <span class="material-symbols-outlined">
                                contact_phone
                            </span>
                                <input className='Client-Input' type='text' value={ClientEmail} placeholder="Contact No." onChange={(e) => changeClientEmail(e.target.value)} ></input>
                            </div>
                            <div className='Client-content-1'>
                                <span class="material-symbols-outlined">
                                    mail
                                </span>
                                <input className='Client-Input' type='text' value={ClientContact} placeholder="Email" onChange={(e) => changeClientContact(e.target.value)} ></input>
                            </div>
                        </div >
                        <div className='Client-content-div'>
                            <div className='Client-content-2'>
                                <input className='Client-Input' type='text' value={TypeClient} placeholder="Type Of Poperty" onChange={(e) => changeTypeClient(e.target.value)} ></input>
                            </div>
                            <div className='Client-content-1'>
                                <input className='Client-Input' type='text' value={EmpId} placeholder="Employee" onChange={(e) => setEmpId(e.target.value)} ></input>
                            </div>
                        </div>
                        <div className='Client-content-div'>
                            <div className='Client-content-2'> <span class="material-symbols-outlined">
                                business_center
                            </span>
                                <select className='Client-Input-2' value={branchId} placeholder="Branch No" onChange={(e) => setBranchId(e.target.value)}>
                                    {data.map((item, index) => (
                                        <option key={index} value={item.Branch_no}>
                                            {item.Branch_no + ' (' + item.Street + ' ' + item.City + '  ' + item.Postcode + ')'}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='Client-content-div'>
                            <div className='Client-content-1'> <span class="material-symbols-outlined">
                                <span class="material-symbols-outlined">
                                    currency_rupee
                                </span>
                            </span>
                                <input className='Client-Input' type='text' value={MaxRentClient} placeholder="Max Rent" onChange={(e) => changeMaxRentClient(e.target.value)} ></input>
                            </div>
                            <div className='Client-content-1'>
                                <span class="material-symbols-outlined">
                                    cake
                                </span>
                                <input className='Client-Input' type='date' value={DOB} placeholder="DOB" onChange={(e) => setDOB(e.target.value)} ></input>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='Client-submit-button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Add_Client