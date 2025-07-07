import { create } from "zustand";
import type {StoreType}  from "./Interfaces";
const [pomodoroMinutes,pomodoroSeconds] = [24,59];
const [shortBreakMinutes,shortBreakSeconds] = [4,59];
const  [longBreakMinutes,longBreakSeconds] = [9,59];
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
    customTime(minutesPomodoro,minutesShortBreak,minutesLongBreak,mode){
         set(()=> ({timerState:{...this.timerState, minutes:minutesPomodoro}}))
    },
}))