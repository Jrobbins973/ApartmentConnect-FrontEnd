import React from 'react'

function TenantDetails(props) {
    const {lease, currentTenant} = props


    // const renderTenantMaintenanceRequest = currentTenant.maintenance_requests.map(request => <h4>{request.description}</h4>)
    return (
        <div className='tenant-details'>
            <h1>{currentTenant.first_name}</h1>
            <h2>Rent Information</h2>
            <h3>{lease.rent}</h3>
            <h3>Next Payment: {lease.rent_duedate}</h3>
            {/* <img src='https://www.pngitem.com/pimgs/m/508-5087336_person-man-user-account-profile-employee-profile-template.png' alt='placeholder'/> */}
            {/* <p>My Requests</p> */}
            {/* {renderTenantMaintenanceRequest} */}
        </div>
        
    )
}

export default TenantDetails