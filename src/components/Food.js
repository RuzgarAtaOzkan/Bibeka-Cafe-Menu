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
                    <p style={{ width: '170px' }}>{this.state.foodInfo.name}</p>

                    {this.props.food.urlName === 'makarnalar8' || this.props.food.urlName === 'makarnalar9' || this.props.food.urlName === 'makarnalar10' || this.props.food.urlName === 'makarnalar11' ?  <p style={{  width: '170px',textAlign: 'center' }}>{this.state.foodInfo.description}</p> : null}
                   

                    <div className="food__table">

                        <div>
                            <div>
                                <p>{this.state.foodInfo.price.yarim ? "Yarim -" : null}</p>
                            </div>
                            <div>
                                <p>{this.state.foodInfo.price.tam ? "Tam -" : null}</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>{this.state.foodInfo.price.yarim ? `${this.state.foodInfo.price.yarim} TL` : null}</p>
                                
                            </div>
                            <div>
                                <p>{this.state.foodInfo.price.tam ? `${this.state.foodInfo.price.tam} TL` : `${this.state.foodInfo.price} TL`}</p>
                            </div>
                        </div>

                    </div>

                </Link>
            </div>
        );
    }
}

export default Food;
