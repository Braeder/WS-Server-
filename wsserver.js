const WebSocket = require('ws');

  const ws = new WebSocket.Server({ port: 8080 });
  ws.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
  });

   function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));       
    }
    return result;
  }

setInterval(sendit, 1)
 // setInterval(sendit2, 2)  
 // setInterval(sendit3, 2)  
 // setInterval(sendit4, 1)
 // setInterval(sendit5, 2)  
 // setInterval(sendit6, 2) 
 // setInterval(sendit7, 2)  
 // setInterval(sendit8, 2)

  function sendit(){
    let arraySend = []
  
   for(i = 0; i < 1 ; i++){
  // the one in the for loop sets the amount of objects in the array. to add more objects, change the arguement value to greater than 1
   let eventType = ["Q","T","A","AM"]
   let ev = eventType[Math.floor(Math.random()*eventType.length)]
   let symbolLength = (Math.floor(Math.random() * 4) + 1)
   let sym = getRandomString(symbolLength)
   let p = Math.pow(100, Math.random()).toFixed(3)
   let s = (Math.floor(Math.random() * 2000) + 1)
   let a = 12
   let b = 14
   let t= new Date().getTime()
   let convertedMessage2 = {
   ev,
   sym,
   p,
   s,
   t,
   a,
   b
   }
   arraySend.push(convertedMessage2)
     }
     
     msg = JSON.stringify(arraySend) 
     console.log("WS STREAM2:", arraySend.length)
      ws.send(msg)
      astring = JSON.stringify(msg)
      arraySend.splice(0, arraySend.length)
    //  console.log("WS STREAM:", msg)
   
   }
   
function sendit2(){
 let arraySend = []
 
for(i = 0; i < 5 ; i++){
 
let eventType = ["Q","T","A","AM"]
let ev = eventType[Math.floor(Math.random()*eventType.length)]
let symbolLength = (Math.floor(Math.random() * 4) + 1)
let sym = getRandomString(symbolLength)
let p = Math.pow(100, Math.random()).toFixed(3)
let s = (Math.floor(Math.random() * 2000) + 1)
let a = 12
let b = 14
let t= new Date().getTime()
let convertedMessage2 = {
ev,
sym,
p,
s,
t,
a,
b
}
arraySend.push(convertedMessage2)
  }
  
  msg = JSON.stringify(arraySend) 
  console.log("WS STREAM2:", arraySend.length)
   ws.send(msg)
   astring = JSON.stringify(msg)
   arraySend.splice(0, arraySend.length)
 //  console.log("WS STREAM:", msg)

}
function sendit3(){
  let arraySend = []
  
 for(i = 0; i < 1 ; i++){
  
 let eventType = ["Q","T","A","AM"]
 let ev = eventType[Math.floor(Math.random()*eventType.length)]
 let symbolLength = (Math.floor(Math.random() * 4) + 1)
 let sym = getRandomString(symbolLength)
 let p = Math.pow(100, Math.random()).toFixed(3)
 let s = (Math.floor(Math.random() * 2000) + 1)
 let a = 12
 let b = 14
 let t= new Date().getTime()
 let convertedMessage2 = {
 ev,
 sym,
 p,
 s,
 t,
 a,
 b
 }
 arraySend.push(convertedMessage2)
   }
   
   msg = JSON.stringify(arraySend) 
   console.log("WS STREAM2:", arraySend.length)
    ws.send(msg)
    astring = JSON.stringify(msg)
    arraySend.splice(0, arraySend.length)
  //  console.log("WS STREAM:", msg)
 
 }
 function sendit4(){
  let arraySend = []
  
 for(i = 0; i < 4 ; i++){
  
 let eventType = ["Q","T","A","AM"]
 let ev = eventType[Math.floor(Math.random()*eventType.length)]
 let symbolLength = (Math.floor(Math.random() * 4) + 1)
 let sym = getRandomString(symbolLength)
 let p = Math.pow(100, Math.random()).toFixed(3)
 let s = (Math.floor(Math.random() * 2000) + 1)
 let a = 12
 let b = 14
 let t= new Date().getTime()
 let convertedMessage2 = {
 ev,
 sym,
 p,
 s,
 t,
 a,
 b
 }
 arraySend.push(convertedMessage2)
   }
   
   msg = JSON.stringify(arraySend) 
   console.log("WS STREAM2:", arraySend.length)
    ws.send(msg)
    astring = JSON.stringify(msg)
    arraySend.splice(0, arraySend.length)
    
 
 }
 function sendit5(){
  let arraySend = []
  
 for(i = 0; i < 10 ; i++){
  
 let eventType = ["Q","T","A","AM"]
 let ev = eventType[Math.floor(Math.random()*eventType.length)]
 let symbolLength = (Math.floor(Math.random() * 4) + 1)
 let sym = getRandomString(symbolLength)
 let p = Math.pow(100, Math.random()).toFixed(3)
 let s = (Math.floor(Math.random() * 2000) + 1)
 let a = 12
 let b = 14
 let t= new Date().getTime()
 let convertedMessage2 = {
 ev,
 sym,
 p,
 s,
 t,
 a,
 b
 }
 arraySend.push(convertedMessage2)
   }
   
   msg = JSON.stringify(arraySend) 
   console.log("WS STREAM2:", arraySend.length)
    ws.send(msg)
    astring = JSON.stringify(msg)
    arraySend.splice(0, arraySend.length)
  //  console.log("WS STREAM:", msg)
 
 }
 function sendit6(){
  let arraySend = []
  
 for(i = 0; i < 6 ; i++){
  
 let eventType = ["Q","T","A","AM"]
 let ev = eventType[Math.floor(Math.random()*eventType.length)]
 let symbolLength = (Math.floor(Math.random() * 4) + 1)
 let sym = getRandomString(symbolLength)
 let p = Math.pow(100, Math.random()).toFixed(3)
 let s = (Math.floor(Math.random() * 2000) + 1)
 let a = 12
 let b = 14
 let t= new Date().getTime()
 let convertedMessage2 = {
 ev,
 sym,
 p,
 s,
 t,
 a,
 b
 }
 arraySend.push(convertedMessage2)
   }
   
   msg = JSON.stringify(arraySend) 
   console.log("WS STREAM2:", arraySend.length)
    ws.send(msg)
    astring = JSON.stringify(msg)
    arraySend.splice(0, arraySend.length)
  //  console.log("WS STREAM:", msg)
 
 }
 function sendit7(){
  let arraySend = []
  
 for(i = 0; i < 15 ; i++){
  
 let eventType = ["Q","T","A","AM"]
 let ev = eventType[Math.floor(Math.random()*eventType.length)]
 let symbolLength = (Math.floor(Math.random() * 4) + 1)
 let sym = getRandomString(symbolLength)
 let p = Math.pow(100, Math.random()).toFixed(3)
 let s = (Math.floor(Math.random() * 2000) + 1)
 let a = 12
 let b = 14
 let t= new Date().getTime()
 let convertedMessage2 = {
 ev,
 sym,
 p,
 s,
 t,
 a,
 b
 }
 arraySend.push(convertedMessage2)
   }
   
   msg = JSON.stringify(arraySend) 
   console.log("WS STREAM2:", arraySend.length)
    ws.send(msg)
    astring = JSON.stringify(msg)
    arraySend.splice(0, arraySend.length)
  //  console.log("WS STREAM:", msg)
 
 }
 function sendit8(){
 let arraySend = []
 for(i = 0; i < 20 ; i++){  
 let eventType = ["Q","T","A","AM"]
 let ev = eventType[Math.floor(Math.random()*eventType.length)]
 let symbolLength = (Math.floor(Math.random() * 4) + 1)
 let sym = getRandomString(symbolLength)
 let p = Math.pow(100, Math.random()).toFixed(3)
 let s = (Math.floor(Math.random() * 2000) + 1)
 let a = 12
 let b = 14
 let t= new Date().getTime()
 let convertedMessage2 = {
 ev,
 sym,
 p,
 s,
 t,
 a,
 b
 }
 arraySend.push(convertedMessage2)
   }
   
   msg = JSON.stringify(arraySend) 
   console.log("WS STREAM2:", arraySend.length)
    ws.send(msg)
    astring = JSON.stringify(msg)
    arraySend.splice(0, arraySend.length)

 }
 


  
})
