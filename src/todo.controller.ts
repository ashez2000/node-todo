import { HttpRequest, HttpResponse } from './types'

export const getTodos = (req: HttpRequest, res: HttpResponse) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end('getTodos')
}

export const getTodoById = (req: HttpRequest, res: HttpResponse, id: string) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end('getTodoById')
}

export const createTodo = (req: HttpRequest, res: HttpResponse) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 201
  res.end('createTodo')
}

export const updateTodo = (req: HttpRequest, res: HttpResponse, id: string) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end('updateTodo' + id)
}

export const deleteTodo = (req: HttpRequest, res: HttpResponse, id: string) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end('deleteTodo' + id)
}
