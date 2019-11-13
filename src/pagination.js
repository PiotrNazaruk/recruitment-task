export class Pagination {
  constructor() {
    this.select = document.querySelector("#page-number");
    this.init = this.init.bind(this);

    this.changeNumber = this.changeNumber.bind(this);
  }

  init(changeCb) {
    this.changeCb = changeCb;

    this.select.addEventListener("change", this.changeNumber);
  }

  updateSelect(pageAmount = 5) {
    this.select.innerHTML = '';
    const options = Array.from(Array(pageAmount), (x, index) => index + 1).forEach(
      pageNum => {
        this.select.insertAdjacentHTML('beforeend', `<option class="option" value="${pageNum}">${pageNum}</option>`);
      }
    );
  }

  destroy() {
    this.select.removeEventListener("change", this.changeNumber);
  }

  changeNumber(ev) {
    this.changeCb(ev.target.value);
  }
}
