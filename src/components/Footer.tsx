import {
    Grid,
    Typography,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { CopyrightOutlined } from '@material-ui/icons';

 

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:'100%',
        margin:'auto',
        marginBottom:'30px'
      },
    simpletext:{
        color: '#4a4a4a',
        fontSize: '13px',
        alignSelf:'center',
        fontFamily: 'Montserrat',
        // alignContent:'center',
      },
      iconButton: {
        display: 'flex',
       justifyContent:'left',
       width:'50%',
      },
      copyright:{
        display: 'flex',
        justifyContent:'right',
        width:'50%',
      },
      title:{
        color: '#000',
        fontSize: '14px',
        margin: ' 2px 0px',
        textAlign:'left',
        fontFamily: 'Montserrat',
      },
      text:{
        textAlign:'left',
        color: '#4a4a4a',
        fontSize: '12px',
        fontFamily: 'Montserrat',
      },
      copyrightfont:{
          fontSize: '18px',
          marginRight:'5px',
          paddingTop:'5px',
          fontFamily: 'Montserrat',
      },
      gridContainer:{
        marginTop:'20px',
      },
      logoImage:{
          width:'100px',
          margin:'auto',
      },
      cardbutton:{
          marginLeft:'10px',
        "&:hover": {
            backgroundColor: '#f78320',
            color:'#fff',
        },
      },
      
})

const FooterLinks = (props:any)=>{
    const classes = useStyles();
    return (
        <>
            <Typography variant='body1' className={classes.title} align="left">
                {props.linkgroup.title}
            </Typography>
            {props.linkgroup.links.map( (value:string) =>(
                <Typography variant='body1' className={classes.text} align="left">
                    {value}
                </Typography>
                
            ))}
           
        </>
    )
}

export const Footer = ()=>{
    const classes = useStyles();
    const FooterLinksArray = [
        {
            title:'Head Office',
            links: [
                'Plot No : 1, 2nd & #rd Floor, Adj. B.D.Reddy',
                'Gardens, Chaitanya Nagar, B.N. Reddy Nagar',
                'Hyderabad - 500 070',
                'sales@jbinfraprojects.in',
                '040 2409 0939'
            ],
            
        },{
            title:'Branch Office',
            links:[
            "JB'S NATURE VALLEY",
            '7-1B,Sai Nagar Colony,Peddamberpet,Hayatnagar Mandal,',
            'Hyderabad,',
            'Telangana 501505',
            'customercare@jbinfraprojects.com',
            '040 2955 4577'
            ]
        }
    ]
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={10} sm={2}>
                    <img className={classes.logoImage} src={'logo-orange.gif'} alt="logo"></img>
                </Grid>
                {FooterLinksArray.map((item)=>(
                    <Grid item xs={10} sm={3}>
                        <FooterLinks linkgroup={item}/>
                    </Grid>
                ))}
                <Grid item xs={10} sm={2} className={classes.gridContainer}>
                    <Typography className={classes.simpletext}  align="left">
                        customercare@jbinfraprojects.com
                    </Typography>
                    <Typography className={classes.simpletext}  align="left">
                        040 2955 4577
                    </Typography>
                    
                    <Typography className={classes.simpletext}  align="left">
                        <CopyrightOutlined className={classes.copyrightfont}/>Copyright 2021 JB Infra Projects
                        
                    </Typography>
                </Grid>
                <Grid item xs={10} sm={2} className={classes.gridContainer}>
                    <IconButton className={classes.cardbutton}>
                         <FacebookIcon onClick={() => { window.open('https://www.facebook.com/Jbinfraofficial/','_blank')}}/>
                     </IconButton>
                     <IconButton className={classes.cardbutton} >
                         <YouTubeIcon onClick={() => { window.open('https://www.youtube.com/channel/UCGBYyonpe0xh1flaxJ_0NjA/videos','_blank')}}/>
                     </IconButton>
                     <IconButton className={classes.cardbutton}>
                         <InstagramIcon onClick={() => { window.open('https://www.instagram.com/jbinfragroupofficial/','_blank')}}/>
                     </IconButton>
                     <IconButton className={classes.cardbutton}>
                         <LinkedInIcon onClick={() => { window.open('https://www.linkedin.com/company/jb-infraprojects/','_blank')}}/>
                     </IconButton>
                </Grid>
            </Grid>
        </div>
       
    )
}