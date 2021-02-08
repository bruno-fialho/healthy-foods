import React from 'react';

import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { BiSearch } from 'react-icons/bi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Illustration from '../../assets/Illustration.svg';
import ServicesImage from '../../assets/bloco_services.svg';
import BlogImage01 from '../../assets/blog_image_1.svg';
import Avatar01 from '../../assets/avatar01.png';
import BlogImage02 from '../../assets/bloco_image_2.svg';
import Avatar02 from '../../assets/avatar02.png';
import BlogImage03 from '../../assets/bloco_image_3.svg';
import Avatar03 from '../../assets/avatar03.png';
import BlogImage04 from '../../assets/bloco_image_4.svg';
import Avatar04 from '../../assets/avatar04.png';
import MembershipImage from '../../assets/bloco_final_image.svg';
import Comida01 from '../../assets/comida_1.svg';
import Comida02 from '../../assets/comida_2.svg';
import Comida03 from '../../assets/comida_3.svg';
import Comida04 from '../../assets/comida_4.svg';

import {
  Container,
  Search,
  SearchImage,
  SearchBox,
  SearchText,
  SearchInput,
  BestRecipes,
  RecipesTextContainer,
  RecipesContainer,
  Recipe,
  Services,
  ServicesImageBox,
  ServicesTextContainer,
  Blog,
  BlogTextContainer,
  BlogPostSlide,
  Membership,
  MembershipTextContainer,
  MembershipImageBox,
} from './styles';

SwiperCore.use([Navigation]);

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Search>
        <SearchImage>
          <img src={Illustration} alt="illustration" />
        </SearchImage>

        <SearchBox>
          <SearchText>
            <h2>Ready for Trying a new recipe?</h2>
          </SearchText>
          <SearchInput>
            <input type="text" placeholder="Search Healthy Recipes" />
            <button type="button">
              <BiSearch />
            </button>
          </SearchInput>
        </SearchBox>
      </Search>

      <BestRecipes>
        <RecipesTextContainer>
          <h3>Our Best Recipes</h3>
          <p>
            Far far away, behind the word montains, far from the countries
            Vakalia and Consonantia, there live the blind texts.
          </p>
        </RecipesTextContainer>
        <RecipesContainer>
          <Recipe>
            <img src={Comida01} alt="comida-1" />
            <div className="content">
              <h5>Broccoli Salad with Bacon</h5>
              <button type="button">See Recipe</button>
            </div>
          </Recipe>
          <Recipe>
            <img src={Comida02} alt="comida-2" />
            <div className="content">
              <h5>Classic Beef Burgers</h5>
              <button type="button">See Recipe</button>
            </div>
          </Recipe>
          <Recipe>
            <img src={Comida03} alt="comida-3" />
            <div className="content">
              <h5>Classic Potato Salad</h5>
              <button type="button">See Recipe</button>
            </div>
          </Recipe>
          <Recipe>
            <img src={Comida04} alt="comida-4" />
            <div className="content">
              <h5>Cherry Cobber on the Grill</h5>
              <button type="button">See Recipe</button>
            </div>
          </Recipe>
        </RecipesContainer>
      </BestRecipes>

      <Services>
        <ServicesTextContainer>
          <h3>The best...</h3>
          <p>
            Far far away, behind the word montains, far from the countries
            Vakalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live Bookmarksgrove right at the coast of Semantics,
            a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <button type="button">Know More</button>
        </ServicesTextContainer>
        <ServicesImageBox>
          <img src={ServicesImage} alt="services-img" />
        </ServicesImageBox>
      </Services>

      <Blog>
        <BlogTextContainer>
          <h3>Read Our Blog</h3>
          <p>
            Far far away, behind the word montains, far from the countries
            Vakalia and Consonantia, there live the blind texts.
          </p>
        </BlogTextContainer>

        <Swiper
          navigation
          spaceBetween={12}
          slidesOffsetBefore={74}
          slidesPerView={1}
          watchSlidesVisibility
          breakpoints={{
            465: {
              slidesPerView: 2,
            },
            665: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
          }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <BlogPostSlide>
              <img src={BlogImage01} alt="blog-img01" />
              <h5>Quick-start guide to nuts and seeds</h5>
              <div className="author">
                <img src={Avatar01} alt="avatar01" />
                <p>Kevin Ibrahim</p>
              </div>
            </BlogPostSlide>
          </SwiperSlide>
          <SwiperSlide>
            <BlogPostSlide>
              <div className="blog-slide">
                <img src={BlogImage02} alt="blog-img02" />
                <h5>Nutrition: Tips for improving your health</h5>
                <div className="author">
                  <img src={Avatar02} alt="avatar02" />
                  <p>Kevin Ibrahim</p>
                </div>
              </div>
            </BlogPostSlide>
          </SwiperSlide>
          <SwiperSlide>
            <BlogPostSlide>
              <div className="blog-slide">
                <img src={BlogImage03} alt="blog-img03" />
                <h5>The top 10 benefits of eating healthy</h5>
                <div className="author">
                  <img src={Avatar03} alt="avatar03" />
                  <p>Kevin Ibrahim</p>
                </div>
              </div>
            </BlogPostSlide>
          </SwiperSlide>
          <SwiperSlide>
            <BlogPostSlide>
              <div className="blog-slide">
                <img src={BlogImage04} alt="blog-img04" />
                <h5>What Mistakes about Healthy Food</h5>
                <div className="author">
                  <img src={Avatar04} alt="avatar04" />
                  <p>Kevin Ibrahim</p>
                </div>
              </div>
            </BlogPostSlide>
          </SwiperSlide>
        </Swiper>
      </Blog>

      <Membership>
        <MembershipTextContainer>
          <h3>Join our membership to get special offer</h3>
          <div className="input">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email adress"
            />
            <button type="button">Join</button>
          </div>
        </MembershipTextContainer>
        <MembershipImageBox>
          <img src={MembershipImage} alt="membership-img" />
        </MembershipImageBox>
      </Membership>

      <Footer />
    </Container>
  );
};

export default Home;
