import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Video from "./assets/video/video.mp4";
import NavComponent from './Container/NavContainer/NavComponent';
const LoginComponent = React.lazy(() => import("./Container/UserContainer/LoginComponent/LoginComponent"));
const ContainerComponent = React.lazy(() => import("./Container/ContainerComponent.jsx"));
const RegisterComponent = React.lazy(() => import("./Container/UserContainer/RegisterComponent/RegisterComponent"));
const ProfileComponent = React.lazy(() => import("./Container/UserContainer/ProfileComponent/ProfileComponent"));
function App() {
  return (
    <>
      <video autoPlay={true} muted playsInline={true} loop={true} id="backvideo">
        <source src={Video}>
        </source>
      </video>
      <div className='hero'>
        <NavComponent></NavComponent>
        <Routes>
          <Route path='/' element={<ContainerComponent />}></Route>
          <Route path='/login' element={<LoginComponent />}></Route>
          <Route path='/register' element={<RegisterComponent></RegisterComponent>}></Route>
          <Route path='/profile' element={<ProfileComponent />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
