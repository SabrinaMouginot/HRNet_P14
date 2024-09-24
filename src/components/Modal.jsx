import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/modalSlice';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'; // Importer les composants MUI

const Modal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen); // Récupérer l'état de la modale depuis Redux

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Modale</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ceci est le contenu de la modale.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;
