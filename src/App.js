import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Challenge1 from './challenges/challenge1';
function App() {
  return (
    <BrowserRouter>
        <div className="layout">
          <Routes>
              <Route path="/" element={<Challenge1/>} />
              <Route path="/challenge-1" element={<Challenge1/>} />
          </Routes>
        </div>    
      </BrowserRouter>
  );
}

export default App;
