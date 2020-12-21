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
    }

    configFood(foodsCategory) { // iterate through foodsCategory's properties to find where the specific food we want to display is at.
    // with this approach we can find all the properties that the foodsCategory object has, it is automated.
        if (foodsCategory) {
            if (Array.isArray(foodsCategory)) {
                return foodsCategory.find(item => item.urlName === this.props.match.params.food);
            } else {
                const temperatureCategories = Object.getOwnPropertyNames(foodsCategory);

                for (let i = 0; i < temperatureCategories.length; i++) {

                    const food = foodsCategory[temperatureCategories[i]].find((food, foodIndex) => {
                        return food.urlName === this.props.match.params.food;
                    });

                    if (food) return food;
                    
                }
            }
        }
    }

    findWarmOrCold(foodsCategory) { // check if the selected food in the sicaklar or soguklar section in the foods data.
        if (!Array.isArray(foodsCategory)) {
            const temperatureLevels = Object.getOwnPropertyNames(foodsCategory);
            const temperetaures = [];
            temperatureLevels.forEach((temperature, index) => {
                if (foodsCategory[temperature].find(item => item.urlName === this.props.match.params.food)) {
                    //this.setState({ temperatureCategory: `(${temperature})` });
                    temperetaures.push(`(${temperature})`);
                }
            });
            return temperetaures;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="food-page__container">

                <Header />

                <div 
                    className="food-page__content"
                    onClick={() => {
                        this.props.closeSideBar();
                    }}
                >
                    <img alt="food" src={this.state.food.image} />

                    <div className="food-page__name">
                        <p>{this.state.food.name} {this.findWarmOrCold(foodsData[this.props.match.params.foodsCategory])}</p>
                    </div>

                    <div className="food-page__table">
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>{this.state.food.price.yarim ? "Yarim" : null}</th>
                                    <th>{this.state.food.price.tam ? "Tam" : null}</th>
                                </tr>
                                <tr>
                                    <td>{this.state.food.price.yarim ? `${this.state.food.price.yarim} TL` : null}</td>
                                    <td>{this.state.food.price.tam ? `${this.state.food.price.tam} TL` : `${this.state.food.price} TL`}</td>
                                </tr>
                            </tbody>

                        </table>
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
