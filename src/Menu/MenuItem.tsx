import type { MyComponentProps } from "../Interfaces";
import { useStore } from "../store";
export default function MenuItem({
  title,
  id,
  selectedId,
  setSelectedId,
  setBarPercentage,
}: MyComponentProps) {
  const modeSwitch = useStore((state) => state.modeSwitch);
  const setMode = useStore((state) => state.setMode);
  const mainColor = useStore((state) => state.mainColor);
  return (
    <div
      className="font-bold w-[33%] h-[100%] lg:text-[14px] text-[#636984]   flex justify-center items-center cursor-pointer rounded-[26.5px]"
      style={{
        backgroundColor: selectedId === id ? mainColor : "#151932",
      }}
      onClick={() => {
        setSelectedId(id);
        setBarPercentage(100);
        modeSwitch(title);
        setMode(title);
      }}
    >
      {title}
    </div>
  );
}
