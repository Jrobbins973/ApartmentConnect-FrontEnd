import React, {useState, useEffect} from 'react'
import TenantDetails from './TenantDetails'

function TenantProfile(props) {
    const {currentTenant} = props

    const [tenant, setTenant] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/tenants/${currentTenant.id}`)
        .then(res => res.json())
        .then(setTenant)
    },[])

//  const renderTenantDetails = tenant.leases.map(lease => <TenantDetails lease={lease}/>)

    return (
        <div>
            <h1>Hello, {tenant.first_name}</h1>
        </div>
    )
}

export default TenantProfile