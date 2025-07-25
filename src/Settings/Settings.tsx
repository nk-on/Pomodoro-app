import { useReducer, useRef } from "react";
import type { TimerProps } from "../Interfaces";
import TimeInput from "./TimeInput";
import { useStore } from "../store";
import FontInput from "./FontInput";
import { fontData } from "./fontComponents";
import { colors } from "./colorInput";
import Color from "./Color";
import type { State } from "../Interfaces";
import type { Action } from "../Interfaces";
import Section from "./Section";
function Settings({ setSettingsVisible }: TimerProps) {
  const customTime = useStore((state) => state.customTime);
  function reducer(state: State, action: Action): State {
    if (action.type === "colorInput") {
      return { ...state, colorId: action.payload.id };
    }
    return { ...state, fontId: action.payload.id };
  }
  const [state, dispatch] = useReducer(reducer, { fontId: -1, colorId: -1 });
  const customValues = useRef([
    {
      minutes: 24,
      seconds: 59,
      title: "pomodoro",
    },
    {
      minutes: 5,
      seconds: 59,
      title: "Short break",
    },
    {
      minutes: 9,
      seconds: 59,
      title: "Long break",
    },
  ]);
  return (
    <div className="lg:w-[540px] w-[90%] min-h-[491px] bg-[#fff] rounded-[25px]">
      <div className="flex  justify-between px-[15px] py-[20px] cursor-pointer ">
        <h1 className="font-bold text-[28px]">Settings</h1>
        <img
          src="./CloseButton.svg"
          alt="close-button"
          onClick={() => setSettingsVisible((settingsVisible) => !settingsVisible)}
        />
      </div>
      <div className="w-[100%] h-[1px] bg-[#E3E1E1]"></div>
      <div className="flex flex-col items-start p-0 gap-[30px] py-[10px] pb-[30px]  px-[10px]">
        <h1 className="font-bold tracking-[3px]">TIME (MINUTES)</h1>
        <div className="flex lg:flex-col flex-row">
          <div className="flex lg:flex-row flex-col  justify-between max-w-[90%] gap-[10px]">
            <h1 className="text-[#A5A6B2]">Pomodoro</h1>
            <h1 className="text-[#A5A6B2]">Short break</h1>
            <h1 className="text-[#A5A6B2]">Long break</h1>
          </div>
          <div className="flex lg:flex-row flex-col  justify-between max-w-[90%] gap-[10px]">
            <TimeInput title={"pomodoro"} customvaluesObj={customValues} />
            <TimeInput title={"Short break"} customvaluesObj={customValues} />
            <TimeInput title={"Long break"} customvaluesObj={customValues} />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-[#E3E1E1]"></div>
      <Section
        title="Font"
        data={fontData}
        renderItem={({ id, font }) => (
          <FontInput
            key={id}
            font={font}
            id={id}
            selectedId={state.fontId}
            dispatch={dispatch}
          />
        )}
      />

      <Section
        title="Color"
        data={colors}
        renderItem={({ id, color }) => (
          <Color
            key={id}
            color={color}
            id={id}
            selectedId={state.colorId}
            dispatch={dispatch}
          />
        )}
      />
      <button
        className="bg-[#F87070] text-[#fff] font-bold w-[140px] h-[53px] rounded-[26.5px] relative lg:top-[10%] top-[2%] lg:left-[35%] left-[30%]"
        onClick={() => {
          setSettingsVisible((settingsVisible) => !settingsVisible);
          customTime(
            customValues.current[0].minutes,
            customValues.current[1].minutes,
            customValues.current[2].minutes
          );
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default Settings;
