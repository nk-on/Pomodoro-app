import React from "react";
import { useStore } from "../store";
import type { Action } from "../Interfaces";
export default function FontInput({
  font,
  id,
  selectedId,
  dispatch,
}: {
  font: string;
  id:number
  selectedId: number;
  dispatch:React.ActionDispatch<[action: Action]>
}) {
  const setFont = useStore((state)=> state.setFont)
  return (
    <div
      className={`w-[40px] h-[40px] ${selectedId === id ? 'text-[#fff] bg-[#000]': 'bg-[#e3e4ed]'} rounded-[50%] flex justify-center items-center font-${font}`}
      onClick={()=>{
        dispatch({type:'fontInput',payload:{id}})
        setFont(font)
      }}
    >
      Aa
    </div>
  );
}
