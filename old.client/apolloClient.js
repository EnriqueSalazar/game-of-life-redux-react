import ApolloClient, {
  createNetworkInterface
} from 'apollo-client'
import {ENDPOINT} from './config/'

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: ENDPOINT,
    opts: {
      credentials: 'same-origin'
    }
  }),
  dataIdFromObject: o => o.id,
  addTypename: false
})
