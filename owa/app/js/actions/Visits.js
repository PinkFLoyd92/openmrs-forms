import apiCall from "../utilities/apiHelper"

export const FETCH_ACTIVE_VISITS = "FETCH_ACTIVE_VISITS"
export const RECEIVED_ACTIVE_VISITS = "RECEIVED_ACTIVE_VISITS"

export function receivedActiveVisits(visits) {
  return {
    type: RECEIVED_ACTIVE_VISITS,
    payload: visits,
  }
}
export function fetchActiveVisits() {
  return (dispatch) => {
    apiCall(null, "get", "/visit?v=default")
      .then(result => dispatch(receivedActiveVisits(result)))
  }
}
