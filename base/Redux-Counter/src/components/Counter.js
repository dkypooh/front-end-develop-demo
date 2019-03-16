import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    render() {
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => { this.props.increment() }}>
                    +
                </button>
                <button onClick={() => { this.props.decrement() }}>
                    -
                </button>
            </p>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
