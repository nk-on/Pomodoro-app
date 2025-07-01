import Menu from "./Menu/Menu";
import { useReducer, useState, useRef } from "react";
import reducer from "./Reducer";
import { initialStates } from "./initialStates";
import Clock from "./Clock";
import type { TimerProps } from "./Interfaces";
function Timer({setSettingsVisible}:TimerProps) {
  const [barPercentage, setBarPercentage] = useState<number>(100);
  const [state, dispatch] = useReducer(reducer, initialStates[0].state);
  const mode = useRef("Pomodoro");
  return (
    <>
      <div className="h-[20%]">
        <Menu dispatch={dispatch} setBarPercentage={setBarPercentage} mode={mode} />
      </div>
      {state && (
        <Clock
          minutes={state.minutes}
          seconds={state.seconds}
          dispatch={dispatch}
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
