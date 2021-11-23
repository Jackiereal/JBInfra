import React from "react";
import Slider from "react-slick";

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      autoPlay: this.props.autoPlay
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ trigger: true, autoPlay: nextProps.autoPlay });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.trigger) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    var settings = {
      dots: true,
      autoplay: this.state.autoPlay,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll:1,
      infinite: true,
    };

    var children = ['serenevillas1111.jpg', 'serenevillas2222.jpg', 'serenevillas333.jpg'];

    //alert(" Autoplay - " + this.state.autoPlay + "       should update - " + this.state.trigger);
    return (
      <div>
        <Slider {...settings}>
          {children.map(index => {
            return <div>{index}</div>;
          })}
        </Slider>
      </div>
    );
  }
}

export default App1;