import React, { Component, useRef } from 'react';
import { render } from 'react-dom';
import './App.css';


const img1 = "https://www.lulus.com/images/product/xlarge/11592541_304822.jpg?w=560&hdpi=1"
const img2 = "https://www.lulus.com/images/product/xlarge/11592561_304822.jpg?w=560&hdpi=1"

const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
  const imageRef = useRef(null);

  return (
    <img 
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src= primaryImg;
      }}
      src={primaryImg} 
      alt=""
      ref={imageRef}
    />
  )
}

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg={img1}
        secondaryImg={img2}
        alt="" />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver
        primaryImg={img3}
        secondaryImg={img4}
        alt="" />
    </div>
  )
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <ImageChangeOnMouseOver/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
