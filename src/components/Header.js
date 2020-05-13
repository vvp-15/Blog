import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav>
    <ul>
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/about" className="active">
        About
      </Link>
      <Link to="/help" className="active">
        Help
      </Link>
    </ul>
  </nav>
);
