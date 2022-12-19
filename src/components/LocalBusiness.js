import React, {useState} from 'react'
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"

function LocalBusiness() {

const [map, setMap] = useState(null)

const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})

if(!isLoaded) {
    return <div>Loading...</div>
}

// console.log(isLoaded)

const center = {lat: 40.7986, lng: -74.2391}

    return (
        <div className='map-header'>
            <h1>Search Local Businesses</h1>
            <form className='map-form' >
            <label>Email:</label>
                <input 
                type="text" 
                name="Email"
                
                />

                <label>Password:</label>
                <input 
                type="text" 
                name="password"
                
                />
                <br></br>
                <br></br>
                <input type="submit" value="Login"/>
            </form>

        <div className='google-maps'>
            <GoogleMap center={center} 
            zoom={15} 
            mapContainerStyle={{width: '100%', height: '100%'}}
            onLoad={(map) => setMap(map)}
            >
                <Marker position={center}/>
                
            </GoogleMap>
        </div>

        </div>
    )
}

export default LocalBusiness