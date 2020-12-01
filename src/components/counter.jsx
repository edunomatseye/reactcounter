import React, { Component } from 'react';

class Counter extends Component {
  

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    render() {
        return(
            <div>
                <span className={ this.getBadgeclasses() }>{this.formatCount()}</span>
                <button onClick={ this.props.onHandleIncrement } className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick={ this.props.onHandleDecrement } className="btn btn-secondary btn-sm m-2">-</button>
                <button onClick={ this.props.onDelete } className="btn btn-danger btn-sm m-2">Delete</button>
                <button onClick={ this.props.onHandleReset } className="btn btn-secondary btn-sm m-2">Reset</button>

            </div>
        );
    }

    

    getBadgeclasses() {
        const { value } = this.props.counter;
        let classes = "badge m-2 badge-";
        classes += value === 0 ? "warning": (value > 0) ? "success": "danger";
        return classes
    }

    formatCount() {
        const { value } = this.props.counter;
        return (value === 0) ? 'Zero': +value;
        //return this.state.value ?? 'Zero'
    }
}

export default Counter;