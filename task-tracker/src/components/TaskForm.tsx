// import { useState } from "react";
// import Button from "./Button";
// import { v4 as uuidv4 } from 'uuid';
// import Input from "./Input";
// import type { Task } from "../type/task";


// const defaultTask = {
//   taskName: '',
//   priority: 'Low' ,
//   category: 'Frontend',
//   dueDate: '',
//   assignedUser: '',
//   assignedOn: '',
// };
// export default function TaskForm({ onAdd }: { onAdd: (task: Task) => void }){
//     const [formData,setFormData] = useState(defaultTask)

//     function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
//     const { name, value } = event.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   }
//   function handleSubmit(event: React.FormEvent) {
//     event.preventDefault();
//     const newTask: Task = {
//       ...formData,
//       id: uuidv4(),
//       isCompleted: false,
//     };
//     onAdd(newTask);
//     setFormData(defaultTask);
//   }
//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
//       <Input id="1" label="Task Name" name="taskName" value={formData.taskName} onChange={handleChange} />
//       <Input id="2" label="Priority" name="priority" value={formData.priority} onChange={handleChange} options={['Low', 'Medium', 'High']} />
//       <Input id="3" label="Category" name="category" value={formData.category} onChange={handleChange} options={['Frontend', 'Backend', 'Meeting', 'Design']} />
//       <Input id="4" label="Due Date" name="dueDate" value={formData.dueDate} onChange={handleChange} type="date" />
//       <Input id="5" label="Assigned User" name="assignedUser" value={formData.assignedUser} onChange={handleChange} />
//       <Input id="6"   label="Assigned On" name="assignedOn" value={formData.assignedOn} onChange={handleChange} type="date" />
//       <Button  onClick={() => {}} label="Add Task" type="submit" />
//     </form>
//   );
// }


import { useState } from "react";
import Button from "./Button";
 import { v4 as uuidv4 } from 'uuid';
import Input from "./Input";
import type { Task } from "../type/task";

const defaultTask: Omit<Task, 'id' | 'isCompleted'> = {
  taskName: '',
  priority: 'Low',
  category: 'Frontend',
  dueDate: '',
  assignedUser: '',
  assignedOn: '',
};

export default function TaskForm({ onAdd }: { onAdd: (task: Task) => void }) {
  const [formData, setFormData] = useState(defaultTask);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const newTask: Task = {
      ...formData,
      id: uuidv4(),
      isCompleted: false,
    };
    onAdd(newTask);
    setFormData(defaultTask);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <Input id="1" label="Task Name" name="taskName" value={formData.taskName} onChange={handleChange} />
      <Input id="2" label="Priority" name="priority" value={formData.priority} onChange={handleChange} options={['Low', 'Medium', 'High']} />
      <Input id="3" label="Category" name="category" value={formData.category} onChange={handleChange} options={['Frontend', 'Backend', 'Meeting', 'Design']} />
      <Input id="4" label="Due Date" name="dueDate" value={formData.dueDate} onChange={handleChange} type="date" />
      <Input id="5" label="Assigned User" name="assignedUser" value={formData.assignedUser} onChange={handleChange} />
      <Input id="6" label="Assigned On" name="assignedOn" value={formData.assignedOn} onChange={handleChange} type="date" />
     <Button  onClick={() => {}} label="Add Task" type="submit" />
    </form>
  );
}
