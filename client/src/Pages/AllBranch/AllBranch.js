import React, {useState} from 'react'
import './AllBranch.css'
function Query_page() {
    
    const[City,Setcity]=useState("");

    const [prop,setProp]= useState("");
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
        const response = await fetch('/getBranches', {
            method: 'POST',
            body: JSON.stringify({
              City,
            }),
            headers: { "Content-type": "application/json" },
        });
        const json=await response.json();
        console.log(json)
        if(json)
        {
          setProp(json);
        }
  }

  return (
    <div className='body_query'>
      <div className='properties_form'>
         <form  className='property-search-form' onSubmit={handleSubmit}>
            <input type="Integer" value={City} placeholder="City" onChange={(e)=>Setcity(e.target.value)}></input>
            <button type="submit">Search</button>
         </form>
         </div>
         <div className='result'>
         {prop && (
          <table>
            <thead>
              <tr>
                <th>Branch No.</th>
                <th>Street</th>
                <th>City</th>
                <th>PostCode</th>
                <th>Branch Contact</th>
                <th>Manager Id</th>
                
              </tr>
            </thead>
            <tbody>
              {prop.map((property) => (
                <tr key={property.id}>
                  <td>{property.Branch_no}</td>
                  <td>{property.Street}</td>
                  <td>{property.City}</td>
                  <td>{property.Postcode}</td>
                  <td>{property.Branch_contact}</td>
                  <td>{property.Mid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
         </div>
    </div>
  )
}

export default Query_page