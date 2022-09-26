import http from 'http'
import {createReadStream} from 'fs'

http.createServer((req, res) => {
  createReadStream("big.file")
   .pipe(res)
}).listen(3000, () => console.log('running at 3000'));