import "./styles/styles.styl";


import { List } from "./list";
import { Pagination } from "./pagination";
import { Search } from "./search";

class App {
  constructor() {
    this.pageNumber = 1;
    this.searchValue = "";

    this.list = new List();
    this.pagination = new Pagination();
    this.search = new Search();

    this.init = this.init.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchAndRenderData = this.fetchAndRenderData.bind(this);
  }

  handlePageChange(pageNumber) {
    this.pageNumber = pageNumber;

    this.fetchAndRenderData();
  }

  handleSearchChange(searchValue) {
    this.searchValue = searchValue; 
    this.pageNumber = 1;

    // this.pagination.updateSelect(this.pageNumber);
    this.fetchAndRenderData();
  }

  fetchAndRenderData() {
    fetch(
      `https://content.guardianapis.com/search?q=${this.searchValue}&from-date=2019-10-28&page=${this.pageNumber}&api-key=775ad941-e943-4144-918e-bdc75053ed2b`
    )
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        this.list.render(data.response.results);
        this.pagination.updateSelect(data.response.pages);
      })
      .catch(error => console.log(error));
  }

  init() {
    this.pagination.init(this.handlePageChange);
    this.search.init(this.handleSearchChange);

    this.fetchAndRenderData();
  }
}

const app = new App();
app.init();

