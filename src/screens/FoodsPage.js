import React from 'react';
import '../styles/FoodsPage.css';
import Foods from '../components/Foods';
import Header from '../components/Header';
import Footer from '../components/Footer';

class FoodsPage extends React.Component {

    state = {
        foodsCategory: this.props.match.params.foodsCategory 
    }

    displayDynamicRoutes() {
        return (
            <Foods
                foods={this.state.foodsCategory}
            />
        );
    }

    render() {
        return (
            <div className="foods-page__container">
                <Header />
                <div className="foods-page__content">
                    {this.displayDynamicRoutes()}
                </div>
                <Footer />
            </div>
        );
    };
}

export default FoodsPage;