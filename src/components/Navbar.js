import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="chevron-icon">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <span>crypto coins</span>
      <div className="nav-icons">
        <FontAwesomeIcon icon={faMicrophone} />
        <FontAwesomeIcon icon={faGear} className="gears" />
      </div>
    </div>
  );
}

export default Navbar;
