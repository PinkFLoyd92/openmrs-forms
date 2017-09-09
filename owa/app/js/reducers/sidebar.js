import { TOGGLE_SIDEBAR } from "../actions/sidebar"

function sidebar(state = false, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      if (state === true) {
        document.getElementById("sideBar").style.width = "0"
      } else {
        document.getElementById("sideBar").style.width = "300px"
      }
      return !state
    }
    default:
      return state
  }
}

export { sidebar }
