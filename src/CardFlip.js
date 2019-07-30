import React from 'react';
import './CardFlip.css';
import Common from './cardTypes/Common.js';
import Epic from './cardTypes/Epic.js';
import Rare from './cardTypes/Rare.js';
import Legendary from './cardTypes/Legendary.js';

const CardFlip = (props) => {
     return(
        <div className='tc'>
            {
                props.common.map((item, index) => {
                    return <Common key={index} common={item} />
                })
            }
            <br></br>
            {
                props.epic.map((item, index) => {
                    return <Epic key={index} epic={item} />
                })
            }
            <br></br>
            {
                props.rare.map((item, index) => {
                    return <Rare key={index} rare={item} />
                })
            }
            <br></br>
            {
                props.legendary.map((item, index) => {
                    return <Legendary key={index} legendary={item} />
                })
            }
        </div>
    )
}

export default CardFlip;