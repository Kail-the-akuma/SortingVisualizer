import React, {Component} from 'react';
import './App.css';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import Sidebar from './components/header/Sidebar'



function App() 
{
  return (
    <div className="App">
      <SortingVisualizer/>
      <Sidebar/>
    </div>
  );
}

export default App;