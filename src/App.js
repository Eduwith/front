import './App.css';
import './reset.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Join from './components/user/Join';
import Home from './routes/Home';
import MenteeMentoring from './routes/MenteeMentoring';
import Mentoring from './routes/Mentoring';
import Navbar from './components/home/Navbar';
import MenteeRecruit from './components/mentoring/MenteeRecruit';
import MentorRecruit from './components/mentoring/MentorRecruit';
import TestMain from './components/test/TestMain';
import TestQna from './components/test/TestQna';
import TestResult from './components/test/TestResult';

function App() {

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            {/* 회원가입, 로그인, 멘토링 */}

            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<Home />}></Route>
            
            <Route path="/join" element={<Join />}></Route>

            <Route path="/mentoring/mentor" element={<Mentoring/>}></Route>
            <Route path="/mentoring/mentee" element={<MenteeMentoring/>}></Route>

            <Route path="/mentoring/:keyword" element={<Mentoring />}></Route>
            <Route path="/mentoring/filter" element={<Mentoring />}></Route>
            
            <Route path="/mentorRecruit" element={<MentorRecruit />}></Route>
            <Route path="/menteeRecruit" element={<MenteeRecruit />}></Route>
            
            <Route path="/test" element={<TestMain />}></Route>
            <Route path="/testqna" element={<TestQna />}></Route>
            <Route path="/result" element={<TestResult />}></Route>


            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
