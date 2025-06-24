import { useEffect, useState } from "react";
interface Clock {
  minutes: number;
  seconds: number;
  dispatch: React.ActionDispatch<[action: { type: string }]>;
}
export default function Clock({ minutes, seconds, dispatch }: Clock) {
  const [flowState, setFlowState] = useState<string>("RESUME");
  const [barPercentage,setBarPercentage] = useState<number>(100)
  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setFlowState('RESTART')
      return;
    }
    const timer = setTimeout(() => {
      if (flowState === "RESUME") {
        setBarPercentage(barPercentage - (barPercentage / ((minutes*60)+seconds)))
        dispatch({ type: "seconds decrease" });
        if (seconds === 0) {
          dispatch({ type: "minutes decrease" });
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
        <div className="w-[90%] h-[90%]  rounded-[50%] flex flex-col justify-center items-center" style={{ background: `conic-gradient(#F87070 0% ${barPercentage}%, #151932 ${barPercentage}% 100%)`}}>
          <div className="w-[90%] h-[90%] bg-[#151932] rounded-[50%] flex flex-col justify-center items-center">
          <div className="text-[#fff] font-bold text-[70px]">
            {minutes}:{seconds}
          </div>
          <div
            className="text-[#fff] tracking-[.25em] cursor-pointer"
            onClick={() => {
              if (flowState === "RESUME") {
                setFlowState("PAUSE");
              } else {
                setFlowState("RESUME");
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
