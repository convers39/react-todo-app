import './App.scss'
import TopBar from './components/TopBar'
import Sidebar from './components/SideBar'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <TopBar />
      <div className='content-wrapper'>
        <Sidebar />
        <main className='main-content'>
          <Header />
          <TodoList />
        </main>
      </div>
    </div>
  )
}

export default App
