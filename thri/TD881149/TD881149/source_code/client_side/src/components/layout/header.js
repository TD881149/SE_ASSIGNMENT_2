import React from "react";
import { Link } from "react-router-dom";
import Home from "../home";
const Header = props => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
          {/* navbar  */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
            <Link to='/news' className="nav-link" >Test Api Call</Link>
            </li>
          </ul>
        </div>
      </nav>
      );
};
export default Header