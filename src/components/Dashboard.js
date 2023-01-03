import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import DashboardEvents from './DashboardEvents'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api"
import MaintenanceRequest from './MaintenanceRequest'
import LeaseForm from './LeaseForm'
// import { Switch, Route, Link } from "react-router-dom";

// import { Header, Image } from 'semantic-ui-react'

const logoutUrl = 'http://localhost:3000/logout'

function Dashboard(props) {
    const {setErrors,
        currentTenant,
        events,
        setEvents,
        handleLogout,
        recentEvents,
        setCurrentTenant,
        toggleDark,
        darkMode
        } = props
    const history = useHistory()
    const [showMaintenanceModal, setShowMaintenanceModal] = useState(false)
    


// fetches current user from localstorage, to keep them logged in even after page refreshes - ONLY ON DASHBOARD.. will fix later
        useEffect(() => {
            fetch(`http://localhost:3000/tenants/${localStorage.uid}`)
            .then(res => res.json())
            .then(setCurrentTenant)
        },[])


    // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const center = {lat: 40.7832, lng: -74.2255}

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })

    if(!isLoaded) {
        return <div>Loading...</div>
    }
  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __  // MAP STUFF __

// console.log(currentTenant)
const renderRecentEvents = recentEvents.map(recentEvent => <DashboardEvents key={recentEvent.id} recentEvent={recentEvent} darkMode={darkMode}/>)
    return (
        
<div>
        <div className="header">
            <h1 className='header'>Dashboard
            

            
            </h1>
          
            
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"/>
        <label for="openSidebarMenu" className="sidebarIconToggle">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul className="sidebarMenuInner">
                <li onClick={() => history.push('/my_profile')}>{currentTenant.first_name} {currentTenant.last_name} <span>Renter</span></li>
                <li onClick={() => history.push('/forum')}><p>FORUM</p></li>
                <li onClick={() => history.push('/apartment_news')}><p>NEWS</p></li>
                <li onClick={() => history.push('/events')}><p>EVENTS</p></li>
                <li onClick={() => history.push('/surveys')}><p>SURVEYS</p></li>
                <li onClick={() => history.push('/local_businesses')}><p>MAP</p></li>
                <li onClick={() => setShowMaintenanceModal(true)}><p>REQUEST MAINTENANCE</p></li>
                <li onClick={handleLogout}><p>LOGOUT</p></li>
            </ul>
            </div>
</div>
                <div>
                    {/* {currentTenant.leases.length > 0 ? null : <button className='alert info' onClick={() => setShowLeaseFormModal(true)}>Add Lease Information</button>} */}
                    <h1 className={`${darkMode ?  'alert-dark' : 'alert-light'}`}>Announcement: Elevator #4 will be down for maintenance today 
                    </h1>

                    <div class="wrapper">
                <input onClick={() => toggleDark()} type="checkbox" id="hide-checkbox"/>
                <label for="hide-checkbox" class="toggle">
                    <span class="toggle-button">
                    <span class="crater crater-1"></span>
                    <span class="crater crater-2"></span>
                    <span class="crater crater-3"></span>   
                    <span class="crater crater-4"></span>
                    <span class="crater crater-5"></span>
                    <span class="crater crater-6"></span>
                    <span class="crater crater-7"></span>
                    </span>
                    <span class="star star-1"></span>
                    <span class="star star-2"></span>
                    <span class="star star-3"></span>
                    <span class="star star-4"></span>
                    <span class="star star-5"></span>
                    <span class="star star-6"></span>
                    <span class="star star-7"></span>
                    <span class="star star-8"></span>
                </label>
                </div>

                    <div className={`${darkMode ?  'upcoming-events-box-dark' : 'upcoming-events-box-light'}`}>
                        <h1 onClick={() => history.push('/events')}>Upcoming Events</h1>
                        <div>
                        {renderRecentEvents}
                        </div>
                    </div>


                    


                    <div className={`${darkMode ?  'business-shoutout-box-dark' : 'business-shoutout-box-light'}`}>
                        <h1 onClick={() => history.push('/local_businesses')}>Business Spotlight</h1>
                        <h5>Star Tavern - Voted Best Pizza in NJ!</h5>
                        <p>400 High St, City of Orange, NJ 07050</p>
                        <div className='dashboard-google-maps'>
                        <GoogleMap center={center} 
                        zoom={15} 
                        mapContainerStyle={{width: '100%', height: '100%'}}
                        onLoad={(map) => setMap(map)}
                        options={{
                            zoomControl: false,
                            streetViewControl:false,
                            mapTypeControl: false,
                            fullscreenControl: false

                        }}
                        >
                            <Marker position={center}/>

                            
                            
                        </GoogleMap>
                        </div>
                        </div>
                </div>

            {showMaintenanceModal ? <MaintenanceRequest setShowMaintenanceModal={setShowMaintenanceModal}/> : null}
    
        </div>
    )
}

export default Dashboard