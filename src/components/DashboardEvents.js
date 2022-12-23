import React from 'react'

function DashboardEvents(props) {

    const {recentEvent} = props
    return (
        <div className='upcoming-events-posts'>
            <h2>{recentEvent.title}</h2>
            <h3>{recentEvent.ammenity}</h3>
            <p>{recentEvent.description}</p>
            
        </div>
    )
}

export default DashboardEvents