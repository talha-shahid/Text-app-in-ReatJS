import React from 'react'
import Proptypes from 'prop-types'
// import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  // const pinkMode= ()=>{
  //   document.body.style.backgroundColor= "pink";  }


  return (
   <> 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <Link to="/">
  <img src={require('./t2.jpg')} width='70' style={{border: '1px solid black',borderRadius: '10px', cursor:'pointer'}}/></Link>
    <Link to="/" className="navbar-brand" style={{marginLeft: '10px'}}><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active" aria-current="page" >About</Link>
        </li>

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
      {/* <div id="pink" onClick={pinkMode}></div> */}


      <div className={`custom-control custom-switch text-${props.mode==='light'?"dark":"light"}`}>
  <input onClick={props.toggleMode} type="checkbox" className="custom-control-input" id="customSwitch1"/>
  <label className="custom-control-label mx-1" htmlFor="customSwitch1">Dark Mode</label>
</div>


    </div>

  </div>

</nav>
<hr style={{margin:'0px'}}/>
</>
  )
}

Navbar.prototypes = {
    title: Proptypes.string.isrequired
}
Navbar.defaultProps={
    title: "Set Title"
}
