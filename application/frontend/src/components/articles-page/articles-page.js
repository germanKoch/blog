import React from "react";
import ArticlesList from "../articles-list";
import NewsBlock from "../popular-block";
import Article from "../article";

import "./articles-page.css"
import {Route} from "react-router-dom";

const ArticlesPage = ({category}) => {

  return (
    <div className="row row-no-padding">
      <div className="col-2"/>
      <div className="col-8">
        <Route path="/articles" exact render={() => {
          return <ArticlesList category={category}/>
        }}/>
        <Route path="/articles/:id" exact render={({match}) => {
          return <Article id={match.params.id}/>
        }}/>
      </div>
      <div className="col-2"/>
      {/*<div className="col-4">*/}
      {/*  /!*<NewsBlock/>*!/*/}
      {/*</div>*/}
    </div>
  )
};

export default ArticlesPage