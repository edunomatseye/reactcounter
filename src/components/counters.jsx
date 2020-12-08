import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  

  

  

  

  

  render() {
    const { counters } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onGeneralReset}
          className="btn btn-small btn-primary m-2">
          General Reset
        </button>

        
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrement={() => this.props.onIncrement(counter.id)}
            onDecrement={() => this.props.onDecrement(counter.id)}
            onReset={() => this.props.onReset(counter.id)}
            counter={counter}
            //onClick={() => this.handleGeneralCount(counters)}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
