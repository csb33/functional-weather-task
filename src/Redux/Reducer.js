import { initialState } from "./InitialState";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_API_DATA":
      return { ...state, weathers: action.weathers };

    default:
      return state;
  }
}
