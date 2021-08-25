import {
    Card,
    CardContent,
    CardHeader,
    Typography,
    Avatar,
    Badge,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
      width: '360px',
      height: '200px',
      borderRadius:'20px',
      backgroundColor: '#f78320',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1)',
      transition: "transform 0.15s ease-in-out",
      "&:hover": {
          transform: "scale3d(1.05, 1.05, 1)" 
      },
    },
    cardtitle:{
        color: '#fff',
        fontSize: '14px',
        textAlign:'center',
        marginBottom:'10px',
    },
    cardtext:{
        color: '#fff',
        fontSize: '12px',
        textAlign:'center',
      },
    headerRoot:{
        display: 'flex',
        '& > *': {
          margin: '10px',
        },
        justifyContent:'center',
    },
    avatarScatter1:{
        display: 'flex',
        '& > *': {
          marginRight: '100px',
          marginLeft:'100px',
        },
        justifyContent:'center',
    },
    avatarScatter2:{
        display: 'flex',
        '& > *': {
          marginRight: '50px',
          marginTop:'100px',
          marginLeft:'50px',
        },
        justifyContent:'center',
    },
    avatar: {
        width: '60px',
        height: '60px',
        border: '5px solid #fff',
        borderRadius: '100%',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.1, 1.1, 1)" 
        },
    },
  });

export const TestimonialCard = (props:any)=>{

    const classes = useStyles() 
    return (
        <>
        {/* <Badge 
            badgeContent={
            <Avatar alt="Avatar" 
                src="https://picsum.photos/id/1005/100/100" 
                className={classes.avatar}
            />}
        >
        </Badge> */}
         <div className={classes.avatarScatter2}>
            <Avatar alt="Avatar" src="https://picsum.photos/id/1011/100/100" className={classes.avatar}/>
        </div>
        <div className={classes.avatarScatter1}>
            <Avatar alt="Avatar" src="https://picsum.photos/id/1025/100/100" className={classes.avatar}/>
        </div>
        <Card classes={{root: classes.root}}>
           
            <div className={classes.headerRoot}>
                <Avatar alt="Avatar" src="https://picsum.photos/id/1005/100/100" className={classes.avatar}/>
            </div>

            <CardContent>
                <Typography variant='body1' className={classes.cardtitle} align="left">
                    {props.list.name}
                </Typography>
                <Typography variant='body1' className={classes.cardtext} align="left">
                    {props.list.description}
                </Typography>
            </CardContent>
        </Card>
        <div className={classes.avatarScatter2}>
            <Avatar alt="Avatar" src="https://picsum.photos/id/1074/100/100" className={classes.avatar}/>
        </div>
        <div className={classes.avatarScatter1}>
            <Avatar alt="Avatar" src="https://picsum.photos/id/177/100/100" className={classes.avatar}/>
        </div>
        </>
    )
}