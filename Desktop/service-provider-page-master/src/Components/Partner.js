import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partner.css";
import {Col} from "react-bootstrap";



export default class Partner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };

    return (
      <div className="slider">
        


        <Slider {...settings}>
        <div>
        <Col sm={4} xs={2} >
        <img src ={require("./pic7.jpeg")} alt ="sp" className="providers"/>
        </Col>
          </div>
          <div>
          <Col sm={4} xs={2} >
        <img src ={require("./pic7.jpeg")} alt ="sp" className="providers1" />
        </Col>
          </div>
          <div>
          <Col sm={4}>
        <img src ={require("./pic7.jpeg")} alt ="sp" className="providers2" />
        </Col>
          </div>
          <div>
          <Col sm={4}>
        <img src ={require("./pic7.jpeg")} alt ="sp" className="providers3" />
        </Col>
          </div>
          <div>

          </div>
          
        
        </Slider>
 </div>

       
    );
  }
}