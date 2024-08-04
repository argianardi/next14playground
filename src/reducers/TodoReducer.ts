import { TodoActionType, TodoListType } from '@/types/TodoTypes';

export const todoReducer = (
  todoList: TodoListType,
  todoAction: TodoActionType
): TodoListType => {
  switch (todoAction.type) {
    case 'ADD_TODO':
      return [
        ...todoList,
        {
          id: Date.now(),
          title: todoAction.title,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return todoList.map((todo) =>
        todo.id === todoAction.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'REMOVE_TODO':
      return todoList.filter((todo) => todo.id !== todoAction.id);
    default:
      return todoList;
  }
};
