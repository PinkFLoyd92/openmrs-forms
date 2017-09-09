import apiCall from "../utilities/apiHelper"

export const FETCH_OBS = "FETCH_OBS"
export const ERROR_FETCHING_OBS = "ERROR_FETCHING_OBS"
export const RECEIVED_OBS = "RECEIVED_OBS"

export function receivedObs(obs = []) {
  return {
    type: RECEIVED_OBS,
    payload: obs,
  }
}

export function fetchObs(encounters = []) {
  return (dispatch) => {
    // try {
    //   apiCall(null, "get", "/visit?v=default")
    //   .then((visits) => {
    //     if (visits.results && Array.isArray(visits.results) && visits.results.length > 0) {
    //       visits.results = visits.results.filter(visit => visit.stopDatetime == null)
    //       if (input) {
    //         visits.results = visits.results.filter(visit => (visit.patient.display.indexOf(input) !== -1 || visit.location.display.indexOf(input) !== -1 || visit.visitType.display.indexOf(input) !== -1))
    //       }
    //       console.info("Visitas: ", visits.results)
    //       dispatch(receivedActiveVisits(visits))
    //     } else {
    //       dispatch(receivedActiveVisits({ results: [] }))
    //     }
    //   })
    // } catch (e) {
    //   console.error("Something weird happened...", e)
    //   dispatch(receivedActiveVisits({ results: [] }))
    // }
  }
}
