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
  dispatch: React.ActionDispatch<[action: { type: string }]>;
  barPercentage: number,
  setBarPercentage: React.Dispatch<React.SetStateAction<number>>,
  mode: React.RefObject<string>
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
  timerMode:number,
  setFunction: React.Dispatch<React.SetStateAction<number>>;
}
export interface TimerState {
    minutes:number ; seconds:number
}
export interface StoreType {
  timerState: TimerState;
  secondsDecrease: () => void;
  minutesDecrease: () => void;
  modeSwitch: (mode: { current: string }) => void;
}