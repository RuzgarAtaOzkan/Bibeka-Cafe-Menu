import React from 'react';
import Header from '../components/Header';
import '../styles/FoodPage.css';
import foodsData from '../data/foodsData.json';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

class FoodPage extends React.Component {

    state = {
        food: this.configFood(foodsData[this.props.match.params.foodsCategory]),
        temperatureCategory: null
    }

    componentDidMount() {
        this.setState({ food: this.configFood(foodsData[this.props.match.params.foodsCategory]) });
        this.findWarmOrCold(foodsData[this.props.match.params.foodsCategory]);
    }

    configFood(foodsCategory) { // iterate through foodsCategory's properties to find where the specific food we want to display is at.
    // with this approach we can find all the properties that the foodsCategory object has, it is automated.
        if (foodsCategory) {
            if (Array.isArray(foodsCategory)) {
                return foodsCategory.find(item => item.urlName === this.props.match.params.food);
            }

            const temperatureCategories = Object.getOwnPropertyNames(foodsCategory);

            for (let i = 0; i < temperatureCategories.length; i++) {
                const food = foodsCategory[temperatureCategories[i]].find(food => food.urlName === this.props.match.params.food);
                if (food) return food;
            }
        }
    }

    findWarmOrCold(foodsCategory) { // check if the selected food in the sicaklar or soguklar section in the foods data.
        if (!Array.isArray(foodsCategory)) {
            const temperatureLevels = Object.getOwnPropertyNames(foodsCategory);
            const temperatures = [];
            temperatureLevels.forEach((temperature, index) => {

                if (foodsCategory[temperature].find(item => item.urlName === this.props.match.params.food)) {

                    this.setState({ ...this.state, temperatureCategory: temperature });
                    temperatures.push(`(${temperature})`);

                }

            });
            return temperatures;
        } else {
            return null;
        }
    }

    displayMedia(food) {

        if (food.video || food.image.includes('video' || '.mp4' || '.mov')) { // it will try to grab the video property first if the current food object has it
            return (
                <video 
                    style={{ width: '100%' }} 
                    autoPlay 
                    loop 
                    muted
                > 
                    <source src={food.video || food.image} type="video/mp4" />
                </video>
            );
        }

        return (
            <img alt="food" src={food.image} />
        );
    }

    makeFirstUpper(temperature) {

        if (temperature) {
            return `(${temperature.charAt(0).toUpperCase()}${temperature.substr(1, temperature.length - 1).toLowerCase()})`;
        } else {
            return null;
        }

    }

    render() {
        //this.findWarmOrCold(foodsData[this.props.match.params.foodsCategory]
        return (
            <div className="food-page__container">

                <Header />

                <div 
                    className="food-page__content"
                    onClick={() => {
                        this.props.closeSideBar();
                    }}
                >
                    {this.displayMedia(this.state.food)}

                    <div className="food-page__name"> 
                        <p>{this.state.food.name} {this.makeFirstUpper(this.state.temperatureCategory)}</p>
                    </div>

                    <div className="food-page__table">

                        <div>
                            <div>
                                <p>{this.state.food.price.yarim ? "Yarim - " : null}</p>
                            </div>
                            <div>
                                <p>{this.state.food.price.tam ? "Tam -" : null}</p>
                            </div>
                        </div>

                        <div style={{ padding: '3px' }}>
                            <div>
                                <p>{this.state.food.price.yarim ? ` ${this.state.food.price.yarim} TL` : null}</p>
                                
                            </div>
                            <div>
                                <p>{this.state.food.price.tam ? `${this.state.food.price.tam} TL` : `${this.state.food.price} TL`}</p>
                            </div>
                        </div>
                    </div>

                    <div className="food-page__des">

                        <p>{this.state.food.description ? this.state.food.description : null}</p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showSideBar: state.general.showSideBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchSideBar: () => {
            dispatch({ type: 'SWITCH_SIDEBAR' });
        },
        closeSideBar: () => {
            dispatch({ type: 'CLOSE_SIDEBAR' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);
