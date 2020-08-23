import React from "react";
import SearchName from "./SearchName.js";
import SearchDOB from "./SearchDOB.js";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      <div className="collapse navbar-collapse row" id="navbarNav">
      <div className="input-group col-8">
          <SearchName />
        </div>
        <div className="input-group col-8">
        
        </div>
            <div className="input-group col-8">
          <SearchDOB />
        </div>
        
      </div>
    </nav>
  );
}
export default Nav;