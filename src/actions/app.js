import * as ACTION from '../constants/app'

export const selectList = (listId) => {
  return { type: ACTION.SELECT_LIST, payload: { listId } }
}

export const updateEditingTodo = (todoId) => {
  return { type: ACTION.UPDATE_EDITING_TODO, payload: { todoId } }
}

export const updateSelectedTags = (tag) => {
  return { type: ACTION.UPDATE_SELECTED_TAGS, payload: { tag } }
}

export const clearTagsFilter = () => {
  return { type: ACTION.CLEAR_TAGS_FILTER }
}
