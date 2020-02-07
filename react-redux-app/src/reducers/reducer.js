import { GET_DATA, UPDATE_HIGHLIGHTS } from "../actions/action";

const initialState = {
  highlights: [],
  isFetchingData: false,
  error: ""
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        isFetchingData: true
      }
    case UPDATE_HIGHLIGHTS:
      return {
        ...state,
        highlights: action.payload
      }
    default:
      return state
  }
}