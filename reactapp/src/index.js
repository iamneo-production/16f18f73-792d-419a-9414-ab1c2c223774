import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Choose from './newpages/choose';
import Newsletter from './newpages/newsletter';
import Advp from './newpages/advp';
import Booking from './newpages/example';
import Request from './newpages/request';
import SessionHist from './newpages/sessionhist';
import NewButton from './newpages/newbutton';
import Notification from './newpages/notifications';
import Payment from './newpages/payment';
import { Provider } from 'react-redux';
import Store from '../src/Redux/Store';
import NNLogin from './newpages/loginauth';
import NSignup from './newpages/signupauth';
import Signup from './newpages/signup';
import NLogin from './newpages/newlogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store ={Store}>
    <App />
    {/* <Booking/> */}
    {/* <NLogin/> */}
    {/* <NSignup/> */}
    {/* <Signup/> */}
  </Provider>
    {/* <Choose/> */}
    {/* <Newsletter/> */}
    {/* <Advp/> */}
    {/* <Booking/> */}
    {/* <Request/> */}
    {/* <SessionHist/> */}
    {/* <NewButton/> */}
    {/* <SidePanel/> */}
    {/* <Notification/> */}
    {/* <Payment/> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
