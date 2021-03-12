const initialState = {
  currentListId: null,
  editingTodoId: null
}

const SELECT_LIST = 'select_list'
const UPDATE_EDITING_TODO = 'update_editing_todo'

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SELECT_LIST: {
      const { listId } = payload
      return {
        ...state,
        currentListId: listId
      }
    }
    case UPDATE_EDITING_TODO: {
      const { todoId } = payload
      return { ...state, editingTodoId: todoId || null }
    }
    default:
      return state
  }
}

export default reducer
