import React, { Component } from 'react'
import IpodDefault from './IpodDefault';
import Music from './Music';
import Store from './Store';
import Game from './Game';
import Settings from './Settings';

export class Menu extends Component {
    constructor(){
        super();
    }
  render() {
    
    const { navigationActive , menuItem, menuChangeAnimation, coverDisplay, song } = this.props;
    let component = menuItem;
    console.log(menuItem);
    
    if (menuItem === 'Ipod') {
        return (
            <Music navigationActive={navigationActive} menuChangeAnimation={menuChangeAnimation} coverDisplay={coverDisplay} />
        );
    } else if (menuItem === 'Music' || menuItem === 'AllSongs' || menuItem === 'Artists' || menuItem === 'Albums') {
        return (
            <Music navigationActive={navigationActive} menuItem={menuItem} menuChangeAnimation={menuChangeAnimation} coverDisplay={coverDisplay} song={song}/>
        );
    } else if (menuItem === 'Games') {
        return (
            <Game navigationActive={navigationActive}/>
        );
    } else if (menuItem === 'Settings') {
        return (
            <Settings />
        );
    } else {
        return (
            <Store />
        );
    }
    
}
}


export default Menu;