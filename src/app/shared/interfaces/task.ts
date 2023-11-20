
export interface Task {
  id:       string;
  name:     string;
  status:   boolean;
  subtasks?: Subtask[];
}

export interface Subtask {
  id:     string;
  name:   string;
  user:   string;
  status: number;
  taskId: string;
}
