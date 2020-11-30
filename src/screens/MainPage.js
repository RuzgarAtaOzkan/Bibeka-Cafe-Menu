import React from 'react';
import Header from '../components/Header';
import FavouriteTastesSlideBar from '../components/FavouriteTastesSlideBar';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import '../styles/MainPage.css';

class MainPage extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="main-page__container">
                <Header />
                <div onClick={() => {
                    this.props.closeSideBar();
                }}>
                    <FavouriteTastesSlideBar />
                    <Categories />
                    <Footer />
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        showSideBar: state.general.showSideBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchSideBar: () => {
            dispatch({ type: 'SWITCH_SIDEBAR' });
        },
        closeSideBar: () => {
            dispatch({ type: 'CLOSE_SIDEBAR' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);