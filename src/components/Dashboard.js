import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
// import { Switch, Route, Link } from "react-router-dom";

// import { Header, Image } from 'semantic-ui-react'

const logoutUrl = 'http://localhost:3000/logout'

function Dashboard(props) {
    const {setErrors, currentTenant, toggleLoggedIn, setIsLoggedIn, handleLogout} = props
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
                    <h1 className='annoucements'>Announcement: Elevator #4 will be down for maintenance today (12/20/22) </h1>

                    <h3 className='business-shoutout-box'>Business Spotlight</h3>
                </div>


    
        </div>
    )
}

export default Dashboard