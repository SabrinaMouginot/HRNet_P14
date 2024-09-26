import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees); // Sélectionne les employés depuis Redux

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

  // Crée les lignes du DataGrid à partir des employés
  const rows = employees.map((employee, index) => ({
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
