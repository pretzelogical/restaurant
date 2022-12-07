/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const displayManager = (() => {\n  const display = document.querySelector(\".displayArea\");\n  const homeButton = document.querySelector(\".homeButton\");\n  const menuButton = document.querySelector(\".menuButton\");\n  const infoButton = document.querySelector(\".infoButton\");\n\n  let currentState;\n\n  const stateList = {\n    homePage: \"HOME_PAGE\",\n    menuPage: \"MENU_PAGE\",\n    infoPage: \"INFO_PAGE\",\n  };\n\n  const clearDisplay = () => {\n    while (display.lastChild) {\n      display.removeChild(display.lastChild);\n    }\n  };\n\n  const updatePage = () => {};\n\n  const testPage = () => {\n    const testHeader = document.createElement(\"h2\");\n    testHeader.textContent = \"Test page\";\n    testHeader.style.textAlign = \"center\";\n    display.appendChild(testHeader);\n  };\n\n  const init = () => {\n    homeButton.style.backgroundColor = \"red\";\n    currentState = stateList.homePage;\n    console.log(currentState);\n    homeButton.addEventListener(\"click\", clearDisplay);\n    menuButton.addEventListener(\"click\", testPage);\n  };\n  return { init };\n})();\n\ndisplayManager.init();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;