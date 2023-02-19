import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../Styles/Music.css'

export class Music extends Component {
  render() {
    const { navigationActive, menuItem} = this.props
    return (
      <div className='music-click-left'>
        <div className="music-inner">
          
            <header>
              <img src = "https://cdn-icons-png.flaticon.com/512/0/747.png" style={{height :22, width:22}} />
              Music
            </header>
            
            <div className= {`${menuItem === 'Music' ? 'active' : ' ' } song-slot `}>
              <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="icons" className="music-icon" />
              <p>Store</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>

            <div className='artist-slot'>
              <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="icons" className="music-icon" />
              <p>Store</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>
            <div className='album-slot'>
              <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="icons" className="music-icon" />
              <p>Store</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>
            
          </div>


      </div>
    )
  }
}

export default Music
