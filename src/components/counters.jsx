import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  handleDelete = (id) => {
    //console.log('Delete Event handler called, with ID> ', this.props.counters, id)
    let counters = [...this.props.counters];
    counters = counters.filter((counter) => counter.id !== id);
    this.props.onDelete(counters);
    //this.setState({ counters })
  };

  handleIncrement = (id) => {
    console.log("Incremental clicked", id);

    let counters = this.props.counters;
    let counter = counters.find((c) => c.id === id);
    counter.value += 1;
    counters = [...counters, counter];
    this.setState({ counter });
  };

  handleDecrement = (id) => {
    console.log("Decrement clicked", id);

    let counters = this.props.counters;
    let counter = counters.find((c) => c.id === id);
    counter.value -= 1;
    counters = [...counters, counter];
    this.setState({ counter });
  };

  handleReset = (id) => {
    console.log("Reset clicked", id);

    let counters = this.props.counters;
    let counter = counters.find((c) => c.id === id);
    counter.value = 0;
    counters = [...counters, counter];
    this.setState({ counter });
  };

  handleGeneralReset = () => {
    console.log("General Reset button clicked");
    let counters = this.props.counters;
    counters.map((c) => (c.value = 0));
    this.setState({ counters });
  };

  render() {
    const { counters } = this.props;
    return (
      <div>
        <button
          onClick={this.handleGeneralReset}
          className="btn btn-small btn-primary m-2">
          General Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            selected
            gender="Male"
            onDelete={() => this.handleDelete(counter.id)}
            onIncrement={() => this.handleIncrement(counter.id)}
            onDecrement={() => this.handleDecrement(counter.id)}
            onReset={() => this.handleReset(counter.id)}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
