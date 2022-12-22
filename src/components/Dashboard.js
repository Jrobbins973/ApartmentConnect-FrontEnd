import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import DashboardEvents from './DashboardEvents'

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

    // USER LOGOUT
    // const handleLogout = () => {
    //     fetch(logoutUrl, {
    //     method: 'DELETE'
    //     }) 
    //     .then (res => {
    //         if(res.ok){
    //             localStorage.clear()
    //             setIsLoggedIn(false)
    //             history.push('/')
    //         } else {
    //             res.json()
    //             .then(json => setErrors(json.errors))
    //         }
    //     })
    // }

    // useEffect(() => {
    //     if(localStorage.email) {
    //         setIsLoggedIn(true)
    //     } else {
    //         console.log("login issue")
    //     }
    // })



    


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

                    <h3 className='business-shoutout-box'>Business Spotlight</h3>
                </div>


    
        </div>
    )
}

export default Dashboard