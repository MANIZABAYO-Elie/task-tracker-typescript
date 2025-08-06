
export interface Task {
    id: string
    taskName:string
    priority:'Low'|'Medium'|'High'
    category:'Frontend' | 'Backend' | 'Meeting' | 'Design'
    dueDate:string
    assignedUser:string
    assignedOn:string
    isCompleted:boolean
}