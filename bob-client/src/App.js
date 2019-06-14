import React from 'react';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import RouterView from './router';
import Bus from './components/Utils/Bus'
import {Flash} from './components/Flash';

window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));
function App() {
  return (
    <div className="App">
      <Flash />
      <BrowserRouter>
        <RouterView></RouterView>
      </BrowserRouter>
    </div>
  );
}

export default App;
