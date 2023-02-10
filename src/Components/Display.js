import React from 'react'
import IpodButton from './IpodButton'

export default function dispay() {
  return (
    <div>
      <div className='ipod'>
            <div className='main-box'>
                <div className='screen'>
                   
                </div>
                <IpodButton/>   
                <img className='icon' src="https://cdn-icons-png.flaticon.com/512/731/731985.png" style={{ marginBottom: 20 }} />
                <p className='icon-text'>Designed in India</p>
            </div>
        </div>
    </div>
  )
}
