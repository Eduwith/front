import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './reset.css';
import Volunteer from './routes/Volunteers';
import VolunteerDetail from './components/volunteer/VolunteerDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/volunteers" element={<Volunteer/>}></Route>
        <Route path="/volunteers/no=:idex" element={<VolunteerDetail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
