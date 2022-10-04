import {
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Footer from "./Components/Footer";


function App() {
  
  return (
    <>
   <div >
      <NavBar />
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
      <Footer/>
    
 </div>
    </>
  );
}

export default App;
