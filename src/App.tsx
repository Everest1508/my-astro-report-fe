import { Routes, Route } from 'react-router-dom';
import Home from './pages/BirtdateDeatailsForm';
import Result from './pages/AstroReport';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
