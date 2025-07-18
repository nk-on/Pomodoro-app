import { create } from "zustand";
import type { StoreType } from "./Interfaces";
let [pomodoroMinutes, shortBreakMinutes, longBreakMinutes] = [24, 4, 9];
export const useStore = create<StoreType>((set,get) => ({
    timerState: { minutes: pomodoroMinutes, seconds: 59 },
    mode: '',
    font: 'kumbh',
    mainColor: '#F87070 ',
    reset: (mode: string) => {
        if (mode === "Short break") {
            return set(() => ({ timerState: { minutes: shortBreakMinutes, seconds: 59 } }))
        }
        if (mode === "Long break") {
            return set(() => ({ timerState: { minutes: longBreakMinutes, seconds: 59 } }))
        }
        return set(() => ({ timerState: { minutes: pomodoroMinutes, seconds: 59 } }))
    },
    secondsDecrease: () => set((state) => ({ timerState: { ...state.timerState, seconds: state.timerState.seconds - 1 } })),
    minutesDecrease: () => set((state) => ({ timerState: { minutes: state.timerState.minutes - 1, seconds: 59 } })),

    restartTimer: (mode: string) => get().reset(mode),

    modeSwitch: (mode: string) => get().reset(mode),
    setMode: (clickedMode) => {
        return set(() => ({ mode: clickedMode }))
    },
    customTime(minutesPomodoro, minutesShortBreak, minutesLongBreak) {
        pomodoroMinutes = minutesPomodoro - 1;
        shortBreakMinutes = minutesShortBreak -1 ;
        longBreakMinutes = minutesLongBreak -1;
        return set(() => ({ timerState: { minutes: pomodoroMinutes, seconds: 59 } }))
    },
    setFont(selectedFont: string) {
        return set(() => ({ font: selectedFont }))
    },
    setColor(selectedColor: string) {
        return set(() => ({ mainColor: selectedColor }))
    },
}));