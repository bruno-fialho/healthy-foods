import React, { useRef, useState } from 'react';
import Hamburger from '../Hamburger/index';
import { Container } from './styles';

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  // const divRef = useRef<HTMLInputElement>(null);

  // console.log(divRef);
  // // const ref = useRef() as RefObject<HTMLDivElement>;

  // // const foo = () => {
  // //     if (!ref.current) return;
  // //     const rect = ref.current.getBoundingClientRect();
  // //     setAnimClass(
  // //       rect.top >= 0 && rect.bottom <= window.innerHeight ? styles.animClass : ""
  // //     );
  // //   };

  // // React.useEffect(() => {
  // //   if (emailRef.current)
  // //     console.log("Current email value: " + emailRef.current.value);
  // // }, [state.email]);
  // const handleClick = () => {};
  // const menuSection = document.getElementById('#menu-section');
  // const menuToggle = document.getElementById('#menu-toggle');

  // // const menuSection = document.querySelector('.menu-section');
  // // const menuToggle = document.querySelector('.menu-toggle');
  // console.log('menuSection', menuSection);
  // console.log('menuToggle', menuToggle);

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.body.style.overflow = show ? 'hidden' : 'initial';

      if (menuSection) {
        menuSection.classList.toggle('on', show);
        setShow(!show);
      }
    });
  }

  return (
    <Container>
      <h3>Health Food</h3>

      <div className="menu-section on" id="menu-section">
        <Hamburger
          className="menu-toggle"
          id="menu-toggle"
          ref={divRef}
          onClick={() => handleClick()}
        />
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
      </div>
    </Container>
  );
};

export default Header;
