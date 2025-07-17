import { useEffect,useState} from "react";
import type { Clock } from "./Interfaces";
import { useStore } from "./store";
export default function Clock({ minutes, seconds,barPercentage,setBarPercentage}: Clock) {
   const [flowState, setFlowState] = useState<string>("PAUSE");
   const decreaseSeconds= useStore((state)=> state.secondsDecrease);
   const decreaseMinutes = useStore((state)=>  state.minutesDecrease);
   const mainColor = useStore((state)=> state.mainColor);
   function renderTimeUnit(unit:number):string | number{
    return unit < 10 ? `:${unit}`: unit 
   }
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setFlowState('RESTART')
      return;
    }
    const timer = setTimeout(() => {
      if (flowState === "PAUSE") {
        setBarPercentage(barPercentage - (barPercentage / ((minutes*60)+seconds)))
        decreaseSeconds();
        if (seconds === 0) {
           decreaseMinutes();
        }
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [minutes, seconds, flowState]);
  return (
    <div
      className="w-[310px] h-[310px] rounded-[50%] flex justify-center items-center"
      style={{
        background: "linear-gradient(270.71deg, #2E325A 0%, #0E112A 100%)",
        boxShadow: "-50px -50px 100px #272C5A, 50px 50px 100px #121530",
      }}
    >
        <div className="w-[90%] h-[90%]  rounded-[50%] flex flex-col justify-center items-center" style={{ background: `conic-gradient(${mainColor} 0% ${barPercentage}%, #151932 ${barPercentage}% 100%)`}}>
          <div className="w-[90%] h-[90%] bg-[#151932] rounded-[50%] flex flex-col justify-center items-center">
          <div className="text-[#fff] font-bold text-[70px]">
            {renderTimeUnit(minutes)}:{renderTimeUnit(seconds)}
          </div>
          <div
            className="text-[#fff] tracking-[.25em] cursor-pointer"
            onClick={() => {
              switch(flowState){
                case "RESUME":
                   setFlowState("PAUSE");
                   break
                case "PAUSE":
                  setFlowState("RESUME");
                  break
                default:
                  setFlowState("PAUSE");
                  setBarPercentage(100)
              }
            }}
          >
            {flowState}
            </div>
            
          </div>
        </div>
    </div>
  );
}
