import React, {useEffect, useState} from 'react'
import './AboutMe.css';
import axios from 'axios';
function AboutMe() {
    const [test, setTest] = useState('');
    useEffect(() => {
        axios.get('/api/v1/say-something').then((res) => {
            const response = res.data.body;
            setTest(response);
        });
        console.log("this do be the request")
    }, []);

    return (
        <div className='aboutMe'>
            <h1 className="title">AboutMe</h1>
            <div className="aboutMeParagraph">My name is Alexander Cuellar Bradshaw </div>
            <h1>{test}</h1>
        </div>
    )
}

export default AboutMe
