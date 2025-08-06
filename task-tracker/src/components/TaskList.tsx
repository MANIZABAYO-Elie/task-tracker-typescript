// import type { Task } from '../type/task';

// export default function TaskList({ tasks }: { tasks: Task[] }) {
//   if (tasks.length === 0) return <p className="mt-4">No tasks yet.</p>;

//   return (
//     <ul className="mt-4 space-y-2">
//       {tasks.map(task => (
//         <li key={task.id} className="border p-3 rounded shadow-sm flex justify-between items-center">
//           <div>
//             <p className="font-semibold">{task.taskName}</p>
//             <p className="text-sm text-gray-600">Priority: {task.priority} | Assigned to: {task.assignedUser}</p>
//             <p className="font-semibold">{task.category}</p>
//             <p className="font-semibold">{task.dueDate}</p>
//             <p className="font-semibold">{task.assignedOn}</p>
//             <p className="font-semibold">{task.assignedUser}</p>
          
//           </div>
//           <div>{task.isCompleted ? '✅' : '🕒'}</div>
//         </li>
//       ))}
//     </ul>
//   );
// }

import { useState } from 'react';
import type { Task } from '../type/task';
import { useTaskDispatch } from '../contexts/TaskContext';

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const dispatch = useTaskDispatch();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Task>>({});

  const toggleCompleted = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditForm(task);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    if (editingId) {
      dispatch({ type: 'EDIT_TASK', payload: editForm as Task });
      setEditingId(null);
    }
  };

  const cancelEdit = () => setEditingId(null);

  if (tasks.length === 0) return <p className="mt-4">No tasks yet.</p>;

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="border p-3 rounded shadow-sm bg-white">
          {editingId === task.id ? (
            <div className="space-y-2">
              <input name="taskName" value={editForm.taskName || ''} onChange={handleEditChange} className="border p-1 w-full" />
              <select name="priority" value={editForm.priority} onChange={handleEditChange} className="border p-1 w-full">
                {['Low', 'Medium', 'High'].map(p => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <select name="category" value={editForm.category} onChange={handleEditChange} className="border p-1 w-full">
                {['Frontend', 'Backend', 'Meeting', 'Design'].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <input type="date" name="dueDate" value={editForm.dueDate || ''} onChange={handleEditChange} className="border p-1 w-full" />
              <input name="assignedUser" value={editForm.assignedUser || ''} onChange={handleEditChange} className="border p-1 w-full" />
              <input type="date" name="assignedOn" value={editForm.assignedOn || ''} onChange={handleEditChange} className="border p-1 w-full" />

              <div className="flex gap-2">
                <button onClick={saveEdit} className="bg-blue-600 text-white px-2 py-1 rounded">Save</button>
                <button onClick={cancelEdit} className="bg-gray-500 text-white px-2 py-1 rounded">Cancel</button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className={`font-semibold ${task.isCompleted ? 'line-through text-gray-400' : ''}`}>
                  {task.taskName}
                </p>
                <p className="text-sm text-gray-600">
                  Priority: {task.priority} | Assigned to: {task.assignedUser}
                </p>
                <p className="text-sm">Category: {task.category}</p>
                <p className="text-sm">Due: {task.dueDate}</p>
                <p className="text-sm">Assigned On: {task.assignedOn}</p>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <button onClick={() => toggleCompleted(task.id)} className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                  {task.isCompleted ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => startEdit(task)} className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)} className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
