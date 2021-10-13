// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"de5H":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gorgeDevice1 = document.querySelector('.zee2'); // window.addEventListener('DOMContentLoaded' , function(){
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

function getUsers() {
  fetch('/icons.json').then(function (res) {
    return res.json();
  }).then(function (data) {
    var _Swiper;

    var data1 = data;
    console.log(data1);
    var devicesDiv = data1.map(function (item) {
      return "    \n                \n                <div class=\"container__main__box__left__georgeHome__device__div swiper-slide\">\n                \n                <div class=\"container__main__box__left__georgeHome__device__div__top \">\n                \n                     \n                \n                \n                <span class=\"container__main__box__left__georgeHome__device__div__top__span\">".concat(item.statusText, "</span>\n                <div></div>\n                <input type=\"checkbox\" ").concat(item.status, "  name=\"\" id=\"\">\n                \n                \n                \n                \n                \n                \n                \n                </div>\n                <div class=\"container__main__box__left__georgeHome__device__div__middle\">\n                \n                \n                   ").concat(item.icon, "\n                  \n                \n                </div>\n                <div class=\"container__main__box__left__georgeHome__device__div__bottom\">\n                \n                <p class=\"container__main__box__left__georgeHome__device__div__bottom__p\">").concat(item.text, "</p>\n                \n                \n                </div>\n                \n                \n                \n                \n                </div>\n                  \n                      ");
    });
    devicesDiv = devicesDiv.join('');
    gorgeDevice1.innerHTML = devicesDiv;
    var swiper1 = new Swiper('.slider1', (_Swiper = {
      speed: 900,
      effect: 'slide',
      slidesPerView: 'auto',
      slidesPerGroupAuto: true
    }, _defineProperty(_Swiper, "speed", 900), _defineProperty(_Swiper, "centeredSlidesBounds", true), _Swiper));
  });
}

getUsers();
},{}]},{},["de5H"], null)
//# sourceMappingURL=testJson.ab9bed44.js.map