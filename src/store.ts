import { create } from "zustand";
import type {StoreType}  from "./Interfaces";

let [pomodoroMinutes,pomodoroSeconds] = [24,59];
let [shortBreakMinutes,shortBreakSeconds] = [4,59];
let  [longBreakMinutes,longBreakSeconds] = [9,59];
export const useStore = create<StoreType>((set) => ({
    timerState: { minutes: pomodoroMinutes, seconds: pomodoroSeconds},
    mode:'',
    secondsDecrease: () => set((state)=> ({timerState:{...state.timerState, seconds: state.timerState.seconds - 1 }})),
    minutesDecrease: () =>  set((state) => ({ timerState:{minutes: state.timerState.minutes - 1, seconds:59}})),
    modeSwitch:(mode:string)=> {
       if(mode === "Short break"){
            return set(()=>({timerState:{ minutes: shortBreakMinutes, seconds: shortBreakSeconds}}))
        }
        if(mode === "Long break"){
            return set(()=>({timerState:{minutes:longBreakMinutes,seconds:longBreakSeconds}}))
        }
        return set(()=> ({timerState:{minutes:pomodoroMinutes,seconds:pomodoroSeconds}}))
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
}))