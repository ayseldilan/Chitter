import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import SidebarOption from './components/SidebarOption';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import Post from './components/Post';

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;