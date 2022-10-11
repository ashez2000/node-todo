import http from 'http'

export type HttpRequest = http.IncomingMessage

export type HttpResponse = http.ServerResponse<http.IncomingMessage> & {
  req: http.IncomingMessage
}
