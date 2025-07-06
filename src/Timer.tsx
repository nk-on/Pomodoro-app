import Menu from "./Menu/Menu";
import { useState, useRef } from "react";
import Clock from "./Clock";
import type { TimerProps } from "./Interfaces";
import { useStore } from "./store";
function Timer({ setSettingsVisible }: TimerProps) {
  const [barPercentage, setBarPercentage] = useState<number>(100);
  const  timerState = useStore((state)=> state.timerState);
  const mode = useRef("Pomodoro");
  return (
    <>
      <div className="h-[20%]">
        <Menu setBarPercentage={setBarPercentage} mode={mode} />
      </div>
      { timerState && (
        <Clock
          minutes={timerState.minutes}
          seconds={timerState.seconds}
          barPercentage={barPercentage}
          setBarPercentage={setBarPercentage}
          mode={mode}
        />
      )}
      <div
        className="bg-[url(public/Settings.svg)] w-[27px] h-[28px] cursor-pointer"
        onClick={() => setSettingsVisible((settingsVisible) => !settingsVisible)}
      ></div>
    </>
  );
}

export default Timer;
