export class Search {
  constructor() {
    this.search = document.querySelector("#search");
    this.init = this.init.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  init(cb) {
    this.cb = cb;

    this.search.addEventListener("keyup", debounce(this.handleChange, 300));
  }

  handleChange(ev) {
    console.log(ev.target.value)
    this.cb(ev.target.value)
  } 
}

function debounce(func, wait) {
  let timeout;

  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
