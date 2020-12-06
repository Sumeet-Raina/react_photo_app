import React from 'react';
import { useState } from 'react';


export const PhotoOne = () =>{
  const Img1 = "https://www.fillmurray.com/640/360";
  const Img2 = "https://placekitten.com/640/360";
  const [imgSrc, setImgSrc] = useState(Img1);

  const imgClickHandler = () => {
    if(imgSrc === Img1){
      setImgSrc(Img2);
    } else {
      setImgSrc(Img1);
    }
  }
  return(
    <div>
      <img src={imgSrc} onClick= {imgClickHandler} />
      <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
    </div>
  )
};


export function PhotoTwo() {
  const Img1 = "https://www.fillmurray.com/640/360";
  const Img2 = "https://www.placecage.com/640/360";
  const [imgSrc, setImgSrc] = useState(Img1);

  const imgClickHandler = () => {
    if(imgSrc === Img1){
      setImgSrc(Img2);
    } else {
      setImgSrc(Img1);
    }
  }
  return(
    <div>
      <img src={imgSrc} onMouseOver= {imgClickHandler} />
      <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
    </div>
  )
};


export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: "https://www.fillmurray.com/640/360",
      img2: 'https://placekitten.com/640/360'
    };
    this.imgClickHandler = this.imgClickHandler.bind(this);
  }

  imgClickHandler = () => {
    if(true){
      this.setState({ img1: this.state.img2 })
    }
  }

  render() {
    return (
      <div>
      <img src={this.state.img1} onClick={this.imgClickHandler} />
      <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
    </div>
    );
  }
}