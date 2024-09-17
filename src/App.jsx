import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/users" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
