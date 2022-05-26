import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Ticket from './components/Ticket';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/ticket/:id" element={<Ticket />}/>
      </Routes>
    </div>
  );
}

export default App;
