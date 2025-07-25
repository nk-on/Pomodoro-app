import MenuItem from "./MenuItem";
import { menuItems } from "./menuItems";
import { useState } from "react";
export default function Menu({
  setBarPercentage,
}:{setBarPercentage:React.Dispatch<React.SetStateAction<number>>}) {
  const [selectedId, setSelectedId] = useState<number>(0);
  return (
    <div className="lg:w-[35vw] w-[90vw] h-[56px] bg-[#151932] rounded-[25px] flex justify-between items-center px-[10px]">
      {menuItems.map((element) => {
        return (
          <MenuItem
            key={element.id}
            title={element.title}
            id={element.id}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setBarPercentage={setBarPercentage}
          />
        );
      })}
    </div>
  );
}
