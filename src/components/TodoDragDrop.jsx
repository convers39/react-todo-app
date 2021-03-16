import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import TodoItem from './TodoItem'
import { updateTodoOrder } from '../store/actions/todos'
import { getTaskStyle, getListStyle, onDragEnd } from '../utils/dnd'
import styles from '../styles/style.module.scss'

class TodoDragDrop extends Component {
  render() {
    const { updateTodoOrder, todos } = this.props
    const handleDragEnd = (result) => {
      const [sourceId, destinationId] = onDragEnd(result, todos)
      updateTodoOrder(sourceId, destinationId)
    }

    return (
      <>
        <DragDropContext onDragEnd={handleDragEnd}>
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
      </>
    )
  }
}

const mapDispatchToProps = { updateTodoOrder }

export default connect(null, mapDispatchToProps)(TodoDragDrop)
