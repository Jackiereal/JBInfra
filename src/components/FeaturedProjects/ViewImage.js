import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";




class App2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      imageDimensions: { height: 1 }
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const style = {
        height:"400px"
        
    }

    
    return (
      <div>
          <div>
            <img src={this.props.image} width="70%" height="650px" onClick={() => this.setState({ isOpen: true })}/>
             
            </div>  

        {isOpen && (
          <Lightbox
            mainSrc={this.props.image} style={style}
            onCloseRequest={() => this.setState({ isOpen: false })}
          >
        </Lightbox>
        )}
      </div>
    );  
  }
}
export default App2;