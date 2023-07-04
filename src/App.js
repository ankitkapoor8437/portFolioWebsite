import './App.css';
import { Routes,Route } from 'react-router-dom';
import Portfolio from './routes/portfolio';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio/>} />
      </Routes>
    </div>
  );
}

export default App;
