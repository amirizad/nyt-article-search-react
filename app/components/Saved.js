import React, { Component } from "react";
import helpers from "./utils/helpers";

export default class Saved extends Component {
  constructor() {
    super();
    this.state = { saved: [] };
    this.renderSaved = this.renderSaved.bind(this);    
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleDelete(id, event) {
    event.preventDefault();
    this.props.deleteArticle(id);
  }

  renderSaved(){
    return this.props.savedItems.map(
      savedItem => 
      (    
        <div key={savedItem.a_id} className="article">
          <p>
            <span className="articleheader">{savedItem.title}</span>
          </p>
          <p>
            <span className="date">{savedItem.date}</span>
          </p>
          <p>
            <a className="url" href= {savedItem.url} target="_blank">{savedItem.url} </a>
          </p>
          <hr />
          <p>Saved On: <span className="saved"> {savedItem.savedon} </span></p>
          <p>Note: <span className="saved"> {savedItem.note} </span></p>
          <button
            onClick={this.handleDelete.bind(this, savedItem._id)}
            type="button"
            className="btn btn-danger savebtn"
          >Remove</button>          
        </div>
      )
    );
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
              {this.renderSaved()}
            </div>
          </div>
        </div>
      </div>
    );
  }
};