import React, { Component } from "react";

export default class Results extends Component {
  constructor() {
    super();
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    this.props.feedSeymour(this.props.data.food);
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane active row" id="results">
        <div className="panel panel-default"> 
          <div className= "panel-heading">
            <span className="fa fa-table"></span> Results
          </div>
          <div className="panel-body">
            <div id="searchresult">

              <div id="searchresult">

                <div className="article">
                  <p>
                    <span className="articleheader">For Baby Boomers, Dismay, and Opportunity</span>
                  </p>
                  <p className="details">
                    <span>Sun Jul 30 2017 14:21:41 GMT-0700 (Pacific Daylight Time)</span>
                  </p>
                  <p>
                    <a className="url" href="https://www.nytimes.com/2017/07/30/opinion/for-baby-boomers-dismay-and-opportunity.html" target="_blank">https://www.nytimes.com/2017/07/30/opinion/for-baby-boomers-dismay-and-opportunity.html</a>
                  </p>
                  <button className="btn btn-primary savebtn">Save</button>
                </div>

              </div>
          
            </div>
          </div>
        </div>
      </div>
    );
  }
};