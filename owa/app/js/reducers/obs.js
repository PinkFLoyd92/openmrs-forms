import { FETCH_OBS, RECEIVED_OBS } from "../actions/Obs"

function obs(state = [], action) {
  switch (action.type) {
    case RECEIVED_OBS: {
      return action.payload
    }
    default:
      return state
  }
}

export { obs }
