import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EnterParticipantData from './components/pages/EnterParticipantData';
import Participants from './components/pages/Participants';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
     <BrowserRouter>
     <NavBar/>
     <div className='nice-bg'>
     <Routes>
        <Route exact path="/" element={<EnterParticipantData/>} />
        <Route exact path="/participants" element={<Participants/>} />
      </Routes>
     </div>

     </BrowserRouter>
    </div>
  );
}

export default App;
