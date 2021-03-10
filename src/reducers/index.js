import { combineReducers } from 'redux'
import listReducer from './list-reducer'
import listsReducer from './lists-reducer'
import tagsReducer from './tags-reducer'

export default combineReducers({
  currentList: listReducer,
  allLists: listsReducer,
  allTags: tagsReducer
})
