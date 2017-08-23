import React, { Component } from "react";
import { hashHistory } from 'react-router'

import helpers from "./utils/helpers";
import NavTab from "./NavTab";

export default class Main extends Component {
  constructor() {
    super();
    this.state = { terms: {}, results: [], saved: [] };
    this.setTerm = this.setTerm.bind(this);
    this.setSaved = this.setSaved.bind(this);
    this.setResults = this.setResults.bind(this);
    this.deleteResult = this.deleteResult.bind(this);
  }
  
  setTerm(terms) {
    this.setState({ terms: terms }, () => {
      helpers.getArticles(this.state.terms).then((data) => {
        this.setResults(data);
      })
    });
  }
  
  setResults(results) {
    this.setState({ results: results });
  }

  deleteResult(id) {
    const newResults = this.state.results.filter(
      item => item.a_id !== id
    )
    this.setState({ results: newResults });
  }
  
  componentWillMount(){
    helpers.getSaved().then((doc) => {
      if(doc.data){
        this.setSaved(doc.data);      
      }
    })    
  }

  setSaved(saved){
    this.setState({ saved: saved });
  }

  saveArticle(item){
    helpers.postSave(item).then((doc) => {
      this.setSaved(doc.data);
      this.deleteResult(item.a_id);
    })
  }
  
  deleteArticle(id){
    helpers.deleteSave(id).then((doc) => {
      this.setSaved(doc.data);
    })
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       setTerm: this.setTerm.bind(this),
       setSaved: this.setSaved.bind(this),
       saveArticle: this.saveArticle.bind(this),
       deleteArticle: this.deleteArticle.bind(this),
       articles: this.state.results,
       savedItems: this.state.saved
     })
    );
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
          {childrenWithProps}
        </div>

      </div>
    );
  }
};