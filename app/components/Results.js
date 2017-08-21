import React, { Component } from "react";

export default class Results extends Component {
  constructor() {
    super();
    this.state = { items: [] };  
    this.updateItem = this.this.updateItem.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }

  handleSave(id) {
    this.props.saveArticle(id);
  }

  updateItem(data) {
    const item = {
      a_id: data._id,
      title: data.headline.main,
      date: data.pub_date,
      url: data.web_url,
      note: ''
    }
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  }

  renderArticles() {
    this.updateItem(this.props.articles);
    return this.props.articles.map(
      articleItem => 
      (
        <div key={articleItem._id} className="article">
          <p>
            <span className="articleheader"> {articleItem.headline.main} </span>
          </p>
          <p className="details" >
            <span> {Date(articleItem.pub_date).toString()} </span>
          </p>
          <p>
            <a className="url" href= {articleItem.web_url} target="_blank">{articleItem.web_url} </a>
          </p>
          <form onSubmit={this.handleSave(articleItem._id)}>
            <div className="input-group">
              <input
                onChange={this.handleNote.bind(this, 'term')}
                type="text"
                className="form-control"
                placeholder="Leave a Note!"
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="btn btn-primary"
                >Save Article</button>
              </span>
            </div>
          </form>
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