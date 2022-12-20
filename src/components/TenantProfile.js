import React, {useState, useEffect} from 'react'
import TenantDetails from './TenantDetails'

function TenantProfile(props) {
    const {currentTenant} = props

    // const [tenant, setTenant] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:3000/tenants/${currentTenant.id}`)
    //     .then(res => res.json())
    //     .then(setTenant)
    // },[])

    console.log(currentTenant.leases)
const renderTenantDetails = currentTenant.leases.map(lease => <TenantDetails key={lease.id} lease={lease}/>)

    return (
        <div>
            <h1>Hello, {currentTenant.first_name}</h1>
            {renderTenantDetails}
        </div>
    )
}

export default TenantProfile