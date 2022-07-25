import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import SupportAdmin from './component/SupportAdmin/index';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const path = window.location.pathname;

root.render(
  <>
    {/* {path.indexOf('/support') === -1 ? <App /> : <SupportAdmin />} */}
    <App />
  </>
);

