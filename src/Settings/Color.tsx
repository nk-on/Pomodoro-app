import { useStore } from "../store";
import type { Action } from "../Interfaces";
function Color({
  color,
  selectedId,
  id,
  dispatch
}: {
  color: string;
  selectedId:number,
  id: number;
  dispatch: React.ActionDispatch<[action: Action]>;
}) {
   const setColor = useStore((state)=> state.setColor);
  return (
    <div
      className={`w-[40px] h-[40px] rounded-[50%] cursor-pointer flex justify-center items-center`}
      style={{ backgroundColor: `${color}` }}
      onClick={()=> {
        dispatch({type:'colorInput',payload:{id}});
        setColor(color);

      }}
    >
      {
        id === selectedId && <img src="public/checkMark.svg" alt="checkMark"/>
      }
    </div>
  );
}

export default Color;
