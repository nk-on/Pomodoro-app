import Menu from "./Menu/Menu";
import { useReducer, useState, useRef } from "react";
import reducer from "./Reducer";
import Clock from "./Clock";
import type { TimerProps } from "./Interfaces";
import { useStore } from "./store";
function Timer({ setSettingsVisible }: TimerProps) {
  const [barPercentage, setBarPercentage] = useState<number>(100);
  const  timerStates = useStore((state)=> state.timerStates);
  const mode = useRef("Pomodoro");
  return (
    <>
      <div className="h-[20%]">
        <Menu setBarPercentage={setBarPercentage} mode={mode} />
      </div>
      { timerStates && (
        <Clock
          minutes={timerStates[0].state.minutes}
          seconds={timerStates[0].state.seconds}
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
