import apiCall from "../utilities/apiHelper"

export const CREATE_VITALS_FORM = "CREATE_VITALS_FORM"

export function createVitals(vitals = []) {
  // return (dispatch) => {
  //   const promises = []
  //   try {
  //     encounters.forEach((enc) => {
  //       promises.push(apiCall(null, "get", `/encounter/${enc.uuid}?v=custom%3A(uuid%2Cform%3A(uuid%2Cname)%2Cobs)`))
  //     })
  //     Promise.all(promises).then((results) => {
  //       // Adding Observations Type: Vitals
  //       results.forEach((enc) => {
  //         if (enc.form.name.indexOf("Vitals") !== -1) {
  //           console.info("Pushing")
  //           obs.push(...enc.obs)
  //         }
  //       })
  //       dispatch(receivedObs(obs))
  //     }, (err) => {
  //       console.error(err)
  //       dispatch(errorFetchingObs())
  //     })
  //   } catch (e) {
  //     console.error("Something weird happened in Obs.js...", e)
  //     dispatch(errorFetchingObs())
  //   } finally {
  //     dispatch(successFetchingObs())
  //   }

  return {
    type: CREATE_VITALS_FORM,
    payload: vitals,
  }
}
