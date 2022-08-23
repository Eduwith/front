import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import setAuthorizationToken from './components/user/setAuthorizationToken';

const root = ReactDOM.createRoot(document.getElementById('root'));

setAuthorizationToken(localStorage.token);

root.render(
      <RecoilRoot>
        <App />
      </RecoilRoot>  
);
