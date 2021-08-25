import {
    Container,
    Grid,
    Typography,
    IconButton,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

 

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width:'90%',
        margin:'auto',
        marginBottom:'30px'
      },
    simpletext:{
        color: '#4a4a4a',
        fontSize: '10px',
         alignSelf:'center',
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
      },
      text:{
        textAlign:'left',
        color: '#4a4a4a',
        fontSize: '12px',
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
            title:'For candidates',
            links: [
                'text',
                'sample text',
                'new text',
                'sample new text',
                'new link'
            ]
        },
        {
            title:'About us',
            links: [
                'text',
                'sample text',
                'new text',
                'sample new text',
                'new link'
            ]
        },
        {
            title:'Helpful Resources',
            links: [
                'text',
                'sample text',
                'new text',
                'sample new text',
                'new link'
            ]
        }
    ]
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    
                </Grid>
                {FooterLinksArray.map((item)=>(
                    <Grid item xs={3}>
                        <FooterLinks linkgroup={item}/>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={3} >
                <Grid item xs={6} className={classes.simpletext}>
                    <Typography variant='body1'  align="left">
                        Copyright 2019 JB Infra Projects
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                <IconButton >
                         <FacebookIcon />
                     </IconButton>
                     <IconButton >
                         <TwitterIcon />
                     </IconButton>
                     <IconButton >
                         <InstagramIcon />
                     </IconButton>
                     <IconButton >
                         <LinkedInIcon />
                     </IconButton>
                </Grid>
            </Grid>
        </div>
        // <Container fixed className={classes.root}>
        //     <Grid item xs={12}>
        //         <Grid item xs={3}>
        //             Item 1
        //         </Grid>
        //         <Grid item xs={3}>
        //         Item 1
        //         </Grid>
        //         <Grid item xs={3}>
        //         Item 1
        //         </Grid>
        //         <Grid item xs={3}>
        //         Item 1   
        //         </Grid>
        //     </Grid>
        //     {/* <div>
        //         <div className={classes.copyright}>
        //             <Typography variant='body1' className={classes.simpletext} align="left">
        //                 Copyright 2019 JB Infra Projects
        //             </Typography>
        //         </div>
        //         <div className={classes.iconButton}>
        //             <IconButton >
        //                 <FacebookIcon />
        //             </IconButton>
        //             <IconButton >
        //                 <TwitterIcon />
        //             </IconButton>
        //             <IconButton >
        //                 <InstagramIcon />
        //             </IconButton>
        //             <IconButton >
        //                 <LinkedInIcon />
        //             </IconButton>
        //         </div>
        //     </div> */}
        //      <div style={{ width: '100%' }}>
        //         <Box display="flex" p={1} >
        //             <Box p={1} flexGrow={1} >
        //             Item 1
        //             </Box>
        //             <Box p={1} >
        //             Item 2
        //             </Box>
        //             <Box p={1} >
        //             Item 3
        //             </Box>
        //         </Box>
        //     </div>
        // </Container>
    )
}