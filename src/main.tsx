import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);