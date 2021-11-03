import React from "react";
import './App.css';
import Header from "../header";
import Menu from "../menu";
import ArticlesPage from "../articles-page";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ArticleService from "../../service/article";

export default class App extends React.Component {

  state = {
    category: "dev"
  }

  onMenuSwitched = (category) => {
    this.setState({
      category: category
    })
  }

  render() {

    const {category} = this.state

    return (
      <div className="app">
        <Router>
          <Header/>
          <Menu onMenuSwitched={this.onMenuSwitched}/>
          <div className="container">
            <ArticlesPage categoryId={category}/>
          </div>
        </Router>
      </div>
    )
  }

}
