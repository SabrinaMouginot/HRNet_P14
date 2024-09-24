import MyForm from "../components/MyForm";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../redux/modalSlice';
import Modal from '@mui/material/Modal';
import { Button, Box, Typography } from '@mui/material'; // Import MUI components
import '../app.css';

function CreateEmployee() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen); // Récupérer l'état d'ouverture de la modale

  // Fonction pour gérer l'ouverture de la modale après la soumission du formulaire
  const handleSubmitForm = () => {
    dispatch(openModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>

      {/* Moon formulaire */}
      <MyForm onSubmit={handleSubmitForm} />

      {/* Modale */}
      <Modal open={isOpen} onClose={handleClose}>
        <Box 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: 400, 
            bgcolor: 'background.paper', 
            boxShadow: 24, 
            p: 4 
          }}
        >
          <Typography variant="h6" component="h2">
            Employé créé avec succès !
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Fermer
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateEmployee;
