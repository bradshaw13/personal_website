import * as React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import CITIES from '../Data/cities.json';
import './TravelByCity.css';
import test from '../images/AstrosALCS.JPG';

function TravelByCity() {
    const { city } = useParams();
    const emptyCity = {"city":"","population":"","image":"","state":"","latitude":0,"longitude":0};

    //if this was hooked up to database I would have to handle this differently
    const [cityInfo, setcityInfo] = useState(emptyCity);

    React.useEffect(() => {
        setcityInfo(CITIES.find(obj => obj.city===city));
    }, [city])
    
    
    return (
        
        <div className='travelByCity'>
            <h1>{cityInfo.city+", "+cityInfo.state}</h1>
            <h2>Population: {cityInfo.population}</h2>
            <div className='info'>
                {cityInfo.paragraph1}
            </div>
            <img src={test} alt={cityInfo.displayName}/>
        </div>
    )
}

export default TravelByCity
