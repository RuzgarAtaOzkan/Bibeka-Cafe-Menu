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

                    <div className="food-page__name">
                        <p>{this.state.food.name}</p>
                    </div>

                    <div className="food-page__table">
                        <table style={{ border: '1px solid black' }}>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>Yarim</th>
                                    <th>Tam</th>
                                </tr>
                                <tr>
                                    <td>{this.state.food.price.yarim} TL</td>
                                    <td>{this.state.food.price. tam} TL</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="food-page__des">

                        <p>{this.state.food.description}</p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default FoodPage;