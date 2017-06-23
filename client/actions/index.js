import * as types from '../constants/ActionTypes'

export const updateMap = () => ({ type: types.UPDATE_MAP })
export const disableEdit = () => ({ type: types.DISABLE_EDIT })
export const enableEdit = () => ({ type: types.ENABLE_EDIT })
export const initMap = size => ({ type: types.INIT_MAP, size })
export const randomMap = size => ({ type: types.RANDOM_MAP, size })
export const toggleSeed = (y, x) => ({ type: types.TOGGLE_SEED, y, x })
