import { ClientState } from './reducer'

export const ClienInfoActionTypes = {
  ADD_CLIENT_INFO: 'ADD_CLIENT_INFO',
} as const

export function addClientInfoAction(clientInfo: ClientState) {
  return {
    type: ClienInfoActionTypes.ADD_CLIENT_INFO,
    payload: {
      ...clientInfo,
    },
  }
}
