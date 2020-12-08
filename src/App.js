import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    size: 2
  };

 
  handleDelete = (id) => {
    let counters = this.state.counters.filter((counter) => counter.id !== id);
    this.setState({counters});
    console.log('Delete something of value', id)
  };

  handleIncrement = (id) => {
    console.log("Incremental clicked", id);

    let counters = this.state.counters;
    let counter = counters.find((c) => c.id === id);
    counter.value += 1;
    counters = [...counters, counter];
    this.setState({ counter });
  };

  handleDecrement = (id) => {
    console.log("Decrement clicked", id);

    let counters = this.state.counters;
    let counter = counters.find((c) => c.id === id);
    counter.value -= 1;
    counters = [...counters, counter];
    this.setState({ counter });
  };

  handleReset = (id) => {
    console.log("Reset clicked", id);

    let counters = this.state.counters;
    let counter = counters.find((c) => c.id === id);
    counter.value = 0;
    counters = [...counters, counter];
    this.setState({ counter });
  };

  handleGeneralReset = () => {
    console.log("General Reset button clicked");
    let counters = this.state.counters;
    counters.map((c) => (c.value = 0));
    this.setState({ counters });
  };

  handlePositiveCounts = (counters) => {
    return counters.filter((c) => c.value > 0).length || 0;
    //return co.length
  };

  handleNegativeCounts = (counters) => {
    return counters.filter((c) => c.value < 0).length || 0;
    //return co.length
  }

  handleNeutralCounts = (counters) => {
    return counters.filter((c) => c.value === 0).length || 0;
    //return co.length
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.length}
          positiveCounts={() =>this.handlePositiveCounts(this.state.counters)}
          negativeCounts={() =>this.handleNegativeCounts(this.state.counters)}
          neutralCounts={() =>this.handleNeutralCounts(this.state.counters)}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={id =>this.handleDelete(id)}
            onIncrement={id =>this.handleIncrement(id)}
            onDecrement={id =>this.handleDecrement(id)}
            onReset={id =>this.handleReset(id)}
            onGeneralReset={this.handleGeneralReset}
            //onDelete={(c) => this.handleDelete(c)}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
