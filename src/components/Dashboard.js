import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
// import { Switch, Route, Link } from "react-router-dom";

// import { Header, Image } from 'semantic-ui-react'

const logoutUrl = 'http://localhost:3000/logout'

function Dashboard(props) {
    const {setErrors, currentTenant, toggleLoggedIn, setIsLoggedIn} = props
    const history = useHistory()

    // USER LOGOUT
    const handleLogout = () => {
        fetch(logoutUrl, {
        method: 'DELETE'
        }) 
        .then (res => {
            if(res.ok){
                localStorage.clear()
                setIsLoggedIn(false)
                history.push('/')
            } else {
                res.json()
                .then(json => setErrors(json.errors))
            }
        })
        
    }

    // useEffect(() => {
    //     if(localStorage.email) {
    //         setIsLoggedIn(true)
    //     } else {
    //         console.log("login issue")
    //     }
    // })

    return (

        <div>
        <div className='header'>
                <h1>Dashboard, Hi {currentTenant.first_name}</h1>
                <button className='logout-button' onClick={handleLogout}>Logout</button>
        </div>
            <h4 onClick={() => history.push('/forum')} className='nav-button'>Forum</h4>
            <h4 onClick={() => history.push('/apartment_news')} className='nav-button'>News</h4>
            <h4 onClick={() => history.push('/events')} className='nav-button'>Events</h4>
            <h4 onClick={() => history.push('/surveys')} className='nav-button'>Surveys</h4>
            <h4 onClick={() => history.push('/local_businesses')} className='nav-button'>Local Businesses</h4>
            <h4 onClick={() => history.push('/maintenance')} className='nav-button'>Maintenance Request</h4>
            <h4 onClick={() => history.push('/my_profile')} className='nav-button'>My Profile</h4>
        </div>
    )
}

export default Dashboard