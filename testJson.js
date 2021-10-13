
let gorgeDevice1=document.querySelector('.zee2');
// window.addEventListener('DOMContentLoaded' , function(){



//   axios.get('icons.json').then(response=>{
    
//         return response.json();
        
        
        
//         }).then(data=>{
        
        
//         console.log(data)
//         const html =data.map(user=>{
        
         
    
    
    
    
    
//             let devicesDiv = data.map(function(item){
      
      
      
//                 return `    
                
//                 <div class="container__main__box__left__georgeHome__device__div swiper-slide">
                
//                 <div class="container__main__box__left__georgeHome__device__div__top ">
                
                     
                
                
//                 <span class="container__main__box__left__georgeHome__device__div__top__span">${item.statusText}</span>
//                 <div></div>
//                 <input type="checkbox" ${item.status}  name="" id="">
                
                
                
                
                
                
                
//                 </div>
//                 <div class="container__main__box__left__georgeHome__device__div__middle">
                
                
//                    ${item.icon}
                  
                
//                 </div>
//                 <div class="container__main__box__left__georgeHome__device__div__bottom">
                
//                 <p class="container__main__box__left__georgeHome__device__div__bottom__p">${item.text}</p>
                
                
//                 </div>
                
                
                
                
//                 </div>
                  
//                       `;
                
//                 });
                
//                 devicesDiv =devicesDiv.join('');
                
//                 gorgeDevice1.innerHTML=devicesDiv;
                
              
              
//                 var swiper1 = new Swiper('.slider1', {
//                   speed: 900,
//                   effect:'slide',
//                   slidesPerView: 'auto',
//                   slidesPerGroupAuto:true,
//                   speed:900,
//                   centeredSlidesBounds:true
               
//                 });
              
    
    
    
    /////////////////////////////On Change ////////////////////////////////////////
    
    
    
//     selector.addEventListener('change', e=>{
    
//         const category = e.target.value;
        
//           const roomCategory=data.filter(menuItem=>{
        
        
//             if(menuItem.category === category){
        
        
        
//               return menuItem;
          
            
//             }
         
//            })
//         displayMenuRooms(roomCategory)
        
//           });
        
    
    
    
    
        
//           function displayMenuRooms(zee){
        
//             let devicesDiv = zee.map(function(item){
            
            
            
//               return `    
              
//                   <div class="container__main__box__left__georgeHome__device__div   swiper-slide ">
    
//                   <div class="container__main__box__left__georgeHome__device__div__top ">
    
         
    
    
//                   <span class="container__main__box__left__georgeHome__device__div__top__span">${item.statusText}</span>
//                    <div></div>
//                     <input type="checkbox" ${item.status}  name="" id="">
    
    
    
    
    
    
    
//                        </div>
//                        <div class="container__main__box__left__georgeHome__device__div__middle">
    
    
//                        ${item.icon}
      
    
//                         </div>
//                            <div class="container__main__box__left__georgeHome__device__div__bottom">
    
//                         <p class="container__main__box__left__georgeHome__device__div__bottom__p">${item.text}</p>
    
    
//                         </div>
    
    
    
    
//                           </div>
            
//                                                   `;
              
//                                                           });
              
//               devicesDiv =devicesDiv.join('');
              
//               gorgeDevice1.innerHTML=devicesDiv;
       
      
    
//     var swiper2 = new Swiper('.slider2', {
      
//       effect:'slide',
//       slidesPerView: 'auto',
//       speed:900,
//       spaceBetween: 10,
//       slidesPerGroupAuto:true,
    
//       slidesPerGroupAuto:true,
//       centeredSlides: true,
//       roundLengths: true,
//       loop: true,
//       loopAdditionalSlides: 30,
     
//     });
    
    
    
            
         
    
//           };
    
    
    
//         }).join('');
//         console.log(html)
//         // document.querySelector('div').innerHTML=html
        
//         }).catch(error=>{
//           console.log('Error')
//         })
        
        
        
    
    
    
    
    
    
    
    




// })
  

    window.addEventListener('DOMContentLoaded' , function(){










    
      function getUsers(){


        fetch('/all.json')
        .then(response=>{
        
        return response.json()
        
        
        })
        .then(data=>{
        
       
        
        
        
        
        
        
        
        
        
          let devicesDiv = data.Icon.map(item=>{
          
          
          
          return `    
          
          <div class="container__main__box__left__georgeHome__device__div swiper-slide">
          
          <div class="container__main__box__left__georgeHome__device__div__top ${item.color} ">
          
               
          
          
          <span class="container__main__box__left__georgeHome__device__div__top__span">${item.statusText}</span>
          <div></div>
          <input type="checkbox" ${item.status}  name="" id="">
          
          
          
          
          
          
          
          </div>
          <div class="container__main__box__left__georgeHome__device__div__middle">
          
          
             ${item.icon}
            
          
          </div>
          <div class="container__main__box__left__georgeHome__device__div__bottom">
          
          <p class="container__main__box__left__georgeHome__device__div__bottom__p">${item.text}</p>
          
          
          </div>
          
          
          
          
          </div>
            
                `;
          
          });
          
          devicesDiv =devicesDiv.join('');
          
          gorgeDevice.innerHTML=devicesDiv;
          
        
        
          var swiper1 = new Swiper('.slider1', {
            speed: 900,
            effect:'slide',
            slidesPerView: 'auto',
            slidesPerGroupAuto:true,
            speed:900,
            centeredSlidesBounds:true
         
          });
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        })
        
        .catch(error=>{
        
          console.log('Something went wrong')
        })
        
        
        
        
        
        
        
        
        
        
        
        
            }
        
        
        
        
        
        getUsers()



 function getclickUsers(){











  fetch('/all.json')
  .then(response=>{
  
  return response.json()
  
  
  })
  .then(data=>{
  

  
  
  
  
    

  selector.addEventListener('change', e=>{

    const category = e.target.value;
    
      const roomCategory=data.Icon.filter(menuItem=>{
    
    
        if(menuItem.category === category){
    
    
    
          return menuItem;
      
        
        }
     
       })
    displayMenuRooms(roomCategory)
    
      });
    




    
      function displayMenuRooms(zee){
    
        let devicesDiv = zee.map(function(item){
        
        
        
          return `    
          
              <div class="container__main__box__left__georgeHome__device__div   swiper-slide ">

              <div class="container__main__box__left__georgeHome__device__div__top ${item.color}">

     


              <span class="container__main__box__left__georgeHome__device__div__top__span">${item.statusText}</span>
               <div></div>
                <input type="checkbox" ${item.status}  name="" id="">







                   </div>
                   <div class="container__main__box__left__georgeHome__device__div__middle">


                   ${item.icon}
  

                    </div>
                       <div class="container__main__box__left__georgeHome__device__div__bottom">

                    <p class="container__main__box__left__georgeHome__device__div__bottom__p">${item.text}</p>


                    </div>




                      </div>
        
                                              `;
          
                                                      });
          
          devicesDiv =devicesDiv.join('');
          
          gorgeDevice.innerHTML=devicesDiv;
   
  

var swiper2 = new Swiper('.slider2', {
  
  effect:'slide',
  slidesPerView: 'auto',
  speed:900,
  spaceBetween: 10,
  slidesPerGroupAuto:true,

  slidesPerGroupAuto:true,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
 
});



        
     

   };




  
  
  
  
  
  
  
  
  
  
  })
  
  .catch(error=>{
  
    console.log('Something went wrong')
  })
  
  
  
  
  
  
  
  
  
  

























}






getclickUsers()








    })
    