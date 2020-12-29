import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Signup, Signin} from '../SignForms'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [signin, setSignin] = React.useState(false);

  const handleSigninTrue = () => {
      setSignin(true)
      handleOpen()
  }
  const handleSigninFalse = () => {
    setSignin(false)
    handleOpen()
}
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ul className= "nav justify-content-end">
        <li className= "mr-5" type="button" onClick={handleSigninTrue} >Log In</li>
        <li className= "mr-5" type="button" onClick={handleSigninFalse}>Sign Up</li>
      </ul>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           {signin ? <Signin/> : <Signup/>}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}