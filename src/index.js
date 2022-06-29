import React from 'react';
import ReactDOM from 'react-dom/client';

import './style/index.css';
import reportWebVitals from './reportWebVitals';

import Header from "./Header";
import "./style/header.css"

import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Header />
		<Footer />
	</React.StrictMode>
);
reportWebVitals();
