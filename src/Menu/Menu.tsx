import MenuItem from "./MenuItem";
import { menuItems } from "./menuItems";
export default function Menu() {
  return <div className="w-[35vw] h-[48px] bg-[#151932] rounded-[20px] flex justify-between items-center px-[10px]">
    {
        menuItems.map((element)=>{
            return <MenuItem title={element.title} />
        })
    }
  </div>;
}
