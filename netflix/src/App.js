import React from 'react'
import Navbar from './components/Navbar';
import {action,Orginals} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';



function App() {
  return (
    <div className="App">
         <Navbar/>
         <Banner/>
         <Rowpost url={Orginals} title='Netflix Orginals'/>
         <Rowpost url={action} title= 'Action' isSmall/>
         
    </div>
  );
}

export default App;
