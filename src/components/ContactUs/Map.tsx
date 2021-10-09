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
    window.open("https://www.google.com/maps/place/17%C2%B019'21.1%22N+78%C2%B033'29.3%22E/@17.3225196,78.5559619,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d17.3225196!4d78.5581506?hl=en-US")
}


const handleMapClick1 = ()=>{
    window.open("https://www.google.com/maps/place/17%C2%B019'17.8%22N+78%C2%B038'23.6%22E/@17.3216086,78.6377086,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d17.3216086!4d78.6398973?hl=en-US")
}

export const Maphead = (props:any) =>{
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
                            title="Contactus"

                        />
                </Card>
            </Grid>
        </Grid>
    )
}


export const Mapbranch = (props:any) =>{
    const classes = useStyles();
    const address = props.address
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography className={classes.heading}>{address.type} LOCATION</Typography>
            </Grid>
            <Grid item xs ={12}>
                <Card className={classes.cardMedia} onClick={handleMapClick1}>
                    <CardMedia
                            className={classes.media}
                            image={address.map}
                            title="Contactus"

                        />
                </Card>
            </Grid>
        </Grid>
    )
}