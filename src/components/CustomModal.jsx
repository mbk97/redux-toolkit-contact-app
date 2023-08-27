import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ open, title, children, handleClose }) => {
  return (
    <Dialog
      open={open}
      fullWidth
      onClose={handleClose}
      maxWidth="sm"
      className="bg-[rgba(0,0,0,0.8)]"
    >
      <DialogTitle className="flex justify-between items-center">
        <p className="font-semibold">{title}</p>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomModal;
