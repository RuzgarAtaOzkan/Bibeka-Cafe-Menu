import React from 'react';

class FoodPage extends React.Component {

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div>
                {this.props.match.params.food}
            </div>
        );
    }
}

export default FoodPage;