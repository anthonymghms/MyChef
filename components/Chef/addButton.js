import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import AddCard from './addCard';

export default function AddButton() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);

    }

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
        Add
      </Button>
   
   <Dialog open={open} onClose={handleClose}>
    <AddCard/>
   </Dialog>
   </>
  );
}