import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        age: 34,
        address: {
            street: 'okoro street'
        }
    };

    render() {
        return (
            <div>
                <div>Hello world</div>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </div>
        );
    }
}

export default Counter;