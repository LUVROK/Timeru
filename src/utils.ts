export const massTransformDots = [
  "translateY(calc(50%)) translateX(calc(50%))",
  "translateY(calc(-50% + 1px)) translateX(calc(50% + 1px))",
  "translateY(calc(-50%)) translateX(calc(50%))",
  "translateY(calc(-50%)) translateX(calc(-50%))",
  "translateY(calc(-50% + 1px)) translateX(calc(-50% - 1px))",
  "translateY(calc(0%)) translateX(calc(50%))",
];

export const massrotateDotsContent = [
  "rotate(0deg) rotate(0deg)",
  "rotate(-30deg) rotate(-30deg)",
  "rotate(-60deg) rotate(-60deg)",
  "rotate(-90deg) rotate(-90deg)",
  "rotate(-120deg) rotate(-120deg)",
  "rotate(-150deg) rotate(-150deg)",
];

export const massrotateDots = [
  "rotate(0deg) rotate(0deg)",
  "rotate(30deg) rotate(30deg)",
  "rotate(60deg) rotate(60deg)",
  "rotate(90deg) rotate(90deg)",
  "rotate(120deg) rotate(120deg)",
  "rotate(150deg) rotate(150deg)",
];

export const dotsVariable = [
  {
    top: "5%",
    bottom: " auto",
    left: "auto",
    right: "25%",
    transform: massTransformDots[0],
  },
  {
    top: "50%",
    bottom: " auto",
    left: "auto",
    right: "0%",
    transform: massTransformDots[1],
  },
  {
    top: "auto",
    bottom: "5%",
    left: "auto",
    right: "25%",
    transform: massTransformDots[2],
  },
  {
    top: "auto",
    bottom: "5%",
    left: "25%",
    right: "auto",
    transform: massTransformDots[3],
  },
  {
    top: "50%",
    bottom: "auto",
    left: "0%",
    right: "auto",
    transform: massTransformDots[4],
  },
  {
    top: "5%",
    bottom: "auto",
    left: "25%",
    right: "auto",
    transform: massTransformDots[5],
  },
];

export const TimeruText__disc = [
  "Science",
  "Space",
  "Psychology",
  "Emigration",
  "Ecology",
  "Politics",
];

export const activeYear = [2022, 2016, 2011, 2004, 1999, 1987];

export interface PropsDots {
  left: any;
  right: any;
  bottom: any;
  top: any;
  transform: any;
}

export interface PropsDotsContent {
  content: string;
  active: Boolean;
  transform: string;
}

export interface PropsCircle2 {
  transform: string;
}

export interface Props_SliderCircleComponent {
  activeSlide: number;
  setActiveDot: (value: any) => void;
}

export interface opacityInterface {
  active: number;
  activeSlide: number;
}
