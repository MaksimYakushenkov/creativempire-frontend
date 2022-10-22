class ArticlesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getArticle(url) {
    return fetch(`${this._baseUrl}/articles/${url}`, {
      method: 'GET',
    })
    .then(res => {
      return this._getResponseData(res);
    })};

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
    })
    .then(res => {
      return this._getResponseData(res);
    })};
}

const articlesApi = new ArticlesApi({
  baseUrl: 'http://localhost:3000',
});

export default articlesApi;