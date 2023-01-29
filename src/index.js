import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
