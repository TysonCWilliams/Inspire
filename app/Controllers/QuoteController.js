import quoteService from "../Services/QuoteService.js";
import { ProxyState } from "../AppState.js";

//TODO Create methods for constructor, and rendering the quote to the page

function drawQuote() {
  document.getElementById('quote-card').innerHTML += ProxyState.quote.Template
}




export default class QuoteController {
  constructor() {
    ProxyState.on("quote", drawQuote);
    this.getQuote()
  }
  getQuote() {
    try {
      quoteService.getQuote()
    }
    catch (e) {
      console.error(e)
    }
  }


 }