import Menu from "./Menu/Menu";
import { useState } from "react";
import Clock from "./Clock";
import type { TimerProps } from "./Interfaces";
import { useStore } from "./store";
function Timer({ setSettingsVisible }: TimerProps) {
  const [barPercentage, setBarPercentage] = useState<number>(100);
  const  timerState = useStore((state)=> state.timerState);
  return (
    <>
      <div className="h-[20%]">
        <Menu setBarPercentage={setBarPercentage}  />
      </div>
      { timerState && (
        <Clock
          minutes={timerState.minutes}
          seconds={timerState.seconds}
          barPercentage={barPercentage}
          setBarPercentage={setBarPercentage}
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
