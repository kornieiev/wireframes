// https://youtu.be/hT-Tyasywdo?t=1768

const loadMoreBtn = document.querySelector(".load-more-btn");

const API_KEY = "361a70949a2a4bb1ae9c1e9a03b0df73";
const BASE_URL = "https://newsapi.org/v2";
const options = {
  headers: {
    Authorization: API_KEY
  }
};
const pageSize = 3;

export default class NewsApi {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
    this.markup = "";
  }

  fetchNews() {
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=ru&pageSize=${pageSize}&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(res => {
        console.log("reS.articles", res);
        this.page += 1;
        return res.articles;
      })
      .catch(error => console.log("eRRor:", error));
  }

  get query() {
    console.log("this.searchQuery", this.searchQuery);
    return this.searchQuery;
  }

  set query(newQuery) {
    if (this.searchQuery !== newQuery) {
      this.page = 1;
    }
    this.searchQuery = newQuery;
  }
}
