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
  barPercentage:number,
  setBarPercentage:React.Dispatch<React.SetStateAction<number>>,
  mode:React.RefObject<string>
}
export interface MyComponentProps {
  title: string;
  id: number;
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
  dispatch: React.ActionDispatch<[action: { type: string }]>;
  setBarPercentage: React.Dispatch<React.SetStateAction<number>>;
  mode:React.RefObject<string>
}