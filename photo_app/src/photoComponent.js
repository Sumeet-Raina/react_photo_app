import React from 'react';
import { useState } from 'react';

export const Photo = () =>{
  const Img1 = "https://www.fillmurray.com/640/360";
  const Img2 = "https://placekitten.com/640/360";
  const [img1, setImg] = useState(Img1);

  return(
    <div>
      <img src={Img1} onClick={() => setImg(Img2)} />

      <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
    </div>
  )
};


// export function Photo() {
//   const Img1 = "https://www.fillmurray.com/640/360";
//   const Img2 = "https://placekitten.com/640/360";
//   const [img1, setImg] = useState(Img1);

//   return(
//     <div>
//       <img src={Img1} onMouseOver={() => setImg(Img2)} />
//       <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
//     </div>
//   )
// };




// export default class Photo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       img1: "https://www.fillmurray.com/640/360",
//       img2: 'https://placekitten.com/640/360'
//     };
//   }

//   render() {
//     return (
//       <div>
//       <img src={this.state.img1} onClick={() => this.setState(this.state.img2)} />
//       <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
//     </div>
//     );
//   }
// }