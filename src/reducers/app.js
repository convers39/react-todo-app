import * as ACTION from '../constants/app'

const initialState = {
  currentListId: null,
  editingTodoId: null,
  selectedTags: [] // only save the name of tags
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  // console.log('app reducer', payload)
  switch (type) {
    case ACTION.SELECT_LIST: {
      const { listId } = payload
      return {
        ...state,
        currentListId: listId
      }
    }
    case ACTION.UPDATE_EDITING_TODO: {
      const { todoId } = payload
      return { ...state, editingTodoId: todoId || null }
    }

    case ACTION.UPDATE_SELECTED_TAGS: {
      const { tag } = payload
      let currentTags = [...state.selectedTags]
      if (currentTags.includes(tag)) {
        currentTags = currentTags.filter((t) => t !== tag)
      } else {
        currentTags.push(tag)
      }
      return { ...state, selectedTags: currentTags }
    }

    case ACTION.CLEAR_TAGS_FILTER: {
      return { ...state, selectedTags: [] }
    }
    default:
      return state
  }
}

export default reducer
