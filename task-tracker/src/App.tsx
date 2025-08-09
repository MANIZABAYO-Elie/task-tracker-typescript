// import AddTaskForm from './components/TaskForm';
// import { useTasks, useTaskDispatch } from './contexts/TaskContext';
// import TaskList from './components/TaskList';

// function App() {
//   const tasks = useTasks();
//   const dispatch = useTaskDispatch();

//   const handleAddTask = (task: any) => {
//     dispatch({ type: 'ADD_TASK', payload: task });
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Team Task Tracker</h1>
//       <AddTaskForm onAdd={handleAddTask} />
//       <TaskList tasks={tasks} />
//     </div>
//   );
// }

// export default App;





// import { useTasks, useTaskDispatch } from './contexts/TaskContext';
// import AddTaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';
// import type{ Task } from './type/task';
// import { useState } from 'react';
// import FilterBar from './components/Filter';

// function App() {
//   const tasks = useTasks();
//   const dispatch = useTaskDispatch();

//   const [filters, setFilters] = useState({
//     status: 'All',
//     priority: '',
//     category: '',
//     due: '',
//     user: '',
//   });

//   const handleAdd = (task: Task) => {
//     dispatch({ type: 'ADD_TASK', payload: task });
//   };

//   // ⬇️ Filtering Logic
//   const filteredTasks = tasks.filter(task => {
//     // Status
//     if (filters.status === 'Completed' && !task.isCompleted) return false;
//     if (filters.status === 'Incomplete' && task.isCompleted) return false;

//     // Priority
//     if (filters.priority && task.priority !== filters.priority) return false;

//     // Category
//     if (filters.category && task.category !== filters.category) return false;

//     // Assigned User
//     if (filters.user && task.assignedUser.toLowerCase() !== filters.user.toLowerCase()) return false;

//     // Due Date
//     const today = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
//     if (filters.due === 'Overdue' && task.dueDate < today) return false;
//     if (filters.due === 'Today' && task.dueDate !== today) return false;
//     if (filters.due === 'Upcoming' && task.dueDate <= today) return false;
//     if (filters.due === 'No Due Date' && task.dueDate !== '') return false;

//     return true;
//   });

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Team Task Tracker</h1>
//       <AddTaskForm onAdd={handleAdd} />
//       <FilterBar filters={filters} setFilters={setFilters} />
//       <TaskList tasks={filteredTasks} />
//     </div>
//   );
// }

// export default App;



import { useTasks, useTaskDispatch } from './contexts/TaskContext';
import AddTaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/Filter';
import type { Task } from './type/task';
import { useState } from 'react';

function App() {
  const tasks = useTasks();
  const dispatch = useTaskDispatch();

  const [filters, setFilters] = useState({
    status: 'All',
    priority: '',
    category: '',
    due: '',
    user: '',
  });

  const handleAdd = (task: Task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const filteredTasks = tasks.filter(task => {
    // Status
    if (filters.status === 'Completed' && !task.isCompleted) return false;
    if (filters.status === 'Incomplete' && task.isCompleted) return false;

    // Priority
    if (filters.priority && task.priority !== filters.priority) return false;

    // Category
    if (filters.category && task.category !== filters.category) return false;

    // Assigned User
    if (filters.user && task.assignedUser.toLowerCase() !== filters.user.toLowerCase()) return false;

    // Due Date
    const today = new Date().toISOString().split('T')[0];
    if (filters.due === 'Overdue' && task.dueDate >= today) return false;
    if (filters.due === 'Today' && task.dueDate !== today) return false;
    if (filters.due === 'Upcoming' && task.dueDate <= today) return false;
    if (filters.due === 'No Due Date' && task.dueDate !== '') return false;

    return true;
  });

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Team Task Tracker</h1>
      <AddTaskForm onAdd={handleAdd} />
      <FilterBar filters={filters} setFilters={setFilters} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;

