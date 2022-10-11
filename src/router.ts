import { HttpRequest, HttpResponse } from './types'
import { getTodos, createTodo, getTodoById, updateTodo, deleteTodo } from './todo.controller'

const router = (req: HttpRequest, res: HttpResponse) => {
  if (req.url === '/api/todos' && req.method === 'GET') {
    getTodos(req, res)
  } else if (req.url === '/api/todos' && req.method === 'POST') {
    createTodo(req, res)
  } else if (req.url && req.url.match(/\/api\/todos\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[3]
    getTodoById(req, res, id)
  } else if (req.url && req.url.match(/\/api\/todos\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3]
    updateTodo(req, res, id)
  } else if (req.url && req.url.match(/\/api\/todos\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3]
    deleteTodo(req, res, id)
  } else {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 404
    res.end('Not Found')
  }
}

export default router
