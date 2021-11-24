import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {
    Container, Grid, Typography, Card, CardMedia
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const images = [
  "p1.jpg",
];

const useStyles = makeStyles({
    container:{
        maxWidth:'100%',
    },
    grid:{
        marginTop:'50px',
    },
    gridInner:{
        marginTop:'30px'
    },
    gridItems:{
        marginLeft:'20px',
        marginRight:'20px'
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '14px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
    },
    description:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
        marginBottom:'20px',
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '11px',
            lineHeight: '22px',
          },
          ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '12px',
            lineHeight: '24px',
          },
          ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '14px',
            lineHeight: '28px',
          },
          ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '16px',
            lineHeight: '32px',
          },
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    },
    cardRoot:{
        // position:'relative',
        maxWidth: '100%',
        height:'100%',
        boxShadow: 'none',
        marginTop:'20px',
        position: 'relative'    
    },
    media:{
        width: '100%',
        height:'100%',
        backgroundSize:'contain',
        backgroundPosition:'top',
       
    },
    title:{
        fontFamily: 'Montserrat',
        fontSize: '18px',
        textAlign: 'center',
        lineHeight: '36px',
        marginBottom:'10px',
        color:'#f78320',
    },
    containerRoot:{
        // marginTop:'50px',
        // backgroundImage:  'url("intro.gif")',
        margin:0,
        padding:0,
        maxWidth: '100%',
        height:'auto',
       
        ['@media (min-width:0px)']: { // eslint-disable-line no-useless-computed-key
          height:'200px'
        },
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
          height:'400px'
        },
        ['@media (min-width:900px)']: { // eslint-disable-line no-useless-computed-key
          height:'600px'
        },
        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
          height:'750px'
        },
        ['@media (min-width:1513px)']: { // eslint-disable-line no-useless-computed-key
          height:'1100px'
        },
  
        // paddingTop:'200px',
        // paddingLeft:'100px'
    },
    listItem:{
        fontFamily: 'Montserrat',
        fontSize: '13px',
        textAlign: 'left',
        lineHeight: '26px',
        color:'#4a4a4a',
    },
})


class App2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const style = {
        marginTop: "100px"
    }
    return (
      <div>
          <div>
            <img src={this.props.image} width="70%" height="650px" onClick={() => this.setState({ isOpen: true })}/>
             
            </div>  

        {isOpen && (
          <Lightbox style={style}
            mainSrc={this.props.image}
          />
        )}
      </div>
    );
  }
}
export default App2;