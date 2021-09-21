import { 
    Typography, 
    Grid,
    CardMedia,
    Card
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   
    containerRoot:{
        
        backgroundImage:  'url("quote.png")',
        backgroundSize:'100% auto',
        height:'300px',
        width:'70%',
        backgroundRepeat: 'no-repeat',
    },
    cardMedia:{
        boxShadow:'none',
        width:'70%',
        margin:'auto',
        height:'auto',
        marginTop:'20px',
        marginBottom:'20px', 
    },
    media: {
        height: '0',
        paddingTop: '56.25%', // 16:9,
        boxShadow:'none',
        border:'none',
        verticalAlign:'middle',
    
      },
      heading:{
        color: '#f78320',
        fontSize: '18px',
        marginBottom: '10px',
        textAlign:'center',
       },
})

const handleMapClick = ()=>{
    window.open('https://maps.google.com')
}

export const Map = (props:any) =>{
    const classes = useStyles();
    const address = props.address
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.heading}>{address.type} LOCATION</Typography>
            </Grid>
            <Grid item xs ={12}>
                <Card className={classes.cardMedia} onClick={handleMapClick}>
                    <CardMedia
                            className={classes.media}
                            image={address.map}
                            title="Aboutus"

                        />
                </Card>
            </Grid>
        </Grid>
    )
}