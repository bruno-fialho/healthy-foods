import styled, { css } from 'styled-components';

interface MenuSectionProps {
  open?: true | false;
}

export const Container = styled.header`
  position: absolute;
  width: 100vw;
  height: auto;
  min-height: 60px;
  top: 0;
  left: 0;
  padding: 0 10.19vw;
  z-index: 30;

  background: transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h3 {
    position: relative;
    color: #badc58;
    /* padding-left: 75px; */
    width: 25%;
    /* padding: 15px 0; */
  }

  @media (max-width: 735px) {
    h3 {
      width: 50%;
    }
  }
`;

export const MenuSection = styled.div<MenuSectionProps>`
  display: inline-flex;
  width: 75%;

  button {
    width: 100%;
    background: transparent;
    border: none;
  }

  button.menu-toggle {
    width: 40px;
    height: 30px;
    background: transparent;
    border: none;
  }

  ul {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    /* display: inline-flex;
    list-style: none;
    color: #a6a8a6;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem; */

    li {
      list-style: none;
      /* margin-right: 10px; */
      /* padding: 0 8px; */

      &:last-child {
        > a {
          background: #fff;
          color: #badc58;
          border-radius: 4px;
        }
      }
      /* a {
        cursor: pointer;
        padding: 4px 8px;
        transition: all 0.2s ease-in-out;
        will-change: background-color color;
      }
      a:hover {
        background-color: #939593;
        color: var(--primary-white);
      } */
    }

    li a {
      text-decoration: none;
      width: 100%;
      height: 100%;
      color: #fff;
      font-weight: 700;
      font-size: 0.6rem;
      padding: 10px 12px;
      transition: all 250ms linear 0s;
    }
    /* li + li {
      margin-left: 4px;
    }
    li + li::before {
      content: '';
      display: inline-block;
      width: 2px;
      height: 12px;
      margin-right: 4px;
      background-color: #a6a8a6;
      flex-wrap: wrap;
    } */
  }

  @media (max-width: 735px) {
    nav {
      display: none;
    }

    nav ul li + li::before {
      content: '';
      display: none;
    }

    .one,
    .two,
    .three {
      background-color: #fff;
      height: 5px;
      width: 100%;
      margin: 6px auto;
      transition-duration: 0.3s;
    }

    .menu-toggle {
      position: absolute;
      right: 10.19vw;
      top: 15px;
      width: 40px;
      height: 30px;
      /* margin-right: 20px; */
    }

    /* menu fullscreen */
    ${props =>
      props.open &&
      css`
        & {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #90d162;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        & nav {
          display: block;
        }

        & .menu-toggle {
          position: absolute;
          right: 25px;
          top: 15px;
          z-index: 150;
        }

        & .menu-toggle .one {
          transform: rotate(45deg) translate(7px, 7px);
        }

        & .menu-toggle .two {
          opacity: 0;
        }

        & .menu-toggle .three {
          transform: rotate(-45deg) translate(8px, -9px);
        }

        & nav ul {
          text-align: center;
          display: block;
          padding-top: 60px;
        }

        & nav ul li:last-child {
          a {
            border-radius: 0;
          }
          a:hover {
            border: 1px solid #1d164d;
            color: #1d164d;
            background: rgba(255, 255, 255, 0.7);
          }
        }

        & nav ul a {
          transition-duration: 0.5s;
          font-size: 2rem;
          line-height: 2rem;
          display: block;
          color: #fff;
          padding: 10% 0;
          /* padding: 16px 24px; */
          :hover {
            background: rgba(0, 0, 0, 0.2);
          }
        }
      `}
  }
`;
