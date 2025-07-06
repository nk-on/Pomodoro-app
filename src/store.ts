import { create } from "zustand";
import type {StoreType}  from "./Interfaces";
export const useStore = create<StoreType>((set) => ({
    timerState: { minutes: 24, seconds: 59 },
    secondsDecrease: () => set((state)=> ({timerState:{...state.timerState, seconds: state.timerState.seconds - 1 }})),
    minutesDecrease: () =>  set((state) => ({ timerState:{minutes: state.timerState.minutes - 1, seconds:59}})),
    modeSwitch:(mode:{current:string})=> {
       if(mode.current === "Short break"){
            return set(()=>({timerState:{ minutes: 4, seconds: 59}}))
        }
        if(mode.current === "Long break"){
            return set(()=>({timerState:{minutes:8,seconds:59}}))
        }
        return set(()=> ({timerState:{minutes:24,seconds:59}}))
    }
}))