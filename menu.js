import React, { useState } from 'react';

import Membership from './membership';
import Reviews from './reviews';
import Loyaltypoints from './loyaltypoints';
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        <loyaltypoints />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Membership /> Home
            </li>
            <li>
              <Reviews /> Profile
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;