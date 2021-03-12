import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styles from '../styles/style.module.scss'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import TodoFilter from '../filters/todos'
import { updateTodoOrder } from '../actions/list-action'

class TodoList extends Component {
  render() {
    const { updateTodoOrder, todos } = this.props
    console.log('current tasks', todos)
    const onDragEnd = (result) => {
      // dropped outside the list
      if (!result.destination) {
        return
      }
      const sourceIndex = result.source.index
      const destinationIndex = result.destination.index
      reorder(todos, sourceIndex, destinationIndex)

      const sourceId = todos[sourceIndex].id
      const destinationId = todos[destinationIndex].id
      updateTodoOrder(sourceId, destinationId)
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
                    {todos?.length ? (
                      todos.map((todo, index) => (
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

const mapStateToProps = (state) => {
  const filter = new TodoFilter(state, 'todos')
  const { currentListId } = state.app || null

  return { todos: filter.getItemsByList(currentListId), currentListId }
}
const mapDispatchToProps = { updateTodoOrder }
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer
