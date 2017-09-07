import { FETCH_ACTIVE_VISITS, RECEIVED_ACTIVE_VISITS } from "../actions/Visits"

function visits(state = [], action) {
  switch (action.type) {
    case FETCH_ACTIVE_VISITS: {
      return state
    }
    case RECEIVED_ACTIVE_VISITS: {
      return action.payload.results
    }
    default:
      return state
  }
}

export { visits }
