import React, { Component } from "react";

export default class Query extends Component {
  constructor() {
    super();
    this.state = {
      terms: {
        term: "",
        syear: "",
        eyear: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    const terms = this.state.terms;
    terms[propertyName] = event.target.value;
    this.setState({ terms: terms });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setTerm(this.state.terms);
    this.setState({
      terms: {
        term: "",
        syear: "",
        eyear: ""
      }
    });
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
                  value={this.state.terms.term}
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
                  value={this.state.terms.syear}
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
                  value={this.state.terms.eyear}
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