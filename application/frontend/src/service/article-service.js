import BodyParser from "../formatter";

export default class ArticleService {

  _apiBase = "http://localhost:8080/api/article"

  dtFormat = new Intl.DateTimeFormat('ru', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  parser = new BodyParser();

  getResource = async (url, params) => {
    let apiUrl = new URL(`${this._apiBase}/${url}`);
    for (const key in params) {
      apiUrl.searchParams.append(key, params[key]);
    }
    const res = await fetch(apiUrl.href)
    return res.json()
  }

  getListItems = async () => {
    const res = this.getResource("list")
    return res.then(list => list.map(this._convertArticle))
  }

  getById = async (id) => {
    return this.getResource(`${id}`).then(res => this._convertArticle(res))
  }

  getByCategory = async (category) => {
    const res = this.getResource("category", {category: category})
    return res.then(list => list.map(this._convertArticle))
  }

  _convertArticle = (article) => {
    return {
      id: article.id,
      title: article.title,
      body: this.parser.parseBody(article.body),
      category: article.category,
      cover: article.cover,
      creationDate: this.dtFormat.format(new Date(article.creationDate))
    }
  }

}