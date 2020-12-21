import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Button } from "./Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ArrowButtons = css`
  height: 50px;
  width: 50px;
  cursor: pointer;
  color: #fff;
  background: #000d1a;
  border-radius: 50px;
  margin-right: 1rem;
  padding: 10px;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 30px;
  display: flex;
  z-index: 10;
`;

const PrevArrow = styled(FaArrowLeft)`
  ${ArrowButtons}
`;

const NextArrow = styled(FaArrowRight)`
  ${ArrowButtons}
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    z-index: 2;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  /* height: 100%; */
  /* width: 100%; */
  object-fit: cover;
`;
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: white;

  h1 {
    font-size: clamp(1.4rem, 2rem, 3rem);
    text-shadow: 2px 2px #212529;
    color: #fff;
    margin-bottom: 1rem;
  }
  p {
    text-shadow: 1px 1px #212529;
    font-size: 1.4rem;
  }
`;

const HeroButton = styled(Button)`
  width: 160px;
  height: 40px;
  font-size: 1.4rem;
  border-radius: 0px;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const Hero = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, length]);

  return (
    <HeroSection>
      <HeroWrapper>
        {data.map((item, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={item.image} alt={item.alt} />
                  <HeroContent>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <HeroButton
                      primary={true}
                      to={item.path}
                      big={false}
                      css={`
                        max-width: 160px;
                      `}
                    >
                      {item.label}
                    </HeroButton>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
