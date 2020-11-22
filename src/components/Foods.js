import React from 'react';
import Food from './Food';
import '../styles/Foods.css';
import foodsData from '../data/foodsData.json';

class Foods extends React.Component {

    state = {
        foods: this.props.foods
    }

    componentDidMount() {

    }
    
    displayFoods() {
        return foodsData[this.props.foods].map((item, index) => {
            return (
                <Food
                    key={index}
                    food={item}
                    urlName={this.props.foods}
                />
            );
        });
    }

    render() {
        return (
            <div className="foods__container">
                <h1>{this.props.foods.toUpperCase()}</h1>
                {this.displayFoods()}
            </div>
        );
    };
}

export default Foods;