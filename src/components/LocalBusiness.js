import React from 'react'
import {useJsApiLoader, GoogleMap} from "@react-google-maps/api"

function LocalBusiness() {

const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})

if(!isLoaded) {
    return <div>Loading...</div>
}

// console.log(isLoaded)

const center = {lat: 48.8584, lng: 2.2945}

    return (
        <div className='google-maps'>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>

            </GoogleMap>
        </div>
    )
}

export default LocalBusiness