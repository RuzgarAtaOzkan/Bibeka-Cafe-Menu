import React from 'react';
import FavouriteTaste from './FavouriteTaste';
import '../styles/FavouriteTastesSlideBar.css';

class FavouriteTastesSlideBar extends React.Component {

    touchSlideBar() {

    }

    render() {
        return (
            <div className={"favourite-tastes-slide-bar__container"}>
                <h2>Favori Lezzetlerimiz</h2>

                <div onClick={this.touchSlideBar} className="favourite-tastes-slide-bar__container__slidebar">
                    <FavouriteTaste
                        name="Tavuk Schnitzel"
                    />
                    <FavouriteTaste
                        name="Yarrak"
                    />
                    
                </div>
            </div>
        );
    };
}

export default FavouriteTastesSlideBar;