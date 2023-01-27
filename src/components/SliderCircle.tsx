import { FC } from "react";
import styled from "styled-components";
import { Props_SliderCircleComponent } from "../utils";

const SliderCircle = styled.div`
  position: absolute;
  margin-left: 80px;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;
  /* width: 120px; */
  height: 88px;
  transform: translateY(100%);
  z-index: 9999;
  @media (max-width: 1440px) {
    margin-left: 5vw;
    height: 50px;
    width: auto;
    &:after {
      display: none;
    }
  }
  @media (max-width: 590px) {
    margin-left: 20px;
    font-size: 20px;
  }
`;

const SliderCircle__Stat = styled.div`
  position: relative;
  font-size: 14px;
  font-family: "pt sans";
  font-weight: 400;
  color: #42567a;
`;

const SliderCircle__Svgs = styled.div`
  position: relative;
  display: flex;
  flex-flow: row;
  span {
    position: relative;
    display: flex;
    padding: 18px;
    border-radius: 99px;
    border: 1px solid ${(props) => props.theme.borderDot};
    &:last-child {
      margin-left: 20px;
      transform: rotate(180deg);
    }
  }
  span svg {
    width: 10px;
    height: auto;
  }
  cursor: pointer;
  @media (max-width: 1440px) {
    span {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 25px;
      width: 25px;

      &:last-child {
        margin-left: 8px;
      }
    }
    span svg {
      width: 6px;
    }
  }
`;

const SliderCircleComponent: FC<Props_SliderCircleComponent> = ({ activeSlide, setActiveDot }) => {
  return (
    <SliderCircle>
      <SliderCircle__Stat>0{activeSlide + 1}/06</SliderCircle__Stat>
      <SliderCircle__Svgs>
        <span
          onClick={() => {
            setActiveDot((prev: any) => (prev <= 0 ? 5 : (prev -= 1)));
          }}
        >
          <svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </span>
        <span
          onClick={() => {
            setActiveDot((prev: any) => (prev >= 5 ? 0 : (prev += 1)));
          }}
        >
          <svg viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </span>
      </SliderCircle__Svgs>
    </SliderCircle>
  );
};

export default SliderCircleComponent;
