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

                    <div className="food__table">
                        <table style={{ border: '1px solid black' }}>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>Yarim</th>
                                    <th>Tam</th>
                                </tr>
                                <tr>
                                    <td>{`${this.state.foodInfo.price.yarim} TL`}</td>
                                    <td>{`${this.state.foodInfo.price.tam} TL`}</td>
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