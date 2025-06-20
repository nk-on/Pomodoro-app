import MenuItem from "./MenuItem";
import { menuItems } from "./menuItems";
import { useState } from "react";
export default function Menu() {
   const [selectedId, setSelectedId] = useState<number>(-1);
  return <div className="w-[35vw] h-[48px] bg-[#151932] rounded-[20px] flex justify-between items-center px-[10px]">
    {
        menuItems.map((element)=>{
            return <MenuItem key={element.id} title={element.title} id = {element.id} selectedId = {selectedId} setSelectedId = {setSelectedId} />
        })
    }
  </div>;
}
