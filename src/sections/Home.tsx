import { Suspense, useEffect, useState } from "react";
import Slider from "../components/Slider";
import { gsap, Bounce } from "gsap";
import SliderCircleComponent from "../components/SliderCircle";
import {
  TimeruText__disc,
  dotsVariable,
  massrotateDots,
  massrotateDotsContent,
  activeYear,
} from "../utils";
import {
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
} from "./HomeStyle";

gsap.registerPlugin(Bounce);

export const Home = () => {
  const [activeDot, setActiveDot] = useState<number>(0);
  const DotClick = (i: number) => {
    setActiveDot(i);
    setTime(activeYear[activeDot]);
  };

  const [time, setTime] = useState(activeYear[activeDot]);

  useEffect(() => {
    const activeYearNow = activeYear[activeDot !== 6 ? (activeDot !== 0 ? activeDot : 0) : 0];
    let cubic = 5;
    if (time > activeYearNow) {
      const countdown: any = gsap.to(
        {},
        {
          duration: time,
          onComplete: () => setTime(0),
          onUpdate: () => {
            cubic = cubic / (0.125 * cubic);
            setTime(
              Math.ceil(time - countdown.time() * cubic) <= activeYearNow
                ? activeYearNow
                : Math.ceil(time - countdown.time() * cubic)
            );
          },
        }
      );

      return () => countdown.kill();
    } else {
      const countdown: any = gsap.to(
        {},
        {
          duration: time,
          onComplete: () => setTime(activeYearNow),
          onUpdate: () => {
            cubic = cubic / (0.125 * cubic);
            setTime(
              Math.ceil(time + countdown.time() * cubic) >= activeYearNow
                ? activeYearNow
                : Math.ceil(time + countdown.time() * cubic)
            );
          },
        }
      );
    }
  }, [activeDot]);

  const ChangesetActiveDot = (value: any) => {
    setActiveDot(value);
  };

  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <Content>
          <Title>
            Historical
            <br />
            dates
          </Title>
          <Line2 />
          <TimeruText>
            <TextNumber1>{time}&nbsp;</TextNumber1>
            <TextNumber2>&nbsp;2022</TextNumber2>
            <Line1 />
            <Circle></Circle>
            <Circle2 transform={massrotateDotsContent[activeDot]}>
              {dotsVariable.map((data, i) => {
                return (
                  <Dot
                    key={i}
                    top={data.top}
                    bottom={data.bottom}
                    left={data.left}
                    right={data.right}
                    transform={data.transform}
                    onClick={() => DotClick(i)}
                  >
                    <DotContent
                      content={`${i + 1}`}
                      active={activeDot === i ? true : false}
                      transform={massrotateDots[activeDot]}
                    >
                      <TimeruText__discription
                        style={activeDot === i ? { opacity: 1 } : { opacity: 0 }}
                      >
                        {TimeruText__disc[i]}
                      </TimeruText__discription>
                    </DotContent>
                  </Dot>
                );
              })}
            </Circle2>
            <SliderCircleComponent activeSlide={activeDot} setActiveDot={ChangesetActiveDot} />
          </TimeruText>
          <Slider activeSlide={activeDot} setActiveDot={ChangesetActiveDot} />
        </Content>
      </Suspense>
    </Section>
  );
};
