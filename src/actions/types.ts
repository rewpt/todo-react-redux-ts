import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  //By default this will be assigned a 0 if = 0 is left off
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
