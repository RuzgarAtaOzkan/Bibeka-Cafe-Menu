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
        if (word.includes('sicak'.toLowerCase())) {
            return (
                <h1 style={{ color: 'red' }}>{word.charAt(0).toUpperCase() + word.slice(1)}</h1>
            );
        }
        if (word.includes('soguk'.toLowerCase())) {
            return (
                <h1 style={{ color: 'blue' }}>{word.charAt(0).toUpperCase() + word.slice(1)}</h1>
            );

        }

        else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    }

    displayWarmFoods(foodsCategory) {
        if (foodsCategory.sicaklar) {
            return foodsData[this.props.foods].sicaklar.map((item, index) => {
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

    displayColdFoods(foodsCategory) {
        if (foodsCategory.soguklar) {
            return foodsData[this.props.foods].soguklar.map((item, index) => {
                return (
                    <Food
                        key={index}
                        food={item}
                        foodsCategoryURL={this.props.foods}
                    />
                );
            });
        } else {
            console.log(`foodsCategory.soguklar or foodsCategory.sicaklar Couldnt be found in Foods.js`)
            return null;
        }
    }

    displayFoods(foodsCategory) {
        if (foodsCategory) {
            return foodsCategory.map((item, index) => {
                return (
                    <Food
                        key={index}
                        food={item}
                        foodsCategoryURL={this.props.foods}
                    />
                );
            });
        } else {
            console.log(`foodsCategory Couldnt be found in Foods.js`)
            return null;
        }
    }

    displayTemperatureCategoryFoods(foodsCategory) {
        //with thisk approach we can display all the properties of foodsCategory if it is dividing to temperatures
        const temperatureCategories = Object.getOwnPropertyNames(foodsCategory);
        return temperatureCategories.map((temperatureCategory, temperatureCategoryIndex) => {
            return (
                <div
                    key={temperatureCategoryIndex}
                    className="foods__container"
                >
                    {this.configTitle(temperatureCategory)}
                    {
                        foodsCategory[temperatureCategory].map((food, foodIndex) => {
                            return (
                                <Food
                                    key={foodIndex}
                                    food={food}
                                    foodsCategoryURL={this.props.foods}
                                />
                            );
                        })
                    }
                </div>
            );
        });
    }

    // will automise the object management in the future
    configAndDisplayFoods(foodsCategory) {
        if (!Array.isArray(foodsCategory)) { // if it is not an array so it means that it has properties like sicak and soguk so it is dividing
            // if your foodsData[this.props.foods] has divided to sicaks and soguks you will enter that section
            return (
                this.displayTemperatureCategoryFoods(foodsCategory) // this approach is so efficient and better for displaying all the properties of the foodsData temperatures.
                /*
                <div className="foods__container">
                    <h1 style={{ color: 'red' }}>{this.configTitle(propertyNames[0])}</h1>
                    {this.displayWarmFoods(foodsCategory)}
                    <h1 style={{ color: 'blue' }}>{this.configTitle(propertyNames[1])}</h1>
                    {this.displayColdFoods(foodsCategory)}
                </div>
                */
            );
        } else {
            return (
                <div className="foods__container">
                    {this.displayFoods(foodsCategory)}
                </div>
            );
        }
    }

    render() {
        return (
            <div className="foods__container">
                <h1>{this.configTitle(this.props.foods)}</h1>
                {this.configAndDisplayFoods(foodsData[this.props.foods])} {/* Initialize this function here its going to config and display foods */}
            </div>
        );
    };
}

export default Foods;
