import { combineReducers } from 'redux'
import todosReducer from './todos'
import listsReducer from './lists'
import tagsReducer from './tags'
import appReducer from './app'

export default combineReducers({
  app: appReducer,
  todos: todosReducer,
  lists: listsReducer,
  tags: tagsReducer
})
