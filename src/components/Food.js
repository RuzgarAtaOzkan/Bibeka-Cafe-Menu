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
                <Link to={`/${this.props.foodsCategoryURL}/${this.props.food.urlName}`}>
                    <img alt="food" src={this.state.foodInfo.image} />
                    <p>{this.state.foodInfo.name}</p>

                    <p>{this.prop}</p>

                    <div className="food__table">
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>{this.state.foodInfo.price.yarim ? "Yarim" : null}</th>
                                    <th>{this.state.foodInfo.price.tam ? "Tam" : null}</th>
                                </tr>
                                <tr>
                                    <td>{this.state.foodInfo.price.yarim ? `${this.state.foodInfo.price.yarim} TL` : null}</td>
                                    <td>{this.state.foodInfo.price.tam ? `${this.state.foodInfo.price.tam} TL` : `${this.state.foodInfo.price} TL`}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                </Link>
            </div>
        );
    }
}

export default Food;
