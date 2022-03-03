import './AboutMe.css';

import React, { useEffect } from 'react'

import axios from 'axios';

function AboutMe() {
    useEffect(() => {
        axios.get('/api/v1/say-something').then((res) => {
            console.log(res.data.body);
        });
        console.log("this do be the request")
    }, []);

    return (
        <div className='aboutMe'>
            <h1 className="title">AboutMe</h1>
            <div className="aboutMeParagraph">
                My name is Alexander Cuellar Bradshaw! I love to travel to different places in the world. I have not yet left North America yet but I will one day. I like to try different foods and so far there has
                not been a food I do not like. I am a big Astros fan and for the past five years a Buffalo Bills fan. I like to explore different technologies and I am a big supporter of everything Web3. I have a 2 and a half year old dog named Koda.
                Some of Koda's favorite activites include going to the dog park, playing basketball, and sniffing everything in sight.
            </div>

        </div>
    )
}

export default AboutMe
