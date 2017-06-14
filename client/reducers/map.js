import { UPDATE_MAP, INIT_MAP } from '../constants/ActionTypes';

const initialState = {
  map: [],
  size: 0
};

export default function map(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAP:
      const { canvas, map, size } = state;
      // console.log('tick...');
      const newMap = map.map(function(arr) {
        return arr.slice();
      });
      for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
          const prevY = y === 0 ? size - 1 : y - 1;
          const prevX = x === 0 ? size - 1 : x - 1;
          const nextY = y === size - 1 ? 0 : y + 1;
          const nextX = x === size - 1 ? 0 : x + 1;
          const count =
            (map[prevY][prevX] > 10) +
            (map[prevY][x] > 10) +
            (map[prevY][nextX] > 10) +
            (map[y][prevX] > 10) +
            (map[y][nextX] > 10) +
            (map[nextY][prevX] > 10) +
            (map[nextY][x] > 10) +
            (map[nextY][nextX] > 10);
          if (count < 2 && map[y][x] !== 0) {
            newMap[y][x] = map[y][x] - 1;
            // console.log(y, x, count, map[y][x], newMap[y][x]);
          } else if (count === 3 && map[y][x] !== 11) {
            newMap[y][x] = 11;
            // console.log(y, x, count, map[y][x], newMap[y][x]);
          } else if (count > 3 && map[y][x] !== 0) {
            newMap[y][x] = map[y][x] - 1;
            // console.log(y, x, count, map[y][x], newMap[y][x]);
          }
          // if (count > 0) console.log(y, x, map[y][x], '==>', count, '==>', newMap[y][x])
        }
      }
      return Object.assign({}, state, { map: newMap });
    case INIT_MAP:
      console.log('Init map');
      const initialLifeMap = [];
      for (let y = 0; y < action.size; y++) {
        initialLifeMap[y] = [];
        // const originY = 25
        // const originX = 25
        for (let x = 0; x < action.size; x++) {
          // let isAlive
          // if (y === originY - 1 && x === originX - 3) {
          //   isAlive = 1
          // } else if (y === originY - 1 && x === originX - 2) {
          //   isAlive = 1
          // } else if (y === originY - 1 && x === originX - 1) {
          //   isAlive = 1
          // } else if (y === originY - 1 && x === originX + 1) {
          //   isAlive = 1
          // } else if (y === originY - 1 && x === originX + 2) {
          //   isAlive = 1
          // } else if (y === originY && x === originX + 1) {
          //   isAlive = 1
          // } else if (y === originY && x === originX + 2) {
          //   isAlive = 1
          // } else if (y === originY + 1 && x === originX + 2) {
          //   isAlive = 1
          // } else {
          //   isAlive = 0
          // }
          // initialLifeMap[y][x] = isAlive
          initialLifeMap[y][x] = Math.round(Math.random()) * 11;
        }
      }
      return Object.assign({}, state, {
        map: initialLifeMap,
        size: action.size
      });
    default:
      return state;
  }
}
