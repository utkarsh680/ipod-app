import React from 'react'
import {FaBars, FaBackward, FaForward, FaPlay, FaPause} from 'react-icons/fa'


export default function Button() {
    return (
        <div className='button-container'>

            <button className='center-circle'>
                <h2>select</h2>
            </button>
            <button className='menu-button'>
               <FaBars className='menu'/>
            </button>
            <button className='left-button'>
            <FaBackward className='backword'/>
        </button>
        <button className='right-button'>
            <FaForward className='farword'/>
        </button>
        <button className='play-pause'>
            <FaPlay className='play'/>
            <FaPause className='play'/>

        </button>


        </div>
    )
}
