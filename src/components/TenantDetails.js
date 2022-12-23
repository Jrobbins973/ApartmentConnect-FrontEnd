import React from 'react'

function TenantDetails(props) {
    const {lease, currentTenant} = props
    return (
        <div className='tenant-details'>
            <h1>{currentTenant.first_name}</h1>
            <h2>RENT: {lease.rent}</h2>
            <h3>Next Payment: {lease.rent_duedate}</h3>
            <img src='https://www.pngitem.com/pimgs/m/508-5087336_person-man-user-account-profile-employee-profile-template.png' alt='placeholder'/>
        </div>
        
    )
}

export default TenantDetails