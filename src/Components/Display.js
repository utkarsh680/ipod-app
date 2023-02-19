import ZingTouch from 'zingtouch';
import React, { Component } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Music from './Music';
import Game from './Game';
import { FaBars, FaBackward, FaForward, FaPlay, FaPause } from 'react-icons/fa'
import Store from './Store';
import Settings from './Settings';
import IpodDefault from './IpodDefault';
import Menu from './Menu';

export default class Display extends Component {
  constructor() {
    super();
    this.state = {
      menuItem: 'Ipod',
      navigationActive: 'Music',
      prevAngle: 0,
      coverDisplay: {
        url:  'url("https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")',
        bgColor: '#FB223C',
        bgSize: 'contain',
        bgrepeat: 'no-repeat'
      },
      menuChangeAnimation:'animate__slidInDown',
      
    }

  }

  componentDidMount() {
    var containerElement = document.querySelector('.button-container');
    var activeRegion = ZingTouch.Region(containerElement);

    activeRegion.bind(containerElement, 'rotate', function (event) {
      //Perform Operations
      // console.log(event.detail);
      let angle = Math.floor(event.detail.distanceFromOrigin);

      let prev = this.state.prevAngle;
      console.log("angle----" + angle + "prevAngle----" + prev);

      if (angle % 15 === 0 && angle != 0 && prev != angle && prev < angle) {
       

        const menuItem = this.state.menuItem;
        if (menuItem === 'Ipod') {
         
          const current = this.state.navigationActive;
          this.setState({
            navigationActive: current === 'Store' ? 'Music'
              : current === 'Music' ? 'Games'
                : current === 'Games' ? 'Settings'
                  : 'Store',
            prev: angle,
            menuChangeAnimation: 'animate__slidInDown',
            coverDisplay: current === 'Store' ? {
              url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")',
              bgColor: '#FB223C',
              bgSize: 'contain',
              bgrepeat: 'no-repeat'
            }
              : current === 'Music' ? {
                url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2020/02/Apple-Arcade.png")',
                bgColor: 'black',
                bgSize: 'contain',
                bgrepeat: 'no-repeat'
              }
              : current === 'Games' ? {
                url: 'url("https://www.apple.com/newsroom/images/values/privacy/apple_privacy-day_privacy-logo_01282021.jpg.og.jpg?202211070422")',
                  bgColor: 'black',
                  bgSize: 'contain',
                  bgrepeat: 'no-repeat'
              }

              : {
                url: 'url("https://www.androidauthority.com/wp-content/uploads/2020/06/Apple-WWDC-2020-iOS-apps.jpg")',
                    bgColor: 'red',
                    bgSize: 'cover',
                    bgrepeat: 'no-repeat'
               }
          }, () => console.log(this.state.coverDisplay));
          
        }
        //for antyclockwise rotation
      }else if (angle % 15 ===0 && angle != 0 && prev != angle && prev > angle){
        const menuItem = this.state.menuItem;
        if(menuItem == 'Ipod'){
          const current = this.state.navigationActive;
          this.setState({
            navigationActive: current === 'Store' ? 'Settings'
            : current === 'Music' ? 'Store'
            : current === 'Games' ? 'Music'
            : 'Games',
            prev: angle,
            menuChangeAnimation: 'animate__slidInDown',
            coverDisplay: current === 'Store' ? {
              url: 'url("https://www.apple.com/newsroom/images/values/privacy/apple_privacy-day_privacy-logo_01282021.jpg.og.jpg?202211070422")',
              bgColor: 'black',
              bgSize: 'contain',
              bgrepeat: 'no-repeat'
            }
            : current === 'Music' ? {
              url: 'url("https://www.androidauthority.com/wp-content/uploads/2020/06/Apple-WWDC-2020-iOS-apps.jpg")',
              bgColor: 'red',
              bgSize: 'cover',
              bgrepeat: 'no-repeat'
            }

            : current === 'Games' ? {
              url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?quality=82&strip=all&w=1000")',
              bgColor: '#FB223C',
              bgSize: 'contain',
              bgrepeat: 'no-repeat'
            }
            : {
              url: 'url("https://9to5mac.com/wp-content/uploads/sites/6/2020/02/Apple-Arcade.png")',
                bgColor: 'black',
                bgSize: 'contain',
                bgrepeat: 'no-repeat'

            }
          })
        }
      }

    }.bind(this));

  } 

 
  back = () => {
    const menu = this.state.menu;
    if (menu === 'Music') {
      this.setState({
        menuActive: false
      })

    }
  }

  render() {
    const { navigationActive, menuItem, coverDisplay } = this.state;
    console.log(navigationActive)
    return (
      <div>
        <div className='ipod'>
       
          <div className='main-box'>
          <div className='screen'>

          <Menu navigationActive={navigationActive} menuItem={menuItem}   coverDisplay={coverDisplay}  />
          </div>

            <div className='button-container'>

              <button onClick={this.handleClick} className='center-circle'>

              </button>
              <button onClick={this.back} className='menu-button'>
                <FaBars className='menu' />
              </button>
              <button className='left-button'>
                <FaBackward className='backword' />
              </button>
              <button className='right-button'>
                <FaForward className='farword' />
              </button>
              <button className='play-pause'>
                <FaPlay className='play' />
                <FaPause className='play' />

              </button>
            </div>
            <img className='icon' src="https://cdn-icons-png.flaticon.com/512/731/731985.png" style={{ marginBottom: 20 }} />
            <p className='icon-text'>Developed by Utkarsh</p>
          </div>
        </div >
      </div >
    )
  }
}

