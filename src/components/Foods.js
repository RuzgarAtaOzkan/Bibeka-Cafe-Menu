import React from 'react';
import Food from './Food';
import '../styles/Foods.css';
import foodsData from '../data/foodsData.json';

class Foods extends React.Component {

    // foodsCategory represenets the name of the category, foodsCategoryObject represents the jSON object which contains the information about the foodsCategory

    constructor(props) {
        super(props);
        this.state = {
            foodsCategory: this.props.foodsCategory,
            foodsCategoryObject: foodsData[this.props.foodsCategory]
        }
    }

    componentDidMount() {
        this.setState({ foodsCategory: this.props.foodsCategory });
        this.setState({ foodsCategoryObject: foodsData[this.props.foodsCategory] });
    }

    // yemek kategorisinin basligini birlesik olmamasi ve buyuk harfle baslamasi icin ayarliyoruz ve ayrica eger kategori isi dagilimlarina ayriliyorsa rengini degistiriyoruz ki daha guzel gorunsun
    configTitle(word) {
        switch (word) {
            case 'sogukicicekler'.toLowerCase():
                return <h1>Soguk Icicekler</h1>;
            case 'sicakicicekler'.toLowerCase():
                return <h1>Sicak Icicekler</h1>;
            case 'anayemekler'.toLowerCase():
                return <h1>Ana Yemekler</h1>;
            case 'gunebaslarken'.toLowerCase():
                return <h1>Gune Baslarken</h1>;
            case 'omletcesitleri'.toLowerCase():
                return <h1>Omlet Cesitleri</h1>;
            case 'gozlemecesitleri'.toLowerCase():
                return <h1>Gozleme Cesitleri</h1>;
            case 'tostcesitleri'.toLowerCase():
                return <h1>Tost Cesitleri</h1>;
            case 'sicaklar'.toLowerCase():
                return <h1 style={{ color: 'red' }}>Sicaklar</h1>; 
            case 'soguklar'.toLowerCase():
                return <h1 style={{ color: 'blue' }}>Soguklar</h1>;
            case 'makarnalar':
                return <h1>Makarnalar</h1>;
            case 'bagetsandvicler':
                return <h1>Baget Sandvicler</h1>;
            case 'tatlilar':
                return <h1>Tatlilar</h1>;
            case 'salatalar':
                return <h1>Salatalar</h1>;
            default:
                return 'Default Title';
        }
    }


    // it finds all the properties that foodsCategoryObject has if it is not an array, takes each property and display it contents one by one
    displayTemperatureCategoryFoods(foodsCategory) {
        if (foodsCategory) {
            //with thisk approach we can display all the properties of foodsCategory if it is dividing to temperatures
            const temperatureCategories = Object.getOwnPropertyNames(foodsCategory);
            return temperatureCategories.map((temperatureCategory, temperatureCategoryIndex) => {
                return (
                    <div
                        key={temperatureCategoryIndex}
                        className="foods__container"
                    >
                        {this.configTitle(temperatureCategory)}
                        {
                            foodsCategory[temperatureCategory].map((food, foodIndex) => {
                                return (
                                    <Food
                                        key={foodIndex}
                                        food={food}
                                        foodsCategoryURL={this.props.foodsCategory}
                                    />
                                );
                            })
                        }
                    </div>
                );
            });
        }
    }

    displayFoods(foodsCategory) {

        if (foodsCategory) {

            return foodsCategory.map((item, index) => {
                return (
                    <Food
                        key={index}
                        food={item}
                        foodsCategoryURL={this.props.foodsCategory}
                    />
                );
            });
        } else {
            console.log(`foodsCategory Couldnt be found in Foods.js`)
            return null;
        }
    }

    // will automise the object management in the future
    configAndDisplayFoods(foodsCategory) {
        if (!Array.isArray(foodsCategory)) { // if it is not an array so it means that it has properties like sicak and soguk so it is dividing
            // if your foodsData[this.props.foods] has divided to sicaks and soguks you will enter that section
            return (
                this.displayTemperatureCategoryFoods(foodsCategory) // this approach is so efficient and better for displaying all the properties of the foodsData temperatures.
            );
        } else {
            return (
                this.displayFoods(foodsCategory)
            );
        }
    }

    render() {
        return (
            <div className="foods__container">
                {this.configTitle(this.props.foodsCategory)}
                {this.configAndDisplayFoods(foodsData[this.props.foodsCategory])} {/* Initialize this function here its going to config and display foods */}
            </div>
        );
    };
}

export default Foods;
