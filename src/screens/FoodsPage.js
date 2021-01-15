import React from 'react';
import '../styles/FoodsPage.css';
import Foods from '../components/Foods';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { FaArrowDown } from 'react-icons/fa'
import { FiLoader } from 'react-icons/fi';

class FoodsPage extends React.Component {

    state = {
        foodsCategory: this.props.match.params.foodsCategory,
        loading: true
    }

    configFoods(foodsCategoryURI) {

        if (this.state.loading) {
            return (
                <div style={{ textAlign: 'center' }} className="foods-page__content">
                    <FiLoader style={{ fontSize: '8rem' }} />
                </div>
            );
        } else {

            if (foodsCategoryURI === 'gununyemekleri') {
                return (
                    <div  className="foods-page__content">
    
                        <p>Instagramdan Bakabilirsiniz</p>
                        <div style={{ paddingTop: '15px' }}>
                            <FaArrowDown style={{ fontSize: 35, color: 'black' }} />
                        </div>
    
                    </div>
                );
    
            } else {
                return (
                    <div 
                        className="foods-page__content"
                        onClick={() => this.props.closeSideBar()}
    
                    >

                        <Foods
                            foodsCategory={this.state.foodsCategory}
                        />

                    </div>
                );
            }
        }

    }

    componentDidMount() {
        this.props.closeSideBar();

        window.scrollTo(0, 0);
        this.setState({ loading: false });

        //setTimeout(() => {
            //window.scrollTo(0, 0);
            //this.setState({ loading: false });
        //}, 300);
    }

    render() {
        return (
            <div className="foods-page__container">
                <Header />
                {this.configFoods(this.props.match.params.foodsCategory)}
                <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(FoodsPage);

