import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './about';
import Navbar from './navbar';
function App(){
 return(
<main>
<Routes>
<Route path = "/" Component={Home}/>
<Route path = "/about" Component={About}/>
</Routes>
<Navbar/>
</main>
  )
}
export default App;
import React from "react";
function Home(){
return(<h1>This is home page</h1> )
}
export default Home;
function Navbar(){
return(
<div>
    <div>
<Link to="/" >Home</Link>
</div>
<br></br>
<div>
<Link to="/about">About</Link>
</div>
</div>
)
}
export default Navbar
