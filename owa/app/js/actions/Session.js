import apiCall from "../utilities/apiHelper"

export const FETCH_SESSION = "FETCH_SESSION"
export const RECEIVED_SESSION = "RECEIVED_SESSION"

export function receivedSession(session = {}) {
  return {
    type: RECEIVED_SESSION,
    payload: session,
  }
}
export function fetchSession() {
  return (dispatch) => {
    try {
      apiCall(null, "get", "/session/").then((result) => {
        dispatch(receivedSession(result))
      }, (error) => {
        console.error("Something happened...", error)
      })
    } catch (e) {
      console.error("Something weird happened in Session.js...", e)
    }
  }
}
