import type { MyComponentProps } from "../Interfaces";
import { useStore } from "../store";
export default function MenuItem({
  title,
  id,
  selectedId,
  setSelectedId,
  setBarPercentage,
  mode
}: MyComponentProps) {
  const modeSwitch = useStore((state)=> state.modeSwitch);
  return (
    <div
      className={` font-bold w-[33%] h-[100%] lg:text-[14px]   flex justify-center items-center cursor-pointer ${
        selectedId === id ? "bg-[#F87070] text-[#1f213f]" : "bg-[#151932] text-[#636984]"
      } rounded-[26.5px]`}
      onClick={() => {
        setSelectedId(id);
        setBarPercentage(100);
        mode.current = title;
        modeSwitch(mode)
      }}
    >
      {title}
    </div>
  );
}
