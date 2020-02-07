import { GET_DATA, UPDATE_HIGHLIGHTS, SET_ERROR } from "../actions/action";

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
        highlights: action.payload,
        isFetchingData: false

      }
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      }
    default:
      return state
  }
}