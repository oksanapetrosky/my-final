import './App.css';
import React from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
} from "react-router-dom";

import Home from './Home';
import Bestsellers from './Bestsellers';
import Dresses from './Dresses';
import Shoes from './Shoes';
import Weddings from './Weddings';
import Tops from './Tops';
import Bottoms from './Bottoms';


function App() {
 return ( <Router>
     <nav>
     <Link to="/#" className="logo">FabulousFits</Link>
        <Link to="/home" className="link">Home</Link>
        <Link to="/bestsellers" className="link">Bestsellers</Link>
        <Link to="/dresses" className="link">Dresses</Link>
        <Link to="/shoes" className="link">Shoes</Link>
        <Link to="/weddings" className="link">Weddings</Link>
        <Link to="/tops" className="link">Tops</Link>
        <Link to="/bottoms" className="link">Bottoms</Link>
     </nav>


    <Routes>
     <Route path="/home" element={<Home />} />
     <Route path="/bestsellers" element={<Bestsellers/>} />
     <Route path="/dresses" element={<Dresses/>} />
     <Route path="/shoes" element={<Shoes/>} />
     <Route path="/weddings" element={<Weddings/>} />
     <Route path="/tops" element={<Tops/>} />
     <Route path="/bottoms" element={<Bottoms/>} />
    </Routes>
    </Router>

 );
}


export default App;
