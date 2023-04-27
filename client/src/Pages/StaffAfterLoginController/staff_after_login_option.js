import React from 'react'
import './staff_after_login_options.css'
function Staff_after_login_options() {

  const handleQuery=()=>{
    window.location.replace('http://localhost:3000/propertyUnderStaff')
  }
  const handleQuery2=()=>{
    window.location.replace('http://localhost:3000/clientUnderStaff')
  }

  return (
    <div className='body'>
        <div className='block'>
            <div onClick={handleQuery}>Property Under You</div>
            <div onClick={handleQuery2}>Client Under You</div>
        </div>
    </div>
  )
}

export default Staff_after_login_options