import React, { Component } from "react";

import helpers from "./utils/helpers";
import NavTab from "./NavTab";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: {}, results: [], saved: [] };
    this.setTerm = this.setTerm.bind(this);
  }

  setTerm(terms) {
    this.setState({ terms: terms });
  }

  render() {
    return (
      <div className= "container">
        <div className="row">
          <div className="jumbotron">
            <h1>
              <span className="fa fa-newspaper-o"></span>
              New York Times Article Search
            </h1>
          </div>
        </div>

        <div className="row">
          <NavTab />  
        </div>

        <div className="tab-content">
          {this.props.children}
        </div>

      </div>
    );
  }
};