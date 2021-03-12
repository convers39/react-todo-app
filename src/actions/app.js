const SELECT_LIST = 'select_list'
const UPDATE_EDITING_TODO = 'update_editing_todo'

export const selectList = (listId) => {
  return { type: SELECT_LIST, payload: { listId } }
}

export const updateEditingTodo = (todoId) => {
  return { type: UPDATE_EDITING_TODO, payload: { todoId } }
}
