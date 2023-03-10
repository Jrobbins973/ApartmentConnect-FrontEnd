import React, {useState, useEffect} from 'react'
import TenantDetails from './TenantDetails'
import TenantMaintenance from './TenantMaintenance'
import {useHistory} from 'react-router-dom'
import LeaseForm from './LeaseForm'

function TenantProfile(props) {
    const {currentTenant, handleLogout, setCurrentTenant, darkMode, toggleDark} = props
    const history = useHistory()

    const [showLeaseFormModal, setShowLeaseFormModal] = useState(false)


// const leaseInfo = currentTenant.leases ? currentTenant.leases.map(lease => <TenantDetails key={lease.id} lease={lease} currentTenant={currentTenant}/>) : console.log("hello")


// fetches current user from localstorage, to keep them logged in even after page refreshes - ONLY ON DASHBOARD.. will fix later
useEffect(() => {
    fetch(`http://localhost:3000/tenants/${localStorage.uid}`)
    .then(res => res.json())
    .then(setCurrentTenant)
},[])



    return (
        <div>


            <div className="header">
            <h1 className='header'>Hello {currentTenant.first_name} <button className='add-lease-info-button' onClick={() => setShowLeaseFormModal(true)}>Add Lease Information</button></h1>

            {showLeaseFormModal ? <LeaseForm 
                    setShowLeaseFormModal = {setShowLeaseFormModal}
                    currentTenant={currentTenant}
                    setCurrentTenant={setCurrentTenant}
                    /> : null}

        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
        <label for="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
                <li onClick={() => history.push('/my_profile')}>{currentTenant.first_name} {currentTenant.last_name} <span>Renter</span></li>
                <li onClick={() => history.push('/dashboard')}><p>HOME</p></li>
                <li onClick={() => history.push('/forum')}><p>FORUM</p></li>
                {/* <li onClick={() => history.push('/apartment_news')}><p>NEWS</p></li> */}
                <li onClick={() => history.push('/events')}><p>EVENTS</p></li>
                {/* <li onClick={() => history.push('/surveys')}><p>SURVEYS</p></li> */}
                <li onClick={() => history.push('/local_businesses')}><p>MAP</p></li>
                <li onClick={() => history.push('/maintenance')}><p>REQUEST MAINTENANCE</p></li>
                <li onClick={handleLogout}><p>LOGOUT</p></li>
            </ul>
            </div>


            <div>
            </div>
        </div>
        <TenantDetails currentTenant={currentTenant} setCurrentTenant={setCurrentTenant} darkMode={darkMode} toggleDark={toggleDark}/>
            {/* {renderTenantMaintenanceRequest} */}
            {/* {leaseInfo} */}
        </div>
    )
}

export default TenantProfile