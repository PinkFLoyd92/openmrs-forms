import { ADD_DRUG, SELECT_DRUG, DELETE_DRUG } from "../actions/DrugActions"

const drug = (state = {}, action) => {
  switch (action.type) {
    case ADD_DRUG:
      return {
        id: action.payload.id,
        nombre: action.payload.nombre,
        tipo: action.payload.tipo,
        precios_fecha: action.payload.precios_fecha,
        codigo: action.payload.codigo,
      }
    default:
      return state
  }
}

function drugs(state = [], action) {
  switch (action.type) {
    case ADD_DRUG:
      return [...state, drug(undefined, action)]
    case DELETE_DRUG:
      return state.filter(obj => parseInt(obj.id) !== parseInt(action.payload.id))
    default:
      return state
  }
}


function selectDrug(state = {}, action) {
  switch (action.type) {
    case SELECT_DRUG:
      return Object.assign({}, state, {
        id: action.payload.id,
        nombre: action.payload.nombre,
        codigo: action.payload.codigo,
        tipo: action.payload.tipo,
        precios_fecha: action.payload.precios_fecha,
      })

    default:
      return state
  }
}

export { selectDrug, drugs }
