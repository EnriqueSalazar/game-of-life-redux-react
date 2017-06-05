import * as types from '../constants/ActionTypes'

export const updateMap = () =>
({type: types.UPDATE_MAP})
export const initMap = (size) =>
({type: types.INIT_MAP, size})
