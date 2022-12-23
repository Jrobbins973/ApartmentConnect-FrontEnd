import React from 'react'

function EventList(props) {
    const {event, handleDeleteEvent} = props


const deleteEvent = () => {
    fetch(`http://localhost:3000/reservations/${event.id}`, {
        method: 'DELETE',
    })
    handleDeleteEvent(event.id)
}
    
    // console.log(event)
    return (<div>
        
        <div className='forum-post-container'>

        <div className='event-post'>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date_reserved}</p>
            <p>{event.ammenity}</p>
            <button onClick={deleteEvent}>DELETE</button>
            </div>
        </div>
        </div>
    )
}

export default EventList