 import type { TimerState } from "./Interfaces";
 export const initialStates: { mode: string; state: TimerState }[] = [
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
  ];