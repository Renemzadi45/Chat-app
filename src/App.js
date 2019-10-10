import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
      <Contact name="Ann King" avatar="https://randomuser.me/api/portraits/women/92.jpg" online={true}/>
      <Contact name="Joyce Graves" avatar="https://randomuser.me/api/portraits/women/33.jpg" online={false}/>
      <Contact name="Pat Bryant" avatar="https://randomuser.me/api/portraits/men/17.jpg" online={true}/>

    </div>
  );
}

export default App;
