import React from 'react'

function EventList(props) {

    const {event} = props
    // console.log(event)
    return (<div>
        
        <div className='forum-post-container'>

        <div className='forum-post'>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date_reserved}</p>
            <p>{event.ammenity}</p>
            </div>
        </div>
        </div>
    )
}

export default EventList