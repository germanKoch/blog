import React from "react";
import "./news-item.css"

const NewsItem = () => {
  return (
    <div className="news-item">
      <div className="news-item-header">
        <span className="news-title">Lorem ipsum</span>
        <span className="news-date">today at 10:00</span>
      </div>
      <div className="news-item-content">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </span>
      </div>
    </div>
  )
}

export default NewsItem