import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styles from '../styles/style.module.scss'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { updateTodoOrder } from '../actions/list-action'

class TodoList extends Component {
  /*
  state = { currentListId: this.props.currentListId, tasks: [] }

  componentDidMount() {
    console.log('did mount', this.state)
    this.setState((state) => ({
      ...state,
      tasks: initialTasks.filter((todo) => todo.listId === state.currentListId)
    }))
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentListId !== prevProps.currentListId) {
      this.setState((state) => ({
        ...state,
        tasks: initialTasks.filter(
          (todo) => todo.listId === this.props.currentListId
        )
      }))
    }
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const tasks = reorder(
      this.state.tasks,
      result.source.index,
      result.destination.index
    )

    this.setState({ tasks })
    this.props.updateTodoOrder(this.state.currentListId, tasks)
  }
  */

  render() {
    const { currentListId, updateTodoOrder, currentTasks } = this.props
    console.log('current tasks', currentTasks, this.props)
    const onDragEnd = (result) => {
      // dropped outside the list
      if (!result.destination) {
        return
      }
      const orderedTasks = reorder(
        currentTasks,
        result.source.index,
        result.destination.index
      )
      console.log('ordered tasks', orderedTasks)
      updateTodoOrder(currentListId, orderedTasks)
    }
    return (
      <div className={styles.list_container}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable'>
            {(provided, snapshot) => (
              <div className={styles.content}>
                <ul className={styles.todo_tasks}>
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {currentTasks?.length ? (
                      currentTasks.map((todo, index) => (
                        <Draggable
                          key={todo.id}
                          draggableId={todo.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getTaskStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <TodoItem todo={todo} />
                            </div>
                          )}
                        </Draggable>
                      ))
                    ) : (
                      <h3>No task</h3>
                    )}
                    {provided.placeholder}
                  </div>
                </ul>
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddTodo />
      </div>
    )
  }
}

const getTaskStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the tasks look a bit nicer
  userSelect: 'none',
  // change background colour if dragging
  opacity: isDragging && 0.9,
  // styles we need to apply on draggables
  ...draggableStyle
})

const getListStyle = (isDraggingOver) => ({
  // background: isDraggingOver && 'lightgrey'
})

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const mapStateToProps = (state) => ({
  currentListId: state.currentList.currentListId,
  currentTasks: state.currentList.list
})
const mapDispatchToProps = { updateTodoOrder }
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer
