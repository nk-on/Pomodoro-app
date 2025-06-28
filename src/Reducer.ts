import { initialStates } from "./initialStates";
import type { TimerState } from "./Interfaces";
import type { TimerAction } from "./Interfaces";
export default function reducer(
  state: TimerState | undefined,
  action: TimerAction
): TimerState | undefined {
  const mode = action.type;

  const resObj = initialStates.find((element) => element.mode === mode)?.state;
  if (action.type === "seconds decrease" && state) {
    return { ...state, seconds: state.seconds - 1 };
  }
  if (action.type === "minutes decrease" && state) {
    return { seconds: 59, minutes: state.minutes - 1 };
  }
  return resObj
}