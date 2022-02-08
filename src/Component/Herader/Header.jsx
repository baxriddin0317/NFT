import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

// ======= navbar date =====
const navDate = [
    {
      name: 'New Loan',
      path: '/'
    },
    {
      name: 'My Loans',
      path: '/loans'
    },
    {
      name: 'Provide Liquidity',
      path: '/liquidity'
    }
  ]
  
function Header() {

    // get Location
    const {pathname} = useLocation();
    const activeNav = navDate.findIndex(e => e.path === pathname);
    // list ref
    const listRef = useRef();

  return <div className='header'>
      {navDate.length > 0 && <ul className='header__list' ref={listRef}>
          {navDate.map((data, index) => (
              <li key={index}  className={index === activeNav ? "active" : ""} onClick={() => {
                console.log(listRef.current.classList);
                listRef.current.classList.remove("active");
              }}>
                  <Link to={data.path} >{data.name}</Link>
              </li>
          ))}
       </ul>}
  </div>;
}

export default Header;
