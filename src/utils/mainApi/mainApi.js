class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
    })
    .then(res => {
      return this._checkResponse(res);
  })};

  getPortfolio() {
    return fetch(`${this._baseUrl}/portfolios`, {
      method: 'GET',
    })
    .then(res => {
      return this._checkResponse(res);
  })};

}


const mainApi = new MainApi({
  baseUrl: 'https://api.creativempire.ru',
});

export default mainApi;