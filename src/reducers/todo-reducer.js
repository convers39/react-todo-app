const TOGGLE_FINISHED = 'toggle_finished'
const ADD_NEW_TODO = 'add_new_todo'

const todoReducer = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NEW_TODO:
      return state

    default:
      return state
  }
}
