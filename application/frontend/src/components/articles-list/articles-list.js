import React from "react";
import ArticleItem from "../article-item";
import ArticleService from "../../service/article";

export default class ArticlesList extends React.Component {

  articleService = new ArticleService()

  state = {
    itemList: []
  };

  componentDidMount() {
    const {categoryId} = this.props;
    this.articleService.getByCategory(categoryId).then((itemList) => {
      this.setState({
        itemList
      });
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.categoryId !== this.props.categoryId) {
      const {categoryId} = this.props;
      this.articleService.getByCategory(categoryId).then((itemList) => {
        this.setState({
          itemList
        });
      })
    }
  }

  render() {
    const {itemList} = this.state;
    let content = itemList.length !== 0 ? itemList.map(el => <ArticleItem article={el}/>) : <EmptyList/>
    return (
      <div>
        {content}
      </div>
    )
  }
}

const EmptyList = () => {
  return (
    <div className="app-block">
      <span>Этот раздел пока пустует :(</span>
    </div>
  )
}