export default class Quote {

  constructor(data){
    this.url = data.url
    this.qotd_date = data.qotd_date
    this.quote = data.quote.body
    this.author = data.quote.author
  }

get Template(){
  return /*html*/`
  <div>
  <div class="row ml-4 mr-1">
  <div class="col-12">
  <q style="max-width: 250px; font-size: 3rem;">${this.quote}</q>
  </div>
  <div class="col-12">
  <h2 class="author text-info">Author: ${this.author}</h2>
  </div>
  </div>
  </div>
    `;

}


}