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

    configTitle(word) {
        if (word.includes('sogukicicek')) return 'Soguk Icicekler';
        if (word.includes('sicakicicek')) return 'Sicak Icicekler';
        if (word.includes('anayemek')) return 'Ana Yemekler';
        else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }
    
    displayFoods() {
        return foodsData[this.props.foods].map((item, index) => {
            return (
                <Food
                    key={index}
                    food={item}
                    foodsCategoryURL={this.props.foods}
                />
            );
        });
    }

    render() {
        return (
            <div className="foods__container">
                <h1>{this.configTitle(this.props.foods)}</h1>
                {this.displayFoods()}
            </div>
        );
    };
}

export default Foods;