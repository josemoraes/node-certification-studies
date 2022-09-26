# Snippets

Generate a big file with 100K of bytes

`node -e "process.stdout.write(crypto.randomBytes(1e9))" > big.file`

Connect to a socket

`node -e "process.stdin.pipe(require('net').connect(3001))"`

# Refs

* [Stream](https://nodejs.org/api/stream.html)
* [Buffer](https://nodejs.org/api/buffer.html)
* [Quem tem medo de Node.js Streams? - conheça a incrível e poderosa funcionalidade do Node.js](https://www.youtube.com/watch?v=pB5-QzabL2I)
* [Node JS Tutorial for Beginners #13 - Streams and Buffers](https://www.youtube.com/watch?v=GlybFFMXXmQ)
* [Understanding Buffers | Understanding Node.js Core Concepts](https://www.youtube.com/watch?v=QZIeZM-yXXU)
* [Node JS - Pipe, Duplex, & Transform Streams](https://www.youtube.com/watch?v=rQXaDH__Suk)
* [Streams and Buffer in Node.Js](https://www.codingninjas.com/codestudio/library/streams-and-buffer-in-node-js)