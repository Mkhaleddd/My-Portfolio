import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import  {installTwicpics}  from "@twicpics/components/react";
import "@twicpics/components/style.css";
installTwicpics({"domain": "https://mkhaleddd.twic.pics"});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
