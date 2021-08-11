import React from "react";
import {Link} from "react-router-dom";

import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Link to="/articles" className="logo-text">
              <div className="logo">
                <span>VenchOK |</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header