import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
