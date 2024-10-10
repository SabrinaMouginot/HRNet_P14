import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees); // Sélectionne les employés depuis Redux

  const [searchTerm, setSearchTerm] = useState(''); // State pour la recherche

  // Définit les colonnes du DataGrid
  const columns = [
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'startDate', headerName: 'Start Date', flex: 1 },
    { field: 'department', headerName: 'Department', flex: 1 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', flex: 1 },
    { field: 'street', headerName: 'Street', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'state', headerName: 'State', flex: 1 },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
  ];

  // Filtre les employés en fonction de la recherche
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Crée les lignes du DataGrid à partir des employés filtrés
  const rows = filteredEmployees.map((employee, index) => ({
    id: index,
    firstName: employee.firstName,
    lastName: employee.lastName,
    startDate: employee.startDate,
    department: employee.department,
    dateOfBirth: employee.dateOfBirth,
    street: employee.street,
    city: employee.city,
    state: employee.state,
    zipCode: employee.zipCode,
  }));

  return (
    <div className="container">
      <h1>Current Employees</h1>

      {/* Champ de recherche */}
      {employees.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ mr: 1 }}>
            Search :
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Met à jour la valeur de recherche
          />
        </Box>
      )}
      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
            components={{ Toolbar: GridToolbar }}
            componentsProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </Box>
      )}

      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
