import React, { Suspense, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingScreenComponent from './Container/LoadingScreen/LoadingScreenComponent';
import axios from "axios";
import { GET_LOGGED_IN_USER } from "./utils/Constant";
const App = React.lazy(() => import('./App'));
export const UserContext = createContext();

axios.get(GET_LOGGED_IN_USER).then((success) => {
  renderComponent(success.data.user);
}).catch((error) => {
  console.error(error)
  renderComponent(null);
});



function renderComponent(user) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreenComponent></LoadingScreenComponent>}>
          <App></App>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

