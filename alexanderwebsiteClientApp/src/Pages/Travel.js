import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl} from 'react-map-gl';
import Pins from '../Components/Pins';
import CITIES from '../Data/cities.json';
import CityInfo from '../Components/city-info'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import './Travel.css'
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
function Travel() {
    const [viewport, setViewport] = useState({
        longitude: -95.45,
        latitude: 37.78,
        zoom: 4
    });

    const geolocateStyle = {
        top: 0,
        left: 0,
        padding: '10px'
    };
    
    const fullscreenControlStyle = {
        top: 36,
        left: 0,
        padding: '10px'
    };
    
    const navStyle = {
        top: 72,
        left: 0,
        padding: '10px'
    };
    
    const scaleControlStyle = {
        bottom: 36,
        left: 0,
        padding: '10px'
    };
      
      const [popupInfo, setPopupInfo] = useState(null);
      return (
        <div className="travel">
            <ReactMapGL {...viewport} width="100vw" height="100vh" onViewportChange={setViewport} mapStyle='mapbox://styles/mapbox/dark-v8' mapboxApiAccessToken="pk.eyJ1IjoiYnJhZHNoYXcxMyIsImEiOiJja3Qzc3Y3Y2kxMG50MnVueHdkNXU5cXl4In0.ylJ0aYbRMbN4wkmsA09yUw" >
                <Pins data={CITIES} onClick={setPopupInfo}/>
                
                {popupInfo && (
                    <Popup
                    tipSize={5}
                    anchor="top"
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    closeOnClick={false}
                    onClose={setPopupInfo}
                    >
                       <CityInfo info={popupInfo} />
                    </Popup>
                )}
                {/* */}
                <GeolocateControl style={geolocateStyle} />
                <FullscreenControl style={fullscreenControlStyle} />
                <NavigationControl style={navStyle} />
                <ScaleControl style={scaleControlStyle} />
            </ReactMapGL>
        </div>
        
      );
}

export default Travel
