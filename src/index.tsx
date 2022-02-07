import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Detailview from './Detailview';
import Finishview from './Finishview';
import Navigator from './Navigator';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <>
    <BrowserRouter>
    <Navigator />  
    </BrowserRouter>
     {/* <Detailview />  */}
      {/* <Finishview />   */}
      </>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
