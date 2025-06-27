import { useReducer, useRef } from "react";
import "./App.css";
import Clock from "./Clock";
import Menu from "./Menu/Menu";
import { useState } from "react";
import type { TimerState } from "./Interfaces";
import type { TimerAction } from "./Interfaces";
import { initialStates } from "./initialStates";
function App() {
  const mode = useRef("Pomodoro");
  const [barPercentage, setBarPercentage] = useState<number>(100);
  function reducer(
    state: TimerState | undefined,
    action: TimerAction
  ): TimerState | undefined {
    const resObj = initialStates.find((element) => element.mode === mode.current)?.state;
    if (action.type === "RESTART") {
      setBarPercentage(100);
      return resObj;
    }
    if(action.type === "seconds decrease" && state){
      return { ...state, seconds: state.seconds - 1 };
    }
    if(action.type === "minutes decrease" && state){
      return { seconds:59, minutes: state.minutes - 1 };
    }
    mode.current = action.type;
    return resObj
  }
  const [state, dispatch] = useReducer(reducer, initialStates[0].state);
  return (
    <>
      <div className="bg-[#1f213f] w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <div className="h-[20%]">
          <Menu dispatch={dispatch} setBarPercentage={setBarPercentage} />
        </div>
        {state && (
          <Clock
            minutes={state.minutes}
            seconds={state.seconds}
            dispatch={dispatch}
            barPercentage={barPercentage}
            setBarPercentage={setBarPercentage}
          />
        )}
      </div>
    </>
  );
}

export default App;
