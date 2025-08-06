import React, { createContext, useReducer, useContext } from 'react';
import type { Task } from '../type/task';
import type {ReactNode } from "react"

type Action =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'EDIT_TASK'; payload: Task };

type TaskState = Task[];

const TaskContext = createContext<TaskState | undefined>(undefined);
const TaskDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

function taskReducer(state: TaskState, action: Action): TaskState {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'EDIT_TASK':
      return state.map(task => (task.id === action.payload.id ? action.payload : task));
    default:
      return state;
  }
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, []);
  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must be used inside TaskProvider');
  return context;
}

export function useTaskDispatch() {
  const context = useContext(TaskDispatchContext);
  if (!context) throw new Error('useTaskDispatch must be used inside TaskProvider');
  return context;
}
