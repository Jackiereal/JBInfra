import {
    Container,
    Typography,
    Grid,
    Card,
    CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ContactForm } from "./ContactForm";


const useStyles = makeStyles({
  rootGrid:{
    marginBottom:'50px',
    background:'#eee',
  },
  root: {
    width: '100%',
    color: '#f78320',
    fontSize: '24px',
    fontFamily: 'Avenir next',
    backgroundColor: '#fff',
    marginTop:'25px',
    marginBottom:'20px'
  },
  imageroot:{
    height: '360px',
    outline: 'none',
    border:'none',
    width: '4%',
    float:'left',
},
media: {
    height: '0',
    paddingTop: '56.25%', // 16:9,
    boxShadow:'none',
    border:'none',
    verticalAlign:'middle',

  },
description: {
    fontFamily: 'Avenir next',
   textAlign:'justify',

},
cardMedia:{
    boxShadow:'none',
    width:'90%',
    margin:'auto',
    height:'auto',
    marginTop:'20px',
    marginBottom:'20px', 
}

})

export const Contact = ()=>{
    const classes = useStyles();
    return (
        <Container fixed>
            <Typography  classes={{ root : classes.root}}>Contact Us</Typography>
            <Grid container justifyContent="center" spacing={2} className={classes.rootGrid}>
                    <Grid item xs={6} >
                        <Card className={classes.cardMedia}>
                            <CardMedia
                                    className={classes.media}
                                    // image="https://picsum.photos/id/1029/2048/2048"
                                    image="aboutus.png"
                                    title="Aboutus"

                                />
                        </Card>
                    </Grid>
                    <Grid item xs={6} >
                        <ContactForm/>
                    </Grid>
                </Grid>
        </Container>
    )
}