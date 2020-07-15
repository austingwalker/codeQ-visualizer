import React, { Component } from "react";
import "./Home.css"

class Home extends Component {
  state = {
    test: "Success!"
  };


  render() {
    return (
      <div className="container">
        <div className="row">
            <h1>{this.state.test}</h1>
        </div>
      </div>
    );
  }
}

export default Home;
