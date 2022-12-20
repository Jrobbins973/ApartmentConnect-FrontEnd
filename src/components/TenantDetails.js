import React from 'react'

function TenantDetails(props) {
    const {lease} = props
    return (
        <div>
            <h1>RENT: {lease.rent}</h1>
        </div>
        
    )
}

export default TenantDetails