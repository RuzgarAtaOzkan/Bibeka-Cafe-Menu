import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';
import FoodsPage from './screens/FoodsPage';
import FoodPage from './screens/FoodPage';
import './styles/App.css';

class App extends React.Component {
    
    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <div className="app__container">
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/:foodsCategory" component={FoodsPage} />
                        <Route exact path="/:foodsCategory/:food" component={FoodPage} />
                    </Switch>
                </div>
            </Router>
        );
    };
}

export default App;