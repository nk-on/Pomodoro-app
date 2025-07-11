import "./App.css";
import Settings from "./Settings/Settings";
import Timer from "./Timer";
import { useState } from "react";
import { useStore } from "./store";
function App() {
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const font = useStore((state)=>state.font);
  console.log(font)
  return (
    <>
      <div className={`bg-[#1f213f] w-[100vw] h-[100vh] flex flex-col gap-[20px] justify-center items-center font-${font}`}>
        {settingsVisible ? (
          <Settings
            setSettingsVisible={setSettingsVisible}
          />
        ) : (
          <Timer
            setSettingsVisible={setSettingsVisible}
          />
        )}
      </div>
    </>
  );
}

export default App;
