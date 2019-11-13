export class List {
  constructor() {
    this.list = document.querySelector(".news");

    this.render = this.render.bind(this);
    this.createArticleMarkup = this.createArticleMarkup.bind(this);
  }

  render(articles) {
    this.list.innerHTML = "";

    articles.forEach(article => {
      const div = document.createElement("div");
      const markup = this.createArticleMarkup(article);

      div.classList.add("article");
      div.innerHTML = markup;

      this.list.appendChild(div);
    });
  }

  createArticleMarkup(article) {
    return `<div>
      <span class="article__category">${article.sectionName}</span>
      <span class="article__publication-date">${article.webPublicationDate.slice(0, 10)}</span>
      <h3 class="article__title">${article.webTitle}</h3>
      <a href='${article.webUrl}' target='_blank'<button class="article__button">Read More</button></a>
    </div>`;
  }
}
