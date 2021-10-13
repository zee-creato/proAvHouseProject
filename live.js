// const { ResourceLoader } = require("jsdom");

//     let btns=document.querySelectorAll('.remote__topBtns');


//     btns.forEach(btn=>{
//     btn.addEventListener('click', function(e){
//     document.querySelectorAll('.remote__topBtns__btn').forEach(s=>s.classList.remove('zee'))
//     read(e)
//     klasa(e)
//     })
    
//     })
    
    
    
    
    
//     read=(e)=>{
//     let UiId=e.target.id
//     let SigNumber=e.target.dataset.signumber;
//     let SigType =e.target.dataset.sigtype;
//     let State=e.target.dataset.state;
//     let BoolValue=e.target.dataset.boolvalue;
//     let StringValue=e.target.dataset.stringvalue;
//     let UShortValue=e.target.dataset.ushortvalue;
//     console.log(UiId,SigNumber,SigType,State,BoolValue,StringValue,UShortValue);
// let all=[{
  

    
//         UiId: UiId,
//         SigNumber: SigNumber,
//         SigType: SigType,
//         State: State,
//         BoolValue: BoolValue,
//         StringValue: StringValue,
//         UShortValue: UShortValue
      








// }]
//   doSend(JSON.stringify(all))
//     }

// klasa=(e)=>{

// e.target.classList.add('zee');




// }







// //  wsUri = "ws://172.21.7.62:8090",
//  wsUri = "ws://localhost:8002",
//    websocket = new WebSocket(wsUri);
// // // button.addEventListener("click", onClickButton);
//  websocket.onopen = function (e) {
// //     // writeToScreen("CONNECTED");
// console.log('Connected to the Server')
//    doSend("WebSocket rocks");
//  };
// // websocket.onclose = function (e) {
// //     // writeToScreen("DISCONNECTED");
// // };
// // websocket.onmessage = function (e) {
// //     // writeToScreen("<span>RESPONSE: " + e.data + "</span>");
// // };
// // websocket.onerror = function (e) {
// //     // writeToScreen("<span class=error>ERROR:</span> " + e.data);
// // };
// function doSend(message) {
//    // writeToScreen("SENT: " + message);
//    websocket.send(message);
// }
// // function writeToScreen(message) {
// //     output.insertAdjacentHTML("afterbegin", "<p>" + message + "</p>");
// // }
// // function onClickButton() {
// //     var text = textarea.value;
// //     text && doSend(text);
// //     textarea.value = "";
// //     textarea.focus();
// // }






let v= document.querySelectorAll('.swiper-wrapper');



v.forEach(l=>{

l.addEventListener('click' , (e)=>{


// console.log(e.target.dataset.id , e.target.dataset.signumber , e.target.dataset.sigtype ,e.target.dataset.state)
loader(e)

})




})









loader=(e)=>{

  let UiId=e.target.dataset.id
  let SigNumber=e.target.dataset.signumber;
  let SigType =e.target.dataset.sigtype;
  let State=e.target.dataset.state; 
  // let BoolValue=e.target.dataset.boolvalue;
  // let StringValue=e.target.dataset.stringvalue;
  // let UShortValue=e.target.dataset.ushortvalue;
  console.log(UiId,SigNumber,SigType,State);
let test=[{


  
      UiId: UiId,
      SigNumber: SigNumber,
      SigType: SigType,
      State: State,
    
    








}]
doSend(JSON.stringify(test))



}






wsUri = "ws://172.21.7.62:8090",
   websocket = new WebSocket(wsUri);


   websocket.onopen = function (e) {
    //     // writeToScreen("CONNECTED");
    console.log('Connected to the Server Test')
       doSend("WebSocket rocks");
     };



     function doSend(message) {
      // writeToScreen("SENT: " + message);
      websocket.send(message);
   }