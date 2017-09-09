import apiCall from "../utilities/apiHelper"
import { errorFetchingObs, successFetchingObs } from "./Errors"

export const FETCH_OBS = "FETCH_OBS"
export const RECEIVED_OBS = "RECEIVED_OBS"

export function receivedObs(obs = []) {
  return {
    type: RECEIVED_OBS,
    payload: obs,
  }
}

export function fetchObs(encounters = []) {
  const obs = []
  return (dispatch) => {
    const promises = []
    try {
      encounters.forEach((enc) => {
        promises.push(apiCall(null, "get", `/encounter/${enc.uuid}?v=custom%3A(uuid%2Cform%3A(uuid%2Cname)%2Cobs)`))
      })
      Promise.all(promises).then((results) => {
        // Adding Observations Type: Vitals
        results.forEach((enc) => {
          if (enc.form.name.indexOf("Vitals") !== -1) {
            console.info("Pushing")
            obs.push(...enc.obs)
          }
        })
        dispatch(receivedObs(obs))
      }, (err) => {
        console.error(err)
        dispatch(errorFetchingObs())
      })
    } catch (e) {
      console.error("Something weird happened in Obs.js...", e)
      dispatch(errorFetchingObs())
    } finally {
      dispatch(successFetchingObs())
    }
  }
}
