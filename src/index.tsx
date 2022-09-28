import Airtable from 'airtable';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

export const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY || '';
export const AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID || '';
export const AIRTABLE_TABLE_ID = process.env.REACT_APP_AIRTABLE_TABLE_ID || '';
console.log('AIRTABLE_API_KEY:', AIRTABLE_API_KEY);
console.log('AIRTABLE_BASE_ID:', AIRTABLE_BASE_ID);
console.log('AIRTABLE_TABLE_ID:', AIRTABLE_TABLE_ID);


Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: AIRTABLE_API_KEY
});
export const OST = Airtable.base(AIRTABLE_BASE_ID);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
