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
import MyMentoApply from './components/mypage/MyMentoApply/MyMentoApply';
import MyMento from './components/mypage/MyMento/MyMento';
import MyStudy from './components/mypage/MyStudy';
import MyScrap from './components/mypage/MyScrap';
import MyPoint from './components/mypage/MyPoint';
import MyPage from './routes/MyPage';

import Volunteer from './routes/Volunteer';
import VolunteerDetail from './components/volunteer/VolunteerDetail';
import Study from './routes/Study';
import StudyDetail from './components/study/StudyDetail';
import StudyRegister from './components/study/StudyRegister';


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


            <Route path="/MyPage" element={<MyPage/>}></Route>
            <Route path="/MyMentoApply" element={<MyMentoApply/>}></Route>
            <Route path="/MyMento" element={<MyMento/>}></Route>
            <Route path="/MyStudy" element={<MyStudy/>}></Route>
            <Route path="/MyScrap" element={<MyScrap/>}></Route>
            <Route path="/MyPoint" element={<MyPoint/>}></Route>

            <Route path="/volunteers" element={<Volunteer/>}></Route>
            <Route path="/volunteers/no=:idex" element={<VolunteerDetail/>}></Route>

            <Route path="/studies" element={<Study/>}></Route>
            <Route path="/studies/:idex" element={<StudyDetail/>}></Route>
            <Route path="/studies/register" element={<StudyRegister/>}></Route>



            
          </Routes>
        </Router>


    </div>
  );
}

export default App;
