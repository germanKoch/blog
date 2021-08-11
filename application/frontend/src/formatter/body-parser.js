import React from "react";
import parse from 'html-react-parser';

export default class BodyParser {
// <img className="item-cover-img" src={`${process.env.PUBLIC_URL}/img/${article.cover}`}/>
  parseBody = (body) => {
    console.log(body)
    body = body.replaceAll('<img src="', `<img class="article-image-img" src="${process.env.PUBLIC_URL}/static/`)
    console.log(body)
    return parse(body)
  }
}