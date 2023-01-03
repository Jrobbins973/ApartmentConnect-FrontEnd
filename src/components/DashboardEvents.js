import React from 'react'

function DashboardEvents(props) {

    const {recentEvent, darkMode} = props
    return (
        <div className={`${darkMode ?  'upcoming-events-posts-dark' : 'upcoming-events-posts-light'}`}>
            <h2>{recentEvent.title}</h2>
            <h3>{recentEvent.ammenity}</h3>
            <p>{recentEvent.description}</p>
            
        </div>
    )
}

export default DashboardEvents