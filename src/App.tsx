import { useReducer } from "react";
import "./App.css";
import Clock from "./Clock";
import Menu from "./Menu/Menu";
import { useState } from "react";
interface TimerState {
  minutes: number;
  seconds: number;
}

type TimerAction =
  | { type: "Pomodoro" }
  | { type: "Short break" }
  | { type: "seconds decrease" }
  | { type: "minutes decrease" }
  | { type: string };
function App() {
  function reducer(state: TimerState, action: TimerAction): TimerState {
    switch (action.type) {
      case "Pomodoro":
        return { minutes: 24, seconds: 59 };
      case "Short break":
        return { minutes: 4, seconds: 59 };
      case "seconds decrease":
        return { ...state, seconds: state.seconds - 1 };
      case "minutes decrease":
        return { minutes: state.minutes - 1, seconds: 59 };
      default:
        return { minutes: 9, seconds: 59 };
    }
  }
  const initialState = { minutes: 24, seconds: 59 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [barPercentage, setBarPercentage] = useState<number>(100);
  return (
    <>
      <div className="bg-[#1f213f] w-[100vw] h-[100vh] flex flex-col justify-center items-center">
        <div className="h-[20%]">
          <Menu dispatch={dispatch} setBarPercentage = {setBarPercentage}/>
        </div>
        <Clock
          minutes={state.minutes}
          seconds={state.seconds}
          dispatch={dispatch}
          barPercentage={barPercentage}
          setBarPercentage={setBarPercentage}
        />
      </div>
    </>
  );
}

export default App;
