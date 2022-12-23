import React, {useState, useRef} from 'react'
import {useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api"
import {FaLocationArrow, FaTimes} from 'react-icons/fa' 
import {useHistory} from 'react-router-dom'

function LocalBusiness(props) {
    const {currentTenant, handleLogout} = props

const [map, setMap] = useState(/** @type google.maps.Map */ (null))
const [directionsResponse, setDirectionsResponse] = useState(null)
const [distance, setDistance] = useState('')
const [duration, setDuration] = useState('')
const history = useHistory()

/** @type React.MutableRefObject<HTMLInputElement> */
const originRef = useRef()
/** @type React.MutableRefObject<HTMLInputElement> */
const destinationRef = useRef()

const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
})

if(!isLoaded) {
    return <div>Loading...</div>
}

async function calculateRoute(e) {
    e.preventDefault()
    if(originRef.current.value === "" || destinationRef.current.value ==="" ) {
        return
    } else {
        //eslint-disable-next-line no-undef
        const directionService = new google.maps.DirectionsService()
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            //eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING

        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }
}

function clearRoute(e) {
    e.preventDefault()
    setDirectionsResponse(null)
    setDistance("")
    setDuration("")
    originRef.current.value = ""
    destinationRef.current.value = ""
}


const center = {lat: 40.7828, lng: -74.2374}

    return (
        <div>
            <button onClick={() => history.push('/dashboard')}>Back</button>
            

            <form className='map-form' >

            <label>Search:</label>
                <Autocomplete>
                    <input type='text' placeholder="Origin" ref={originRef}/>
                </Autocomplete>
                <Autocomplete>
                    <input type='text' placeholder="Destination" ref={destinationRef}/>
                </Autocomplete>

                <br></br>
                <button className='calculate-route-button' onClick={calculateRoute}>Calculate Route</button>
                <br></br>
            
                <br></br>
                <button className='calculate-route-button' onClick={clearRoute}>Clear Route</button>
                <br></br>
                <br></br>
                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>

            <button className='map-center-button' onClick={() => map.panTo(center) }><FaLocationArrow /></button>
            
            </form>

        <div className='google-maps'>
            <GoogleMap center={center} 
            zoom={15} 
            mapContainerStyle={{width: '100%', height: '100%'}}
            onLoad={(map) => setMap(map)}
            >
                <Marker position={center}/>

                {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
                
            </GoogleMap>
        </div>

        </div>
    )
}

export default LocalBusiness