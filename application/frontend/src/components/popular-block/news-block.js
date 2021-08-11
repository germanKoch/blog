import React from "react";
import NewsItem from "../news-item";

import "./news-block.css"

const NewsBlock = () => {
  return (
    <div className="app-block news-block">
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
      <NewsItem/>
    </div>
  )
}

export default NewsBlock