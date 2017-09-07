import { FETCH_ACTIVE_VISITS } from "../actions/Visits"
import apiCall from "../utilities/apiHelper"

function visits(state = [], action) {
  switch (action.type) {
    case FETCH_ACTIVE_VISITS: {
      console.info("Fetching visits")
      apiCall(null, "get", "/visit?v=default")
        .then((result) => {
          console.info("Fetching visits: ", result)
        })
      return state
    }
    default:
      return state
  }
}

export { visits }
