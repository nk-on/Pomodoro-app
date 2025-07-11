export interface TimerState {
  minutes: number;
  seconds: number;
}

export type TimerAction =
  | { type: "Pomodoro" }
  | { type: "Short break" }
  | { type: "seconds decrease" }
  | { type: "minutes decrease" }
  | { type: string };
export interface Clock {
  minutes: number;
  seconds: number;
  barPercentage: number,
  setBarPercentage: React.Dispatch<React.SetStateAction<number>>,
}
export interface MyComponentProps {
  title: string;
  id: number;
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  setBarPercentage: React.Dispatch<React.SetStateAction<number>>;
}
export interface TimerProps {
  setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TimeInputProps {
  title: string,
  timerMode: number,
  setFunction: React.Dispatch<React.SetStateAction<number>>;
}
export interface TimerState {
  minutes: number;
  seconds: number;
}
export interface StoreType {
  timerState: TimerState;
  mode: string;
  font:string;
  secondsDecrease: () => void;
  minutesDecrease: () => void;
  setMode: (clickedMode: string) => void; // Capital M to match implementation
  modeSwitch: (mode: string) => void;
  customTime: (
    minutesPomodoro: number,
    minutesShortBreak: number,
    minutesLongBreak: number,
  ) => void;
   setFont:(selectedFont:string)=> void;
}
export interface TimeInputProps { title: string; customvaluesObj: React.RefObject<{ minutes: number; seconds: number; title: string; }[]>; }