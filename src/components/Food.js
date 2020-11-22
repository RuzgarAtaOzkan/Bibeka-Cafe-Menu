import React from 'react';
import '../styles/Food.css';
import { Link } from 'react-router-dom';

class Food extends React.Component {

    state = {
        foodInfo: this.props.food
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="food__container">
                <Link to={`/${this.props.urlName}/${this.props.food.urlName}`}>
                    <img alt="food" src={this.state.foodInfo.image} />
                    <p>{this.state.foodInfo.name}</p>
                </Link>
            </div>
        );
    }
}

export default Food;