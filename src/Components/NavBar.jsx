import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom'
export default function NavBar() {
  let l=useNavigate();
  const [city, setCity] = useState("");
    const onChange = (e) => {
        setCity(e.target.value);
  }
  const saveCity=(e)=>{
    e.preventDefault();
    localStorage.setItem("city",city);
    console.log("save",city)
    l("/");
    window.location.reload();
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" onClick={()=>{localStorage.clear()}}>Daily Weather</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link active" onClick={()=>{localStorage.clear()}} to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
    
      </ul>
    </div>
    <form class="d-flex me-5">
        <input className="form-control" type="search" placeholder="Enter City Name" name='city' onChange={onChange} aria-label="Search"/>
        <button className="btn btn-outline-light" onClick={saveCity} type="button">Search</button>
      </form>
  </div>
</nav>
    </div>
  )
}
