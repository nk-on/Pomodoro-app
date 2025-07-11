import React from "react";
import { useStore } from "../store";
export default function FontInput({
  font,
  id,
  selectedId,
  setSelectedId,
}: {
  font: string;
  id:number
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const setFont = useStore((state)=> state.setFont)
  return (
    <div
      className={`w-[40px] h-[40px] ${selectedId === id ? 'text-[#fff] bg-[#000]': 'bg-[#e3e4ed]'} rounded-[50%] flex justify-center items-center font-${font}`}
      onClick={()=>{
        setSelectedId(id)
        setFont(font)
      }}
    >
      Aa
    </div>
  );
}
