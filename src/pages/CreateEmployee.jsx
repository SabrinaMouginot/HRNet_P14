import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/modalSlice';
import Modal from '@mui/material/Modal';
import { Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../app.css';

function CreateEmployee() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.startDate) formErrors.startDate = 'Start date is required';
    if (!formData.department) formErrors.department = 'Department is required';
    if (!formData.dateOfBirth) formErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.street) formErrors.street = 'Street is required';
    if (!formData.city) formErrors.city = 'City is required';
    if (!formData.state) formErrors.state = 'State is required';
    if (!formData.zipCode) formErrors.zipCode = 'Zip code is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, dispatch your employee creation here
      dispatch(toggleModal());
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className='container'>
        <Link to="/users">View Current Employees</Link>
        <h2>Create Employee</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div>
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
            {errors.startDate && <p className="error">{errors.startDate}</p>}
          </div>

          <div>
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
            {errors.department && <p className="error">{errors.department}</p>}
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
          </div>

          <div>
            <label>Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>

          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>

          <div>
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>

          <div>
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
            {errors.zipCode && <p className="error">{errors.zipCode}</p>}
          </div>

          <Button type="submit" variant="contained" color="primary">
            Create Employee
          </Button>
        </form>
      </div>

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
