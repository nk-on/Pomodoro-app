import MenuItem from "./MenuItem";
import { menuItems } from "./menuItems";
import { useState } from "react";
interface MenuProps {
  dispatch: React.ActionDispatch<[action: { type: string }]>;
  setBarPercentage: React.Dispatch<React.SetStateAction<number>>;
  mode:React.RefObject<string>
}
export default function Menu({
  dispatch,
  setBarPercentage,
  mode
}: MenuProps) {
  const [selectedId, setSelectedId] = useState<number>(-1);
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
            dispatch={dispatch}
            setBarPercentage={setBarPercentage}
            mode = {mode}
          />
        );
      })}
    </div>
  );
}
