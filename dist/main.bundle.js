/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n   /* border: 1px solid white; */\r\n   box-sizing: border-box;\r\n}\r\n\r\nHTML {\r\n   scroll-behavior: smooth;\r\n}\r\n\r\n\r\nbody {\r\n   /* height: 97vh; */\r\n   margin: 0px;\r\n   display: flex;\r\n   justify-content: start;\r\n   align-items: center;\r\n   /* z-index: auto; */\r\n   /* font-stretch: ultra-expanded; */\r\n   background-color: #242627;\r\n   /* font-style: oblique; */\r\n   /* padding-left: 20px; */\r\n}\r\n\r\n#wrapper {\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   \r\n}\r\n\r\n#home-img-div {\r\n   z-index: -1;\r\n   opacity: 40%;\r\n   margin-left: 92px;\r\n}\r\n#home-img {\r\n   height: 910px;\r\n   width: 1750px;\r\n   position: absolute;\r\n   /* grid-row: 2; */\r\n}\r\n\r\n#header {\r\n   height: 70px;\r\n   width: 1750px;\r\n   margin-top: 20px;\r\n   margin-left: 92px;\r\n   display: flex;\r\n   flex-direction: row ;\r\n   /* align-content: start; */\r\n   /* justify-content: flex-start; */\r\n   /* height: 60px; */\r\n   z-index: 1;\r\n   /* background-color: #323136c4; */\r\n   /* border-bottom-right-radius: 0px; */\r\n   /* border: #b49e9e9b 3px double; */\r\n   padding: 0px;\r\n   gap: 290px;\r\n   border-bottom: none;\r\n   overflow: visible;\r\n}\r\n\r\n#tab-div {\r\n   display: flex;\r\n   width: min-content;\r\n   height: min-content;\r\n}\r\n\r\n.tab {\r\n   width: 150px;\r\n   height: 50px;\r\n   margin: 10px ;\r\n   background-color: #201f1af8;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-self: end;\r\n   align-items: center;\r\n   font-size: 1.5rem;\r\n   /* font-weight: bold; */\r\n   /* z-index: 1; */\r\n   color: #ffffff;\r\n   /* border: #ffffff75 solid 1px; */\r\n   border-bottom: solid 1px rgba(255, 255, 255, 0.363);\r\n   border-right: solid 1px rgba(255, 255, 255, 0.151);\r\n}\r\n\r\n\r\n#logo {\r\n   width: 150px;\r\n   height: 120px;\r\n   border-radius: 80px;\r\n   border:  1px solid #55534cf8;\r\n   outline: inset 3px #1b1b1b ;\r\n   z-index: 1;\r\n   margin-top: -12px;\r\n   /* opacity: 45%; */\r\n}\r\n\r\n\r\n\r\n\r\n#schedule {\r\n   display: flex;\r\n   margin-top: 0px;\r\n   margin-left: 92px;  \r\n   background: rgba(249, 249, 255, 0.479);\r\n   background: linear-gradient(0deg, #e1e1e1d7 6%, rgba(163,163,163,1) 52%, rgba(192, 203, 205, 0.726) 100%);\r\n   z-index: 0;\r\n   width: min-content;\r\n   border-top-left-radius: 10px;\r\n   border-top-right-radius: 10px;\r\n   padding: 20px;\r\n   width: 1750px;\r\n   border-bottom: outset black 1px;\r\n   /* border-radius: 10px; */\r\n   gap: 37px;\r\n}\r\n\r\n#schedule div:nth-child(4) {\r\n   margin-top: 20px;\r\n}\r\n\r\n\r\n.day {\r\n   gap: 15px;\r\n   font-size: 1.3rem;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   border-top-right-radius: 0px;\r\n   border-bottom-right-radius: 0px;\r\n   padding-bottom: 3px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   height: min-content;\r\n   width: min-content;\r\n   align-items: center;\r\n}\r\n.label , .wtf {\r\n   width: 212px;\r\n   margin-bottom: 3px;\r\n   font-size: 26px;\r\n   font-weight: bolder;\r\n   display: flex;\r\n   border-bottom: 1px outset rgba(0, 0, 0, 0.288);\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   \r\n}\r\n.wtf {\r\n   margin-top: 10px;\r\n   margin-bottom: 18px;\r\n}\r\n\r\n\r\n#time-one, #time-two {\r\n   font-style: italic;\r\n   \r\n}\r\n#banner-div { \r\n   margin-top: 90px;\r\n   margin-left: 117px;\r\n   opacity: 100%;\r\n}\r\n\r\n#banner {\r\n   width: 1220px;\r\n   height: 500px;\r\n   background-size: contain;\r\n   position: absolute;\r\n   border-radius: 15px;\r\n   outline: #746767aa 2px ridge;\r\n   border: #767171c7 5px double;\r\n   opacity: 95%;\r\n   z-index: -1;\r\n}\r\n\r\n#banner-button {\r\n   width: 276px;\r\n   height: 93px;\r\n   margin-top: 200px;\r\n   margin-left: 890px;\r\n   border-radius: 8px;\r\n   \r\n   background-color: #7e1912;\r\n   outline: #040404 1px ridge;\r\n   border: #000000 1px inset;\r\n   font-family: papyrus;\r\n   font-size: 40px;\r\n   color: white;\r\n}\r\n\r\n\r\n#border {\r\n   border-radius: 10px;\r\n   background-size: contain;\r\n   opacity: 20%;\r\n}\r\n/* #content {\r\n   background-color: #323136c4;\r\n   /* z-index: ; */\r\n   /* height: 960px; */\r\n   /* width: min-content; */\r\n   /* display: grid; */\r\n   /* grid-template-columns: 225px 225px 225px 225px 225px 225px 225px 225px 225px; */\r\n   /* grid-template-rows: 180px 160px  220px 220px 220px 220px 220px 220px 220px 220px ; */\r\n   \r\n   /* margin-bottom: 10px; */\r\n   /* margin-left: 50px; */\r\n   /* margin-top: 10px; */\r\n   /* } */ \r\n   \r\n   #about {\r\n      z-index: 1;\r\n      font-size: 1.4rem;\r\n      padding-top: 0px;\r\n      margin-left: 92px;\r\n      width: 1750px;\r\n      display: flex;\r\n      flex-flow: row wrap;\r\n      background: linear-gradient(0deg, #e1e1e1d7 6%, rgba(163,163,163,1) 52%, rgba(192, 203, 205, 0.726) 100%);\r\n      gap: 120px;\r\n      padding-bottom: 120px;\r\n   }\r\n   \r\n   #about-one, #about-two,\r\n   #about-three, #about-four {\r\n      font-family: papyrus;\r\n      font-size: 25px;\r\n      font-weight: bold;\r\n   }\r\n   #about-one {\r\n      align-self: flex-start;\r\n      display: flex;\r\n      flex-flow: row wrap;\r\n      width: 100%;\r\n      height: min-content;\r\n      padding-left: 50px;\r\n   }\r\n\r\n   #about-one-text {\r\n      width: 32%;\r\n      /* margin-top: 20px; */\r\n      margin-left: 70px;\r\n      text-align: center;\r\n   }\r\n   #about-two {\r\n      background: linear-gradient(0deg, #0c0c0c05 70%, rgba(163, 163, 163, 0.096) 52%, rgba(0, 0, 0, 0.247) 100%);\r\n      border-radius: 10px;\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      font-size: 40px;\r\n      font-family: papyrus;\r\n      text-align: center;\r\n      gap: 20px;\r\n      /* margin-top: 20px; */\r\n      padding-top: 40px;\r\n}\r\n#about-three {\r\n   grid-row: 14 / 18;\r\n   grid-column: 8 / 12;\r\n   text-align: center;\r\n   font-size: 25px;\r\n   padding: 1px;\r\n   margin-top: 100px;\r\n   overflow: hidden;\r\n}\r\n#about-four {\r\n   display: flex;\r\n   height: min-content;\r\n   overflow: hidden;\r\n   padding: 10px;\r\n   gap: 10px;\r\n}\r\n\r\n#about-four-left {\r\n   width: 50%;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n#pool-img {\r\n   width: 1050px;\r\n   height: 400px;\r\n   /* border: 1px solid rgba(255, 255, 255, 0.281); */\r\n   border-radius: 5px;\r\n}\r\n\r\n#karaoke {\r\n   width: 600px;\r\n   /* margin-left: -15px; */\r\n   opacity: 60%;\r\n   height: 120px;\r\n}\r\n\r\n#jukebox {\r\n   width: 100%;\r\n}\r\n\r\n#caboose {\r\n   width: 100%;\r\n   height: 500px;\r\n}\r\n#about-list {\r\n   width: 40%;\r\n   font-size: 30px;\r\n   text-align: center;\r\n   text-indent: 1px;\r\n   font-style: oblique;\r\n   display: flex;\r\n   flex-direction: column;\r\n   gap: 20px;\r\n   list-style: none;\r\n   margin-left: 110px;\r\n}\r\n\r\n#menu {\r\n   height: 90vh;\r\n   width: 1750px;\r\n   margin-left: 92px;\r\n   grid-column: 6 / 10;\r\n   grid-row: 7 / 7;\r\n   background: linear-gradient(0deg, #e1e1e1d7 6%, rgba(163,163,163,1) 52%, rgba(192, 203, 205, 0.726) 100%);\r\n   /* border-radius: 40px; */\r\n   /* border: 1px solid rgba(255, 255, 255, 0.521); */\r\n   padding: 20px;\r\n   display: flex;\r\n   flex-flow: row wrap;\r\n   padding-left: 50px;\r\n   gap: 20px;\r\n   z-index: 1;\r\n   /* margin-top: 10px; */\r\n}\r\n\r\n#menu-head {\r\n   width: 80%;\r\n   height: min-content;\r\n   color: rgba(0, 0, 0, 0.884);\r\n   font-size: 90px;\r\n\r\n   border-bottom: rgba(17, 17, 17, 0.466) solid 1px;\r\n   font-family: fantasy;\r\n   font-style: oblique;\r\n   padding: 10px;\r\n   margin-top: 10px;\r\n}\r\n\r\n.menu-pizza {\r\n   width: 50%;\r\n   /* padding-bottom: 10px; */\r\n   padding-left: 500px;\r\n   font-size: 140px;\r\n   font-family: papyrus;   \r\n   font-weight: bold;\r\n   text-align: center;  \r\n   /* margin-left: -330px; */\r\n}\r\n\r\n.menu-nacho {\r\n   width: 30%;\r\n   font-size: 140px;\r\n   font-family: papyrus;   \r\n   font-weight: bold;\r\n}\r\n\r\n\r\n#pizza {\r\n   width: 600px;\r\n   height: 300px;\r\n   border: 1px solid rgba(255, 255, 255, 0.308);\r\n   border-radius: 5px;\r\n   /* margin-right: 500px; */\r\n}\r\n\r\n#nachos {\r\n   width: 600px;\r\n   height: 300px;\r\n   border: 1px solid rgba(255, 255, 255, 0.308);\r\n   border-radius: 5px;\r\n   margin-right: 400px;\r\n}\r\n\r\n#vip {\r\n  \r\n   width: 1200px;\r\n   height: 600px;\r\n\r\n}\r\n\r\n#scroll-down {\r\n   position: fixed;\r\n   left: 10px;\r\n   bottom: 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n   /* border: 1px solid white; */\r\n   box-sizing: border-box;\r\n}\r\n\r\nHTML {\r\n   scroll-behavior: smooth;\r\n}\r\n\r\n\r\nbody {\r\n   /* height: 97vh; */\r\n   margin: 0px;\r\n   display: flex;\r\n   justify-content: start;\r\n   align-items: center;\r\n   /* z-index: auto; */\r\n   /* font-stretch: ultra-expanded; */\r\n   background-color: #242627;\r\n   /* font-style: oblique; */\r\n   /* padding-left: 20px; */\r\n}\r\n\r\n#wrapper {\r\n   display: flex;\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   \r\n}\r\n\r\n#home-img-div {\r\n   z-index: -1;\r\n   opacity: 40%;\r\n   margin-left: 92px;\r\n}\r\n#home-img {\r\n   height: 910px;\r\n   width: 1750px;\r\n   position: absolute;\r\n   /* grid-row: 2; */\r\n}\r\n\r\n#header {\r\n   height: 70px;\r\n   width: 1750px;\r\n   margin-top: 20px;\r\n   margin-left: 92px;\r\n   display: flex;\r\n   flex-direction: row ;\r\n   /* align-content: start; */\r\n   /* justify-content: flex-start; */\r\n   /* height: 60px; */\r\n   z-index: 1;\r\n   /* background-color: #323136c4; */\r\n   /* border-bottom-right-radius: 0px; */\r\n   /* border: #b49e9e9b 3px double; */\r\n   padding: 0px;\r\n   gap: 290px;\r\n   border-bottom: none;\r\n   overflow: visible;\r\n}\r\n\r\n#tab-div {\r\n   display: flex;\r\n   width: min-content;\r\n   height: min-content;\r\n}\r\n\r\n.tab {\r\n   width: 150px;\r\n   height: 50px;\r\n   margin: 10px ;\r\n   background-color: #201f1af8;\r\n   display: flex;\r\n   justify-content: center;\r\n   align-self: end;\r\n   align-items: center;\r\n   font-size: 1.5rem;\r\n   /* font-weight: bold; */\r\n   /* z-index: 1; */\r\n   color: #ffffff;\r\n   /* border: #ffffff75 solid 1px; */\r\n   border-bottom: solid 1px rgba(255, 255, 255, 0.363);\r\n   border-right: solid 1px rgba(255, 255, 255, 0.151);\r\n}\r\n\r\n\r\n#logo {\r\n   width: 150px;\r\n   height: 120px;\r\n   border-radius: 80px;\r\n   border:  1px solid #55534cf8;\r\n   outline: inset 3px #1b1b1b ;\r\n   z-index: 1;\r\n   margin-top: -12px;\r\n   /* opacity: 45%; */\r\n}\r\n\r\n\r\n\r\n\r\n#schedule {\r\n   display: flex;\r\n   margin-top: 0px;\r\n   margin-left: 92px;  \r\n   background: rgba(249, 249, 255, 0.479);\r\n   background: linear-gradient(0deg, #e1e1e1d7 6%, rgba(163,163,163,1) 52%, rgba(192, 203, 205, 0.726) 100%);\r\n   z-index: 0;\r\n   width: min-content;\r\n   border-top-left-radius: 10px;\r\n   border-top-right-radius: 10px;\r\n   padding: 20px;\r\n   width: 1750px;\r\n   border-bottom: outset black 1px;\r\n   /* border-radius: 10px; */\r\n   gap: 37px;\r\n}\r\n\r\n#schedule div:nth-child(4) {\r\n   margin-top: 20px;\r\n}\r\n\r\n\r\n.day {\r\n   gap: 15px;\r\n   font-size: 1.3rem;\r\n   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n   border-top-right-radius: 0px;\r\n   border-bottom-right-radius: 0px;\r\n   padding-bottom: 3px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   height: min-content;\r\n   width: min-content;\r\n   align-items: center;\r\n}\r\n.label , .wtf {\r\n   width: 212px;\r\n   margin-bottom: 3px;\r\n   font-size: 26px;\r\n   font-weight: bolder;\r\n   display: flex;\r\n   border-bottom: 1px outset rgba(0, 0, 0, 0.288);\r\n   flex-direction: column;\r\n   justify-content: space-between;\r\n   align-items: center;\r\n   \r\n}\r\n.wtf {\r\n   margin-top: 10px;\r\n   margin-bottom: 18px;\r\n}\r\n\r\n\r\n#time-one, #time-two {\r\n   font-style: italic;\r\n   \r\n}\r\n#banner-div { \r\n   margin-top: 90px;\r\n   margin-left: 117px;\r\n   opacity: 100%;\r\n}\r\n\r\n#banner {\r\n   width: 1220px;\r\n   height: 500px;\r\n   background-size: contain;\r\n   position: absolute;\r\n   border-radius: 15px;\r\n   outline: #746767aa 2px ridge;\r\n   border: #767171c7 5px double;\r\n   opacity: 95%;\r\n   z-index: -1;\r\n}\r\n\r\n#banner-button {\r\n   width: 276px;\r\n   height: 93px;\r\n   margin-top: 200px;\r\n   margin-left: 890px;\r\n   border-radius: 8px;\r\n   \r\n   background-color: #7e1912;\r\n   outline: #040404 1px ridge;\r\n   border: #000000 1px inset;\r\n   font-family: papyrus;\r\n   font-size: 40px;\r\n   color: white;\r\n}\r\n\r\n\r\n#border {\r\n   border-radius: 10px;\r\n   background-size: contain;\r\n   opacity: 20%;\r\n}\r\n/* #content {\r\n   background-color: #323136c4;\r\n   /* z-index: ; */\r\n   /* height: 960px; */\r\n   /* width: min-content; */\r\n   /* display: grid; */\r\n   /* grid-template-columns: 225px 225px 225px 225px 225px 225px 225px 225px 225px; */\r\n   /* grid-template-rows: 180px 160px  220px 220px 220px 220px 220px 220px 220px 220px ; */\r\n   \r\n   /* margin-bottom: 10px; */\r\n   /* margin-left: 50px; */\r\n   /* margin-top: 10px; */\r\n   /* } */ \r\n   \r\n   #about {\r\n      z-index: 1;\r\n      font-size: 1.4rem;\r\n      padding-top: 0px;\r\n      margin-left: 92px;\r\n      width: 1750px;\r\n      display: flex;\r\n      flex-flow: row wrap;\r\n      background: linear-gradient(0deg, #e1e1e1d7 6%, rgba(163,163,163,1) 52%, rgba(192, 203, 205, 0.726) 100%);\r\n      gap: 120px;\r\n      padding-bottom: 120px;\r\n   }\r\n   \r\n   #about-one, #about-two,\r\n   #about-three, #about-four {\r\n      font-family: papyrus;\r\n      font-size: 25px;\r\n      font-weight: bold;\r\n   }\r\n   #about-one {\r\n      align-self: flex-start;\r\n      display: flex;\r\n      flex-flow: row wrap;\r\n      width: 100%;\r\n      height: min-content;\r\n      padding-left: 50px;\r\n   }\r\n\r\n   #about-one-text {\r\n      width: 32%;\r\n      /* margin-top: 20px; */\r\n      margin-left: 70px;\r\n      text-align: center;\r\n   }\r\n   #about-two {\r\n      background: linear-gradient(0deg, #0c0c0c05 70%, rgba(163, 163, 163, 0.096) 52%, rgba(0, 0, 0, 0.247) 100%);\r\n      border-radius: 10px;\r\n      width: 100%;\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      font-size: 40px;\r\n      font-family: papyrus;\r\n      text-align: center;\r\n      gap: 20px;\r\n      /* margin-top: 20px; */\r\n      padding-top: 40px;\r\n}\r\n#about-three {\r\n   grid-row: 14 / 18;\r\n   grid-column: 8 / 12;\r\n   text-align: center;\r\n   font-size: 25px;\r\n   padding: 1px;\r\n   margin-top: 100px;\r\n   overflow: hidden;\r\n}\r\n#about-four {\r\n   display: flex;\r\n   height: min-content;\r\n   overflow: hidden;\r\n   padding: 10px;\r\n   gap: 10px;\r\n}\r\n\r\n#about-four-left {\r\n   width: 50%;\r\n   display: flex;\r\n   flex-direction: column;\r\n}\r\n\r\n#pool-img {\r\n   width: 1050px;\r\n   height: 400px;\r\n   /* border: 1px solid rgba(255, 255, 255, 0.281); */\r\n   border-radius: 5px;\r\n}\r\n\r\n#karaoke {\r\n   width: 600px;\r\n   /* margin-left: -15px; */\r\n   opacity: 60%;\r\n   height: 120px;\r\n}\r\n\r\n#jukebox {\r\n   width: 100%;\r\n}\r\n\r\n#caboose {\r\n   width: 100%;\r\n   height: 500px;\r\n}\r\n#about-list {\r\n   width: 40%;\r\n   font-size: 30px;\r\n   text-align: center;\r\n   text-indent: 1px;\r\n   font-style: oblique;\r\n   display: flex;\r\n   flex-direction: column;\r\n   gap: 20px;\r\n   list-style: none;\r\n   margin-left: 110px;\r\n}\r\n\r\n#menu {\r\n   height: 90vh;\r\n   width: 1750px;\r\n   margin-left: 92px;\r\n   grid-column: 6 / 10;\r\n   grid-row: 7 / 7;\r\n   background: linear-gradient(0deg, #e1e1e1d7 6%, rgba(163,163,163,1) 52%, rgba(192, 203, 205, 0.726) 100%);\r\n   /* border-radius: 40px; */\r\n   /* border: 1px solid rgba(255, 255, 255, 0.521); */\r\n   padding: 20px;\r\n   display: flex;\r\n   flex-flow: row wrap;\r\n   padding-left: 50px;\r\n   gap: 20px;\r\n   z-index: 1;\r\n   /* margin-top: 10px; */\r\n}\r\n\r\n#menu-head {\r\n   width: 80%;\r\n   height: min-content;\r\n   color: rgba(0, 0, 0, 0.884);\r\n   font-size: 90px;\r\n\r\n   border-bottom: rgba(17, 17, 17, 0.466) solid 1px;\r\n   font-family: fantasy;\r\n   font-style: oblique;\r\n   padding: 10px;\r\n   margin-top: 10px;\r\n}\r\n\r\n.menu-pizza {\r\n   width: 50%;\r\n   /* padding-bottom: 10px; */\r\n   padding-left: 500px;\r\n   font-size: 140px;\r\n   font-family: papyrus;   \r\n   font-weight: bold;\r\n   text-align: center;  \r\n   /* margin-left: -330px; */\r\n}\r\n\r\n.menu-nacho {\r\n   width: 30%;\r\n   font-size: 140px;\r\n   font-family: papyrus;   \r\n   font-weight: bold;\r\n}\r\n\r\n\r\n#pizza {\r\n   width: 600px;\r\n   height: 300px;\r\n   border: 1px solid rgba(255, 255, 255, 0.308);\r\n   border-radius: 5px;\r\n   /* margin-right: 500px; */\r\n}\r\n\r\n#nachos {\r\n   width: 600px;\r\n   height: 300px;\r\n   border: 1px solid rgba(255, 255, 255, 0.308);\r\n   border-radius: 5px;\r\n   margin-right: 400px;\r\n}\r\n\r\n#vip {\r\n  \r\n   width: 1200px;\r\n   height: 600px;\r\n\r\n}\r\n\r\n#scroll-down {\r\n   position: fixed;\r\n   left: 10px;\r\n   bottom: 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutLaunch": () => (/* binding */ aboutLaunch)
/* harmony export */ });
/* harmony import */ var _assets_pool_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pool.jpg */ "./src/assets/pool.jpg");
/* harmony import */ var _assets_touchtunes_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/touchtunes.jpg */ "./src/assets/touchtunes.jpg");
/* harmony import */ var _assets_karaoke_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/karaoke.png */ "./src/assets/karaoke.png");
/* harmony import */ var _assets_caboose_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/caboose.png */ "./src/assets/caboose.png");
/* harmony import */ var _assets_vip_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/vip.png */ "./src/assets/vip.png");







function aboutLaunch() {

   content.innerHTML = '';
   
   const about = document.createElement('div');
   about.id = 'about';
   
   const aboutTwo = document.createElement('div');
   aboutTwo.id = 'about-two';
   
   const karaoke = new Image();
   karaoke.src = _assets_karaoke_png__WEBPACK_IMPORTED_MODULE_2__;
   karaoke.id = 'karaoke';
   aboutTwo.appendChild(karaoke);
   
   const aboutTwoText = document.createElement('div');
   aboutTwoText.textContent = 'Follow us on social for our Karaoke and DJ nights'
   aboutTwo.appendChild(aboutTwoText);
   
   about.appendChild(aboutTwo);
   
   const aboutOne = document.createElement('div');
   aboutOne.id = 'about-one';
   
   const pool = new Image();
   pool.src = _assets_pool_jpg__WEBPACK_IMPORTED_MODULE_0__;
   pool.id = 'pool-img';
   aboutOne.appendChild(pool);
   
   const aboutOneText = document.createElement('div');
   aboutOneText.id = 'about-one-text';
   aboutOneText.textContent = 'Come watch the game on our big screen tvs, or get your game on with';
   
   const aboutGameList = document.createElement('ul');
   aboutGameList.id = 'about-list';
   
   const gamesArr = [];
   
   for (let i = 0; i < 4; i++) {
     const list = document.createElement('li');
     gamesArr.push(list);
   };
   
   gamesArr[0].textContent = 'Pool';
   gamesArr[1].textContent = 'Cornhole';
   gamesArr[2].textContent = 'Ring Game';
   gamesArr[3].textContent = 'Jenga';
   
   aboutGameList.append(
     gamesArr[0],
     gamesArr[1],
     gamesArr[2],
     gamesArr[3]
     );
     
     aboutOneText.appendChild(aboutGameList);
     aboutOne.appendChild(aboutOneText);
     
     
     about.appendChild(aboutOne);
     
     
     const aboutThree = document.createElement('div');
     aboutThree.id = 'about-three';
     
     const jukebox = new Image();
     jukebox.src = _assets_touchtunes_jpg__WEBPACK_IMPORTED_MODULE_1__;
     jukebox.id = 'jukebox';
     aboutThree.appendChild(jukebox);
     
     const aboutThreeText = document.createElement('div');
     aboutThreeText.textContent = 'Be your own DJ with the TouchTunes jukebox, bust a move on the dance floor, or enjoy the private VIP room available for rent.';
     aboutThree.appendChild(aboutThreeText);
     
     about.appendChild(aboutThree);
     
     const aboutFour = document.createElement('div');
     aboutFour.id = 'about-four';
     
 
     const aboutFourLeft = document.createElement('div');
     aboutFourLeft.id = 'about-four-left';
 
     const aboutFourText = document.createElement('div');
     aboutFourText.textContent = 'Come in and take a pic on the back of the Caboose!';
    aboutFourLeft.appendChild(aboutFourText);
    
    const caboose = new Image();
    caboose.src = _assets_caboose_png__WEBPACK_IMPORTED_MODULE_3__;
    caboose.id = 'caboose';
    aboutFourLeft.appendChild(caboose);
 
    aboutFour.appendChild(aboutFourLeft)
    
    const vipRoom = new Image();
    vipRoom.src = _assets_vip_png__WEBPACK_IMPORTED_MODULE_4__;
    vipRoom.id = 'vip';
    aboutFour.appendChild(vipRoom);
 
    about.appendChild(aboutFour);
    
    
    
    
    content.appendChild(about);
    
    
   };

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeLaunch": () => (/* binding */ homeLaunch)
/* harmony export */ });
/* harmony import */ var _assets_background_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/background.jpg */ "./src/assets/background.jpg");
/* harmony import */ var _assets_banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/banner.png */ "./src/assets/banner.png");



function homeLaunch() {


  
   content.innerHTML = '';
   
   const schedule = document.createElement("div");
   
   schedule.id = "schedule";
   
   
   
   //create all 7 days
   const daysArray = [];
   for (let i = 0; i < 7; i++) {
     const day = document.createElement("div");
     day.className = "day";
     
     const dayHeader = document.createElement("div");
     
     const times1 = document.createElement("div");
     times1.id = "time-one";
     
     const times2 = document.createElement("div");
     times2.id = "time-two";
     
     (i < 2) | (i > 4)
     ? (dayHeader.className = "label")
     : (dayHeader.className = "wtf");
     day.appendChild(dayHeader);
     (i < 2) | (i > 4) ? day.append(times1, times2) : day.appendChild(times1);
     
     schedule.appendChild(day);
     daysArray.push(day);
   }
   
   daysArray[0].children[0].textContent = "Monday";
   daysArray[0].children[1].textContent = "6:00 AM - 10:00 AM";
   daysArray[0].children[2].textContent = "4:00 PM - 9:00 PM";
   
   daysArray[1].children[0].textContent = "Tuesday";
   daysArray[1].children[1].textContent = "6:00 AM - 10:00 AM";
   daysArray[1].children[2].textContent = "4:00 PM - 9:00 PM";
   
   daysArray[2].children[0].textContent = "Wednesday";
   daysArray[2].children[1].textContent = "4:00 PM - 10:00 PM";
   
   daysArray[3].children[0].textContent = "Thursday";
   daysArray[3].children[1].textContent = "4:00 PM - 10:00 PM";
   
   daysArray[4].children[0].textContent = "Friday";
   daysArray[4].children[1].textContent = "4:00 PM - 1:30 AM";
   
   daysArray[5].children[0].textContent = "Saturday";
   daysArray[5].children[1].textContent = "8:00 AM - 11:00 AM";
   daysArray[5].children[2].textContent = "1:00 PM - 1:30 AM";
   
   daysArray[6].children[0].textContent = "Sunday";
   daysArray[6].children[1].textContent = "8:00 AM - 11:00 AM";
   daysArray[6].children[2].textContent = "1:00 PM - 10:00 PM";
   
   const homeImgDiv = document.createElement('div');
   homeImgDiv.id = 'home-img-div'
   
   const homeImg = new Image();
   homeImg.src = _assets_background_jpg__WEBPACK_IMPORTED_MODULE_0__;
   homeImg.id = "home-img";
   homeImgDiv.appendChild(homeImg);
   
   wrapper.appendChild(homeImgDiv);
   
   content.appendChild(schedule);
 
   const bannerDiv = document.createElement('div');
   bannerDiv.id = 'banner-div';
   
   const banner = new Image();
   banner.src = _assets_banner_png__WEBPACK_IMPORTED_MODULE_1__;
   banner.id = 'banner';
   
   bannerDiv.appendChild(banner);
   
   const bannerButton = document.createElement('button');
   bannerButton.id = 'banner-button';
   bannerButton.textContent = 'View Menu'
   bannerDiv.appendChild(bannerButton);
 
 
 
   
   content.appendChild(bannerDiv);
   
   
   //makes the div that lays out the grid for the about section
   wrapper.appendChild(content);
 }

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLaunch": () => (/* binding */ menuLaunch)
/* harmony export */ });
/* harmony import */ var _assets_pizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza.png */ "./src/assets/pizza.png");
/* harmony import */ var _assets_nachos_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/nachos.png */ "./src/assets/nachos.png");



function menuLaunch() {

   content.innerHTML = '';

const menu = document.createElement('div');
menu.id = 'menu';

const menuHeader = document.createElement('div');
menuHeader.id = 'menu-head';
menuHeader.textContent = 'Call And Order!';
menu.appendChild(menuHeader);

const pizzaLabel = document.createElement('div');
pizzaLabel.className = 'menu-pizza';
pizzaLabel.textContent = 'Pizza';
menu.appendChild(pizzaLabel);

const pizza = new Image();
pizza.src = _assets_pizza_png__WEBPACK_IMPORTED_MODULE_0__;
pizza.id = 'pizza';
menu.appendChild(pizza);

const nachoLabel = document.createElement('div');
nachoLabel.className = 'menu-nacho';
nachoLabel.textContent = 'Nachos';
menu.appendChild(nachoLabel);

const nachos = new Image();
nachos.src = _assets_nachos_png__WEBPACK_IMPORTED_MODULE_1__;
nachos.id = 'nachos';
menu.appendChild(nachos);

content.appendChild(menu);

}


/***/ }),

/***/ "./src/assets/background.jpg":
/*!***********************************!*\
  !*** ./src/assets/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ba649aece11aa40892d.jpg";

/***/ }),

/***/ "./src/assets/banner.png":
/*!*******************************!*\
  !*** ./src/assets/banner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "365f2f92f5d5a79cbf9d.png";

/***/ }),

/***/ "./src/assets/caboose.png":
/*!********************************!*\
  !*** ./src/assets/caboose.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91d45c560d3ee47fe06a.png";

/***/ }),

/***/ "./src/assets/karaoke.png":
/*!********************************!*\
  !*** ./src/assets/karaoke.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "394e4763249b3be77593.png";

/***/ }),

/***/ "./src/assets/logo1.png":
/*!******************************!*\
  !*** ./src/assets/logo1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3dba978f7d3f7b11e92.png";

/***/ }),

/***/ "./src/assets/nachos.png":
/*!*******************************!*\
  !*** ./src/assets/nachos.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38023aa426c7627c7977.png";

/***/ }),

/***/ "./src/assets/pizza.png":
/*!******************************!*\
  !*** ./src/assets/pizza.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "660043e63a8d8c8cc7d8.png";

/***/ }),

/***/ "./src/assets/pool.jpg":
/*!*****************************!*\
  !*** ./src/assets/pool.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41cd852dfa809bd2272a.jpg";

/***/ }),

/***/ "./src/assets/touchtunes.jpg":
/*!***********************************!*\
  !*** ./src/assets/touchtunes.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cd27b32f672984e7060.jpg";

/***/ }),

/***/ "./src/assets/vip.png":
/*!****************************!*\
  !*** ./src/assets/vip.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5003dd7c170641133373.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_logo1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo1.png */ "./src/assets/logo1.png");
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ "./src/modules/home.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");









//Element that everything will be appended to
const wrapper = document.querySelector("#wrapper");

const header = document.createElement("div");
header.id = "header";


const tabDiv = document.createElement('div');
tabDiv.id = 'tab-div'

const homeTab = document.createElement("div");
homeTab.className = "tab";
homeTab.textContent = "Home";
homeTab.addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_2__.homeLaunch);

const menuTab = document.createElement("div");
menuTab.className = "tab";
menuTab.textContent = "Menu";
menuTab.addEventListener('click', _modules_menu__WEBPACK_IMPORTED_MODULE_3__.menuLaunch);

const aboutTab = document.createElement("div");
aboutTab.className = "tab";
aboutTab.textContent = "About";
aboutTab.addEventListener('click', _modules_about__WEBPACK_IMPORTED_MODULE_4__.aboutLaunch);

tabDiv.append(homeTab, menuTab, aboutTab);
header.appendChild(tabDiv);

const logoDiv = document.createElement('div');
logoDiv.id = 'logo-div';


const logo = new Image();
logo.src = _assets_logo1_png__WEBPACK_IMPORTED_MODULE_1__;
logo.id = "logo";
logoDiv.appendChild(logo);
header.appendChild(logoDiv);
wrapper.appendChild(header);

const content = document.createElement("div");
content.id = "content";
wrapper.appendChild(content)






  ;(0,_modules_home__WEBPACK_IMPORTED_MODULE_2__.homeLaunch)()
  
  
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLDZDQUE2QyxtQ0FBbUMsZ0NBQWdDLEtBQUssY0FBYywrQkFBK0IsS0FBSyxrQkFBa0Isd0JBQXdCLHFCQUFxQixxQkFBcUIsOEJBQThCLDJCQUEyQix5QkFBeUIsMENBQTBDLG1DQUFtQywrQkFBK0IsZ0NBQWdDLE9BQU8sa0JBQWtCLHFCQUFxQiw4QkFBOEIsc0NBQXNDLFlBQVksdUJBQXVCLG1CQUFtQixvQkFBb0IseUJBQXlCLEtBQUssZUFBZSxxQkFBcUIscUJBQXFCLDBCQUEwQix1QkFBdUIsT0FBTyxpQkFBaUIsb0JBQW9CLHFCQUFxQix3QkFBd0IseUJBQXlCLHFCQUFxQiw0QkFBNEIsZ0NBQWdDLHlDQUF5QywwQkFBMEIsb0JBQW9CLHVDQUF1Qyw2Q0FBNkMsMENBQTBDLHNCQUFzQixrQkFBa0IsMkJBQTJCLHlCQUF5QixLQUFLLGtCQUFrQixxQkFBcUIsMEJBQTBCLDJCQUEyQixLQUFLLGNBQWMsb0JBQW9CLG9CQUFvQixxQkFBcUIsbUNBQW1DLHFCQUFxQiwrQkFBK0IsdUJBQXVCLDJCQUEyQix5QkFBeUIsNkJBQTZCLHdCQUF3Qix3QkFBd0IsdUNBQXVDLDZEQUE2RCwwREFBMEQsS0FBSyxtQkFBbUIsb0JBQW9CLHFCQUFxQiwyQkFBMkIsb0NBQW9DLG1DQUFtQyxrQkFBa0IseUJBQXlCLHdCQUF3QixPQUFPLCtCQUErQixxQkFBcUIsdUJBQXVCLDJCQUEyQiw4Q0FBOEMsaUhBQWlILGtCQUFrQiwwQkFBMEIsb0NBQW9DLHFDQUFxQyxxQkFBcUIscUJBQXFCLHVDQUF1QywrQkFBK0IsbUJBQW1CLEtBQUssb0NBQW9DLHdCQUF3QixLQUFLLGtCQUFrQixpQkFBaUIseUJBQXlCLDhIQUE4SCxvQ0FBb0MsdUNBQXVDLDJCQUEyQixxQkFBcUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsMkJBQTJCLEtBQUssbUJBQW1CLG9CQUFvQiwwQkFBMEIsdUJBQXVCLDJCQUEyQixxQkFBcUIsc0RBQXNELDhCQUE4QixzQ0FBc0MsMkJBQTJCLFlBQVksVUFBVSx3QkFBd0IsMkJBQTJCLEtBQUssa0NBQWtDLDBCQUEwQixZQUFZLGtCQUFrQix3QkFBd0IsMEJBQTBCLHFCQUFxQixLQUFLLGlCQUFpQixxQkFBcUIscUJBQXFCLGdDQUFnQywwQkFBMEIsMkJBQTJCLG9DQUFvQyxvQ0FBb0Msb0JBQW9CLG1CQUFtQixLQUFLLHdCQUF3QixvQkFBb0Isb0JBQW9CLHlCQUF5QiwwQkFBMEIsMEJBQTBCLHdDQUF3QyxrQ0FBa0MsaUNBQWlDLDRCQUE0Qix1QkFBdUIsb0JBQW9CLEtBQUsscUJBQXFCLDJCQUEyQixnQ0FBZ0Msb0JBQW9CLEtBQUssaUJBQWlCLG1DQUFtQyxxQkFBcUIsMkJBQTJCLGdDQUFnQywyQkFBMkIsMEZBQTBGLCtGQUErRix3Q0FBd0MsK0JBQStCLDhCQUE4QixjQUFjLHlCQUF5QixxQkFBcUIsNEJBQTRCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLHdCQUF3Qiw4QkFBOEIsb0hBQW9ILHFCQUFxQixnQ0FBZ0MsUUFBUSx1RUFBdUUsK0JBQStCLDBCQUEwQiw0QkFBNEIsUUFBUSxtQkFBbUIsaUNBQWlDLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLDhCQUE4Qiw2QkFBNkIsUUFBUSw0QkFBNEIscUJBQXFCLCtCQUErQiw4QkFBOEIsNkJBQTZCLFFBQVEsbUJBQW1CLHNIQUFzSCw4QkFBOEIsc0JBQXNCLHdCQUF3QixpQ0FBaUMsOEJBQThCLDBCQUEwQiwrQkFBK0IsNkJBQTZCLG9CQUFvQiwrQkFBK0IsOEJBQThCLEtBQUssa0JBQWtCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLHVCQUF1QixvQkFBb0IseUJBQXlCLHdCQUF3QixLQUFLLGlCQUFpQixxQkFBcUIsMkJBQTJCLHdCQUF3QixxQkFBcUIsaUJBQWlCLEtBQUssMEJBQTBCLGtCQUFrQixxQkFBcUIsOEJBQThCLEtBQUssbUJBQW1CLHFCQUFxQixxQkFBcUIsd0RBQXdELDRCQUE0QixLQUFLLGtCQUFrQixvQkFBb0IsOEJBQThCLHNCQUFzQixxQkFBcUIsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssa0JBQWtCLG1CQUFtQixxQkFBcUIsS0FBSyxpQkFBaUIsa0JBQWtCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLDJCQUEyQixxQkFBcUIsOEJBQThCLGlCQUFpQix3QkFBd0IsMEJBQTBCLEtBQUssZUFBZSxvQkFBb0IscUJBQXFCLHlCQUF5QiwyQkFBMkIsdUJBQXVCLGlIQUFpSCwrQkFBK0IsMERBQTBELHVCQUF1QixxQkFBcUIsMkJBQTJCLDBCQUEwQixpQkFBaUIsa0JBQWtCLDRCQUE0QixPQUFPLG9CQUFvQixrQkFBa0IsMkJBQTJCLG1DQUFtQyx1QkFBdUIsNERBQTRELDRCQUE0QiwyQkFBMkIscUJBQXFCLHdCQUF3QixLQUFLLHFCQUFxQixrQkFBa0IsZ0NBQWdDLDZCQUE2Qix3QkFBd0IsK0JBQStCLHlCQUF5Qiw0QkFBNEIsK0JBQStCLE9BQU8scUJBQXFCLGtCQUFrQix3QkFBd0IsK0JBQStCLHlCQUF5QixLQUFLLG9CQUFvQixvQkFBb0IscUJBQXFCLG9EQUFvRCwwQkFBMEIsK0JBQStCLE9BQU8saUJBQWlCLG9CQUFvQixxQkFBcUIsb0RBQW9ELDBCQUEwQiwyQkFBMkIsS0FBSyxjQUFjLDJCQUEyQixxQkFBcUIsU0FBUyxzQkFBc0IsdUJBQXVCLGtCQUFrQixvQkFBb0IsS0FBSyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVks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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEI7QUFDOUI7QUFDMkM7QUFDM0M7QUFDQTtBQUNBO0FBQzRDO0FBQ0E7QUFDRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxREFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxxREFBVTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFVO0FBQ1o7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcclxcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkhUTUwge1xcclxcbiAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAvKiBoZWlnaHQ6IDk3dmg7ICovXFxyXFxuICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgLyogei1pbmRleDogYXV0bzsgKi9cXHJcXG4gICAvKiBmb250LXN0cmV0Y2g6IHVsdHJhLWV4cGFuZGVkOyAqL1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI2Mjc7XFxyXFxuICAgLyogZm9udC1zdHlsZTogb2JsaXF1ZTsgKi9cXHJcXG4gICAvKiBwYWRkaW5nLWxlZnQ6IDIwcHg7ICovXFxyXFxufVxcclxcblxcclxcbiN3cmFwcGVyIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4jaG9tZS1pbWctZGl2IHtcXHJcXG4gICB6LWluZGV4OiAtMTtcXHJcXG4gICBvcGFjaXR5OiA0MCU7XFxyXFxuICAgbWFyZ2luLWxlZnQ6IDkycHg7XFxyXFxufVxcclxcbiNob21lLWltZyB7XFxyXFxuICAgaGVpZ2h0OiA5MTBweDtcXHJcXG4gICB3aWR0aDogMTc1MHB4O1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAvKiBncmlkLXJvdzogMjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgIHdpZHRoOiAxNzUwcHg7XFxyXFxuICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICBtYXJnaW4tbGVmdDogOTJweDtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiByb3cgO1xcclxcbiAgIC8qIGFsaWduLWNvbnRlbnQ6IHN0YXJ0OyAqL1xcclxcbiAgIC8qIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgKi9cXHJcXG4gICAvKiBoZWlnaHQ6IDYwcHg7ICovXFxyXFxuICAgei1pbmRleDogMTtcXHJcXG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzMTM2YzQ7ICovXFxyXFxuICAgLyogYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDsgKi9cXHJcXG4gICAvKiBib3JkZXI6ICNiNDllOWU5YiAzcHggZG91YmxlOyAqL1xcclxcbiAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICBnYXA6IDI5MHB4O1xcclxcbiAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbiN0YWItZGl2IHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udGFiIHtcXHJcXG4gICB3aWR0aDogMTUwcHg7XFxyXFxuICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgIG1hcmdpbjogMTBweCA7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMWYxYWY4O1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXFxyXFxuICAgLyogei1pbmRleDogMTsgKi9cXHJcXG4gICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAvKiBib3JkZXI6ICNmZmZmZmY3NSBzb2xpZCAxcHg7ICovXFxyXFxuICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNjMpO1xcclxcbiAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogODBweDtcXHJcXG4gICBib3JkZXI6ICAxcHggc29saWQgIzU1NTM0Y2Y4O1xcclxcbiAgIG91dGxpbmU6IGluc2V0IDNweCAjMWIxYjFiIDtcXHJcXG4gICB6LWluZGV4OiAxO1xcclxcbiAgIG1hcmdpbi10b3A6IC0xMnB4O1xcclxcbiAgIC8qIG9wYWNpdHk6IDQ1JTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI3NjaGVkdWxlIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICBtYXJnaW4tbGVmdDogOTJweDsgIFxcclxcbiAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI1NSwgMC40NzkpO1xcclxcbiAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZTFlMWUxZDcgNiUsIHJnYmEoMTYzLDE2MywxNjMsMSkgNTIlLCByZ2JhKDE5MiwgMjAzLCAyMDUsIDAuNzI2KSAxMDAlKTtcXHJcXG4gICB6LWluZGV4OiAwO1xcclxcbiAgIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcclxcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbiAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgd2lkdGg6IDE3NTBweDtcXHJcXG4gICBib3JkZXItYm90dG9tOiBvdXRzZXQgYmxhY2sgMXB4O1xcclxcbiAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxyXFxuICAgZ2FwOiAzN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2NoZWR1bGUgZGl2Om50aC1jaGlsZCg0KSB7XFxyXFxuICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmRheSB7XFxyXFxuICAgZ2FwOiAxNXB4O1xcclxcbiAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxyXFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXHJcXG4gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcclxcbiAgIHBhZGRpbmctYm90dG9tOiAzcHg7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5sYWJlbCAsIC53dGYge1xcclxcbiAgIHdpZHRoOiAyMTJweDtcXHJcXG4gICBtYXJnaW4tYm90dG9tOiAzcHg7XFxyXFxuICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBib3JkZXItYm90dG9tOiAxcHggb3V0c2V0IHJnYmEoMCwgMCwgMCwgMC4yODgpO1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgXFxyXFxufVxcclxcbi53dGYge1xcclxcbiAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgbWFyZ2luLWJvdHRvbTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3RpbWUtb25lLCAjdGltZS10d28ge1xcclxcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICBcXHJcXG59XFxyXFxuI2Jhbm5lci1kaXYgeyBcXHJcXG4gICBtYXJnaW4tdG9wOiA5MHB4O1xcclxcbiAgIG1hcmdpbi1sZWZ0OiAxMTdweDtcXHJcXG4gICBvcGFjaXR5OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYmFubmVyIHtcXHJcXG4gICB3aWR0aDogMTIyMHB4O1xcclxcbiAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgIG91dGxpbmU6ICM3NDY3NjdhYSAycHggcmlkZ2U7XFxyXFxuICAgYm9yZGVyOiAjNzY3MTcxYzcgNXB4IGRvdWJsZTtcXHJcXG4gICBvcGFjaXR5OiA5NSU7XFxyXFxuICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbiNiYW5uZXItYnV0dG9uIHtcXHJcXG4gICB3aWR0aDogMjc2cHg7XFxyXFxuICAgaGVpZ2h0OiA5M3B4O1xcclxcbiAgIG1hcmdpbi10b3A6IDIwMHB4O1xcclxcbiAgIG1hcmdpbi1sZWZ0OiA4OTBweDtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgXFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzdlMTkxMjtcXHJcXG4gICBvdXRsaW5lOiAjMDQwNDA0IDFweCByaWRnZTtcXHJcXG4gICBib3JkZXI6ICMwMDAwMDAgMXB4IGluc2V0O1xcclxcbiAgIGZvbnQtZmFtaWx5OiBwYXB5cnVzO1xcclxcbiAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNib3JkZXIge1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgIG9wYWNpdHk6IDIwJTtcXHJcXG59XFxyXFxuLyogI2NvbnRlbnQge1xcclxcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMxMzZjNDtcXHJcXG4gICAvKiB6LWluZGV4OiA7ICovXFxyXFxuICAgLyogaGVpZ2h0OiA5NjBweDsgKi9cXHJcXG4gICAvKiB3aWR0aDogbWluLWNvbnRlbnQ7ICovXFxyXFxuICAgLyogZGlzcGxheTogZ3JpZDsgKi9cXHJcXG4gICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNXB4IDIyNXB4IDIyNXB4IDIyNXB4IDIyNXB4IDIyNXB4IDIyNXB4IDIyNXB4IDIyNXB4OyAqL1xcclxcbiAgIC8qIGdyaWQtdGVtcGxhdGUtcm93czogMTgwcHggMTYwcHggIDIyMHB4IDIyMHB4IDIyMHB4IDIyMHB4IDIyMHB4IDIyMHB4IDIyMHB4IDIyMHB4IDsgKi9cXHJcXG4gICBcXHJcXG4gICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xcclxcbiAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xcclxcbiAgIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXFxyXFxuICAgLyogfSAqLyBcXHJcXG4gICBcXHJcXG4gICAjYWJvdXQge1xcclxcbiAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDBweDtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogOTJweDtcXHJcXG4gICAgICB3aWR0aDogMTc1MHB4O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2UxZTFlMWQ3IDYlLCByZ2JhKDE2MywxNjMsMTYzLDEpIDUyJSwgcmdiYSgxOTIsIDIwMywgMjA1LCAwLjcyNikgMTAwJSk7XFxyXFxuICAgICAgZ2FwOiAxMjBweDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XFxyXFxuICAgfVxcclxcbiAgIFxcclxcbiAgICNhYm91dC1vbmUsICNhYm91dC10d28sXFxyXFxuICAgI2Fib3V0LXRocmVlLCAjYWJvdXQtZm91ciB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6IHBhcHlydXM7XFxyXFxuICAgICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgIH1cXHJcXG4gICAjYWJvdXQtb25lIHtcXHJcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gICB9XFxyXFxuXFxyXFxuICAgI2Fib3V0LW9uZS10ZXh0IHtcXHJcXG4gICAgICB3aWR0aDogMzIlO1xcclxcbiAgICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIH1cXHJcXG4gICAjYWJvdXQtdHdvIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgIzBjMGMwYzA1IDcwJSwgcmdiYSgxNjMsIDE2MywgMTYzLCAwLjA5NikgNTIlLCByZ2JhKDAsIDAsIDAsIDAuMjQ3KSAxMDAlKTtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgICBmb250LWZhbWlseTogcGFweXJ1cztcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIC8qIG1hcmdpbi10b3A6IDIwcHg7ICovXFxyXFxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxufVxcclxcbiNhYm91dC10aHJlZSB7XFxyXFxuICAgZ3JpZC1yb3c6IDE0IC8gMTg7XFxyXFxuICAgZ3JpZC1jb2x1bW46IDggLyAxMjtcXHJcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgIHBhZGRpbmc6IDFweDtcXHJcXG4gICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG4jYWJvdXQtZm91ciB7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgcGFkZGluZzogMTBweDtcXHJcXG4gICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1mb3VyLWxlZnQge1xcclxcbiAgIHdpZHRoOiA1MCU7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4jcG9vbC1pbWcge1xcclxcbiAgIHdpZHRoOiAxMDUwcHg7XFxyXFxuICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgxKTsgKi9cXHJcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNrYXJhb2tlIHtcXHJcXG4gICB3aWR0aDogNjAwcHg7XFxyXFxuICAgLyogbWFyZ2luLWxlZnQ6IC0xNXB4OyAqL1xcclxcbiAgIG9wYWNpdHk6IDYwJTtcXHJcXG4gICBoZWlnaHQ6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4janVrZWJveCB7XFxyXFxuICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNjYWJvb3NlIHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG4gICBoZWlnaHQ6IDUwMHB4O1xcclxcbn1cXHJcXG4jYWJvdXQtbGlzdCB7XFxyXFxuICAgd2lkdGg6IDQwJTtcXHJcXG4gICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgIHRleHQtaW5kZW50OiAxcHg7XFxyXFxuICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgZ2FwOiAyMHB4O1xcclxcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudSB7XFxyXFxuICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgIHdpZHRoOiAxNzUwcHg7XFxyXFxuICAgbWFyZ2luLWxlZnQ6IDkycHg7XFxyXFxuICAgZ3JpZC1jb2x1bW46IDYgLyAxMDtcXHJcXG4gICBncmlkLXJvdzogNyAvIDc7XFxyXFxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNlMWUxZTFkNyA2JSwgcmdiYSgxNjMsMTYzLDE2MywxKSA1MiUsIHJnYmEoMTkyLCAyMDMsIDIwNSwgMC43MjYpIDEwMCUpO1xcclxcbiAgIC8qIGJvcmRlci1yYWRpdXM6IDQwcHg7ICovXFxyXFxuICAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMSk7ICovXFxyXFxuICAgcGFkZGluZzogMjBweDtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgIGdhcDogMjBweDtcXHJcXG4gICB6LWluZGV4OiAxO1xcclxcbiAgIC8qIG1hcmdpbi10b3A6IDEwcHg7ICovXFxyXFxufVxcclxcblxcclxcbiNtZW51LWhlYWQge1xcclxcbiAgIHdpZHRoOiA4MCU7XFxyXFxuICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg4NCk7XFxyXFxuICAgZm9udC1zaXplOiA5MHB4O1xcclxcblxcclxcbiAgIGJvcmRlci1ib3R0b206IHJnYmEoMTcsIDE3LCAxNywgMC40NjYpIHNvbGlkIDFweDtcXHJcXG4gICBmb250LWZhbWlseTogZmFudGFzeTtcXHJcXG4gICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtcGl6emEge1xcclxcbiAgIHdpZHRoOiA1MCU7XFxyXFxuICAgLyogcGFkZGluZy1ib3R0b206IDEwcHg7ICovXFxyXFxuICAgcGFkZGluZy1sZWZ0OiA1MDBweDtcXHJcXG4gICBmb250LXNpemU6IDE0MHB4O1xcclxcbiAgIGZvbnQtZmFtaWx5OiBwYXB5cnVzOyAgIFxcclxcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxcclxcbiAgIC8qIG1hcmdpbi1sZWZ0OiAtMzMwcHg7ICovXFxyXFxufVxcclxcblxcclxcbi5tZW51LW5hY2hvIHtcXHJcXG4gICB3aWR0aDogMzAlO1xcclxcbiAgIGZvbnQtc2l6ZTogMTQwcHg7XFxyXFxuICAgZm9udC1mYW1pbHk6IHBhcHlydXM7ICAgXFxyXFxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNwaXp6YSB7XFxyXFxuICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwOCk7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgIC8qIG1hcmdpbi1yaWdodDogNTAwcHg7ICovXFxyXFxufVxcclxcblxcclxcbiNuYWNob3Mge1xcclxcbiAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMDgpO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICBtYXJnaW4tcmlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdmlwIHtcXHJcXG4gIFxcclxcbiAgIHdpZHRoOiAxMjAwcHg7XFxyXFxuICAgaGVpZ2h0OiA2MDBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Njcm9sbC1kb3duIHtcXHJcXG4gICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgbGVmdDogMTBweDtcXHJcXG4gICBib3R0b206IDEwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7R0FDRyw2QkFBNkI7R0FDN0Isc0JBQXNCO0FBQ3pCOztBQUVBO0dBQ0csdUJBQXVCO0FBQzFCOzs7QUFHQTtHQUNHLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixtQkFBbUI7R0FDbkIsbUJBQW1CO0dBQ25CLGtDQUFrQztHQUNsQyx5QkFBeUI7R0FDekIseUJBQXlCO0dBQ3pCLHdCQUF3QjtBQUMzQjs7QUFFQTtHQUNHLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsOEJBQThCOztBQUVqQzs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osaUJBQWlCO0FBQ3BCO0FBQ0E7R0FDRyxhQUFhO0dBQ2IsYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixpQkFBaUI7QUFDcEI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osYUFBYTtHQUNiLGdCQUFnQjtHQUNoQixpQkFBaUI7R0FDakIsYUFBYTtHQUNiLG9CQUFvQjtHQUNwQiwwQkFBMEI7R0FDMUIsaUNBQWlDO0dBQ2pDLGtCQUFrQjtHQUNsQixVQUFVO0dBQ1YsaUNBQWlDO0dBQ2pDLHFDQUFxQztHQUNyQyxrQ0FBa0M7R0FDbEMsWUFBWTtHQUNaLFVBQVU7R0FDVixtQkFBbUI7R0FDbkIsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRyxZQUFZO0dBQ1osWUFBWTtHQUNaLGFBQWE7R0FDYiwyQkFBMkI7R0FDM0IsYUFBYTtHQUNiLHVCQUF1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WUFBWTtHQUNaLGFBQWE7R0FDYiw0Q0FBNEM7R0FDNUMsa0JBQWtCO0dBQ2xCLHlCQUF5QjtBQUM1Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWixhQUFhO0dBQ2IsNENBQTRDO0dBQzVDLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7O0dBRUcsYUFBYTtHQUNiLGFBQWE7O0FBRWhCOztBQUVBO0dBQ0csZUFBZTtHQUNmLFVBQVU7R0FDVixZQUFZO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxyXFxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuSFRNTCB7XFxyXFxuICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgIC8qIGhlaWdodDogOTd2aDsgKi9cXHJcXG4gICBtYXJnaW46IDBweDtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAvKiB6LWluZGV4OiBhdXRvOyAqL1xcclxcbiAgIC8qIGZvbnQtc3RyZXRjaDogdWx0cmEtZXhwYW5kZWQ7ICovXFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjYyNztcXHJcXG4gICAvKiBmb250LXN0eWxlOiBvYmxpcXVlOyAqL1xcclxcbiAgIC8qIHBhZGRpbmctbGVmdDogMjBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI3dyYXBwZXIge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgXFxyXFxufVxcclxcblxcclxcbiNob21lLWltZy1kaXYge1xcclxcbiAgIHotaW5kZXg6IC0xO1xcclxcbiAgIG9wYWNpdHk6IDQwJTtcXHJcXG4gICBtYXJnaW4tbGVmdDogOTJweDtcXHJcXG59XFxyXFxuI2hvbWUtaW1nIHtcXHJcXG4gICBoZWlnaHQ6IDkxMHB4O1xcclxcbiAgIHdpZHRoOiAxNzUwcHg7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIC8qIGdyaWQtcm93OiAyOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgd2lkdGg6IDE3NTBweDtcXHJcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgIG1hcmdpbi1sZWZ0OiA5MnB4O1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IHJvdyA7XFxyXFxuICAgLyogYWxpZ24tY29udGVudDogc3RhcnQ7ICovXFxyXFxuICAgLyoganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAqL1xcclxcbiAgIC8qIGhlaWdodDogNjBweDsgKi9cXHJcXG4gICB6LWluZGV4OiAxO1xcclxcbiAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzMjMxMzZjNDsgKi9cXHJcXG4gICAvKiBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4OyAqL1xcclxcbiAgIC8qIGJvcmRlcjogI2I0OWU5ZTliIDNweCBkb3VibGU7ICovXFxyXFxuICAgcGFkZGluZzogMHB4O1xcclxcbiAgIGdhcDogMjkwcHg7XFxyXFxuICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG59XFxyXFxuXFxyXFxuI3RhYi1kaXYge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgbWFyZ2luOiAxMHB4IDtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxZjFhZjg7XFxyXFxuICAgZGlzcGxheTogZmxleDtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cXHJcXG4gICAvKiB6LWluZGV4OiAxOyAqL1xcclxcbiAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgIC8qIGJvcmRlcjogI2ZmZmZmZjc1IHNvbGlkIDFweDsgKi9cXHJcXG4gICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2Myk7XFxyXFxuICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1MSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNsb2dvIHtcXHJcXG4gICB3aWR0aDogMTUwcHg7XFxyXFxuICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA4MHB4O1xcclxcbiAgIGJvcmRlcjogIDFweCBzb2xpZCAjNTU1MzRjZjg7XFxyXFxuICAgb3V0bGluZTogaW5zZXQgM3B4ICMxYjFiMWIgO1xcclxcbiAgIHotaW5kZXg6IDE7XFxyXFxuICAgbWFyZ2luLXRvcDogLTEycHg7XFxyXFxuICAgLyogb3BhY2l0eTogNDUlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jc2NoZWR1bGUge1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgIG1hcmdpbi1sZWZ0OiA5MnB4OyAgXFxyXFxuICAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjU1LCAwLjQ3OSk7XFxyXFxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNlMWUxZTFkNyA2JSwgcmdiYSgxNjMsMTYzLDE2MywxKSA1MiUsIHJnYmEoMTkyLCAyMDMsIDIwNSwgMC43MjYpIDEwMCUpO1xcclxcbiAgIHotaW5kZXg6IDA7XFxyXFxuICAgd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgcGFkZGluZzogMjBweDtcXHJcXG4gICB3aWR0aDogMTc1MHB4O1xcclxcbiAgIGJvcmRlci1ib3R0b206IG91dHNldCBibGFjayAxcHg7XFxyXFxuICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXHJcXG4gICBnYXA6IDM3cHg7XFxyXFxufVxcclxcblxcclxcbiNzY2hlZHVsZSBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGF5IHtcXHJcXG4gICBnYXA6IDE1cHg7XFxyXFxuICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcclxcbiAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxyXFxuICAgcGFkZGluZy1ib3R0b206IDNweDtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxhYmVsICwgLnd0ZiB7XFxyXFxuICAgd2lkdGg6IDIxMnB4O1xcclxcbiAgIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG4gICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGJvcmRlci1ib3R0b206IDFweCBvdXRzZXQgcmdiYSgwLCAwLCAwLCAwLjI4OCk7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICBcXHJcXG59XFxyXFxuLnd0ZiB7XFxyXFxuICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICBtYXJnaW4tYm90dG9tOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGltZS1vbmUsICN0aW1lLXR3byB7XFxyXFxuICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgIFxcclxcbn1cXHJcXG4jYmFubmVyLWRpdiB7IFxcclxcbiAgIG1hcmdpbi10b3A6IDkwcHg7XFxyXFxuICAgbWFyZ2luLWxlZnQ6IDExN3B4O1xcclxcbiAgIG9wYWNpdHk6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNiYW5uZXIge1xcclxcbiAgIHdpZHRoOiAxMjIwcHg7XFxyXFxuICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgb3V0bGluZTogIzc0Njc2N2FhIDJweCByaWRnZTtcXHJcXG4gICBib3JkZXI6ICM3NjcxNzFjNyA1cHggZG91YmxlO1xcclxcbiAgIG9wYWNpdHk6IDk1JTtcXHJcXG4gICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuI2Jhbm5lci1idXR0b24ge1xcclxcbiAgIHdpZHRoOiAyNzZweDtcXHJcXG4gICBoZWlnaHQ6IDkzcHg7XFxyXFxuICAgbWFyZ2luLXRvcDogMjAwcHg7XFxyXFxuICAgbWFyZ2luLWxlZnQ6IDg5MHB4O1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICBcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UxOTEyO1xcclxcbiAgIG91dGxpbmU6ICMwNDA0MDQgMXB4IHJpZGdlO1xcclxcbiAgIGJvcmRlcjogIzAwMDAwMCAxcHggaW5zZXQ7XFxyXFxuICAgZm9udC1mYW1pbHk6IHBhcHlydXM7XFxyXFxuICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2JvcmRlciB7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgb3BhY2l0eTogMjAlO1xcclxcbn1cXHJcXG4vKiAjY29udGVudCB7XFxyXFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzEzNmM0O1xcclxcbiAgIC8qIHotaW5kZXg6IDsgKi9cXHJcXG4gICAvKiBoZWlnaHQ6IDk2MHB4OyAqL1xcclxcbiAgIC8qIHdpZHRoOiBtaW4tY29udGVudDsgKi9cXHJcXG4gICAvKiBkaXNwbGF5OiBncmlkOyAqL1xcclxcbiAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjI1cHggMjI1cHggMjI1cHggMjI1cHggMjI1cHggMjI1cHggMjI1cHggMjI1cHggMjI1cHg7ICovXFxyXFxuICAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxODBweCAxNjBweCAgMjIwcHggMjIwcHggMjIwcHggMjIwcHggMjIwcHggMjIwcHggMjIwcHggMjIwcHggOyAqL1xcclxcbiAgIFxcclxcbiAgIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXFxyXFxuICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXFxyXFxuICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cXHJcXG4gICAvKiB9ICovIFxcclxcbiAgIFxcclxcbiAgICNhYm91dCB7XFxyXFxuICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA5MnB4O1xcclxcbiAgICAgIHdpZHRoOiAxNzUwcHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZTFlMWUxZDcgNiUsIHJnYmEoMTYzLDE2MywxNjMsMSkgNTIlLCByZ2JhKDE5MiwgMjAzLCAyMDUsIDAuNzI2KSAxMDAlKTtcXHJcXG4gICAgICBnYXA6IDEyMHB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcXHJcXG4gICB9XFxyXFxuICAgXFxyXFxuICAgI2Fib3V0LW9uZSwgI2Fib3V0LXR3byxcXHJcXG4gICAjYWJvdXQtdGhyZWUsICNhYm91dC1mb3VyIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogcGFweXJ1cztcXHJcXG4gICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgfVxcclxcbiAgICNhYm91dC1vbmUge1xcclxcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgIH1cXHJcXG5cXHJcXG4gICAjYWJvdXQtb25lLXRleHQge1xcclxcbiAgICAgIHdpZHRoOiAzMiU7XFxyXFxuICAgICAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cXHJcXG4gICAgICBtYXJnaW4tbGVmdDogNzBweDtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgfVxcclxcbiAgICNhYm91dC10d28ge1xcclxcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMGMwYzBjMDUgNzAlLCByZ2JhKDE2MywgMTYzLCAxNjMsIDAuMDk2KSA1MiUsIHJnYmEoMCwgMCwgMCwgMC4yNDcpIDEwMCUpO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiBwYXB5cnVzO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDIwcHg7XFxyXFxuICAgICAgLyogbWFyZ2luLXRvcDogMjBweDsgKi9cXHJcXG4gICAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG59XFxyXFxuI2Fib3V0LXRocmVlIHtcXHJcXG4gICBncmlkLXJvdzogMTQgLyAxODtcXHJcXG4gICBncmlkLWNvbHVtbjogOCAvIDEyO1xcclxcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgcGFkZGluZzogMXB4O1xcclxcbiAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbiNhYm91dC1mb3VyIHtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LWZvdXItbGVmdCB7XFxyXFxuICAgd2lkdGg6IDUwJTtcXHJcXG4gICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiNwb29sLWltZyB7XFxyXFxuICAgd2lkdGg6IDEwNTBweDtcXHJcXG4gICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpOyAqL1xcclxcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2thcmFva2Uge1xcclxcbiAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAvKiBtYXJnaW4tbGVmdDogLTE1cHg7ICovXFxyXFxuICAgb3BhY2l0eTogNjAlO1xcclxcbiAgIGhlaWdodDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbiNqdWtlYm94IHtcXHJcXG4gICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhYm9vc2Uge1xcclxcbiAgIHdpZHRoOiAxMDAlO1xcclxcbiAgIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcbiNhYm91dC1saXN0IHtcXHJcXG4gICB3aWR0aDogNDAlO1xcclxcbiAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgdGV4dC1pbmRlbnQ6IDFweDtcXHJcXG4gICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBnYXA6IDIwcHg7XFxyXFxuICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICBtYXJnaW4tbGVmdDogMTEwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHtcXHJcXG4gICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgd2lkdGg6IDE3NTBweDtcXHJcXG4gICBtYXJnaW4tbGVmdDogOTJweDtcXHJcXG4gICBncmlkLWNvbHVtbjogNiAvIDEwO1xcclxcbiAgIGdyaWQtcm93OiA3IC8gNztcXHJcXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2UxZTFlMWQ3IDYlLCByZ2JhKDE2MywxNjMsMTYzLDEpIDUyJSwgcmdiYSgxOTIsIDIwMywgMjA1LCAwLjcyNikgMTAwJSk7XFxyXFxuICAgLyogYm9yZGVyLXJhZGl1czogNDBweDsgKi9cXHJcXG4gICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTIxKTsgKi9cXHJcXG4gICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICAgZ2FwOiAyMHB4O1xcclxcbiAgIHotaW5kZXg6IDE7XFxyXFxuICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtaGVhZCB7XFxyXFxuICAgd2lkdGg6IDgwJTtcXHJcXG4gICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODg0KTtcXHJcXG4gICBmb250LXNpemU6IDkwcHg7XFxyXFxuXFxyXFxuICAgYm9yZGVyLWJvdHRvbTogcmdiYSgxNywgMTcsIDE3LCAwLjQ2Nikgc29saWQgMXB4O1xcclxcbiAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcclxcbiAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICAgcGFkZGluZzogMTBweDtcXHJcXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1waXp6YSB7XFxyXFxuICAgd2lkdGg6IDUwJTtcXHJcXG4gICAvKiBwYWRkaW5nLWJvdHRvbTogMTBweDsgKi9cXHJcXG4gICBwYWRkaW5nLWxlZnQ6IDUwMHB4O1xcclxcbiAgIGZvbnQtc2l6ZTogMTQwcHg7XFxyXFxuICAgZm9udC1mYW1pbHk6IHBhcHlydXM7ICAgXFxyXFxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXFxyXFxuICAgLyogbWFyZ2luLWxlZnQ6IC0zMzBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbmFjaG8ge1xcclxcbiAgIHdpZHRoOiAzMCU7XFxyXFxuICAgZm9udC1zaXplOiAxNDBweDtcXHJcXG4gICBmb250LWZhbWlseTogcGFweXJ1czsgICBcXHJcXG4gICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3BpenphIHtcXHJcXG4gICB3aWR0aDogNjAwcHg7XFxyXFxuICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzA4KTtcXHJcXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgLyogbWFyZ2luLXJpZ2h0OiA1MDBweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI25hY2hvcyB7XFxyXFxuICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMwOCk7XFxyXFxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgIG1hcmdpbi1yaWdodDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbiN2aXAge1xcclxcbiAgXFxyXFxuICAgd2lkdGg6IDEyMDBweDtcXHJcXG4gICBoZWlnaHQ6IDYwMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jc2Nyb2xsLWRvd24ge1xcclxcbiAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICBsZWZ0OiAxMHB4O1xcclxcbiAgIGJvdHRvbTogMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcG9vbEltYWdlIGZyb20gJy4uL2Fzc2V0cy9wb29sLmpwZyc7XHJcbmltcG9ydCBqdWtlYm94SW1hZ2UgZnJvbSAnLi4vYXNzZXRzL3RvdWNodHVuZXMuanBnJztcclxuaW1wb3J0IGthcmFva2VJbWFnZSBmcm9tICcuLi9hc3NldHMva2FyYW9rZS5wbmcnO1xyXG5pbXBvcnQgY2Fib29zZUltYWdlIGZyb20gJy4uL2Fzc2V0cy9jYWJvb3NlLnBuZyc7XHJcbmltcG9ydCB2aXBJbWFnZSBmcm9tICcuLi9hc3NldHMvdmlwLnBuZyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFib3V0TGF1bmNoKCkge1xyXG5cclxuICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgXHJcbiAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGFib3V0LmlkID0gJ2Fib3V0JztcclxuICAgXHJcbiAgIGNvbnN0IGFib3V0VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGFib3V0VHdvLmlkID0gJ2Fib3V0LXR3byc7XHJcbiAgIFxyXG4gICBjb25zdCBrYXJhb2tlID0gbmV3IEltYWdlKCk7XHJcbiAgIGthcmFva2Uuc3JjID0ga2FyYW9rZUltYWdlO1xyXG4gICBrYXJhb2tlLmlkID0gJ2thcmFva2UnO1xyXG4gICBhYm91dFR3by5hcHBlbmRDaGlsZChrYXJhb2tlKTtcclxuICAgXHJcbiAgIGNvbnN0IGFib3V0VHdvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBhYm91dFR3b1RleHQudGV4dENvbnRlbnQgPSAnRm9sbG93IHVzIG9uIHNvY2lhbCBmb3Igb3VyIEthcmFva2UgYW5kIERKIG5pZ2h0cydcclxuICAgYWJvdXRUd28uYXBwZW5kQ2hpbGQoYWJvdXRUd29UZXh0KTtcclxuICAgXHJcbiAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0VHdvKTtcclxuICAgXHJcbiAgIGNvbnN0IGFib3V0T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGFib3V0T25lLmlkID0gJ2Fib3V0LW9uZSc7XHJcbiAgIFxyXG4gICBjb25zdCBwb29sID0gbmV3IEltYWdlKCk7XHJcbiAgIHBvb2wuc3JjID0gcG9vbEltYWdlO1xyXG4gICBwb29sLmlkID0gJ3Bvb2wtaW1nJztcclxuICAgYWJvdXRPbmUuYXBwZW5kQ2hpbGQocG9vbCk7XHJcbiAgIFxyXG4gICBjb25zdCBhYm91dE9uZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgYWJvdXRPbmVUZXh0LmlkID0gJ2Fib3V0LW9uZS10ZXh0JztcclxuICAgYWJvdXRPbmVUZXh0LnRleHRDb250ZW50ID0gJ0NvbWUgd2F0Y2ggdGhlIGdhbWUgb24gb3VyIGJpZyBzY3JlZW4gdHZzLCBvciBnZXQgeW91ciBnYW1lIG9uIHdpdGgnO1xyXG4gICBcclxuICAgY29uc3QgYWJvdXRHYW1lTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgIGFib3V0R2FtZUxpc3QuaWQgPSAnYWJvdXQtbGlzdCc7XHJcbiAgIFxyXG4gICBjb25zdCBnYW1lc0FyciA9IFtdO1xyXG4gICBcclxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICBnYW1lc0Fyci5wdXNoKGxpc3QpO1xyXG4gICB9O1xyXG4gICBcclxuICAgZ2FtZXNBcnJbMF0udGV4dENvbnRlbnQgPSAnUG9vbCc7XHJcbiAgIGdhbWVzQXJyWzFdLnRleHRDb250ZW50ID0gJ0Nvcm5ob2xlJztcclxuICAgZ2FtZXNBcnJbMl0udGV4dENvbnRlbnQgPSAnUmluZyBHYW1lJztcclxuICAgZ2FtZXNBcnJbM10udGV4dENvbnRlbnQgPSAnSmVuZ2EnO1xyXG4gICBcclxuICAgYWJvdXRHYW1lTGlzdC5hcHBlbmQoXHJcbiAgICAgZ2FtZXNBcnJbMF0sXHJcbiAgICAgZ2FtZXNBcnJbMV0sXHJcbiAgICAgZ2FtZXNBcnJbMl0sXHJcbiAgICAgZ2FtZXNBcnJbM11cclxuICAgICApO1xyXG4gICAgIFxyXG4gICAgIGFib3V0T25lVGV4dC5hcHBlbmRDaGlsZChhYm91dEdhbWVMaXN0KTtcclxuICAgICBhYm91dE9uZS5hcHBlbmRDaGlsZChhYm91dE9uZVRleHQpO1xyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0T25lKTtcclxuICAgICBcclxuICAgICBcclxuICAgICBjb25zdCBhYm91dFRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgYWJvdXRUaHJlZS5pZCA9ICdhYm91dC10aHJlZSc7XHJcbiAgICAgXHJcbiAgICAgY29uc3QganVrZWJveCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgIGp1a2Vib3guc3JjID0ganVrZWJveEltYWdlO1xyXG4gICAgIGp1a2Vib3guaWQgPSAnanVrZWJveCc7XHJcbiAgICAgYWJvdXRUaHJlZS5hcHBlbmRDaGlsZChqdWtlYm94KTtcclxuICAgICBcclxuICAgICBjb25zdCBhYm91dFRocmVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgIGFib3V0VGhyZWVUZXh0LnRleHRDb250ZW50ID0gJ0JlIHlvdXIgb3duIERKIHdpdGggdGhlIFRvdWNoVHVuZXMganVrZWJveCwgYnVzdCBhIG1vdmUgb24gdGhlIGRhbmNlIGZsb29yLCBvciBlbmpveSB0aGUgcHJpdmF0ZSBWSVAgcm9vbSBhdmFpbGFibGUgZm9yIHJlbnQuJztcclxuICAgICBhYm91dFRocmVlLmFwcGVuZENoaWxkKGFib3V0VGhyZWVUZXh0KTtcclxuICAgICBcclxuICAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFRocmVlKTtcclxuICAgICBcclxuICAgICBjb25zdCBhYm91dEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICBhYm91dEZvdXIuaWQgPSAnYWJvdXQtZm91cic7XHJcbiAgICAgXHJcbiBcclxuICAgICBjb25zdCBhYm91dEZvdXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgYWJvdXRGb3VyTGVmdC5pZCA9ICdhYm91dC1mb3VyLWxlZnQnO1xyXG4gXHJcbiAgICAgY29uc3QgYWJvdXRGb3VyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgIGFib3V0Rm91clRleHQudGV4dENvbnRlbnQgPSAnQ29tZSBpbiBhbmQgdGFrZSBhIHBpYyBvbiB0aGUgYmFjayBvZiB0aGUgQ2Fib29zZSEnO1xyXG4gICAgYWJvdXRGb3VyTGVmdC5hcHBlbmRDaGlsZChhYm91dEZvdXJUZXh0KTtcclxuICAgIFxyXG4gICAgY29uc3QgY2Fib29zZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2Fib29zZS5zcmMgPSBjYWJvb3NlSW1hZ2U7XHJcbiAgICBjYWJvb3NlLmlkID0gJ2NhYm9vc2UnO1xyXG4gICAgYWJvdXRGb3VyTGVmdC5hcHBlbmRDaGlsZChjYWJvb3NlKTtcclxuIFxyXG4gICAgYWJvdXRGb3VyLmFwcGVuZENoaWxkKGFib3V0Rm91ckxlZnQpXHJcbiAgICBcclxuICAgIGNvbnN0IHZpcFJvb20gPSBuZXcgSW1hZ2UoKTtcclxuICAgIHZpcFJvb20uc3JjID0gdmlwSW1hZ2U7XHJcbiAgICB2aXBSb29tLmlkID0gJ3ZpcCc7XHJcbiAgICBhYm91dEZvdXIuYXBwZW5kQ2hpbGQodmlwUm9vbSk7XHJcbiBcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKGFib3V0Rm91cik7XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQpO1xyXG4gICAgXHJcbiAgICBcclxuICAgfTsiLCJpbXBvcnQgYmFja2dyb3VuZEltYWdlIGZyb20gXCIuLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIjtcclxuaW1wb3J0IGJhbm5lckltYWdlIGZyb20gJy4uL2Fzc2V0cy9iYW5uZXIucG5nJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVMYXVuY2goKSB7XHJcblxyXG5cclxuICBcclxuICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgXHJcbiAgIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgXHJcbiAgIHNjaGVkdWxlLmlkID0gXCJzY2hlZHVsZVwiO1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG4gICAvL2NyZWF0ZSBhbGwgNyBkYXlzXHJcbiAgIGNvbnN0IGRheXNBcnJheSA9IFtdO1xyXG4gICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgZGF5LmNsYXNzTmFtZSA9IFwiZGF5XCI7XHJcbiAgICAgXHJcbiAgICAgY29uc3QgZGF5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICBcclxuICAgICBjb25zdCB0aW1lczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgIHRpbWVzMS5pZCA9IFwidGltZS1vbmVcIjtcclxuICAgICBcclxuICAgICBjb25zdCB0aW1lczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgIHRpbWVzMi5pZCA9IFwidGltZS10d29cIjtcclxuICAgICBcclxuICAgICAoaSA8IDIpIHwgKGkgPiA0KVxyXG4gICAgID8gKGRheUhlYWRlci5jbGFzc05hbWUgPSBcImxhYmVsXCIpXHJcbiAgICAgOiAoZGF5SGVhZGVyLmNsYXNzTmFtZSA9IFwid3RmXCIpO1xyXG4gICAgIGRheS5hcHBlbmRDaGlsZChkYXlIZWFkZXIpO1xyXG4gICAgIChpIDwgMikgfCAoaSA+IDQpID8gZGF5LmFwcGVuZCh0aW1lczEsIHRpbWVzMikgOiBkYXkuYXBwZW5kQ2hpbGQodGltZXMxKTtcclxuICAgICBcclxuICAgICBzY2hlZHVsZS5hcHBlbmRDaGlsZChkYXkpO1xyXG4gICAgIGRheXNBcnJheS5wdXNoKGRheSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRheXNBcnJheVswXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiTW9uZGF5XCI7XHJcbiAgIGRheXNBcnJheVswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IFwiNjowMCBBTSAtIDEwOjAwIEFNXCI7XHJcbiAgIGRheXNBcnJheVswXS5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IFwiNDowMCBQTSAtIDk6MDAgUE1cIjtcclxuICAgXHJcbiAgIGRheXNBcnJheVsxXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IFwiVHVlc2RheVwiO1xyXG4gICBkYXlzQXJyYXlbMV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIjY6MDAgQU0gLSAxMDowMCBBTVwiO1xyXG4gICBkYXlzQXJyYXlbMV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIjQ6MDAgUE0gLSA5OjAwIFBNXCI7XHJcbiAgIFxyXG4gICBkYXlzQXJyYXlbMl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIldlZG5lc2RheVwiO1xyXG4gICBkYXlzQXJyYXlbMl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIjQ6MDAgUE0gLSAxMDowMCBQTVwiO1xyXG4gICBcclxuICAgZGF5c0FycmF5WzNdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJUaHVyc2RheVwiO1xyXG4gICBkYXlzQXJyYXlbM10uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIjQ6MDAgUE0gLSAxMDowMCBQTVwiO1xyXG4gICBcclxuICAgZGF5c0FycmF5WzRdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJGcmlkYXlcIjtcclxuICAgZGF5c0FycmF5WzRdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gXCI0OjAwIFBNIC0gMTozMCBBTVwiO1xyXG4gICBcclxuICAgZGF5c0FycmF5WzVdLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gXCJTYXR1cmRheVwiO1xyXG4gICBkYXlzQXJyYXlbNV0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIjg6MDAgQU0gLSAxMTowMCBBTVwiO1xyXG4gICBkYXlzQXJyYXlbNV0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIjE6MDAgUE0gLSAxOjMwIEFNXCI7XHJcbiAgIFxyXG4gICBkYXlzQXJyYXlbNl0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBcIlN1bmRheVwiO1xyXG4gICBkYXlzQXJyYXlbNl0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBcIjg6MDAgQU0gLSAxMTowMCBBTVwiO1xyXG4gICBkYXlzQXJyYXlbNl0uY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBcIjE6MDAgUE0gLSAxMDowMCBQTVwiO1xyXG4gICBcclxuICAgY29uc3QgaG9tZUltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICBob21lSW1nRGl2LmlkID0gJ2hvbWUtaW1nLWRpdidcclxuICAgXHJcbiAgIGNvbnN0IGhvbWVJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgaG9tZUltZy5zcmMgPSBiYWNrZ3JvdW5kSW1hZ2U7XHJcbiAgIGhvbWVJbWcuaWQgPSBcImhvbWUtaW1nXCI7XHJcbiAgIGhvbWVJbWdEaXYuYXBwZW5kQ2hpbGQoaG9tZUltZyk7XHJcbiAgIFxyXG4gICB3cmFwcGVyLmFwcGVuZENoaWxkKGhvbWVJbWdEaXYpO1xyXG4gICBcclxuICAgY29udGVudC5hcHBlbmRDaGlsZChzY2hlZHVsZSk7XHJcbiBcclxuICAgY29uc3QgYmFubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgIGJhbm5lckRpdi5pZCA9ICdiYW5uZXItZGl2JztcclxuICAgXHJcbiAgIGNvbnN0IGJhbm5lciA9IG5ldyBJbWFnZSgpO1xyXG4gICBiYW5uZXIuc3JjID0gYmFubmVySW1hZ2U7XHJcbiAgIGJhbm5lci5pZCA9ICdiYW5uZXInO1xyXG4gICBcclxuICAgYmFubmVyRGl2LmFwcGVuZENoaWxkKGJhbm5lcik7XHJcbiAgIFxyXG4gICBjb25zdCBiYW5uZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgYmFubmVyQnV0dG9uLmlkID0gJ2Jhbm5lci1idXR0b24nO1xyXG4gICBiYW5uZXJCdXR0b24udGV4dENvbnRlbnQgPSAnVmlldyBNZW51J1xyXG4gICBiYW5uZXJEaXYuYXBwZW5kQ2hpbGQoYmFubmVyQnV0dG9uKTtcclxuIFxyXG4gXHJcbiBcclxuICAgXHJcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFubmVyRGl2KTtcclxuICAgXHJcbiAgIFxyXG4gICAvL21ha2VzIHRoZSBkaXYgdGhhdCBsYXlzIG91dCB0aGUgZ3JpZCBmb3IgdGhlIGFib3V0IHNlY3Rpb25cclxuICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuIH0iLCJpbXBvcnQgcGl6emFJbWFnZSBmcm9tICcuLi9hc3NldHMvcGl6emEucG5nJztcclxuaW1wb3J0IG5hY2hvc0ltYWdlIGZyb20gJy4uL2Fzc2V0cy9uYWNob3MucG5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51TGF1bmNoKCkge1xyXG5cclxuICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubWVudS5pZCA9ICdtZW51JztcclxuXHJcbmNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubWVudUhlYWRlci5pZCA9ICdtZW51LWhlYWQnO1xyXG5tZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ0NhbGwgQW5kIE9yZGVyISc7XHJcbm1lbnUuYXBwZW5kQ2hpbGQobWVudUhlYWRlcik7XHJcblxyXG5jb25zdCBwaXp6YUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBpenphTGFiZWwuY2xhc3NOYW1lID0gJ21lbnUtcGl6emEnO1xyXG5waXp6YUxhYmVsLnRleHRDb250ZW50ID0gJ1BpenphJztcclxubWVudS5hcHBlbmRDaGlsZChwaXp6YUxhYmVsKTtcclxuXHJcbmNvbnN0IHBpenphID0gbmV3IEltYWdlKCk7XHJcbnBpenphLnNyYyA9IHBpenphSW1hZ2U7XHJcbnBpenphLmlkID0gJ3BpenphJztcclxubWVudS5hcHBlbmRDaGlsZChwaXp6YSk7XHJcblxyXG5jb25zdCBuYWNob0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm5hY2hvTGFiZWwuY2xhc3NOYW1lID0gJ21lbnUtbmFjaG8nO1xyXG5uYWNob0xhYmVsLnRleHRDb250ZW50ID0gJ05hY2hvcyc7XHJcbm1lbnUuYXBwZW5kQ2hpbGQobmFjaG9MYWJlbCk7XHJcblxyXG5jb25zdCBuYWNob3MgPSBuZXcgSW1hZ2UoKTtcclxubmFjaG9zLnNyYyA9IG5hY2hvc0ltYWdlO1xyXG5uYWNob3MuaWQgPSAnbmFjaG9zJztcclxubWVudS5hcHBlbmRDaGlsZChuYWNob3MpO1xyXG5cclxuY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi9hc3NldHMvbG9nbzEucG5nXCI7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGhvbWVMYXVuY2ggfSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVcIjtcclxuaW1wb3J0IHsgbWVudUxhdW5jaCB9IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5pbXBvcnQgeyBhYm91dExhdW5jaCB9IGZyb20gXCIuL21vZHVsZXMvYWJvdXRcIjtcclxuLy9FbGVtZW50IHRoYXQgZXZlcnl0aGluZyB3aWxsIGJlIGFwcGVuZGVkIHRvXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dyYXBwZXJcIik7XHJcblxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5oZWFkZXIuaWQgPSBcImhlYWRlclwiO1xyXG5cclxuXHJcbmNvbnN0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50YWJEaXYuaWQgPSAndGFiLWRpdidcclxuXHJcbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5ob21lVGFiLmNsYXNzTmFtZSA9IFwidGFiXCI7XHJcbmhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhvbWVMYXVuY2gpO1xyXG5cclxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbm1lbnVUYWIuY2xhc3NOYW1lID0gXCJ0YWJcIjtcclxubWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudUxhdW5jaCk7XHJcblxyXG5jb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmFib3V0VGFiLmNsYXNzTmFtZSA9IFwidGFiXCI7XHJcbmFib3V0VGFiLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG5hYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0TGF1bmNoKTtcclxuXHJcbnRhYkRpdi5hcHBlbmQoaG9tZVRhYiwgbWVudVRhYiwgYWJvdXRUYWIpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQodGFiRGl2KTtcclxuXHJcbmNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxubG9nb0Rpdi5pZCA9ICdsb2dvLWRpdic7XHJcblxyXG5cclxuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xyXG5sb2dvLnNyYyA9IGxvZ29JbWFnZTtcclxubG9nby5pZCA9IFwibG9nb1wiO1xyXG5sb2dvRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb250ZW50LmlkID0gXCJjb250ZW50XCI7XHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoY29udGVudClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBob21lTGF1bmNoKClcclxuICBcclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=