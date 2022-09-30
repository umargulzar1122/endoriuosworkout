import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Video from "./assets/video/video.mp4";
import NavComponent from './Container/NavContainer/NavComponent';
const LoginComponent = React.lazy(() => import("./Container/UserContainer/LoginComponent/LoginComponent"));
const HeroContainer = React.lazy(() => import("./Container/HeroContainer/HeroContainer"));
const RegisterComponent = React.lazy(() => import("./Container/UserContainer/RegisterComponent/RegisterComponent"));
const ProfileComponent = React.lazy(() => import("./Container/UserContainer/ProfileComponent/ProfileComponent"));
const ExerciseContainer = React.lazy(() => import('./Container/ExerciseContainer/ExerciseContainer'));
function App() {
  return (
    <>
      <NavComponent></NavComponent>
      {/* <div className='hero'> */}
      {/* <div style={{ display: "flex", flexDirection: "column" }}> */}

      <Routes>
        <Route path='/' element={<HeroContainer></HeroContainer>}></Route>
        <Route path='/exercises' element={<ExerciseContainer />}> </Route>
        <Route path='/login' element={<LoginComponent />}></Route>
        <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
      </Routes>

      {/* <Routes>
            <Route path='/' element={<ContainerComponent />}></Route>
            
            <Route path='/profile' element={<ProfileComponent />}></Route>
            <Route path='/exercises' element={<ExerciseContainer />}> </Route>
          </Routes> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
