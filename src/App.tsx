import { useReducer } from "react";
import "./App.css";
import Clock from "./Clock";
import Menu from "./Menu/Menu";
import { useState } from "react";
import { initialStates } from "./initialStates";
import reducer from "./Reducer";
function App() {
  const [barPercentage, setBarPercentage] = useState<number>(100);
  const [state, dispatch] = useReducer(reducer, initialStates[0].state);
  return (
    <>
      <div className="bg-[#1f213f] w-[100vw] h-[100vh] flex flex-col gap-[20px] justify-center items-center">
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
        <div className="bg-[url(public/Settings.svg)] w-[27px] h-[28px] cursor-pointer"></div>
      </div>
    </>
  );
}

export default App;
