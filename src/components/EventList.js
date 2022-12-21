import React from 'react'

function EventList(props) {

    const {event} = props
    return (<div>
 
        <div className='forum-post-container'>

        <div className='forum-post'>
            {event.title}
            {event.description}
            </div>
        </div>
        </div>
    )
}

export default EventList