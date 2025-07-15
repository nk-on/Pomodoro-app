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
export interface TimerState {
  minutes: number;
  seconds: number;
}
export interface StoreType {
  timerState: TimerState;
  mode: string;
  font: string;
  mainColor: string;
  secondsDecrease: () => void;
  minutesDecrease: () => void;
  setMode: (clickedMode: string) => void; // Capital M to match implementation
  modeSwitch: (mode: string) => void;
  customTime: (
    minutesPomodoro: number,
    minutesShortBreak: number,
    minutesLongBreak: number,
  ) => void;
  setFont: (selectedFont: string) => void;
  setColor: (selectedColor: string) => void;
}
export interface TimeInputProps { title: string; customvaluesObj: React.RefObject<{ minutes: number; seconds: number; title: string; }[]>; }
export interface State {
  fontId: number;
  colorId: number;
}
export type Action =
  | { type: "colorInput"; payload: { id: number } }
  | { type: "fontInput"; payload: { id: number } };
export interface SectionProps<T> {
    title: string;
    data: T[];
    renderItem: (item: T) => React.ReactNode;
  }
export interface FontInputProps {
    font: string;
    id:number
    selectedId: number;
    dispatch:React.ActionDispatch<[action: Action]>
}