import React from 'react';
import Header from '../components/Header';
import '../styles/FoodPage.css';
import foodsData from '../data/foodsData.json';
import Footer from '../components/Footer';


class FoodPage extends React.Component {

    state = {
        food: foodsData[this.props.match.params.foodsCategory].find(item => item.urlName === this.props.match.params.food)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="food-page__container">
                <Header />

                <div className="food-page__content">
                    <img alt="food" src={this.state.food.image} />

                    <div>
                        <p>{this.state.food.description}</p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default FoodPage;