import { CREATE_VITALS_FORM } from "../actions/vitals"

function vitals(state = [], action) {
  switch (action.type) {
    case CREATE_VITALS_FORM: {
      return state
    }

    default:
      return state
  }
}

export { vitals }
