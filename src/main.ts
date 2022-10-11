import http from 'http'
import router from './router'

const main = async () => {
  const server = http.createServer(router)
  server.listen(3000, 'localhost', () => {
    console.log('Server listening on port 3000')
  })
}

main()
