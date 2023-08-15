import React from 'react';

function Header() {
  const buttonNames = ['Home'];

  return (
    <header className="header">
      <ul className="nav-list">
        {buttonNames.map((name, index) => (
          <li key={index}>
            <a href="/"></a><button className="nav-button">{name}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
