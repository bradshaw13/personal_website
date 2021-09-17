import React from 'react'
import './Home.css';
import {useHistory} from 'react-router-dom';


function Home() {
    const history = useHistory();
    const handleOnClick = () => history.push('/aboutme');
    return (
        <div>
            <div className="background">
                <div className='home'>
                    <h1>Hello, my name is Alexander Bradshaw </h1>
                </div>
              
                <div className='home'>
                    <button onClick={handleOnClick} className='testButton'>
                        About Me
                    </button>
                </div>

            </div>
            
        </div>
       
        

     
    )
}

export default Home
