import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Demo</div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>about</a>
            </li>
            <li>
              <a href='/'>Product</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
            <li className='btn'>
              <a href='/'>Leave</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
