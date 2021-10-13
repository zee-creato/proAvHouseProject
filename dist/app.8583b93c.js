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
})({"A2T1":[function(require,module,exports) {
var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tabsVerticalInner = $('.container__nav');
var selectorVerticalInner = $('.container__nav').find('li').length;
var activeItemVerticalInner = tabsVerticalInner.find('.active');
var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
var itemPosVerticalTop = activeItemVerticalInner.position();
var itemPosVerticalLeft = activeItemVerticalInner.position();
$(".selector-active").css({
  "top": itemPosVerticalTop.top + "px",
  "left": itemPosVerticalLeft.left + "px",
  "height": activeWidthVerticalHeight + "px",
  "width": activeWidthVerticalWidth + "px"
});
$(" .container__nav ").on("click", "li", function (e) {
  $('li').removeClass("active");
  $(this).addClass('active');
  $('svg').removeClass('active');
  $(" .container__nav ").on("click", "svg", function (e) {
    $(this).addClass('active');
  });
  var activeWidthVerticalHeight = $(this).innerHeight();
  var activeWidthVerticalWidth = $(this).innerWidth();
  var itemPosVerticalTop = $(this).position();
  var itemPosVerticalLeft = $(this).position();
  $(".selector-active").css({
    "top": itemPosVerticalTop.top + "px",
    "left": itemPosVerticalLeft.left + "px",
    "height": activeWidthVerticalHeight + "px",
    "width": activeWidthVerticalWidth + "px"
  });
});
var span = document.querySelector('.container__main__box__left__georgeHome__device__div__top__span');
var input = document.querySelectorAll('.container__main__box__left__georgeHome__device__div__top input'); // input.addEventListener('change' , ()=>{
// if(input.checked === true){
// 	span.textContent='on'
// }else{
// 	span.textContent='off'
// }
// })

input.forEach(function (d) {
  d.addEventListener('change', function (e) {
    if (e.target.checked === true) {
      span.textContent = 'on';
    } else {
      span.textContent = 'off';
    }
  });
});
var tempBtn; //////THERMOSTAT

var tempDisplay = document.querySelector("#temp-display");
var tempHandle = document.querySelector("#temp-handle");
var dialCenter = document.querySelector("#dial-center");
var minTemp = 16.0;
var maxTemp = 32.0;
var tempRange = maxTemp - minTemp;
var origin = calculateRotationOrigin();
var rotating = false; // Find the center of the dial to use as rotation origin.

function calculateRotationOrigin() {
  var _dialCenter$getBoundi = dialCenter.getBoundingClientRect(),
      width = _dialCenter$getBoundi.width,
      height = _dialCenter$getBoundi.height,
      x = _dialCenter$getBoundi.x,
      y = _dialCenter$getBoundi.y;

  return {
    x: x + width / 2,
    y: y + height / 2
  };
}

function handleMouseDown(event) {
  rotating = true;
}

function handleMouseMove(event) {
  if (rotating) {
    var clientX = event.clientX,
        clientY = event.clientY;
    rotate(clientX, clientY);
  }
}

function handleTouchMove(event) {
  if (rotating) {
    event.preventDefault();
    var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
    rotate(clientX, clientY);
  }
}

function handleMouseUp(event) {
  rotating = false;
} // Calculate the new angle based on the x,y of the Mouse/TouchEvent


function rotate(x, y) {
  var angle = Math.atan2(y - origin.y, x - origin.x);
  var angleDegrees = 180 + angle * 180 / Math.PI;
  updateDial(angleDegrees);
} // Update dial text and CSS custom properties to display the new state


function updateDial(angle) {
  var percentageOfFullRange = (360 + (angle - 90)) % 360 / 360;
  var newTemp = (minTemp + tempRange * percentageOfFullRange).toFixed(1);
  var hue = percentageOfFullRange < 0.5 ? 200 : 5;
  var alpha = 40 + 2 * 45 * Math.abs(percentageOfFullRange - 0.5);
  tempBtn = newTemp;
  tempDisplay.innerHTML = newTemp;
  document.documentElement.style.setProperty("--temp-rotation", "".concat(angle, "deg"));
  document.documentElement.style.setProperty("--temp-hue", hue);
  document.documentElement.style.setProperty("--temp-alpha", "".concat(alpha, "%"));
}

tempHandle.addEventListener("mousedown", handleMouseDown);
tempHandle.addEventListener("touchstart", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleTouchMove, {
  passive: false
});
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchend", handleMouseUp);
window.addEventListener("resize", function () {
  origin = calculateRotationOrigin();
});
var tempDisplay2 = document.querySelector("#temp-display");
var selector = document.querySelector('.container__main__box__left__georgeHome__living__divTwo__roomSelect');
selector.addEventListener('change', function (e) {
  console.log(e.target.value);
});
selector.addEventListener('mousedown', function (e) {
  e.preventDefault();
  var select = selector.children[0];
  var dropDown = document.createElement('ul');
  dropDown.className = 'selector-options';

  _toConsumableArray(select.children).forEach(function (option) {
    var dropDownOption = document.createElement('li');
    dropDownOption.textContent = option.textContent;
    dropDownOption.addEventListener('mousedown', function (e) {
      e.stopPropagation();
      select.value = option.value;
      selector.value = option.value;
      select.dispatchEvent(new Event('change'));
      selector.dispatchEvent(new Event('change'));
      dropDown.remove();
    });
    dropDown.appendChild(dropDownOption);
  });

  selector.appendChild(dropDown); //handle click out////

  document.addEventListener('click', function (e) {
    if (!selector.contains(e.target)) {
      dropDown.remove();
    }
  });
});
var gorgeDevice = document.querySelector('.zee2');
var device2 = [{
  category: 'Kitchen',
  status: 'checked',
  statusText: 'On',
  icon: ' <svg class="container__main__box__left__georgeHome__device__div__middle__svg" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"/></svg> ',
  text: 'Refridgerator'
}, {
  category: 'Living',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  category: 'Living',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '<svg  class="container__main__box__left__georgeHome__device__div__middle__svg"    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="3" width="2" x="11" y="19"/><rect height="2" width="3" x="2" y="11"/><rect height="2" width="3" x="19" y="11"/><rect height="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.6665 17.8014)" width="1.99" x="16.66" y="16.66"/><rect height="1.99" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.9791 9.8041)" width="3" x="4.85" y="17.16"/><path d="M15,8.02V3H9v5.02C7.79,8.94,7,10.37,7,12c0,2.76,2.24,5,5,5s5-2.24,5-5C17,10.37,16.21,8.94,15,8.02z M11,5h2v2.1 C12.68,7.04,12.34,7,12,7s-0.68,0.04-1,0.1V5z M12,15c-1.65,0-3-1.35-3-3s1.35-3,3-3c1.65,0,3,1.35,3,3S13.65,15,12,15z"/></g></g></svg>',
  text: 'Lights'
}, {
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  category: 'Living',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Living',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Master Bedroom',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Master Bedroom',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  category: 'Kitchen',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Master Bedroom',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Master Bedroom',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Master Bedroom',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  category: 'Master Bedroom',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}];
window.addEventListener('DOMContentLoaded', function () {
  var _Swiper;

  var devicesDiv = device2.map(function (item) {
    return "    \n  \n  <div class=\"container__main__box__left__georgeHome__device__div swiper-slide\">\n  \n  <div class=\"container__main__box__left__georgeHome__device__div__top \">\n  \n       \n  \n  \n  <span class=\"container__main__box__left__georgeHome__device__div__top__span\">".concat(item.statusText, "</span>\n  <div></div>\n  <input type=\"checkbox\" ").concat(item.status, "  name=\"\" id=\"\">\n  \n  \n  \n  \n  \n  \n  \n  </div>\n  <div class=\"container__main__box__left__georgeHome__device__div__middle\">\n  \n  \n     ").concat(item.icon, "\n    \n  \n  </div>\n  <div class=\"container__main__box__left__georgeHome__device__div__bottom\">\n  \n  <p class=\"container__main__box__left__georgeHome__device__div__bottom__p\">").concat(item.text, "</p>\n  \n  \n  </div>\n  \n  \n  \n  \n  </div>\n    \n        ");
  });
  devicesDiv = devicesDiv.join('');
  gorgeDevice.innerHTML = devicesDiv;
  var swiper1 = new Swiper('.slider1', (_Swiper = {
    speed: 900,
    effect: 'slide',
    slidesPerView: 'auto',
    slidesPerGroupAuto: true
  }, _defineProperty(_Swiper, "speed", 900), _defineProperty(_Swiper, "centeredSlidesBounds", true), _Swiper));
});
selector.addEventListener('change', function (e) {
  var category = e.target.value;
  var roomCategory = device2.filter(function (menuItem) {
    if (menuItem.category === category) {
      return menuItem;
    }
  });
  displayMenuRooms(roomCategory);
});

function displayMenuRooms(zee) {
  var _Swiper2;

  var devicesDiv = zee.map(function (item) {
    return "    \n            \n                <div class=\"container__main__box__left__georgeHome__device__div   swiper-slide \">\n  \n                <div class=\"container__main__box__left__georgeHome__device__div__top \">\n  \n       \n  \n  \n                <span class=\"container__main__box__left__georgeHome__device__div__top__span\">".concat(item.statusText, "</span>\n                 <div></div>\n                  <input type=\"checkbox\" ").concat(item.status, "  name=\"\" id=\"\">\n  \n  \n  \n  \n  \n  \n  \n                     </div>\n                     <div class=\"container__main__box__left__georgeHome__device__div__middle\">\n  \n  \n                     ").concat(item.icon, "\n    \n  \n                      </div>\n                         <div class=\"container__main__box__left__georgeHome__device__div__bottom\">\n  \n                      <p class=\"container__main__box__left__georgeHome__device__div__bottom__p\">").concat(item.text, "</p>\n  \n  \n                      </div>\n  \n  \n  \n  \n                        </div>\n          \n                                                ");
  });
  devicesDiv = devicesDiv.join('');
  gorgeDevice.innerHTML = devicesDiv;
  var swiper2 = new Swiper('.slider2', (_Swiper2 = {
    effect: 'slide',
    slidesPerView: 'auto',
    speed: 900,
    spaceBetween: 10,
    slidesPerGroupAuto: true
  }, _defineProperty(_Swiper2, "slidesPerGroupAuto", true), _defineProperty(_Swiper2, "centeredSlides", true), _defineProperty(_Swiper2, "roundLengths", true), _defineProperty(_Swiper2, "loop", true), _defineProperty(_Swiper2, "loopAdditionalSlides", 30), _Swiper2));
}

; ////////////////////////////My  Devices/////////////////////////////////

var device3 = [{
  color: 'Refridgerator',
  category: 'Kitchen',
  status: 'checked',
  statusText: 'On',
  icon: ' <svg class="container__main__box__left__georgeHome__device__div__middle__svg" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"/></svg> ',
  text: 'Refridgerator'
}, {
  color: 'console',
  category: 'Living',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  color: 'music ',
  category: 'Living',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  color: 'player',
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '<svg  class="container__main__box__left__georgeHome__device__div__middle__svg"    xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="3" width="2" x="11" y="19"/><rect height="2" width="3" x="2" y="11"/><rect height="2" width="3" x="19" y="11"/><rect height="3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -7.6665 17.8014)" width="1.99" x="16.66" y="16.66"/><rect height="1.99" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -10.9791 9.8041)" width="3" x="4.85" y="17.16"/><path d="M15,8.02V3H9v5.02C7.79,8.94,7,10.37,7,12c0,2.76,2.24,5,5,5s5-2.24,5-5C17,10.37,16.21,8.94,15,8.02z M11,5h2v2.1 C12.68,7.04,12.34,7,12,7s-0.68,0.04-1,0.1V5z M12,15c-1.65,0-3-1.35-3-3s1.35-3,3-3c1.65,0,3,1.35,3,3S13.65,15,12,15z"/></g></g></svg>',
  text: 'Lights'
}, {
  color: 'console',
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  color: 'player',
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  color: 'Refridgerator',
  category: 'Living',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, (_ref = {
  color: 'music'
}, _defineProperty(_ref, "color", 'console'), _defineProperty(_ref, "category", 'Living'), _defineProperty(_ref, "status", 'checked'), _defineProperty(_ref, "statusText", 'On'), _defineProperty(_ref, "icon", '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>'), _defineProperty(_ref, "text", 'Air Conditioner'), _ref), {
  color: 'player',
  category: 'Living',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  color: 'console',
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  color: 'Refridgerator',
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  color: 'console',
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  color: 'player',
  category: 'Dining',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}, {
  color: 'music',
  category: 'Kitchen',
  status: '',
  statusText: 'Off',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg"                id="Capa_1" enable-background="new 0 0 512 512" height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg"><g><path d="m396 75c0-41.355-33.645-75-75-75s-75 33.645-75 75v258.66c-19.143 19.575-30 45.934-30 73.34 0 57.897 47.103 105 105 105s105-47.103 105-105c0-27.406-10.857-53.766-30-73.34zm-75 407c-41.355 0-75-33.645-75-75 0-21.192 9.117-41.523 25.015-55.781 3.173-2.845 4.985-6.905 4.985-11.167v-265.052c0-24.813 20.187-45 45-45s45 20.187 45 45v265.052c0 4.262 1.812 8.322 4.985 11.167 15.898 14.258 25.015 34.589 25.015 55.781 0 41.355-33.644 75-75 75z"/><path d="m336 364.58v-169.58c0-8.284-6.716-15-15-15s-15 6.716-15 15v169.58c-17.459 6.192-30 22.865-30 42.42 0 24.813 20.187 45 45 45s45-20.187 45-45c0-19.555-12.541-36.228-30-42.42zm-15 57.42c-8.271 0-15-6.729-15-15s6.729-15 15-15 15 6.729 15 15-6.728 15-15 15z"/><path d="m441 90h30c8.284 0 15-6.716 15-15s-6.716-15-15-15h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m441 150h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 180h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m441 270h15c8.284 0 15-6.716 15-15s-6.716-15-15-15h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15z"/><path d="m471 300h-30c-8.284 0-15 6.716-15 15s6.716 15 15 15h30c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/><path d="m96 255v-143.787l14.394 14.393c2.928 2.93 6.767 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-40-40c-5.857-5.858-15.355-5.858-21.213 0l-40 40c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.858 21.213 0l14.394-14.393v143.787c0 8.284 6.716 15 15 15s15-6.716 15-15z"/><path d="m170.394 324.394-14.394 14.393v-143.787c0-8.284-6.716-15-15-15s-15 6.716-15 15v143.787l-14.394-14.393c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l40 40c2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l40-40c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.212.001z"/></g></svg>',
  text: 'Temperature'
}, {
  color: 'Refridgerator',
  category: 'Kitchen',
  status: 'checked',
  statusText: 'On',
  icon: '  <svg  class="container__main__box__left__georgeHome__device__div__middle__svg air"  xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22v-2z"/></svg>',
  text: 'Air Conditioner'
}];
var deviceDivContainer = document.querySelector('.container__main__box__right__device__boxesContainer ');
window.addEventListener('DOMContentLoaded', function () {
  var devicesDiv = device3.map(function (item) {
    return "    \n          \n<div  class=\"container__main__box__right__device__boxesContainer__boxes Refridgerator ".concat(item.color, "  swiper-slide \">\n\n<div class=\"container__main__box__right__device__boxesContainer__boxes__icon\">\n<div class=\"container__main__box__right__device__boxesContainer__boxes__icon__svg\">\n   \n   \n   ").concat(item.icon, "\n    <div></div>\n</div>\n   \n<div class=\"container__main__box__right__device__boxesContainer__boxes__icon__div\">\n<p class=\"container__main__box__right__device__boxesContainer__boxes__icon__div__p\">").concat(item.statusText, "</p>\n    <input type=\"checkbox\" ").concat(item.status, " name=\"\" id=\"\">\n\n</div>\n \n\n</div>\n<div class=\"container__main__box__right__device__boxesContainer__boxes__text\">\n\n<p class=\"container__main__box__right__device__boxesContainer__boxes__text__p\">").concat(item.text, "</p>\n\n</div>\n\n\n</div>\n                ");
  });
  devicesDiv = devicesDiv.join('');
  deviceDivContainer.innerHTML = devicesDiv;
  deviceDivContainer.className = 'container__main__box__right__device__boxesContainer swiper-wrapper';
  var swiper3 = new Swiper('.slider3', {
    effect: 'slide',
    slidesPerView: 'auto',
    speed: 600,
    spaceBetween: 10,
    slidesPerGroupAuto: true
  });
});
var MyDeviceOn = document.querySelector('.container__main__box__right__device__top__right__left');
MyDeviceOn.addEventListener('change', function (e) {
  console.log(e.target.value);
});
MyDeviceOn.addEventListener('mousedown', function (e) {
  e.preventDefault();
  var select = MyDeviceOn.children[0];
  var dropDown = document.createElement('ul');
  dropDown.className = 'deviceMy';

  _toConsumableArray(select.children).forEach(function (option) {
    var dropDownOption = document.createElement('li');
    dropDownOption.textContent = option.textContent;
    dropDownOption.addEventListener('mousedown', function (e) {
      e.stopPropagation();
      select.value = option.value;
      MyDeviceOn.value = option.value;
      select.dispatchEvent(new Event('change'));
      MyDeviceOn.dispatchEvent(new Event('change'));
      dropDown.remove();
    });
    dropDown.appendChild(dropDownOption);
  });

  MyDeviceOn.appendChild(dropDown); //handle click out////

  document.addEventListener('click', function (e) {
    if (!MyDeviceOn.contains(e.target)) {
      dropDown.remove();
    }
  });
});
MyDeviceOn.addEventListener('change', function (e) {
  var category = e.target.value;
  var roomCategory = device3.filter(function (menuItem) {
    if (menuItem.statusText === category) {
      return menuItem;
    }
  });
  displayMenuDevice(roomCategory);
});

function displayMenuDevice(device3) {
  var devicesDiv = device3.map(function (item) {
    return "    \n    \n<div  class=\"container__main__box__right__device__boxesContainer__boxes Refridgerator ".concat(item.color, "  swiper-slide \">\n\n<div class=\"container__main__box__right__device__boxesContainer__boxes__icon\">\n<div class=\"container__main__box__right__device__boxesContainer__boxes__icon__svg\">\n\n\n").concat(item.icon, "\n<div></div>\n</div>\n\n<div class=\"container__main__box__right__device__boxesContainer__boxes__icon__div\">\n<p class=\"container__main__box__right__device__boxesContainer__boxes__icon__div__p\">").concat(item.statusText, "</p>\n<input type=\"checkbox\" ").concat(item.status, " name=\"\" id=\"\">\n\n</div>\n\n\n</div>\n<div class=\"container__main__box__right__device__boxesContainer__boxes__text\">\n\n<p class=\"container__main__box__right__device__boxesContainer__boxes__text__p\">").concat(item.text, "</p>\n\n</div>\n\n\n</div>\n          ");
  });
  devicesDiv = devicesDiv.join('');
  deviceDivContainer.innerHTML = devicesDiv;
  deviceDivContainer.className = 'container__main__box__right__device__boxesContainer swiper-wrapper';
  var swiper4 = new Swiper('.slider4', {
    effect: 'slide',
    slidesPerView: 'auto',
    speed: 600,
    spaceBetween: 10,
    slidesPerGroupAuto: true,
    edgeSwipeDetection: 'prevent',
    centeredSlides: true,
    edgeSwipeThreshold: 20
  });
} /////////////////////////////////Player///////////////////////////////////////////


$(function () {
  var playerTrack = $("#player-track"),
      bgArtwork = $('#bg-artwork'),
      bgArtworkUrl,
      albumName = $('#album-name'),
      trackName = $('#track-name'),
      albumArt = $('#album-art'),
      sArea = $('#s-area'),
      seekBar = $('#seek-bar'),
      trackTime = $('#track-time'),
      insTime = $('#ins-time'),
      sHover = $('#s-hover'),
      playPauseButton = $("#play-pause-button"),
      i = playPauseButton.find('i'),
      tProgress = $('#current-time'),
      tTime = $('#track-length'),
      seekT,
      seekLoc,
      seekBarPos,
      cM,
      ctMinutes,
      ctSeconds,
      curMinutes,
      curSeconds,
      durMinutes,
      durSeconds,
      playProgress,
      bTime,
      nTime = 0,
      buffInterval = null,
      tFlag = false,
      albums = ['Dawn', 'Me & You', 'Electro Boy', 'Home', 'Proxy (Original Mix)'],
      trackNames = ['Skylike - Dawn', 'Alex Skrindo - Me & You', 'Kaaze - Electro Boy', 'Jordan Schor - Home', 'Martin Garrix - Proxy'],
      albumArtworks = ['_1', '_2', '_3', '_4', '_5'],
      trackUrl = ['https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3', 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3', 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3', 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3', 'https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3'],
      playPreviousTrackButton = $('#play-previous'),
      playNextTrackButton = $('#play-next'),
      currIndex = -1;

  function playPause() {
    setTimeout(function () {
      if (audio.paused) {
        playerTrack.addClass('active');
        albumArt.addClass('active');
        checkBuffering();
        i.attr('class', 'fas fa-pause');
        audio.play();
      } else {
        playerTrack.removeClass('active');
        albumArt.removeClass('active');
        clearInterval(buffInterval);
        albumArt.removeClass('buffering');
        i.attr('class', 'fas fa-play');
        audio.pause();
      }
    }, 300);
  }

  function showHover(event) {
    seekBarPos = sArea.offset();
    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());
    sHover.width(seekT);
    cM = seekLoc / 60;
    ctMinutes = Math.floor(cM);
    ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
    if (ctMinutes < 0 || ctSeconds < 0) return;
    if (ctMinutes < 0 || ctSeconds < 0) return;
    if (ctMinutes < 10) ctMinutes = '0' + ctMinutes;
    if (ctSeconds < 10) ctSeconds = '0' + ctSeconds;
    if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text('--:--');else insTime.text(ctMinutes + ':' + ctSeconds);
    insTime.css({
      'left': seekT,
      'margin-left': '-21px'
    }).fadeIn(0);
  }

  function hideHover() {
    sHover.width(0);
    insTime.text('00:00').css({
      'left': '0px',
      'margin-left': '0px'
    }).fadeOut(0);
  }

  function playFromClickedPos() {
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
  }

  function updateCurrTime() {
    nTime = new Date();
    nTime = nTime.getTime();

    if (!tFlag) {
      tFlag = true;
      trackTime.addClass('active');
    }

    curMinutes = Math.floor(audio.currentTime / 60);
    curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
    durMinutes = Math.floor(audio.duration / 60);
    durSeconds = Math.floor(audio.duration - durMinutes * 60);
    playProgress = audio.currentTime / audio.duration * 100;
    if (curMinutes < 10) curMinutes = '0' + curMinutes;
    if (curSeconds < 10) curSeconds = '0' + curSeconds;
    if (durMinutes < 10) durMinutes = '0' + durMinutes;
    if (durSeconds < 10) durSeconds = '0' + durSeconds;
    if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text('00:00');else tProgress.text(curMinutes + ':' + curSeconds);
    if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text('00:00');else tTime.text(durMinutes + ':' + durSeconds);
    if (isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds)) trackTime.removeClass('active');else trackTime.addClass('active');
    seekBar.width(playProgress + '%');

    if (playProgress == 100) {
      i.attr('class', 'fa fa-play');
      seekBar.width(0);
      tProgress.text('00:00');
      albumArt.removeClass('buffering').removeClass('active');
      clearInterval(buffInterval);
    }
  }

  function checkBuffering() {
    clearInterval(buffInterval);
    buffInterval = setInterval(function () {
      if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass('buffering');else albumArt.removeClass('buffering');
      bTime = new Date();
      bTime = bTime.getTime();
    }, 100);
  }

  function selectTrack(flag) {
    if (flag == 0 || flag == 1) ++currIndex;else --currIndex;

    if (currIndex > -1 && currIndex < albumArtworks.length) {
      if (flag == 0) i.attr('class', 'fa fa-play');else {
        albumArt.removeClass('buffering');
        i.attr('class', 'fa fa-pause');
      }
      seekBar.width(0);
      trackTime.removeClass('active');
      tProgress.text('00:00');
      tTime.text('00:00');
      currAlbum = albums[currIndex];
      currTrackName = trackNames[currIndex];
      currArtwork = albumArtworks[currIndex];
      audio.src = trackUrl[currIndex];
      nTime = 0;
      bTime = new Date();
      bTime = bTime.getTime();

      if (flag != 0) {
        audio.play();
        playerTrack.addClass('active');
        albumArt.addClass('active');
        clearInterval(buffInterval);
        checkBuffering();
      }

      albumName.text(currAlbum);
      trackName.text(currTrackName);
      albumArt.find('img.active').removeClass('active');
      $('#' + currArtwork).addClass('active');
      bgArtworkUrl = $('#' + currArtwork).attr('src');
      bgArtwork.css({
        'background-image': 'url(' + bgArtworkUrl + ')'
      });
    } else {
      if (flag == 0 || flag == 1) --currIndex;else ++currIndex;
    }
  }

  function initPlayer() {
    audio = new Audio();
    selectTrack(0);
    audio.loop = false;
    playPauseButton.on('click', playPause);
    sArea.mousemove(function (event) {
      showHover(event);
    });
    sArea.mouseout(hideHover);
    sArea.on('click', playFromClickedPos);
    $(audio).on('timeupdate', updateCurrTime);
    playPreviousTrackButton.on('click', function () {
      selectTrack(-1);
    });
    playNextTrackButton.on('click', function () {
      selectTrack(1);
    });
  }

  initPlayer();
}); //////////////////////////////////User Select//////////////////////////////////////////////////

var userSelect = document.querySelector('.container__main__topBar__user__userSelect');
var welcomeUser = document.querySelector('.container__main__box__left__welcome__h1 span');
var userHome = document.querySelector('.container__main__box__left__georgeHome__living__divOne__h1 span');
userSelect.addEventListener('change', function (e) {
  console.log(e.target.value);
});
userSelect.addEventListener('mousedown', function (e) {
  e.preventDefault();
  var select = userSelect.children[0];
  var dropDown = document.createElement('ul');
  dropDown.className = 'userSelection';

  _toConsumableArray(select.children).forEach(function (option) {
    var dropDownOption = document.createElement('li');
    dropDownOption.textContent = option.textContent;
    dropDownOption.addEventListener('mousedown', function (e) {
      e.stopPropagation();
      select.value = option.value;
      userSelect.value = option.value;
      select.dispatchEvent(new Event('change'));
      userSelect.dispatchEvent(new Event('change'));
      dropDown.remove();
    });
    dropDown.appendChild(dropDownOption);
  });

  userSelect.appendChild(dropDown); //handle click out////

  document.addEventListener('click', function (e) {
    if (!userSelect.contains(e.target)) {
      dropDown.remove();
    }
  });
});
var userIcons = [{
  name: 'George',
  icon: 'https://img.icons8.com/bubbles/50/000000/concerned-face.png'
}, {
  name: 'Dad',
  icon: 'https://img.icons8.com/bubbles/50/000000/walter-white.png'
}, {
  name: 'James',
  icon: 'https://img.icons8.com/bubbles/50/000000/batman-emoji.png'
}, {
  name: 'Kyle',
  icon: 'https://img.icons8.com/bubbles/50/000000/fat-emoji.png'
}, {
  name: 'Liam',
  icon: 'https://img.icons8.com/bubbles/50/000000/uwu-emoji.png'
}];
var spanIcon = document.querySelector('.container__main__topBar__user__spanIcon');
var activeClass = document.querySelector('.container__main__box__right__members__icons__users');
var usersSpan = document.querySelectorAll('.container__main__box__right__members__icons__users__active');
userSelect.addEventListener('change', function (e) {
  var category = e.target.value;
  var userIcon = userIcons.filter(function (menuItem) {
    if (menuItem.name === category) {
      return menuItem;
    }
  });
  userIconsSelect(userIcon);
  usersSpan.forEach(function (r) {
    console.log(r.dataset.name);

    if (category === r.dataset.name) {
      r.classList.add('active');
    } else {
      r.classList.remove('active');
    }
  });

  switch (category) {
    case 'George':
      welcomeUser.textContent = category;
      userHome.textContent = "".concat(category, "'s");
      break;

    case 'Dad':
      welcomeUser.textContent = category;
      userHome.textContent = "".concat(category, "'s");
      break;

    case 'James':
      welcomeUser.textContent = category;
      userHome.textContent = "".concat(category, "'s");
      break;

    case 'Kyle':
      welcomeUser.textContent = category;
      userHome.textContent = "".concat(category, "'s");
      break;

    case 'Liam':
      welcomeUser.textContent = category;
      userHome.textContent = "".concat(category, "'s");
      break;
  }
});

function userIconsSelect(icon) {
  var devicesDiv = icon.map(function (item) {
    return "    \n    \n\n\n    <img src=".concat(item.icon, "/>\n\n\n\n\n\n          ");
  });
  devicesDiv = devicesDiv.join('');
  spanIcon.innerHTML = devicesDiv;
  spanIcon.className = 'container__main__topBar__user__spanIcon';
} ///////////////////////////////////CLOCK////////////////////////////////////////////


function clockTick() {
  var currentTime = new Date(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text3 = year;
  text2 = day + "";
  text = month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds; // here we get the element with the id of "date" and change the content to the text variable we made above

  document.querySelector('.container__main__topBar__clock__data__sData').innerHTML = text2;
  document.querySelector('.container__main__topBar__clock__data__year').innerHTML = text3;
}

setInterval(clockTick, 1000); //Current Day

dayName = function dayName() {
  var today = new Date();
  var day = today.getDay();

  switch (day) {
    case 0:
      day = "Sunday";
      break;

    case 1:
      day = "Monday";
      break;

    case 2:
      day = "Tuesday";
      break;

    case 3:
      day = "Wednesday";
      break;

    case 4:
      day = "Thursday";
      break;

    case 5:
      day = "Friday";
      break;

    case 6:
      day = "Saturday";
      break;
  }

  document.querySelector('.container__main__topBar__clock__data__sDay').innerHTML = "".concat(day);
};

setInterval(dayName, 1000);

monthName = function monthName() {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var a = new Date();
  var monthName = months[a.getMonth()]; // "July" (or current month)

  document.querySelector('.container__main__topBar__clock__data__sMonth').innerHTML = monthName;
};

setInterval(monthName, 1000); /////////////////////////////TIME////////////////////////////////////////

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23

  var m = date.getMinutes(); // 0 - 59

  var s = date.getSeconds(); // 0 - 59

  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + " " + session;
  document.querySelector(".container__main__topBar__clock__hour").innerText = time;
  document.querySelector(".container__main__topBar__clock__hour").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.8583b93c.js.map