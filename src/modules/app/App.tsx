import React from 'react';
import './App.scss';
import { Debounce } from './components/debounce/Debounce';

const App: React.FC = () => (
  <div className="app container">
    <div className="app__title"> Helpers </div>
    <Debounce />
  </div>
);

export default App;
