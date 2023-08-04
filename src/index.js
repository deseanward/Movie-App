import React from 'react';
import ReactDOM from 'react-dom/client';

import { MovieProvider } from './store/context/movies.context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MovieProvider>
			<App />
		</MovieProvider>
	</React.StrictMode>
);
