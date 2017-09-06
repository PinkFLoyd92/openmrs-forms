export const ADD_DRUG = "ADD_DRUG"
export const SELECT_DRUG = "SELECT_DRUG"
export const DELETE_DRUG = "DELETE_DRUG"
export const TOGGLE_DRAW = "TOGGLE_DRAW"


export function addDrug(id, nombre, tipo, precios_fecha, codigo) {
  return {
    type: ADD_DRUG,
    payload: { id, nombre, tipo, precios_fecha, codigo },
  }
}

export function selectDrug(id, nombre, tipo, precios_fecha, codigo) {
  return {
    type: SELECT_DRUG,
    payload: { id, nombre, tipo, precios_fecha, codigo },
  }
}


export function deleteDrug(drugs = [], id) {
  return {
    type: DELETE_DRUG,
    payload: { drugs, id },
  }
}


export function toggleDraw(value) {
  return {
    type: TOGGLE_DRAW,
    payload: { value },
  }
}
