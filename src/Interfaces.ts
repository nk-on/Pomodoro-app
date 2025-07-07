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
  mode: React.RefObject<string>
}
export interface TimerProps {
  setSettingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TimeInputProps {
  title: string,
  setFunction: React.Dispatch<React.SetStateAction<number>>;
}
export interface TimerState {
  minutes: number; seconds: number
}
export interface StoreType {
  timerState: TimerState;
  mode: string;
  secondsDecrease: () => void;
  minutesDecrease: () => void;
  setMode: (clickedMode: string) => void; // Capital M to match implementation
  modeSwitch: (mode:string) => void;
  customTime: (
    minutesPomodoro: number,
    minutesShortBreak: number,
    minutesLongBreak: number,
    mode: string
  ) => void;
}