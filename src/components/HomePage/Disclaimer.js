import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
    
  root:{
    color: '#f78320',
    fontFamily: 'MontserratSemiBold',
    fontSize: '14px',
    textAlign:'center'
  },

  paragraph:{
    color: '#4a4a4a',
    fontFamily: 'Montserrat',
    fontSize: '11px',
  }

})

export default function Disclaimer() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        TransitionProps={{
          style: {
              transitionDelay: 4000,
          }
      }}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className={classes.root}>{"Disclaimer"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography paragraph={true} className={classes.paragraph}>
                The disclaimer provided below applies to our website and by proceeding further, you acknowledge and agree to the terms and conditions set out in this disclaimer.
            </Typography>
            <Typography paragraph={true} className={classes.paragraph}>
              Our website is being developed and upgraded to confirm to the applicable requirements under the Real Estate (Regulation and Development) Act, 2016.
            </Typography>
            <Typography paragraph={true} className={classes.paragraph}>
              By proceeding further and accessing the website, you agree, confirm and acknowledge that all the information provided (including any images, brochures, plans etc.) is for informational purposes only and that you will not rely or depend on such information for the purposes of making any purchase in any of our projects. You agree and acknowledge that the information available on this website does not constitute an invitation to purchase, advertisement, marketing or offer for sale of any of the units in our projects. Neither the Company nor the Company’s promoters, employees etc. are responsible for any action or decision taken by you by relying on the information provided on this website.
            </Typography>
            <Typography paragraph={true} className={classes.paragraph}>
              The Company or its promoters, employees etc. will not be liable in any manner whatsoever for any claims, losses, damages, etc. that may arise in connection with the use of the website.
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}