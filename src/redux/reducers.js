import actions from './actions'

const GuaridanEyeReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case actions.SET_DOMAINS: {
      return {
        ...state,
        domains: payload,
      }
    }
    case actions.SET_SUMMARY: {
      return {
        ...state,
        summary: payload,
      }
    }
    default:
      return state
  }
}

export default GuaridanEyeReducer
