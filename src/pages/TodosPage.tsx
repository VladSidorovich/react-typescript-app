import React, { useEffect, useState } from 'react'
import { TodoList } from '../components/ToDoList'
import { ToDoForm } from '../components/ToDoForm'
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
      setTodos(saved)
    }, [])
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toogleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  const removeHandler = (id: number) => {
    const shouldRemve = window.confirm('Вы уверены, что хотите удалить элемент?')
    if (shouldRemve) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
    return (
        <>
            <ToDoForm onAdd={addHandler} />

            <TodoList
            todos={todos}
            onRemove={removeHandler}
            onToggle={toogleHandler}
            />
        </>
    )
}