//EVENTS
//  Event-Driven Programming
//  Used Heavely in Node.js

const EventEmitter = require('events')

const customEmitter = new EventEmitter()
 
customEmitter.on('response', (name, id)=>{
    console.log(`data recieved ${name}   ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})


customEmitter.emit('response', 'john', 34)
