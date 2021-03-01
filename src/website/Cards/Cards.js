import React from 'react';
import imgone from '../img/card_1.jpg';
import imgtwo from '../img/card_2.jpg';
import imgthree from '../img/card_3.jpg';
import imgfour from '../img/card_4.jpg';

let Cards=()=>{
    return<>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <img src={imgone} alt="imageone"/>
                    <div className="card-body">
                        <p>This is the image of the card.</p>
                        <button className="btn btn-primary" >Book Now</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src={imgtwo} alt="imagetwo"/>
                    <div className="card-body">
                        <p>This is the image of the card.</p>
                        <button className="btn btn-primary" >Book Now</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src={imgthree} alt="imagethree"/>
                    <div className="card-body">
                        <p>This is the image of the card.</p>
                        <button className="btn btn-primary" >Book Now</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                    <img src={imgfour} alt="imagefour"/>
                    <div className="card-body">
                        <p>This is the image of the card.</p>
                        <button className="btn btn-primary" >Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Cards;