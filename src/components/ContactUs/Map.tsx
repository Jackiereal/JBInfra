import { 
    Container,
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
})

const handleMapClick = ()=>{
    window.open('https://maps.google.com')
}

export const Map = (props:any) =>{
    const classes = useStyles();
    return (
        <Grid container>
            <Card className={classes.cardMedia} onClick={handleMapClick}>
                <CardMedia
                        className={classes.media}
                        image={props.map}
                        title="Aboutus"

                    />
            </Card>
        </Grid>
    )
}