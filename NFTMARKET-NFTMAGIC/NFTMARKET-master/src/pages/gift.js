import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useState } from 'react';
const { useReducer } = React
const TOGGLE_BOX = '[GiftBox] Toggle'
const toggleBox = () => {
  return { type: TOGGLE_BOX }
}
const DEFAULT = { open: false, wasOpen: false }
const reducer = (
  state = DEFAULT,
  { type }
) => {

  switch (type) {
    case TOGGLE_BOX: {
      return {
        open: !state.open,
        wasOpen: state.open
      }
    }
    default: return state
  }
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const GiftBox = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT)
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box className="gift" >
      <Box className="floor">
        {/* <Box className='shadow'></Box> */}
        <Box className='shadow2'></Box>
        <Box className='shadow3'></Box>
        <Box className="box">
          {
            state.open
              ? (<i className="icon_mail_alt heart-gift" onClick={() => setOpen(true)} />)
              : <></>
          }
          <Box
            className={
              state.open ? 'lid open'
                : state.wasOpen ? 'lid close'
                  : 'lid'
            }
            onClick={() => dispatch(toggleBox())}>

            <Box className="qmark">{
              state.open ? '' : '?'
            }
            </Box>
            <Box className="face ltop"></Box>
            <Box className="face lleft"></Box>
            <Box className="face lright"></Box>
          </Box>

          <Box className="face top"></Box>
          <Box className="face left"></Box>
          <Box className="face right"></Box>
        </Box>
      </Box>
      <h2 className='gift-font' style={{ position: "absolute" }}>
        {
          state.open ?
            <>
            <span>S</span><span>u</span><span>r</span><span>p</span><span>r</span><span>i</span><span>s</span><span>e</span>
            </>
            :
            <>
              <span>Click</span> <span>to</span> <span>open!</span>
            </>
        }
      </h2>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}
        aria-describedby="alert-dialog-slide-description"
        className="dialog"
      >
        <DialogTitle>Your Gift</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img src='assets/template/36.png' style={{ height: "400px" }}></img>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => handleClose()}>Accept</Button>
          <Button variant="outlined" onClick={() => handleClose()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default GiftBox