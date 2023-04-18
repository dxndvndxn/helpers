import React from 'react';
import './App.scss';
import { Debounce } from './components/debounce/Debounce';
import { Fibonacci } from './components/fibonacci/Fibonacci';

const App: React.FC = () => (
  <div className="app container">
    <div className="app__title"> Helpers </div>
    <Debounce />
    <Fibonacci />
  </div>
);

export default App;
