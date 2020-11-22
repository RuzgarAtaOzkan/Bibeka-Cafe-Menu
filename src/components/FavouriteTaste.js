import React from 'react';
import faker from 'faker';
import '../styles/FavouriteTaste.css';

class FavouriteTaste extends React.Component {

    render() {
        return (
            <div className="favourite-taste__container">
                <div>
                    <img alt="food" src={faker.image.food()} />
                    <strong>{this.props.name}</strong>
                </div>
            </div>
        );
    }
}

export default FavouriteTaste;