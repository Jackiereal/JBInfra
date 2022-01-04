import React from "react";
import Slider from "react-slick";
import {
  Container, Grid, Typography,Card,CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles({
//   media: {
//       height: '0',
//       paddingTop: '73%', // 16:9,
//       boxShadow:'none',
//       border:'none',
//       width:"82%",
//       margin:'auto'
//     },
//   cardMedia:{
//       boxShadow:'none',
//       marginTop:'-70px',
//   },
 

// });

class App1 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      autoPlay: this.props.autoPlay,
      images: this.props.images
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
      centerMode: true,
      autoplay: this.state.autoPlay,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      cssEase: 'linear',
      mobileFirst: true, //optional, to be used only if your page is mobile first
      responsive: [{
        breakpoint: 480,        
        settings: {
          slidesToShow: 1,
          centerMode: true,
          initialSlide: 0,
          variableWidth: true
        }
      }]
    };

    var children = this.state.images;

    //alert(" Autoplay - " + this.state.autoPlay + "       should update - " + this.state.trigger);
    return (
      <div>
        <Slider {...settings}>
          {children.map(index => {
            return <div height="auto" width="100%">
              <img width="350" height="200" src={index}/>
              {/* <Card >
                            <CardMedia
                                    // image="https://picsum.photos/id/1029/2048/2048"
                                    image={index}
                                    title=""
                            />
                        </Card> */}
                        </div>;
          })}
        </Slider>
      </div>
    );
  }
}

export default App1;