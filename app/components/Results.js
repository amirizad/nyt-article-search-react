import React, { Component } from "react";

export default class Results extends Component {
  constructor() {
    super();
    this.state = { items: [] };  
    this.handleNote = this.handleNote.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }

  componentWillMount() {
    this.setState({ items: this.props.articles });
  }

  handleSave(id, event) {
    event.preventDefault();
    const _id = id;
    const _item = this.state.items.filter(
      item => item.a_id === _id
    )
    this.props.saveArticle(_item[0]);
  }

  handleNote(id, event) {
    const _note = event.target.value;
    const newItems = this.state.items.map(nItem => {
      if(nItem.a_id === id){
        nItem.note = _note;
      }
      return nItem;
    })
    this.setState({ items: newItems })
  }

  renderArticles() {
    return this.state.items.map(
      articleItem => 
      (
        <div key={articleItem.a_id} className="article">
          <p>
            <span className="articleheader"> {articleItem.title} </span>
          </p>
          <p>
            <span className="date"> {articleItem.date} </span>
          </p>
          {/* <p>
            <a className="url" href= {articleItem.url} target="_blank">{articleItem.url} </a>
          </p> */}
          <div className="input-group">
            <input
              onChange={this.handleNote.bind(this, articleItem.a_id)}
              type="text"
              className="form-control"
              placeholder="Leave a Note!"
            />
            <span className="input-group-btn">
              <button
                onClick={this.handleSave.bind(this, articleItem.a_id)}
                type="button"
                className="btn btn-primary"
              >Save Article</button>
            </span>
          </div>
        </div>
      )
    );
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
                {this.renderArticles()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};