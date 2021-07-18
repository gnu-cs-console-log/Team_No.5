import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"
import img4 from "./assets/4.jpg"
import img5 from "./assets/5.jpg"
import img6 from "./assets/6.jpg"
import img7 from "./assets/7.jpg"
import img8 from "./assets/8.jpg"
import img9 from "./assets/9.jpg"
import img10 from "./assets/10.jpg"
import img11 from "./assets/11.jpg"
import img12 from "./assets/12.jpg"
import img13 from "./assets/13.jpg"
import img14 from "./assets/14.jpg"
import img15 from "./assets/15.jpg"
import img16 from "./assets/16.jpg"
import img17 from "./assets/17.jpg"
import img18 from "./assets/18.jpg"
import img19 from "./assets/19.jpg"
import img20 from "./assets/20.jpg"
import img21 from "./assets/21.jpg"

function ImageTag(imgs){
 
    switch(imgs.number){
        case 1:
            return(<><img id="image" src={img1} alt=""></img></>);
        case 2:
            return(<><img id="image" src={img2} alt=""></img></>);
        case 3:
            return(<><img id="image" src={img3} alt=""></img></>);
        case 4:
            return(<><img id="image" src={img4} alt=""></img></>);
        case 5:
            return(<><img id="image" src={img5} alt=""></img></>);
        case 6:
            return(<><img id="image" src={img6} alt=""></img></>);
        case 7:
            return(<><img id="image" src={img7} alt=""></img></>);
        case 8:
            return(<><img id="image" src={img8} alt=""></img></>);
        case 9:
            return(<><img id="image" src={img9} alt=""></img></>);
        case 10:
            return(<><img id="image" src={img10} alt=""></img></>);
        case 11:
            return(<><img id="image" src={img11} alt=""></img></>);
        case 12:
            return(<><img id="image" src={img12} alt=""></img></>);
        case 13:
            return(<><img id="image" src={img13} alt=""></img></>);
        case 14:
            return(<><img id="image" src={img14} alt=""></img></>);
        case 15:
            return(<><img id="image" src={img15} alt=""></img></>);
        case 16:
            return(<><img id="image" src={img16} alt=""></img></>);
        case 17:
            return(<><img id="image" src={img17} alt=""></img></>);
        case 18:
            return(<><img id="image" src={img18} alt=""></img></>);
        case 19:
            return(<><img id="image" src={img19} alt=""></img></>);
        case 20:
            return(<><img id="image" src={img20} alt=""></img></>);
        case 21:
            return(<><img id="image" src={img21} alt=""></img></>);
        default:
            return 0;
    }
}
export default ImageTag;