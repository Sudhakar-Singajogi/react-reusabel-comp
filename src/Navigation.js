import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="left-nav"> 
        <li>
          <Link to="/password-generator">Password generator</Link>
        </li> 
        
      </ul>
    </nav>
  );
};

export default Navigation;