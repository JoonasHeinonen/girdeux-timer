const timeReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CALC':
      console.log('CALC')
      return state + 1
    case 'RESET':
      console.log('RESET')
      return 0
    default:
      return state
  }
}

export default timeReducer