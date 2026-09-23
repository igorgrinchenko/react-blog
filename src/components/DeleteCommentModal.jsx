import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

function DeleteCommentModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Delete comment?</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this comment? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button onClick={onConfirm} variant="contained" color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteCommentModal;
