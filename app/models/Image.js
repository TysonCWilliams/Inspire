export default class Image {
constructor(data){
  this.url = data.url
}



get Template() {
  
  
  let urlString = "url('" + this.url + "');"
  document.getElementById('main-container').setAttribute("style", "background-image: " + urlString)


  
  return true

}

}