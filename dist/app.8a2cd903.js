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
}); //////THERMOSTAT

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
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.8a2cd903.js.map