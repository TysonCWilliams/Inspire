import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

//Private
function drawImage() {
  ProxyState.image.Template;
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on("image", drawImage);
    this.getImage()
  }
  getImage() {
    try {
      imageService.getImage()
    }
    catch (e) {
      console.error(e)
    }
  }


}
