import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import './App.scss'
import TopBar from './components/TopBar'
import Sidebar from './components/SideBar'
import TodoListContainer from './components/TodoList'
import Header from './components/Header'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <TopBar />
        <div className='content-wrapper'>
          <Sidebar />
          <main className='main-content'>
            <Header />
            <TodoListContainer />
          </main>
        </div>
      </div>
    </Provider>
  )
}

export default App
