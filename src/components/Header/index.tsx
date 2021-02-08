import React, { useState } from 'react';

import { Container, MenuSection } from './styles';

const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <h3>Health Food</h3>

      <MenuSection open={open}>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
        >
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </button>
        <button type="button" onClick={() => setOpen(!open)}>
          <nav>
            <ul>
              <li>
                <a href="/">HEALTHY RECIPES</a>
              </li>
              <li>
                <a href="/">BLOG</a>
              </li>
              <li>
                <a href="/">JOIN</a>
              </li>
              <li>
                <a href="/">REGISTER</a>
              </li>
            </ul>
          </nav>
        </button>
      </MenuSection>
    </Container>
  );
};

export default Header;
