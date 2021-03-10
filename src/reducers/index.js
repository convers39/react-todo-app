import { combineReducers } from 'redux'
import listReducer from './list-reducer'
import listsReducer from './lists-reducer'
// import todoReducer from './todo-reducer'

export default combineReducers({
  currentList: listReducer,
  allLists: listsReducer
  // todoItem: todoReducer
  // remoteTags: tagsReducer,
  // deletedTodos: deletedReducer
})
