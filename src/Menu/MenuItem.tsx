import type { MyComponentProps } from "../Interfaces";
export default function MenuItem({
  title,
  id,
  selectedId,
  setSelectedId,
  dispatch,
  setBarPercentage,
  mode
}: MyComponentProps) {
  return (
    <div
      className={` font-bold w-[33%] h-[100%] lg:text-[14px]   flex justify-center items-center cursor-pointer ${
        selectedId === id ? "bg-[#F87070] text-[#1f213f]" : "bg-[#151932] text-[#636984]"
      } rounded-[26.5px]`}
      onClick={() => {
        setSelectedId(id);
        setBarPercentage(100);
        dispatch({ type: title });
        mode.current = title;
      }}
    >
      {title}
    </div>
  );
}
