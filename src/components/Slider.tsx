import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation, Controller } from "swiper";
import { opacityInterface } from "../utils";

interface Props {
  activeSlide: number;
  setActiveDot: (value: any) => void;
}

const SliderComponent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 144px;
  .swiper {
    height: 100%;
    margin-left: 80px;
  }
  @media (max-width: 1440px) {
    padding-top: 72px;
    .swiper {
      margin-left: 20px;
    }
    &.swiper-wrapper {
      /* transform: translate3d(0px, 0, 0) !important; */
    }
  }
`;

const Title = styled.h3`
  position: relative;
  font-family: "bebas neue";
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  text-transform: uppercase;
  color: ${(props) => props.theme.blueLight};
`;

const Discription = styled.p`
  position: relative;
  font-family: "pt sans";
  font-weight: 400;
  /* min-width: 70%; */
  font-size: 20px;
  line-height: 160%;
  color: ${(props) => props.theme.text};
  @media (max-width: 1440px) {
    font-size: 14px;
    line-height: 120%;
  }
`;

const SliderElem = styled.div.attrs<opacityInterface>((props) => ({
  active: props.active,
  activeSlide: props.activeSlide,
}))<opacityInterface>`
  position: relative;
  height: auto;
  width: ${window.innerWidth <= 1440 ? "145%" : "95%"};
  transition: all 1.5s ease-in-out;
  opacity: ${({ active, activeSlide }) => (active === activeSlide ? "1" : "0.5")};
`;

const Slider: FC<Props> = ({ activeSlide, setActiveDot }) => {
  const swiperRef = useRef<any>(null);
  const [slidesPerView, setslidesPerView] = useState<number>(3);
  const [spaceBetween, setspaceBetween] = useState<number>(50);

  useEffect(() => {
    // console.log(activeSlide);
    if (swiperRef.current && swiperRef.current.swiper) {
      if (window.innerWidth <= 1440) {
        swiperRef.current.swiper.slideTo(activeSlide + 2);
      } else {
        swiperRef.current.swiper.slideTo(activeSlide + 3);
      }
      // console.log(swiperRef.current.swiper.activeIndex);
    }
  }, [activeSlide]);

  useEffect(() => {
    if (window.innerWidth <= 1440) {
      // setslidesPerView(2);
      setspaceBetween(75);
    } else {
      setspaceBetween(50);
      // setslidesPerView(3);
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 1440) {
        // setslidesPerView(2);
        setspaceBetween(75);
      } else {
        // setslidesPerView(3);
        setspaceBetween(50);
      }
    });
  }, []);

  const swipe = (swiper: any) => {
    console.log(swiper.activeIndex);
    if (window.innerWidth <= 1440) {
      // console.log(
      //   swiper.activeIndex <= 8 ? (swiper.activeIndex - 3 >= 0 ? swiper.activeIndex - 3 : 5) : 0
      // );
      setActiveDot(
        swiper.activeIndex <= 7 ? (swiper.activeIndex - 2 >= 0 ? swiper.activeIndex - 2 : 5) : 0
      );
    } else {
      setActiveDot(
        swiper.activeIndex <= 8 ? (swiper.activeIndex - 3 >= 0 ? swiper.activeIndex - 3 : 5) : 0
      );
    }
  };

  return (
    <SliderComponent>
      <Swiper
        ref={swiperRef}
        loop={true}
        grabCursor={true}
        slidesPerView={window.innerWidth <= 1440 ? 2 : 3}
        className="mySwiper"
        spaceBetween={spaceBetween}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => swipe(swiper)}
        // onSwiper={(swiper) => swipe(swiper)}
        modules={[Pagination, Navigation, Controller]}
        onSwiper={(swiper: any) => {
          swiper.controller.control = activeSlide;
        }}
        // slidesPerView={1}
        // spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation, Controller]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <SliderElem active={0} activeSlide={activeSlide}>
            <Title>2022</Title>
            <Discription>
              A new study published in the journal Nature suggests that a combination of genetic and
              environmental factors may play a role in the development of autism.
            </Discription>
          </SliderElem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderElem active={1} activeSlide={activeSlide}>
            <Title>2016</Title>
            <Discription>
              NASA's Juno spacecraft successfully enters orbit around Jupiter, allowing scientists
              to study the planet's atmosphere and magnetic field.
            </Discription>
          </SliderElem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderElem active={2} activeSlide={activeSlide}>
            <Title>2011</Title>
            <Discription>
              A study in the journal "Nature" suggests that the brains of people with anxiety
              disorders respond differently to threatening stimuli than the brains of people without
              anxiety disorders.
            </Discription>
          </SliderElem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderElem active={3} activeSlide={activeSlide}>
            <Title>2004</Title>
            <Discription>
              The United Nations High Commissioner for Refugees (UNHCR) reports that there are an
              estimated 9 million refugees, asylum seekers, and internally displaced people
              worldwide.
            </Discription>
          </SliderElem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderElem active={4} activeSlide={activeSlide}>
            <Title>1999</Title>
            <Discription>
              The United Nations Climate Change Conference in Bonn, Germany, reaches an agreement,
              known as the "Bonn Agreement," to reduce greenhouse gas emissions and slow the rate of
              global warming.
            </Discription>
          </SliderElem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderElem active={5} activeSlide={activeSlide}>
            <Title>1987</Title>
            <Discription>
              The Intermediate-Range Nuclear Forces Treaty (INF Treaty) is signed by U.S. President
              Ronald Reagan and Soviet leader Mikhail Gorbachev, leading to the elimination of
              intermediate-range nuclear missiles.
            </Discription>
          </SliderElem>
        </SwiperSlide>
      </Swiper>
      <div className="NextBtn">
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
        </svg>
      </div>
    </SliderComponent>
  );
};

export default Slider;
