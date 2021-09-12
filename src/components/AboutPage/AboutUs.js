import {
    Container,
    Typography,
    Card,
    Grid,
    CardMedia

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      color: '#f78320',
      fontSize: '24px',
      fontFamily: 'Avenir next',
      backgroundColor: '#fff',
      marginTop:'25px',
      marginBottom:'20px'
    },
    cardbutton:{
      fontSize: '13px',
      fontFamily: 'Avenir next',
      backgroundColor: '#f78320',
      color:'#fff',
      margin:'-10px 30px 0px 30px',
      paddingLeft: '30px',
      paddingRight:'30px',
      "&:hover": {
          backgroundColor: '#fff',
          color:'#f78320',
          border:'1px solid #f78320',
      },
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
        paddingTop: '56.25%', // 16:9
      },
    description: {
        fontFamily: 'Avenir next',
       textAlign:'justify',

    }
  
  });


export const AboutUs = (props)=>{
    const classes = useStyles();
    return (
        <div>
            <Container fixed>
                <Typography  classes={{ root : classes.root}}>ABOUT US</Typography>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item xs={6} >
                    <Card>
                            <CardMedia
                                    className={classes.media}
                                    image="https://picsum.photos/id/1029/2048/2048"
                                    title="Aboutus"
                                />
                            </Card>
                    </Grid>
                    <Grid item xs={6} >
                        <Typography  classes={{ root : classes.description}}> {props.aboutus !== undefined? props.aboutus : 'No description'}</Typography>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
       
    )
}