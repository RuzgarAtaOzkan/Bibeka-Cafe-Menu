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
        if (word.includes('gunebaslarken')) return 'Gune Baslarken';
        if (word.includes('omletcesitleri' || 'omlet')) return 'Omlet Cesitleri';
        if (word.includes('gozleme')) return 'Gözleme Çeşitleri';
        if (word.includes('tost')) return 'Tost Çeşitleri';
        else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }

    displayWarmFoods() {
        return foodsData[this.props.foods].sicaklar.map((item, index) => {
            console.log(item);
            return (
                <Food
                    key={index}
                    food={item}
                    foodsCategoryURL={this.props.foods}
                />
            );
        });
    }

    displayColdFoods() {
        return foodsData[this.props.foods].soguklar.map((item, index) => {
            console.log(item);
            return (
                <Food
                    key={index}
                    food={item}
                    foodsCategoryURL={this.props.foods}
                />
            );
        });
    }

    displayFoods() {
        if (this.props.foods === 'omletcesitleri') {

            return (
                <div className="foods__container">
                    <h1 style={{ color: 'red' }}>Sicaklar</h1>
                    {this.displayWarmFoods()}
                    <h1 style={{ color: 'blue' }}>Soguklar</h1>
                    {this.displayColdFoods()}
                </div>
            );

        } else {
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
