import React, { Component } from "react";

export default class Saved extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.feedSeymour(this.props.data.food);
  }

  render() {
    return (
      <div role="tabpanel" className="tab-pane active row" id="saved">
        <div className="panel panel-default"> 
          <div className= "panel-heading">
            <span className="fa fa-save"></span> Saved Articles
          </div>
          <div className="panel-body">
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
                <hr />
                <p>Saved On: <span className="saved">Sun Jul 30 2017 14:21:41 GMT-0700 (Pacific Daylight Time)</span></p>
                <p>Note: <span className="saved">Something cool</span></p>
                <button className="btn btn-danger savebtn">Remove</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
};