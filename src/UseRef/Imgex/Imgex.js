import React,{useRef} from 'react';
import Imageone from '../imgs/card_1.jpg';
import ImageTwo from '../imgs/card_2.jpg';

let Imgex=()=>{
    let imgRef=useRef();
    let changeImage=()=>{
        console.log("print HTML Tag",imgRef.current.alt);
        imgRef.current.src=ImageTwo;
    }
    return<>
    <img src={Imageone} alt="Test" height="50%" width="50%" ref={imgRef} />
    <button onClick={changeImage}>Change</button>
    </>
}
export default Imgex;