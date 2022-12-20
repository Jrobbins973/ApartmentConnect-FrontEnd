import React from 'react'

function TenantDetails(props) {
    const {lease} = props
    return (
        <div className='tenant-details'>
            <h1>RENT: {lease.rent}</h1>
            <h2>Next Payment: {lease.rent_duedate}</h2>
        </div>
        
    )
}

export default TenantDetails