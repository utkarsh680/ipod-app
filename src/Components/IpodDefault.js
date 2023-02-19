import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import '../Styles/App.css';
export class IpodDefault extends Component {

  render() {
    const { navigationActive, coverDisplay, menuItem } = this.props;
    console.log(navigationActive)
    return (
      <div className='screen-part'>

          <div className="left-display">
            <header>Ipod</header>
            <div className={`${navigationActive === 'Store' ? 'active' : ' '} store`}>
              <img src="https://cdn-icons-png.flaticon.com/512/831/831276.png" alt="icons" className="myicon" />
              <p>Store</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>

            <div className={`${navigationActive === 'Music' ? 'active' : ' '} music`}>
              <img src="https://cdn-icons-png.flaticon.com/512/8340/8340713.png" alt="icons" className="myicon" />
              <p>Music</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>
            <div className={`${navigationActive === 'Games' ? 'active' : ' '} game`}>
              <img src="https://cdn-icons-png.flaticon.com/512/2071/2071669.png" alt="icons" className="myicon" />
              <p>Game</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>
            <div className={`${navigationActive === 'Settings' ? 'active' : ' '} setting`}>
              <img src="https://cdn-icons-png.flaticon.com/512/3845/3845826.png" alt="icons" className="myicon" />
              <p>setting</p>
              <FaArrowRight style={{ color: 'lightgrey' }} />
            </div>
          </div>
         
        

        <div style={{ backgroundColor: coverDisplay.bgColor, backgroundSize: coverDisplay.bgSize, backgroundImage: coverDisplay.url, backgroundRepeat: coverDisplay.bgrepeat }} className="right-display">
        </div>


      </div>

    )
  }
}


export default IpodDefault
