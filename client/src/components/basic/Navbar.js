import React, { useState } from 'react';
import './/../../App.css';

function Navbar() {
  const [loginHovered, setloginHovered] = useState(false);
  const toggleLoginHover = () => setloginHovered(!loginHovered);
  
  const [signupHovered, setsignupHovered] = useState(false);
  const toggleSignupHover = () => setsignupHovered(!signupHovered);
  return (
      <div className="NAVBAR">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand display-1" href="#">OK-DATA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Documentation</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Examples</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                            <button 
                              className={loginHovered ? 'btn btn-primary' : 'btn btn-dark'}
                              onMouseEnter={toggleLoginHover}
                              onMouseLeave={toggleLoginHover}
                            >Login</button>
                              <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                            <button 
                              className={signupHovered ? 'btn btn-warning' : 'btn btn-dark'}
                              onMouseEnter={toggleSignupHover}
                              onMouseLeave={toggleSignupHover}
                            >Sign Up</button>
                              <span className="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  );
}

export default Navbar;
