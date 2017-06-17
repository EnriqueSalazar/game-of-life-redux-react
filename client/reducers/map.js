import {
  UPDATE_MAP,
  INIT_MAP,
  RANDOM_MAP,
  TOGGLE_SEED
} from '../constants/ActionTypes'

const initialState = {
  life: [],
  size: 0
}

export default function map(state = initialState, action) {
  const { life, size } = state
  const newMap = life.map(function(arr) {
    return arr.slice()
  })
  switch (action.type) {
    case UPDATE_MAP:
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const prevY = y === 0 ? size - 1 : y - 1
          const prevX = x === 0 ? size - 1 : x - 1
          const nextY = y === size - 1 ? 0 : y + 1
          const nextX = x === size - 1 ? 0 : x + 1
          const count =
            (life[prevY][prevX] > 10) +
            (life[prevY][x] > 10) +
            (life[prevY][nextX] > 10) +
            (life[y][prevX] > 10) +
            (life[y][nextX] > 10) +
            (life[nextY][prevX] > 10) +
            (life[nextY][x] > 10) +
            (life[nextY][nextX] > 10)
          if (count < 2 && life[y][x] !== 0) {
            newMap[y][x] = life[y][x] - 1
          } else if (count === 3 && life[y][x] !== 11) {
            newMap[y][x] = 11
          } else if (count > 3 && life[y][x] !== 0) {
            newMap[y][x] = life[y][x] - 1
          }
        }
      }
      return Object.assign({}, state, { life: newMap })
    case RANDOM_MAP:
      const randomLifeMap = []
      for (let y = 0; y < action.size; y++) {
        randomLifeMap[y] = []
        for (let x = 0; x < action.size; x++) {
          randomLifeMap[y][x] = Math.round(Math.random()) * 11
        }
      }
      return Object.assign({}, state, {
        life: randomLifeMap,
        size: action.size
      })
    case INIT_MAP:
      console.log('Init map')
      const initialLifeMap = []
      for (let y = 0; y < action.size; y++) {
        initialLifeMap[y] = []
        for (let x = 0; x < action.size; x++) {
          initialLifeMap[y][x] = 0
        }
      }
      return Object.assign({}, state, {
        life: initialLifeMap,
        size: action.size
      })
    case TOGGLE_SEED:
      const { y, x } = action
      // console.log(y, x, life[y][x], life[y][x] ? 0 : 11)
      newMap[y][x] = life[y][x] ? 0 : 11
      return Object.assign({}, state, { life: newMap })
    default:
      return state
  }
}
