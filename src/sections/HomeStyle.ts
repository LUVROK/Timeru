import styled from "styled-components";
import { PropsDots, PropsDotsContent, PropsCircle2 } from "../utils";

const Section = styled.section`
  position: relative;
  height: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;
  left: auto;
  border-left: 1px solid ${(props) => props.theme.border};
  border-right: 1px solid ${(props) => props.theme.border};
  @media (max-width: 1440px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
  flex-flow: column;
`;

const TextNumber1 = styled.div`
  font-family: "pt sans";
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.02em;
  font-size: calc(6.9vh + 6.9vw);
  color: ${(props) => props.theme.blue};
  pointer-events: none;
`;

const TextNumber2 = styled.div`
  font-family: "pt sans";
  font-weight: bold;
  line-height: 160%;
  letter-spacing: -0.02em;
  font-size: calc(6.9vh + 6.9vw);
  color: ${(props) => props.theme.pink};
  pointer-events: none;
`;

const TimeruText = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: center;
`;

const Title = styled.h1`
  position: relative;
  font-family: "pt sans";
  font-size: calc(2vh + 2vw);
  font-weight: bold;
  line-height: 120%;
  margin-top: 15.5vh;
  margin-bottom: 8.88vh;
  padding: 0px 0px 0px 80px;
  color: ${(props) => props.theme.text};
  @media (max-width: 1440px) {
    padding: 0px 0px 0px 5vw;
    &:after {
      display: none;
    }
  }
  @media (max-width: 590px) {
    padding: 0px 0px 0px 20px;
    font-size: 20px;
  }
  &:after {
    position: absolute;
    content: "";
    width: 5px;
    left: 0;
    top: 0;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.blueLight} 0%,
      ${(props) => props.theme.pink} 100%
    );
  }
`;

const Line1 = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme.border};
  top: 50%;
  transform: translateY(50%);
  z-index: -1;
`;

const Line2 = styled.div`
  position: absolute;
  width: 1px;
  height: 100vh;
  background: ${(props) => props.theme.border};
  left: 50%;
  transform: translateX(50%);
  z-index: -1;
`;

const Circle = styled.div`
  position: absolute;
  width: calc(17.5vh + 17.5vw);
  height: calc(17.5vh + 17.5vw);
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.border};
  z-index: -1;
`;

const Circle2 = styled.div.attrs<PropsCircle2>((props) => ({
  transform: props.transform,
}))<PropsCircle2>`
  position: absolute;
  width: calc(17.5vh + 17.5vw);
  height: calc(17.5vh + 17.5vw);
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 999px;
  z-index: 100;
  transition: all 0.5s ease-out;
  transform: ${({ transform }) => transform};
  /* animation: Orbita2 15s linear infinite; */
`;

const Dot = styled.div.attrs<PropsDots>((props) => ({
  right: props.right,
  left: props.left,
  top: props.top,
  bottom: props.bottom,
  transform: props.transform,
}))<PropsDots>`
  position: absolute;
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  transform: ${({ transform }) => transform};
  width: 6px;
  height: 6px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  transition: all 1s ease-in-out;
  /* animation: Orbita2Child 15s linear infinite; */
`;

const DotContent = styled.div.attrs<PropsDotsContent>((props) => ({
  content: props.content,
  active: props.active,
  transform: props.transform,
}))<PropsDotsContent>`
  position: absolute;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  transform: ${({ transform }) => transform};
  &:after {
    content: "${({ content, active }) => (active === true ? content : "")}";
    /* width: 6px; */
    width: ${({ active }) => (active === true ? "56px" : "6px")};
    height: ${({ active }) => (active === true ? "56px" : "6px")};
    /* height: 6px; */
    font-family: "pt sans";
    font-size: 20px;
    font-weight: 400;
    border-radius: 99px;
    background-color: ${({ active }) => (active === true ? `transparent` : `#42567A `)};
    /* background-color: ${(props) => props.theme.text}; */

    border: 1px solid ${(props) => props.theme.borderDot};
    border-width: ${({ active }) => (active === true ? `1px` : `0px`)};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 0.35s ease-out, height 0.35s ease-out, background 0.35s ease-out;
  }
  &:hover:after {
    content: "${({ content }) => content}";
    width: 56px;
    height: 56px;
    border: 1px solid ${(props) => props.theme.borderDot};
    background-color: transparent;
  }
`;

const TimeruText__discription = styled.p`
  position: absolute;
  width: auto;
  height: 100%;
  top: 0;
  left: 120%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-family: "pt sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  color: ${(props) => props.theme.text};
  transition: all 0.5s ease-in-out;
`;

export {
  Section,
  TimeruText__discription,
  DotContent,
  Dot,
  Circle2,
  Circle,
  Line2,
  Line1,
  Title,
  TimeruText,
  TextNumber2,
  TextNumber1,
  Content,
};
