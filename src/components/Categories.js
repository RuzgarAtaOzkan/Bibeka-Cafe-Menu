import React from 'react';
import Category from './Category';
import '../styles/Categories.css';

class Categories extends React.Component {

    state = {
        categoryInfos: [
            { image: '../images/image_kofte.jpg', name: 'Ana Yemekler', urlName: 'anayemekler' },
            { image: '../images/image_sahanda.jpg', name: 'Gune \n Baslarken', urlName: 'baslangiclar' },
            { image: '../images/image_chicken_wrap.jpg', name: 'Salatalar', urlName: 'salatalar' },
            { image: '../images/image_makarna_sebze.jpg', name: 'Makarnalar', urlName: 'makarnalar' },
            { image: '../images/image_kasarli-omlet.jpg', name: 'Omlet Cesitleri', urlName: 'kahvaltilar' },
            { image: '../images/image_gozleme.jpg', name: 'Gözleme Çeşitleri', urlName: 'gozlemecesitleri' },
            { image: '../images/image_gozleme.jpg', name: 'Tost Çeşitleri', urlName: 'tostcesitleri' },
            { image: '../images/image_mozaik.jpg', name: 'Tatlilar', urlName: 'tatlilar' },
            { image: '../images/image_sahlep.jpg', name: 'Sicak Icicekler', urlName: 'sicakicicekler' },
            { image: '../images/image_limonata2.jpg', name: 'Soguk Icicekler', urlName: 'sogukicicekler' },

        ]
    }

    displayCategories() {
        return this.state.categoryInfos.map((categoryInfo) => {
            return (
                <Category
                    key={Math.random().toString()}
                    info={categoryInfo}
                />
            );
        });
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="categories__container">
                <h1>Menu</h1>
                {this.displayCategories()}
            </div>
        );
    };
}

export default Categories;