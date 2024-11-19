import './App.css';
import RSI from './Components/rsi';
import Volume from './Components/volume';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScripSearch from './Components/scripSearch'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './Components/news';
import MapDemo from './Components/mapdemo';

function App() {
const [scripsearching,setScripSearching]=useState(false);
  return (
    
    <div >
     
      {scripsearching && <ScripSearch /> }
      {/* <News/> */}
      <MapDemo/>
    </div>
  );
}

export default App;
