import React from 'react';

// export const Photo = () =>{
//   state = {
//     img1: "https://www.fillmurray.com/640/360",
//     img2: 'https://placekitten.com/640/360'
//   };
//   return(
//     <div>
//       <img src="https://www.fillmurray.com/640/360" onClick={this.state.img2} />
//       <p style={{color: "green", fontSize: 24}}>Fill Murray</p>
//     </div>
//   )
// };

export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img1: "https://www.fillmurray.com/640/360",
      img2: 'https://placekitten.com/640/360'
    };
  }

  render() {
    return (
      <div>
      <img src={this.state.img1} onClick={this.state.img2} />
      <h3 style={{color: "green", fontSize: 24}}>Fill Murray</h3>
    </div>
    );
  }
}