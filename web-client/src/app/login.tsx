import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export function LoginModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get('action');

  const handleClose = () => {
    setSearchParams({});
  };

  return (
    <Dialog
      open={action === 'login'}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{'Enter user credentials'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Login</Button>
      </DialogActions>
    </Dialog>
  );
}
