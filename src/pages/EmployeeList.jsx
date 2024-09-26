// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// function EmployeeList() {
//   const employees = useSelector((state) => state.employees.employees); // Sélectionne les employés depuis Redux

//   return (
//     <div className="container">
//       <h1>Current Employees</h1>
//       {employees.length === 0 ? (
//         <p>No employees found</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Start Date</th>
//               <th>Department</th>
//               <th>Date of Birth</th>
//               <th>Street</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Zip Code</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee, index) => (
//               <tr key={index}>
//                 <td>{employee.firstName}</td>
//                 <td>{employee.lastName}</td>
//                 <td>{employee.startDate}</td>
//                 <td>{employee.department}</td>
//                 <td>{employee.dateOfBirth}</td>
//                 <td>{employee.street}</td>
//                 <td>{employee.city}</td>
//                 <td>{employee.state}</td>
//                 <td>{employee.zipCode}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       <Link to="/">Home</Link>
//     </div>
//   );
// }

// export default EmployeeList;


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
