/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/movetop.js":
/*!***************************!*\
  !*** ./src/js/movetop.js ***!
  \***************************/
/***/ (() => {

const toTop = document.querySelector(".move-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

const navSlide = () => {
  const bars = document.querySelector(".navbar__bars");
  const nav = document.querySelector(".navbar__menu--links");
  const navLinks = document.querySelectorAll(".navbar__menu--links li");
  //toggle Nav
  bars.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    //Animate links
    navLinks.forEach((link) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards`;
      }
    });
  });
};
navSlide();

window.addEventListener("scroll", () => {
  const navscroll = document.querySelectorAll(".navbar__menu--link a");

  // const scrollY = window.scrollY > 500;
  for (var i = 0; i < navscroll.length; i++) {
    navscroll[i].classList.toggle("active-scroll", scrollY > 500);
  }
});

window.addEventListener("scroll", () => {
  const logoscroll = document.querySelector(".navbar__logo");
  // const scrollY = window.scrollY > 500;
  logoscroll.classList.toggle("active-scroll", scrollY > 500);
});

window.addEventListener("scroll", () => {
  const bgscroll = document.querySelector(".navbar");
  // const scrollY = window.scrollY > 500;
  bgscroll.classList.toggle("active-bg", scrollY > 0);
});


/***/ }),

/***/ "./src/js/tabpicture.js":
/*!******************************!*\
  !*** ./src/js/tabpicture.js ***!
  \******************************/
/***/ (() => {

const filterNav = document.querySelector(".img__navbar");
const filterImg = document.querySelectorAll(".img__product--item");

window.onload = () => {
  filterNav.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("img__navbar--list")) {
      filterNav.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-filter");
      console.log(filterName);
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-filter");
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabpicture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabpicture */ "./src/js/tabpicture.js");
/* harmony import */ var _tabpicture__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tabpicture__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/js/navbar.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movetop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movetop */ "./src/js/movetop.js");
/* harmony import */ var _movetop__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_movetop__WEBPACK_IMPORTED_MODULE_2__);




})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvanMvbW92ZXRvcC5qcyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvanMvbmF2YmFyLmpzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS8uL3NyYy9qcy90YWJwaWN0dXJlLmpzIiwid2VicGFjazovL2xhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sYW5kaW5nLXBhZ2UvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGFuZGluZy1wYWdlLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2VjZDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ3RDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7O1VDdEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ0o7QUFDQzs7Ozs7Ozs7Ozs7QUNGbkIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvVG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlLXRvLXRvcFwiKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gNTAwKSB7XHJcbiAgICB0b1RvcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b1RvcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IG5hdlNsaWRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9fYmFyc1wiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9fbWVudS0tbGlua3NcIik7XHJcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhcl9fbWVudS0tbGlua3MgbGlcIik7XHJcbiAgLy90b2dnbGUgTmF2XHJcbiAgYmFycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtYWN0aXZlXCIpO1xyXG4gICAgLy9BbmltYXRlIGxpbmtzXHJcbiAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIGlmIChsaW5rLnN0eWxlLmFuaW1hdGlvbikge1xyXG4gICAgICAgIGxpbmsuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaW5rLnN0eWxlLmFuaW1hdGlvbiA9IGBuYXZMaW5rRmFkZSAwLjVzIGVhc2UgZm9yd2FyZHNgO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxubmF2U2xpZGUoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBjb25zdCBuYXZzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdmJhcl9fbWVudS0tbGluayBhXCIpO1xyXG5cclxuICAvLyBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgPiA1MDA7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZzY3JvbGwubGVuZ3RoOyBpKyspIHtcclxuICAgIG5hdnNjcm9sbFtpXS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlLXNjcm9sbFwiLCBzY3JvbGxZID4gNTAwKTtcclxuICB9XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGxvZ29zY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9fbG9nb1wiKTtcclxuICAvLyBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgPiA1MDA7XHJcbiAgbG9nb3Njcm9sbC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlLXNjcm9sbFwiLCBzY3JvbGxZID4gNTAwKTtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmdzY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcclxuICAvLyBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFkgPiA1MDA7XHJcbiAgYmdzY3JvbGwuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZS1iZ1wiLCBzY3JvbGxZID4gMCk7XHJcbn0pO1xyXG4iLCJjb25zdCBmaWx0ZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZ19fbmF2YmFyXCIpO1xyXG5jb25zdCBmaWx0ZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmltZ19fcHJvZHVjdC0taXRlbVwiKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgZmlsdGVyTmF2Lm9uY2xpY2sgPSAoc2VsZWN0ZWRJdGVtKSA9PiB7XHJcbiAgICBpZiAoc2VsZWN0ZWRJdGVtLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJpbWdfX25hdmJhci0tbGlzdFwiKSkge1xyXG4gICAgICBmaWx0ZXJOYXYucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgc2VsZWN0ZWRJdGVtLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICBsZXQgZmlsdGVyTmFtZSA9IHNlbGVjdGVkSXRlbS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1maWx0ZXJcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbHRlck5hbWUpO1xyXG4gICAgICBmaWx0ZXJJbWcuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgICAgICBsZXQgZmlsdGVySW1hZ2VzID0gaW1hZ2UuZ2V0QXR0cmlidXRlKFwiZGF0YS1maWx0ZXJcIik7XHJcbiAgICAgICAgaWYgKGZpbHRlckltYWdlcyA9PSBmaWx0ZXJOYW1lIHx8IGZpbHRlck5hbWUgPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3RhYnBpY3R1cmVcIjtcclxuaW1wb3J0IFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IFwiLi9tb3ZldG9wXCI7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=