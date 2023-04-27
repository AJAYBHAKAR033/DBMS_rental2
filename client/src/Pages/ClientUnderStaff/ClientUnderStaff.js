import React, { useEffect, useState } from 'react'

function ClientUnderStaff() {


    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/staffClient', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
            });

            const json = await response.json();
            console.log(json);
            if (json) {
                setProperties(json);
            }
        }
        fetchData();
    }, []);


    return (
        <div className='container'>
            <div className='heading_comments'>Client Under Staff</div>
            <div className='table'>
                {properties && (
                    <table>
                        <thead>
                            <tr>
                                <th>Client ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Date_of_reg</th>
                                <th>Max. Rent</th>
                                <th>Property Type</th>
                                <th>Email</th>
                                <th>Branch ID</th>
                                <th>Eid</th>
                                <th>Contact</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property.id}>
                                    <td>{property.Client_id}</td>
                                    <td>{property.Fname}</td>
                                    <td>{property.Lname}</td>
                                    <td>{property.Date_of_reg}</td>
                                    <td>{property.Max_rent}</td>
                                    <td>{property.P_type}</td>
                                    <td>{property.Email}</td>
                                    <td>{property.Branch_id}</td>
                                    <td>{property.Eid}</td>
                                    <td>{property.Contact}</td>
                                    <td>{property.DOB}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default ClientUnderStaff