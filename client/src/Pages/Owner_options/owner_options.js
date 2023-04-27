import React from 'react'
import './owner_options.css'
function owner_options() {

  const handleAddStaffs=()=>{
    window.location.replace('http://localhost:3000/propertyadd')
  }

  const handleAddBranch=()=>{
    window.location.replace('http://localhost:3000/comments')
  }

  return (
    <div className='body'>
        <div className='block'>
            <div onClick={handleAddStaffs}>Add Property</div>
            <div onClick={handleAddBranch}>Comments</div>
        </div>
    </div>
  )
}

export default owner_options