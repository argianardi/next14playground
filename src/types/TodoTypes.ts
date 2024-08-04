export interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoListType = TodoType[];

export type TodoActionType =
  | { type: 'ADD_TODO'; title: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'REMOVE_TODO'; id: number };
