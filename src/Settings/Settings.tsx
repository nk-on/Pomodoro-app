import type { TimerProps } from "../Interfaces";
import TimeInput from "./TimeInput";

function Settings({ setSettingsVisible }: TimerProps) {
  return (
    <div className="lg:w-[540px] w-[90%] h-[491px] bg-[#fff] rounded-[25px]">
      <div className="flex justify-between px-[15px] py-[20px] cursor-pointer ">
        <h1 className="font-bold text-[28px]">Settings</h1>
        <img
          src="public/CloseButton.svg"
          alt="close-button"
          onClick={() => setSettingsVisible((settingsVisible) => !settingsVisible)}
        />
      </div>
      <div className="w-[100%] h-[1px] bg-[#E3E1E1]"></div>
      <div className="flex flex-col items-start p-0 gap-[30px] py-[10px] px-[10px]">
        <h1 className="font-bold tracking-[3px]">TIME (MINUTES)</h1>
        <div className="flex justify-between max-w-[90%] gap-[10px]">
          <TimeInput title = {"pomodoro"}/>
          <TimeInput title={"Short break"} />
          <TimeInput title = {'Long break'} />
        </div>
      </div>
      <button className="bg-[#F87070] text-[#fff] font-bold w-[140px] h-[53px] rounded-[26.5px] relative top-[45%] left-[35%]">Apply</button>
    </div>
  );
}

export default Settings;
