import React from "react";
import {Link} from "react-router-dom";
import "./article-item.css"

export default class ArticleItem extends React.Component {
  render() {
    const {article} = this.props
    return (
      <div className="app-block item">

        <div className="item-head">
          <Link to={`/articles/${article.id}`} className="item-title">{article.title}</Link>
          <span className="item-date">{article.creationDate}</span>
        </div>
        <div className="item-cover">
          <img className="item-cover-img" src={`${process.env.PUBLIC_URL}/static/${article.cover}`}/>
        </div>
        <div className="item-content">
          {article.body}
        </div>

      </div>)
  }
}