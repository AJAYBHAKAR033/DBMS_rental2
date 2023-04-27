import React from 'react'
import './client_after_login_options.css'
function Client_after_login_options() {

  const handleQuery=()=>{
    window.location.replace('http://localhost:3000/queryProperty')
  }

  return (
    <div className='body'>
        <div className='block'>
            <div onClick={handleQuery}>See Properties</div>
        </div>
    </div>
  )
}

export default Client_after_login_options