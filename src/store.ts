import { create } from "zustand";
export const useStore = create((set) => ({
    timerStates: [
        {
            mode: "Pomodoro",
            state: { minutes: 24, seconds: 59 },
        },
        {
            mode: "Short break",
            state: { minutes: 4, seconds: 59 },
        },
        {
            mode: "Long break",
            state: { minutes: 9, seconds: 59 },
        },
    ],
    secondsDecrease: (mode) => {
        set((state) => ({
            timerStates: state.timerStates.map((element) => {
                if (element.mode === mode) {
                    return { ...element, state: { ...element.state, seconds: element.state.seconds - 1 } }
                }
                return element;
            })
        }))
    },
    minutesDecrease: (mode) => {
        set((state) => ({
            timerStates: state.timerStates.map((element) => {
                if (element === mode) {
                    return { ...element, state: { ...element.state, minutes: element.state.minutes - 1 } }
                }
                return element
            })
        }))
    }
}))