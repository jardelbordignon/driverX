// reducer é responsável por gerenciar o estado

import produce from 'immer'

import types from './actions'

const INITIAL_STATE = {
  user: {
    fbid: null,
    name: null,
    email: null,
    type: 'M',
    accessToken: null
  }
}

export default function app(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.UPDATE_USER: {
      return produce(state, draft => {
        draft.user = {...state.user, ...action.user}
      })
    }

    default:
      return state
  }
}
