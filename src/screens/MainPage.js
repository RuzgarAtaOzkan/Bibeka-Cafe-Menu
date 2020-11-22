import React from 'react';
import Header from '../components/Header';
import FavouriteTastesSlideBar from '../components/FavouriteTastesSlideBar';
import Categories from '../components/Categories';
import '../styles/MainPage.css';

class MainPage extends React.Component {
    render() {
        return (
            <div className="main-page__container">
                <Header />
                <FavouriteTastesSlideBar />
                <Categories />
            </div>
        );
    };
}

export default MainPage;