import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Tickets from './components/Tickets';
import TicketView from './components/TicketView';
import Report from './components/Report';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/tickets" element={<Tickets />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/ticket/:id" element={<TicketView />}/>
      </Routes>
    </div>
  );
}

export default App;
