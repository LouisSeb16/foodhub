import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import './../../../../styles/index.scss';
import * as FiIcons from 'react-icons/fi';
import SMediaIcons from './SMediaIcons';


const Hero = () => {
    return (
        <Jumbotron>
            <h1>Enjoy healthy and delicious food.</h1>
            <p>
                Etiam eros elit, consequat id varius vel, auctor et velit. 
                Nulla interdum tempus felis, id venenatis enim lacinia pretium.
            </p>
            <button className="btn">
                <FiIcons.FiPhone className='icon'/>
                Order Now
            </button>
            <small>(+234) 8140794397</small>
            <SMediaIcons/>
        </Jumbotron>

    )
}

export default Hero
