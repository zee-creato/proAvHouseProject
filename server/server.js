

 const WebSocket = require("ws");

 const wss = new WebSocket.Server( {port:8001} );
 
 
 wss.on("connection" , ws=>{
 console.log('Connection made')
 ws.on("message" , message=>{
 
 try{
     console.log(JSON.parse(message));
 }catch(e){
//      console.log(`Something went wrong ${e.message}`)
  }
 });
 
 
 });