import React from 'react'

const Navbar = ({version, name, changeName}) => {
  return (
    <nav className="navbar bg-danger">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 text-light" onClick={()=>changeName()}> 
      {name}</span>
      <span className="navbar-brand mb-0 h1 text-light">{version}</span>
      {/* <span className="navbar-brand mb-0 h1 text-light">{name2}</span> */}


    </div>
  </nav>
  )
}

Navbar.defaultProps = {
  name: "Todo-App",
  version: "1.0"
};
export default Navbar;
