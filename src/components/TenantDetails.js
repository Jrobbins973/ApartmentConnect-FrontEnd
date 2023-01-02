import React from 'react'
import TenantForumPosts from './TenantForumPosts'

function TenantDetails(props) {
    const {lease, currentTenant} = props

    const tenantForumPosts = currentTenant.forum_posts ? currentTenant.forum_posts.map(posts => <TenantForumPosts key={posts.id} posts={posts}/>) : null
    // const renderTenantMaintenanceRequest = currentTenant.maintenance_requests.map(request => <h4>{request.description}</h4>)
    return (
        <div className='tenant-details'>
            <h1>{currentTenant.first_name}</h1>
            
            <div className='tenant-rent-info'>

            <h2>Rent Information</h2>
            <h3>{lease.rent}</h3>
            <h3>Next Payment: {lease.rent_duedate}</h3>
            </div>
            
            <p>My Activity</p>
            {tenantForumPosts}
        </div>
        
    )
}

export default TenantDetails