import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import DashboardEvents from './DashboardEvents'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api"
// import { Switch, Route, Link } from "react-router-dom";

// import { Header, Image } from 'semantic-ui-react'

const logoutUrl = 'http://localhost:3000/logout'

function Dashboard(props) {
    const {setErrors,
        currentTenant,
        events,
        setEvents,
        handleLogout,
        recentEvents
        } = props
    const history = useHistory()

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
const renderRecentEvents = recentEvents.map(recentEvent => <DashboardEvents key={recentEvent.id} recentEvent={recentEvent}/>)
    return (
        
<div>
        <div className="header">
            <h1 className='header'>Dashboard</h1>
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
                <li onClick={() => history.push('/maintenance')}><p>REQUEST MAINTENANCE</p></li>
                <li onClick={handleLogout}><p>LOGOUT</p></li>
            </ul>
            </div>
</div>
                <div>
                    <h1 className='alert info'>Announcement: Elevator #4 will be down for maintenance today (12/23/22) </h1>
                    
                    <div className='upcoming-events-box'>
                        <h1 onClick={() => history.push('/events')}>Upcoming Events</h1>
                        <div>
                        {renderRecentEvents}
                        </div>
                    </div>

                    <div className='business-shoutout-box'>
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


    
        </div>
    )
}

export default Dashboard