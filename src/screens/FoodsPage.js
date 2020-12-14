import React from 'react';
import '../styles/FoodsPage.css';
import Foods from '../components/Foods';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

class FoodsPage extends React.Component {

    state = {
        foodsCategory: this.props.match.params.foodsCategory 
    }

    render() {
        return (
            <div className="foods-page__container">
                <Header />
                <div 
                    className="foods-page__content"
                    onClick={() => this.props.closeSideBar()}
                >
                    <Foods
                        foodsCategory={this.state.foodsCategory}
                    />
                </div>
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

