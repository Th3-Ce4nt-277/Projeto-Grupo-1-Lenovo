import React from 'react';

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="header-divisor">
        {}
        <Link className="logolink" to="/">
          <img
            src="https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg"
            alt="Lenovo"
          />
        </Link>
        <input type="text" id="search-bar" placeholder="Procurar" />
        <ul className="header-btn-actions">
          <li>
            <button>
              <i className="fi fi-rr-user"></i>
            </button>
          </li>
          <li>
            <button>
              <i className="fi fi-rr-heart"></i>
            </button>
          </li>
          <li>
            {}
            <Link to="/carrinho">
              <button>
                <i className="fi fi-rr-shopping-cart"></i>
              </button>
            </Link>
          </li>
        </ul>
      </div>
      {} 
    </header>
  );
};