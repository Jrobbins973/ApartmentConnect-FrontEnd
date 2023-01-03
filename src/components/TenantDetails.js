import React, {useState} from 'react'
import TenantForumPosts from './TenantForumPosts'


function TenantDetails(props) {
    const {lease, currentTenant, setCurrentTenant, darkMode} = props
    


    const tenantForumPosts = currentTenant.forum_posts ? currentTenant.forum_posts.map(post => <TenantForumPosts key={post.id} post={post} darkMode={darkMode}/>) : null
        
    
 
    
    // const renderTenantMaintenanceRequest = currentTenant.maintenance_requests.map(request => <h4>{request.description}</h4>)
    return (
        <div className= {`${darkMode ?  'tenant-details-dark' : 'tenant-details-light'}`}>
            {/* <h1>{currentTenant.first_name}</h1> */}
            
            <div className={`${darkMode ?  'tenant-rent-info-dark' : 'tenant-rent-info-light'}`}>

            <h2>Rent Information</h2>
            <h3>Payment Amount:</h3>{currentTenant.leases ? currentTenant.leases.map(lease => lease.rent) : 'Payment'}
            <h3>Next Payment:</h3>{currentTenant.leases ? currentTenant.leases.map(lease => <p>Due: {lease.rent_duedate}</p>) : <p>TEST</p>} 
            </div>
            
            <div className={`${darkMode ?  'tenant-contact-info-dark' : 'tenant-contact-info-light'}`}>
            <h2>Contact Information</h2>
            <h3>Cell: {currentTenant.phone_number}</h3>
            <h3>Email: {currentTenant.email_address}</h3>

            </div>
            <h1 className={`${darkMode ?  'tenant-activity-box-title-dark' : 'tenant-activity-box-title-light'}`}> Your Activity</h1>
            <div className={`${darkMode ?  'tenant-forum-activity-box-dark' : 'tenant-forum-activity-box-light'}`}>
            <h2>Recent Posts</h2>

            {tenantForumPosts}

            
            </div>
        </div>
        
    )
}

export default TenantDetails