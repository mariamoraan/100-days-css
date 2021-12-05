import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Challenge1 from './challenges/challenge1';
import Challenge2 from './challenges/challenge2';
function App() {
  return (
    <BrowserRouter>
        <div className="layout">
          <Routes>
              <Route path="/" element={<Challenge1/>} />
              <Route path="/challenge-1" element={<Challenge1/>} />
              <Route path="/challenge-2" element={<Challenge2/>} />
          </Routes>
        </div>    
      </BrowserRouter>
  );
}

export default App;
