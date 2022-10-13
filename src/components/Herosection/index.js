import React from 'react'
import './Herosection.css';
import {Button} from '../ButtonElement'

function Herosection(){
    return(
        <>
        <div className="hero-container">
            <h1>Travel more</h1>
            <p>Plan your next trip</p>
            <div className="hero-btns">
                <Button fontBig big primary>Get started</Button>
            </div>
        </div>
        </>
    )
}

export default Herosection;