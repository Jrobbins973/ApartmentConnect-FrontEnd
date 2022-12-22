import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import EventList from './EventList'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Events(props) {

    const {currentTenant, handleLogout, events, setEvents} = props
    const history = useHistory()
    
    const [date, setDate] = useState(new Date())
    const [eventTitle, setEventTitle] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventLocation, setEventLocation] = useState("")


    // form logic

    const handleEventSubmit = (e) => {
        e.preventDefault()
        const newEvent = {
            tenant_id:currentTenant.id,
            ammenity: eventLocation,
            date_reserved: date,
            description: eventDescription,
            title: eventTitle
        }
        setEventTitle("")
        setEventDescription("")
        setEventLocation("Select Option")
        eventSubmission(newEvent)
    }

const eventSubmission = (newEvent) => {
    fetch('http://localhost:3000/reservations', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body:JSON.stringify(newEvent)
    })
    .then(res => res.json())
    .then(newEventData => setEvents([...events, newEventData]))
} 

const renderEvents = events.map(event => <EventList key={event.id} event={event}/>)

    return (
        <div >
        <div>
            {/* HEADER AND SIDE MENU ------ */} {/* HEADER AND SIDE MENU ------ */} {/* HEADER AND SIDE MENU ------ */} {/* HEADER AND SIDE MENU ------ */}
        <div className="header">
            <h1 className='header'>Upcoming Events</h1>
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
                <li onClick={() => history.push('/apartment_news')}><p>NEWS</p></li>
                <li onClick={() => history.push('/events')}><p>EVENTS</p></li>
                <li onClick={() => history.push('/surveys')}><p>SURVEYS</p></li>
                <li onClick={() => history.push('/local_businesses')}><p>MAP</p></li>
                <li onClick={() => history.push('/maintenance')}><p>REQUEST MAINTENANCE</p></li>
                <li onClick={handleLogout}><p>LOGOUT</p></li>
            </ul>
            </div>

        </div>
        
        <div className='forum-post-box'>
        {renderEvents}
        </div>


{/* EVENT SUBMISSION FORM ----- */} {/* EVENT SUBMISSION FORM ----- */}{/* EVENT SUBMISSION FORM ----- */}{/* EVENT SUBMISSION FORM ----- */}
        <div className='forum-submission-form-box'>
        <form className='forum-submission-form' onSubmit={handleEventSubmit}>
            <label>Event Title</label>
            <input 
            type="string"
            name="title"
            value={eventTitle}
            onChange={ e => setEventTitle(e.target.value)}/>

            <label>Event Date</label>
            <DatePicker 
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mmaa"
            selected={date} 
            onChange={date => setDate(date)}/>

            <label>Event Description</label>
            <input 
            type="string"
            name="description"
            value = {eventDescription}
            onChange = {e => setEventDescription(e.target.value)}/>

            <label for="my-dropdown">Location:</label>
                    <select id="my-dropdown" name="my-dropdown" onChange={e => setEventLocation(e.target.value)}>
                        <option value="Select">Select Option</option>
                        <option value="Pool">Pool</option>
                        <option value="Movie Room">Movie Room</option>
                        <option value="Sky Lounge">Sky Lounge</option>
                        <option value="Main Lobby">Main Lobby</option>
                    </select>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit"/>
        </form>
        </div>
        


        </div>
        </div>
    )
}

export default Events