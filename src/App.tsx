import "./App.css";
import Settings from "./Settings/Settings";
import Timer from "./Timer/Timer";
import { useState } from "react";
import { useStore } from "./store";
function App() {
  const [settingsVisible, setSettingsVisible] = useState<boolean>(false);
  const font = useStore((state) => state.font);
  const fontClass = {
    kumbh: "font-kumbh",
    roboto: "font-roboto",
    mono: "font-mono",
  }[font];
  return (
    <>
      <div
        className={`bg-[#1f213f] w-[100vw] h-[100vh] flex flex-col gap-[20px] justify-center items-center ${fontClass}`}
      >
        {settingsVisible ? (
          <Settings setSettingsVisible={setSettingsVisible} />
        ) : (
          <Timer setSettingsVisible={setSettingsVisible} />
        )}
      </div>
    </>
  );
}

export default App;
