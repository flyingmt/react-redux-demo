import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import CakeContainer from './components/CakeContainers';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
};

export default App;
