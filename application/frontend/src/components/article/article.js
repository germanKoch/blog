import React from "react";
import ArticleService from "../../service/article";
import "./article.css";

export default class Article extends React.Component {

  articleService = new ArticleService();

  state = {
    article: null
  };

  componentDidMount() {
    const {id} = this.props
    this.articleService.getById(id)
      .then((article) => {
        console.log(article)
        this.setState({
          article
        });
      });
  }

  render() {
    const {article} = this.state;
    let content = null

    if (article != null) {
      content = (
        <div className="article app-block">
          <div className="article-head">
            <span className="article-title">{article.title}</span>
            <span className="article-date">{article.creationDate}</span>
          </div>
          <div className="article-cover">
            <img className="article-cover-img" src={`${process.env.PUBLIC_URL}/static/${article.cover}`}/>
          </div>
          <div className="article-content">
            {article.body}
          </div>
        </div>
      )
    }

    return content;
  }

}