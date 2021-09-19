import { Container, Typography, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    heading:{
     color: '#f78320',
     fontSize: '18px',
     marginBottom: '10px',
    },
    lines:{
        color: '#4a4a4a',
        fontSize: '13px',
        // textAlign:'left',
        padding: '5px',
    },
    grid:{

    }
})

export const Address = (props:any) =>{
    const address = props.address;
    const classes = useStyles();
    console.log(address.lines)
    return (
        <Container>
            <Typography className={classes.heading}>{address.type}</Typography>
            <Grid className={classes.grid}>
            {address.lines.map( (line:any) => {
                 return <Typography className={classes.lines}>{line}</Typography>
            })}
            </Grid>
        </Container>
    )
}