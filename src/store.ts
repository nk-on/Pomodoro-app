import { create } from "zustand";
import type {StoreType}  from "./Interfaces";
let [pomodoroMinutes,shortBreakMinutes,longBreakMinutes] = [24,4,9]
export const useStore = create<StoreType>((set) => ({
    timerState: { minutes: pomodoroMinutes, seconds: 59},
    mode:'',
    font:'kumbh',
    secondsDecrease: () => set((state)=> ({timerState:{...state.timerState, seconds: state.timerState.seconds - 1 }})),
    minutesDecrease: () =>  set((state) => ({ timerState:{minutes: state.timerState.minutes - 1, seconds:59}})),
    modeSwitch:(mode:string)=> {
       if(mode === "Short break"){
            return set(()=>({timerState:{ minutes: shortBreakMinutes, seconds: 59}}))
        }
        if(mode === "Long break"){
            return set(()=>({timerState:{minutes:longBreakMinutes,seconds:59}}))
        }
        return set(()=> ({timerState:{minutes:pomodoroMinutes,seconds:59}}))
    },
    setMode:(clickedMode)=>{
        return set(()=> ({mode:clickedMode}))
    },
    customTime(minutesPomodoro,minutesShortBreak,minutesLongBreak){
         pomodoroMinutes = minutesPomodoro;
         shortBreakMinutes = minutesShortBreak;
         longBreakMinutes = minutesLongBreak;
         return set((state)=> ({timerState:{...state.timerState, minutes:minutesPomodoro}}))
    },
    setFont(selectedFont:string){
        return set(()=> ({font:selectedFont}))
    }
}));