import React, { useEffect, useState } from 'react'

function PropertUnderStaff() {


    const [properties, setProperties] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/staffProperty', {
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
            <div className='heading_comments'>Properties Under Staff</div>
            <div className='table'>
                {properties && (
                    <table>
                        <thead>
                            <tr>
                                <th>Property ID</th>
                                <th>Owner ID</th>
                                <th>Property Type</th>
                                <th>No. Romms</th>
                                <th>Rent</th>
                                <th>Street</th>
                                <th>City</th>
                                <th>PostCode</th>
                                <th>Eid</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((property) => (
                                <tr key={property.id}>
                                    <td>{property.Property_id}</td>
                                    <td>{property.Owner_id}</td>
                                    <td>{property.P_type}</td>
                                    <td>{property.No_room}</td>
                                    <td>{property.Rent}</td>
                                    <td>{property.Street}</td>
                                    <td>{property.City}</td>
                                    <td>{property.Postcode}</td>
                                    <td>{property.Eid}</td>
                                    <td>
                                        <div style={{
                                            backgroundColor: property.Stat === '0' ? 'red' : 'green',
                                            color: 'black',
                                            padding: '5px',
                                            borderRadius: '5px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '80px',
                                            height: '30px'
                                        }}>
                                            {property.Stat === '0' ? 'Not Sold' : 'Sold'}
                                        </div>
                                    </td>



                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default PropertUnderStaff