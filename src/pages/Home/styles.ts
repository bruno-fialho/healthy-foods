import styled from 'styled-components';

import { HiArrowNarrowRight } from 'react-icons/hi';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 2048px;
  overflow: hidden;

  display: flex;
  flex: 1 0;
  flex-direction: column;
`;

export const Menu = styled.nav`
  /* list-style: none; */
  padding-right: 9.36%;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 800;

  display: flex;
  flex-direction: row;
`;

export const Search = styled.div`
  position: relative;
  width: 100%;
  min-height: 414px;

  display: flex;
  flex-direction: column;
`;

export const SearchImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 64.67%;
  max-width: 469px;
  min-height: 290px;
  max-height: 400px;

  display: flex;

  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 736px) {
    width: 466px;
    max-width: 100%;
    height: 397px;

    > img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const SearchBox = styled.div`
  position: relative;
  margin-top: 160px;
  margin-left: 75px;
  width: 224px;
  height: 150px;

  @media (max-width: 736px) {
    margin-top: 410px;
  }
`;

export const SearchText = styled.div`
  width: 185px;
  height: 100px;

  h2 {
    color: #1d164d;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;

  input {
    position: relative;
    width: 184px;
    height: 28px;
    background: #fff;
    color: #adb0c1;
    border: 1px solid #adb0c1;
    border-radius: 2px;
    margin-right: 10px;

    padding: 8px;

    &:active,
    &:hover,
    &:focus,
    &:focus-within {
      border: 1px solid #adb0c1;
    }
  }

  button {
    position: relative;
    width: 29px;
    height: 29px;
    border-radius: 2px;
    background: #badc58;
    color: #fff;
    cursor: pointer;
  }
`;

export const BestRecipes = styled.div`
  position: relative;
  width: 100vw;
  min-height: 414px;
  /* padding: 15px; */

  background: #fafafc;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const RecipesTextContainer = styled.div`
  position: relative;
  max-width: 272px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  > h3 {
    color: #1d164d;
  }

  > p {
    margin-top: 6px;
    font-size: 0.58rem;
    color: #adb0c1;
    text-align: center;
  }

  > p:last-child {
    margin-bottom: 20px;
  }
`;

export const RecipesContainer = styled.div`
  position: relative;
  width: 82.61%;

  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  justify-content: center;
  /* align-content: space-around;
  justify-content: space-between; */
  }
`;

export const Recipe = styled.div`
  flex: 0 0 284px;
  width: 284px;
  max-width: 100%;
  height: 122px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 8px 20px 0 rgba(0, 0, 0, 0.09);
  background: #fff;

  display: flex;
  flex-direction: row;

  img {
    position: relative;
    margin-top: -2px;
    width: 138px;
    height: 102%;
  }

  .content {
    position: relative;
    margin-left: 16px;
    width: 115px;

    display: flex;
    flex-direction: column;

    h5 {
      position: relative;
      margin-top: 28px;
      color: #1d164d;
    }

    button {
      position: relative;
      width: 75px;
      height: 26px;
      margin-top: 10px;
      border-radius: 4px;
      font-weight: 400;
      font-size: 0.65rem;
      background: #badc58;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Services = styled.div`
  position: relative;
  width: 100%;
  height: 390px;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

export const ServicesImageBox = styled.div`
  position: relative;
  width: 390px;
  height: 100%;

  display: flex;
  align-items: center;

  img {
    position: relative;
    overflow: hidden;
    width: 390px;
    height: 390px;
    margin-left: -3px;
    z-index: -1;
  }
`;

export const ServicesTextContainer = styled.div`
  position: relative;
  width: 226px;
  height: 244px;
  margin-right: 136px;

  > h3 {
    color: #1d164d;
  }

  p {
    margin-top: 20px;
    font-size: 0.58rem;
    color: #adb0c1;
    /* text-align: ; */
  }

  button {
    width: 80px;
    height: 28px;
    color: #fff;
    background: #badc58;
    box-shadow: 0 10px 5px 0 rgb(186, 220, 88, 0.15);
    margin-top: 26px;

    border-radius: 2px;
    cursor: pointer;
  }
`;

export const Blog = styled.div`
  position: relative;
  width: 100%;
  min-height: 414px;
  overflow: hidden;

  background: #fafafc;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* .blog-swiper {
    width: 188px;
    height: 244px;
  } */

  .slider-wrap {
    overflow: hidden;
    height: 100%;
    width: 100%;
    background: red;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: 188px !important;
    height: 244px;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #fff;
  }
  .swiper-slide {
    opacity: 0.25;
  }
  .swiper-container {
    overflow: visible;
  }
  .swiper-slide-visible {
    opacity: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    color: #badc58;
    cursor: pointer;
  }

  .swiper-button-prev::after {
    margin-top: 6px;
    margin-left: 7px;
    font-size: 25px;
    width: 30px;
    height: 30px;
  }

  .swiper-button-next::after {
    margin-top: 6px;
    margin-left: 10px;
    font-size: 25px;
    width: 30px;
    height: 30px;
  }

  /* if 1 slide */
  @media (max-width: 465) {
    .swiper-slide-next {
      opacity: 0.25;
    }
  }

  /* if 2 slides */
  @media (max-width: 665px) {
    .swiper-slide-next + .swiper-slide {
      opacity: 0.25;
    }
  }

  /* if 3 slides */
  @media (max-width: 865px) {
    .swiper-slide-next + .swiper-slide + .swiper-slide {
      opacity: 0.25;
    }
  }
`;

export const BlogTextContainer = styled.div`
  position: relative;
  max-width: 272px;
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  > h3 {
    color: #1d164d;
  }

  > p {
    margin-top: 6px;
    font-size: 0.58rem;
    color: #adb0c1;
    text-align: center;
  }

  > p:last-child {
    margin-bottom: 20px;
  }
`;

export const BlogPostSlide = styled.div`
  width: 188px;
  height: 244px;
  border-radius: 4px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1), 0 8px 20px 0 rgba(0, 0, 0, 0.09);
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    position: relative;
    width: 100%;
    height: 135px;
    margin-top: -1px;
  }

  h5 {
    position: relative;
    width: 175px;
    height: 35px;
    margin-top: 16px;
    margin-left: 13px;
  }

  .author {
    position: relative;
    width: 100%;
    height: 30px;
    margin-top: 16px;
    margin-left: 13px;

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    p {
      margin-left: 4px;
    }
  }
`;

export const Membership = styled.div`
  position: relative;
  width: 100%;
  min-height: 362px;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

export const MembershipTextContainer = styled.div`
  position: relative;
  width: 244px;
  height: 90px;
  /* margin-top: 136px; */
  margin-left: 13.6vw;

  display: flex;
  flex-direction: column;

  .input {
    position: relative;
    width: 244px;
    height: 28px;
    margin-top: 18px;
    margin-left: 0;

    display: flex;
    flex-direction: row;
    /* align-items: flex-start; */
    justify-content: space-between;

    > input {
      width: 185px;
      height: 28px;
      background: #fff;
      border: 1px solid #cbcbcb;
      border-radius: 2px;
      padding: 8px;
      margin-left: 0;
    }

    > button {
      width: 50px;
      height: 28px;
      color: #fff;
      background: #badc58;
      box-shadow: 0 10px 5px 0 rgb(186, 220, 88, 0.15);

      border-radius: 2px;
      cursor: pointer;
    }
  }

  @media (max-width: 650px) {
    max-width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const MembershipImageBox = styled.div`
  position: relative;
  width: 366px;
  height: 100%;

  display: flex;
  align-items: center;

  img {
    position: relative;
    overflow: hidden;
    width: 366px;
    height: 362px;
    /* margin-left: -3px; */
    z-index: -1;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: auto;

    img {
      overflow: hidden;
      width: 100%;
      height: auto;
    }
  }
`;
