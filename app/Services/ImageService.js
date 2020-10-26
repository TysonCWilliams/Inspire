import { ProxyState } from "../AppState.js";
import Image from "../models/Image.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and save to the State

let url = 'tyson/image/'
class ImageService {
  async getImage() {
    let res = await api.get('images');
    // console.log(res)
    ProxyState.image = new Image(res.data);
    }
}



const imageService = new ImageService();
// setInterval(imageService.getImage, 5000)
// changes image on interval
export default imageService;