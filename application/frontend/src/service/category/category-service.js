export default class CategoryService {

  _apiBase = "http://localhost:8080/api/category"

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
    return res.then(list => list.map(this._convertCategory))
  }

  _convertCategory = (category) => {
    return {
      id: category.id,
      title: category.title,
    }
  }

}