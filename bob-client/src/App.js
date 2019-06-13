import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterView from './router';
import Bus from './components/Utils/Bus'
import {Flash} from './components/Flash';

window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));
function App() {
  return (
    <div className="App">
        <div>
          <Flash />
          <BrowserRouter>
            <RouterView></RouterView>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
