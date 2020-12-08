import React, { Component } from 'react'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-brand" >
            Navbar  <span className="badge badge-pill badge-secondary">
                        {this.props.totalCounters} 
                    </span>

                    <span className="badge badge-pill badge-success">
                        {this.props?.positiveCounts()}
                    </span>

                    <span className="badge badge-pill badge-danger">
                        {this.props?.negativeCounts()}
                    </span>

                    <span className="badge badge-pill badge-warning">
                        {this.props?.neutralCounts()}
                    </span>
                </div>
            </nav>
        )
    }
}

export default Navbar