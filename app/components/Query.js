import React, { Component } from "react";

export default class Query extends Component {
  constructor() {
    super();
    this.state = {
      childTerms: {
        term: "",
        syear: "",
        eyear: ""
      },
      changed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    const childTerms = this.state.childTerms;
    const newValue = event.target.value;

    if(childTerms[propertyName] !== newValue){
      childTerms[propertyName] = newValue;
      this.setState({ childTerms: childTerms });
      this.setState({ changed: true });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.changed){
      this.props.setTerm(this.state.childTerms);
      this.setState({
        // childTerms: {
        //   term: "",
        //   syear: "",
        //   eyear: ""
        // },
        changed: false
      });
    }
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane active row" id="search">
        <div className="panel panel-default"> 
          <div className= "panel-heading">
            <span className="fa fa-list-alt"></span> Search
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="term">Search Term</label>
                <input
                  value={this.state.childTerms.term}
                  onChange={this.handleChange.bind(this, 'term')}
                  type="text"
                  id="term"
                  className="form-control"
                  placeholder="Article..."
                  required
                  />
              </div>
              <div className="form-group">
                <label htmlFor="startyear">Start Year (Optional)</label>
                <input
                  value={this.state.childTerms.syear}
                  onChange={this.handleChange.bind(this, 'syear')}
                  type="number"
                  id="syear"
                  min="1900"
                  max="2017"
                  className="form-control"
                  placeholder="YYYY"
                />
              </div>
              <div className="form-group">
                <label htmlFor="endyear">End Year (Optional)</label>
                <input
                  value={this.state.childTerms.eyear}
                  onChange={this.handleChange.bind(this, 'eyear')}
                  type="number"
                  id="eyear"
                  min="1900"
                  max="2017"
                  className="form-control"
                  placeholder="YYYY"
                />
              </div>
              <div className="form-group">
                <button
                  id ="search-button"
                  className="btn btn-default"
                  type="submit"
                >
                  <span className="fa fa-search"></span> Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};