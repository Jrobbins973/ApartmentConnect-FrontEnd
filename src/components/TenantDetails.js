import React from 'react'
import TenantForumPosts from './TenantForumPosts'

function TenantDetails(props) {
    const {lease, currentTenant} = props

    const tenantForumPosts = currentTenant.forum_posts ? currentTenant.forum_posts.map(post => <TenantForumPosts key={post.id} post={post}/>) : null
        
    
 
    
    // const renderTenantMaintenanceRequest = currentTenant.maintenance_requests.map(request => <h4>{request.description}</h4>)
    return (
        <div className='tenant-details'>
            {/* <h1>{currentTenant.first_name}</h1> */}
            
            <div className='tenant-rent-info'>

            <h2>Rent Information</h2>
            <h3>{currentTenant.leases ? currentTenant.leases.map(lease => <p>Payment Amount: {lease.rent} </p>) : 'Payment'}</h3>
            <h3>{currentTenant.leases ? currentTenant.leases.map(lease => <p>Next Payment: {lease.rent_duedate}</p>) : <p>TEST</p>} </h3>
            </div>
            
            <div className='tenant-contact-info'>
            <h2>Contact Information</h2>
            <h4>Cell: {currentTenant.phone_number}</h4>
            <h4>Email: {currentTenant.email_address}</h4>

            </div>
            <h1> My Activity</h1>
            <div className='tenant-forum-activity-box'>
            <h2>Recent Posts</h2>

            {tenantForumPosts}
            </div>
        </div>
        
    )
}

export default TenantDetails