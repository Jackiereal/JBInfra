import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
const useStyles = makeStyles({
    
    containerRoot:{
        marginTop:'100px',
        marginBottom:'30px',
    },
    iframe:{
        width:'100%',
        height:'800px',
    }
})

const plotUrl = {
    'JB00040' : 'http://43.240.65.20/NextoraMaps/home/project/JB00040',
    'JBI00050' : 'http://43.240.65.20/NextoraMaps/home/project/JBI00050',
    'JBI00052' : 'http://43.240.65.20/NextoraMaps/home/project/JBI00052',
    'JBI00054' : 'http://43.240.65.20/NextoraMaps/home/project/JBI00054',
    '12345' : 'http://43.240.65.20/NextoraMaps/home/project/12345',
    'JB003' : 'http://43.240.65.20/NextoraMaps/home/project/JB003',
    'JB004' : 'http://43.240.65.20/NextoraMaps/home/project/JB004',
}

export const PlotAvailability = ( props )=>{
    const classes = useStyles();
    const { project } = useParams()
    return (
        <div className={classes.containerRoot}>
            <iframe className={classes.iframe} src={plotUrl[project]} />
        </div>

    )
}