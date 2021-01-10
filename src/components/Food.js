import React from 'react';
import foodsData from '../data/foodsData.json';
import '../styles/Food.css';
import { Link } from 'react-router-dom';

class Food extends React.Component {

    state = {
        foodInfo: this.props.food
    }

    displayVideo(foodCategory) { // display video if the image attribute includes .mp4 or video, it is not a good practice will convert the image property name to video.

        const currentFoodObj = foodsData[foodCategory].find((foodObj, index) => foodObj.urlName === this.props.food.urlName);

        if (currentFoodObj.video || currentFoodObj.image.includes('video' || '.mp4' || '.mov')) { // it will try to grab the video property first if the current food object has it
            return (
                <video 
                    style={{ width: '170px' }} 
                    autoPlay 
                    loop 
                    muted
                > 
                    <source src={this.props.food.video || this.state.foodInfo.image} type="video/mp4" /> 
                </video>
            );
        }

        return <img alt="food" src={this.state.foodInfo.image} />;
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="food__container">
                <Link to={`/${this.props.foodsCategoryURL}/${this.props.food.urlName}`}>

                    {this.displayVideo(this.props.foodsCategoryURL)}

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
