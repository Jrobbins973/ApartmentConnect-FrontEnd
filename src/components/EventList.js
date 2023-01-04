import React from 'react'

function EventList(props) {
    const {event, handleDeleteEvent, currentTenant, darkMode} = props


const deleteEvent = () => {
    fetch(`http://localhost:3000/reservations/${event.id}`, {
        method: 'DELETE',
    })
    handleDeleteEvent(event.id)
}
    
let amenityImage = (event.ammenity === "Pool") ? <img className='event-image' src='https://edisonlofts.com/images/EdisonLofts%2022.jpg' alt="pool pic" /> 
            :  (event.ammenity === "Movie Room") ? <img className='event-image' src='https://edisonlofts.com/images/EdisonLofts%2024_edit.jpg' alt="movie room"/>
            :  (event.ammenity === "Sky Lounge") ? <img className='event-image' src='https://edisonlofts.com/images/EdisonLofts%2027.jpg' alt="sky lounge" />
            :  <img className='event-image' src='https://rentpath-res.cloudinary.com/$img_current/t_3x2_jpg_xl/t_unpaid/6d83fec104245bb6098c33dd6efe580b' alt="lobby" />
            


//   let style = {backgroundColor: 
//         (postCategory === "Miscellaneous") ? "#FF856B" 
//         : 
//         (postCategory === "Pets") ? "#6BEBFF" 
//         : 
//         (postCategory === "Buying / Selling") ? "#836BFF" 
//         : 
//         "#6BFF88"}


    // console.log(event)

    // console.log(event.ammenity)
    return (<div>
        
        <div className={`${darkMode ? 'forum-post-container-dark' : 'forum-post-container-light'}`}>


        <div className='event-post'>
            <h3>{event.title}</h3>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>When:</strong> {event.date_reserved}</p>
            <p><strong>Where:</strong> {event.ammenity}</p>

            {/* <img className='event-image' src={'https://edisonlofts.com/images/EdisonLofts%2022.jpg'} alt="pool pic" /> */}
            {amenityImage}
            {event.tenant_id === currentTenant.id ? <button className='event-delete-button' onClick={deleteEvent}>Cancel Event</button> : null}
            </div>
        </div>
        </div>
    )
}

export default EventList