import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value:2 },
            { id: 2, value:3 },
            { id: 3, value:4 },
            { id: 4, value:5 },
        ]
    }

    handleDelete = (id) => {
        console.log('Delete Event handler called, with ID> ', id)
        const counters = this.state.counters.filter(counter => counter.id !== id)
        this.setState({ counters })
    }

    handleIncrement = (id) => {
        console.log('Incremental clicked', id)

        let counters = this.state.counters;
        let counter = counters.find(c => c.id === id);
        counter.value += 1
        counters = [...counters, counter]
        this.setState({ counter })
    }

    handleDecrement = (id) => {
        console.log('Decrement clicked', id);

        let counters = this.state.counters;
        let counter = counters.find(c => c.id === id);
        counter.value -= 1
        counters = [...counters, counter]
        this.setState({ counter })
    }

    handleReset = (id) => {
        console.log('Reset clicked', id);

        let counters = this.state.counters;
        let counter = counters.find(c => c.id === id);
        counter.value = 0;
        counters = [...counters, counter]
        this.setState({ counter })
    }

    handleGeneralReset = () => {
        console.log('General Reset button clicked');
        let counters = this.state.counters;
        counters.map(c => c.value = 0)
        this.setState({ counters })
    }
    
    render() {
        const {counters} = this.state;
        return (
        <div>
            <button onClick={ this.handleGeneralReset } className="btn btn-small btn-primary m-2">General Reset</button>
           
            { counters.map(
                counter => 
                <Counter 
                    key={counter.id} 
                    selected gender="Male"
                    onDelete={ () =>this.handleDelete(counter.id) }
                    onHandleIncrement={ () =>this.handleIncrement(counter.id)}
                    onHandleDecrement={ () =>this.handleDecrement(counter.id)}
                    onHandleReset={ () =>this.handleReset(counter.id)}
                    counter = {counter}
                    />
            )}
       
        </div>
        )
    }
}

export default Counters;