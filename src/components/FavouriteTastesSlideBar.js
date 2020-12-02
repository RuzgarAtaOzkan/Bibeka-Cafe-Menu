import React from 'react';
import FavouriteTaste from './FavouriteTaste';
import '../styles/FavouriteTastesSlideBar.css';
import titleLogo from '../images/bibeka_logo.jpeg';

class FavouriteTastesSlideBar extends React.Component {

    touchSlideBar() {

    }

    render() {
        return (
            <div className={"favourite-tastes-slide-bar__container"}>

                <div onClick={this.touchSlideBar} className="favourite-tastes-slide-bar__container__slidebar">

                    <img alt="logo-title" src={titleLogo} />
                    
                </div>
            </div>
        );
    };
}

export default FavouriteTastesSlideBar;