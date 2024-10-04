import { StrictMode } from 'react'; //StrictMode is a component provided by react meant to be wrapped around other components
//StrictMode component executes every component function twice instead of just once during DEVELOPEMENT. 
import ReactDOM from 'react-dom/client';


import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
    <App />
</StrictMode>
);
