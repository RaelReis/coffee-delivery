import { produce } from 'immer'
import { ClienInfoActionTypes } from './action'
import { PurchaseValues } from '../../schemas/zod/purchaseValidationSchema'

export interface ClientState extends PurchaseValues {}

type ClientAction = {
  type: typeof ClienInfoActionTypes.ADD_CLIENT_INFO
  payload: ClientState
}

export const initialClientState = {} as ClientState

export function clientInfoReducer(state: ClientState, action: ClientAction) {
  switch (action.type) {
    case ClienInfoActionTypes.ADD_CLIENT_INFO:
      return produce(state, (draft) => {
        draft = { ...action.payload }
        return draft
      })
    default:
      return state
  }
}
