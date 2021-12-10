import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Challenge1 from './challenges/challenge1';
import Challenge2 from './challenges/challenge2';
import Challenge3 from './challenges/challenge3';
import Challenge4 from './challenges/challenge4';
import NotFound from './components/notFound';
import Footer from './components/footer';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Menu/>
        <div className="layout">
          <Routes>
              <Route path="/challenge-1" element={<Challenge1/>} />
              <Route path="/challenge-2" element={<Challenge2/>} />
              <Route path="/challenge-3" element={<Challenge3/>} />
              <Route path="/challenge-4" element={<Challenge4/>} />
              <Route path="/" element={<Challenge1/>} />
              <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>  
        <Footer />  
      </BrowserRouter>
      </div>
  );
}

export default App;
