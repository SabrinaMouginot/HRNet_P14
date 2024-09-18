function EmployeeList() {
    return (
      <div className="container">
      <h1>Current Employees</h1>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Start Date</th>
              <th>Department</th>
              <th>Date of Birth</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
        </table>
      
      <a href="/">Home</a>
    </div>
    );
  }
  
  export default EmployeeList;