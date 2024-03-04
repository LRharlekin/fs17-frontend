import React, { useState, forwardRef, ReactElement, Ref } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const OutOfScopeDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(true);

  const handleClickDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickDialogOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Beyond the scope of this demo project"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are requesting a feature, functionality or resource that is
            beyond the scope of this demo project. Please check out some of the
            other features that have already been implemented.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OutOfScopeDialog;
