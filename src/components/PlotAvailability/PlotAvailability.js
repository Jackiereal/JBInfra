import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import {

    Typography,

} from '@material-ui/core';
const useStyles = makeStyles({
    
    containerRoot:{
        marginTop:'65px',
        marginBottom:'30px',
        color: '#f78320',
        fontSize: '24px',
        fontFamily: 'Montserrat',
    },
    iframe:{
        width:'100%',
        height:'800px',
    }
})

const plotUrl = {
    'JB00040' : 'http://43.240.65.20/NextoraMaps/home/project/JB00040/',
    'JBI00050' : 'http://43.240.65.20/NextoraMaps/home/project/JBI00050/',
    'JBI00052' : 'http://43.240.65.20/NextoraMaps/home/project/JBI00052/',
    'JBI00054' : 'http://43.240.65.20/NextoraMaps/home/project/JBI00054/',
    '12345' : 'http://43.240.65.20/NextoraMaps/home/project/12345/',
    'JB003' : 'http://43.240.65.20/NextoraMaps/home/project/JB003/',
    'JB004' : 'http://43.240.65.20/NextoraMaps/home/project/JB004/',
}

const plotName = {
    'JB00040' : 'JB Nature Valley - Phase I',
    'JBI00050' : 'JB Nature Valley - Phase II',
    'JBI00052' : 'JB Nature Valley - Phase III',
    'JBI00054' : 'JB Nature Valley - Phase IV',
    '12345' : 'JB Serene City',
    'JB003' : 'JB Serene City II',
    'JB004' : 'JB Serene City III',
}


export const PlotAvailability = ( props )=>{
    const classes = useStyles();
    const { project } = useParams()
    return (
        
        <div className={classes.containerRoot}>
    <object type="text/html" width="100%" height="800px" data={plotUrl[project]}>
    </object>
        </div>

    )
}