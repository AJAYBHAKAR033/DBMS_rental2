import React, { useEffect, useState } from 'react'
import './Comments.css'

function Comments() {

    const [comments,setComments]=useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/comments', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
              });
      
          const json = await response.json();
          console.log(json);
          if (json) {
            setComments(json);
          }
        }
      
        fetchData();
      }, []);
      
    

  return (
    <div className='container'>
        <div className='heading_comments'> Comments On Your Property</div>
        <div className='table'>
        {comments && (
          <table>
            <thead>
              <tr>
                <th>Property ID</th>
                <th>Property Type</th>
                <th>No. Romms</th>
                <th>Rent</th>
                <th>Street</th>
                <th>City</th>
                <th>Client ID</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((property) => (
                <tr key={property.id}>
                  <td>{property.Property_id}</td>
                  <td>{property.Property_type}</td>
                  <td>{property.No_room}</td>
                  <td>{property.Rent}</td>
                  <td>{property.Street}</td>
                  <td>{property.City}</td>
                  <td>{property.Client_id}</td>
                  <td>{property.Comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
    </div>
  )
}

export default Comments