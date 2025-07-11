import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // ✅ Import your App component
import "../src/app.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
