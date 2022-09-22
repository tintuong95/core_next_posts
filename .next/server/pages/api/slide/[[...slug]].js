"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/slide/[[...slug]]";
exports.ids = ["pages/api/slide/[[...slug]]"];
exports.modules = {

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./config/multer.js":
/*!**************************!*\
  !*** ./config/multer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"upload\": () => (/* binding */ upload),\n/* harmony export */   \"uploadTextArea\": () => (/* binding */ uploadTextArea)\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_randomId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/randomId.js */ \"(api)/./utils/randomId.js\");\n\n\n\nconst storage = (offset)=>{\n    try {\n        return multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n            destination: function(req, file, cb) {\n                var ext = path__WEBPACK_IMPORTED_MODULE_1___default().extname(file.originalname);\n                if (ext !== \".png\" && ext !== \".jpg\" && ext !== \".jpeg\" && ext !== \".PNG\") {\n                    return cb(new Error(\"Only images and zip are allowed\"), \"Error file type!\");\n                }\n                const dir = __dirname.split(\"\\\\\");\n                dir.splice(offset);\n                cb(null, path__WEBPACK_IMPORTED_MODULE_1___default().join(dir.join(\"\\\\\"), \"../public\"));\n            },\n            filename: function(req, file, cb) {\n                var ext = path__WEBPACK_IMPORTED_MODULE_1___default().extname(file.originalname);\n                cb(null, (0,_utils_randomId_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(6) + ext);\n            }\n        });\n    } catch (err) {\n        console.log(err);\n    }\n};\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: storage(-4)\n});\nconst uploadTextArea = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n    storage: storage(-3)\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbXVsdGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7QUFDSjtBQUNvQjtBQUU1QyxNQUFNRyxPQUFPLEdBQUcsQ0FBQ0MsTUFBTSxHQUFLO0lBQzFCLElBQUk7UUFDRixPQUFPSix5REFBa0IsQ0FBQztZQUN4Qk0sV0FBVyxFQUFFLFNBQVVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxFQUFFLEVBQUU7Z0JBQ3BDLElBQUlDLEdBQUcsR0FBR1QsbURBQVksQ0FBQ08sSUFBSSxDQUFDSSxZQUFZLENBQUM7Z0JBRXpDLElBQ0VGLEdBQUcsS0FBSyxNQUFNLElBQ2RBLEdBQUcsS0FBSyxNQUFNLElBQ2RBLEdBQUcsS0FBSyxPQUFPLElBQ2ZBLEdBQUcsS0FBSyxNQUFNLEVBQ2Q7b0JBQ0EsT0FBT0QsRUFBRSxDQUNQLElBQUlJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxFQUM1QyxrQkFBa0IsQ0FDbkIsQ0FBQztnQkFDSixDQUFDO2dCQUVELE1BQU1DLEdBQUcsR0FBR0MsU0FBUyxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqQ0YsR0FBRyxDQUFDRyxNQUFNLENBQUNiLE1BQU0sQ0FBQyxDQUFDO2dCQUVuQkssRUFBRSxDQUFDLElBQUksRUFBRVIsZ0RBQVMsQ0FBQ2EsR0FBRyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0RDLFFBQVEsRUFBRSxTQUFVWixHQUFHLEVBQUVDLElBQUksRUFBRUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJQyxHQUFHLEdBQUdULG1EQUFZLENBQUNPLElBQUksQ0FBQ0ksWUFBWSxDQUFDO2dCQUV6Q0gsRUFBRSxDQUFDLElBQUksRUFBRVAsOERBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR1EsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLEVBQUUsT0FBT1UsR0FBRyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0FBQ0gsQ0FBQztBQUVNLE1BQU1HLE1BQU0sR0FBR3ZCLDZDQUFNLENBQUM7SUFBRUcsT0FBTyxFQUFFQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FBRSxDQUFDLENBQUM7QUFFaEQsTUFBTXFCLGNBQWMsR0FBR3hCLDZDQUFNLENBQUM7SUFBRUcsT0FBTyxFQUFFQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9jb25maWcvbXVsdGVyLmpzPzU0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG11bHRlciBmcm9tIFwibXVsdGVyXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCByYW5kb21JZCBmcm9tIFwiLi4vdXRpbHMvcmFuZG9tSWQuanNcIjtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSAob2Zmc2V0KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xyXG4gICAgICBkZXN0aW5hdGlvbjogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcclxuICAgICAgICB2YXIgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgZXh0ICE9PSBcIi5wbmdcIiAmJlxyXG4gICAgICAgICAgZXh0ICE9PSBcIi5qcGdcIiAmJlxyXG4gICAgICAgICAgZXh0ICE9PSBcIi5qcGVnXCIgJiZcclxuICAgICAgICAgIGV4dCAhPT0gXCIuUE5HXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiBjYihcclxuICAgICAgICAgICAgbmV3IEVycm9yKFwiT25seSBpbWFnZXMgYW5kIHppcCBhcmUgYWxsb3dlZFwiKSxcclxuICAgICAgICAgICAgXCJFcnJvciBmaWxlIHR5cGUhXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkaXIgPSBfX2Rpcm5hbWUuc3BsaXQoXCJcXFxcXCIpO1xyXG4gICAgICAgIGRpci5zcGxpY2Uob2Zmc2V0KTtcclxuXHJcbiAgICAgICAgY2IobnVsbCwgcGF0aC5qb2luKGRpci5qb2luKFwiXFxcXFwiKSwgXCIuLi9wdWJsaWNcIikpO1xyXG4gICAgICB9LFxyXG4gICAgICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcclxuICAgICAgICB2YXIgZXh0ID0gcGF0aC5leHRuYW1lKGZpbGUub3JpZ2luYWxuYW1lKTtcclxuXHJcbiAgICAgICAgY2IobnVsbCwgcmFuZG9tSWQoNikgKyBleHQpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlOiBzdG9yYWdlKC00KSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWRUZXh0QXJlYSA9IG11bHRlcih7IHN0b3JhZ2U6IHN0b3JhZ2UoLTMpIH0pO1xyXG4iXSwibmFtZXMiOlsibXVsdGVyIiwicGF0aCIsInJhbmRvbUlkIiwic3RvcmFnZSIsIm9mZnNldCIsImRpc2tTdG9yYWdlIiwiZGVzdGluYXRpb24iLCJyZXEiLCJmaWxlIiwiY2IiLCJleHQiLCJleHRuYW1lIiwib3JpZ2luYWxuYW1lIiwiRXJyb3IiLCJkaXIiLCJfX2Rpcm5hbWUiLCJzcGxpdCIsInNwbGljZSIsImpvaW4iLCJmaWxlbmFtZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1cGxvYWQiLCJ1cGxvYWRUZXh0QXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/multer.js\n");

/***/ }),

/***/ "(api)/./db/config/sequelize.js":
/*!********************************!*\
  !*** ./db/config/sequelize.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Sequelize  } = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst { NEXT_PUBLIC_DB_NAME , NEXT_PUBLIC_DB_USERNAME , NEXT_PUBLIC_DB_PASSWORD , NEXT_PUBLIC_DB_DIALECT , NEXT_PUBLIC_DB_HOST ,  } = process.env;\nconst sequelize = new Sequelize(NEXT_PUBLIC_DB_NAME, NEXT_PUBLIC_DB_USERNAME, NEXT_PUBLIC_DB_PASSWORD, {\n    host: NEXT_PUBLIC_DB_HOST,\n    dialect: NEXT_PUBLIC_DB_DIALECT,\n    logging: false,\n    dialectModule: __webpack_require__(/*! mysql2 */ \"mysql2\")\n});\nmodule.exports = sequelize;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25maWcvc2VxdWVsaXplLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTSxFQUFFQSxTQUFTLEdBQUUsR0FBR0MsbUJBQU8sQ0FBQyw0QkFBVyxDQUFDO0FBRTFDLE1BQU0sRUFDSkMsbUJBQW1CLEdBQ25CQyx1QkFBdUIsR0FDdkJDLHVCQUF1QixHQUN2QkMsc0JBQXNCLEdBQ3RCQyxtQkFBbUIsS0FDcEIsR0FBR0MsT0FBTyxDQUFDQyxHQUFHO0FBRWYsTUFBTUMsU0FBUyxHQUFHLElBQUlULFNBQVMsQ0FDN0JFLG1CQUFtQixFQUNuQkMsdUJBQXVCLEVBQ3ZCQyx1QkFBdUIsRUFDdkI7SUFDRU0sSUFBSSxFQUFFSixtQkFBbUI7SUFDekJLLE9BQU8sRUFBRU4sc0JBQXNCO0lBQy9CTyxPQUFPLEVBQUUsS0FBSztJQUNkQyxhQUFhLEVBQUVaLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztDQUNqQyxDQUNGO0FBRURhLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHTixTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9kYi9jb25maWcvc2VxdWVsaXplLmpzPzAwMmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTZXF1ZWxpemUgfSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XHJcblxyXG5jb25zdCB7XHJcbiAgTkVYVF9QVUJMSUNfREJfTkFNRSxcclxuICBORVhUX1BVQkxJQ19EQl9VU0VSTkFNRSxcclxuICBORVhUX1BVQkxJQ19EQl9QQVNTV09SRCxcclxuICBORVhUX1BVQkxJQ19EQl9ESUFMRUNULFxyXG4gIE5FWFRfUFVCTElDX0RCX0hPU1QsXHJcbn0gPSBwcm9jZXNzLmVudjtcclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXHJcbiAgTkVYVF9QVUJMSUNfREJfTkFNRSxcclxuICBORVhUX1BVQkxJQ19EQl9VU0VSTkFNRSxcclxuICBORVhUX1BVQkxJQ19EQl9QQVNTV09SRCxcclxuICB7XHJcbiAgICBob3N0OiBORVhUX1BVQkxJQ19EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogTkVYVF9QVUJMSUNfREJfRElBTEVDVCxcclxuICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gICAgZGlhbGVjdE1vZHVsZTogcmVxdWlyZShcIm15c3FsMlwiKSxcclxuICB9XHJcbik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNlcXVlbGl6ZTtcclxuIl0sIm5hbWVzIjpbIlNlcXVlbGl6ZSIsInJlcXVpcmUiLCJORVhUX1BVQkxJQ19EQl9OQU1FIiwiTkVYVF9QVUJMSUNfREJfVVNFUk5BTUUiLCJORVhUX1BVQkxJQ19EQl9QQVNTV09SRCIsIk5FWFRfUFVCTElDX0RCX0RJQUxFQ1QiLCJORVhUX1BVQkxJQ19EQl9IT1NUIiwicHJvY2VzcyIsImVudiIsInNlcXVlbGl6ZSIsImhvc3QiLCJkaWFsZWN0IiwibG9nZ2luZyIsImRpYWxlY3RNb2R1bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/config/sequelize.js\n");

/***/ }),

/***/ "(api)/./db/models/slide.js":
/*!****************************!*\
  !*** ./db/models/slide.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { Sequelize , DataTypes  } = __webpack_require__(/*! sequelize */ \"sequelize\");\nconst { default: randomId  } = __webpack_require__(/*! ../../utils/randomId.js */ \"(api)/./utils/randomId.js\");\nconst sequelize = __webpack_require__(/*! ../config/sequelize.js */ \"(api)/./db/config/sequelize.js\");\nconst Slide = sequelize.define(\"Slide\", {\n    id: {\n        allowNull: false,\n        primaryKey: true,\n        type: DataTypes.STRING(10),\n        defaultValue: ()=>randomId(6)\n    },\n    image: {\n        type: new DataTypes.STRING(30),\n        allowNull: false,\n        unique: true\n    }\n}, {\n    sequelize,\n    modelName: \"Slides\"\n});\nmodule.exports = Slide;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvc2xpZGUuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEVBQUVBLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEdBQUdDLG1CQUFPLENBQUMsNEJBQVcsQ0FBQztBQUNyRCxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxHQUFFLEdBQUdGLG1CQUFPLENBQUMsMERBQXlCLENBQUM7QUFDaEUsTUFBTUcsU0FBUyxHQUFHSCxtQkFBTyxDQUFDLDhEQUF3QixDQUFDO0FBRW5ELE1BQU1JLEtBQUssR0FBR0QsU0FBUyxDQUFDRSxNQUFNLENBQzVCLE9BQU8sRUFDUDtJQUNFQyxFQUFFLEVBQUU7UUFDRkMsU0FBUyxFQUFFLEtBQUs7UUFDaEJDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxJQUFJLEVBQUVWLFNBQVMsQ0FBQ1csTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMxQkMsWUFBWSxFQUFFLElBQU1ULFFBQVEsQ0FBQyxDQUFDLENBQUM7S0FDaEM7SUFDRFUsS0FBSyxFQUFFO1FBQ0xILElBQUksRUFBRSxJQUFJVixTQUFTLENBQUNXLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDOUJILFNBQVMsRUFBRSxLQUFLO1FBQ2hCTSxNQUFNLEVBQUMsSUFBSTtLQUNaO0NBQ0YsRUFDRDtJQUNFVixTQUFTO0lBQ1RXLFNBQVMsRUFBRSxRQUFRO0NBQ3BCLENBQ0Y7QUFFREMsTUFBTSxDQUFDQyxPQUFPLEdBQUdaLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2RiL21vZGVscy9zbGlkZS5qcz9iYzg3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgU2VxdWVsaXplLCBEYXRhVHlwZXMgfSA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7XG5jb25zdCB7IGRlZmF1bHQ6IHJhbmRvbUlkIH0gPSByZXF1aXJlKFwiLi4vLi4vdXRpbHMvcmFuZG9tSWQuanNcIik7XG5jb25zdCBzZXF1ZWxpemUgPSByZXF1aXJlKFwiLi4vY29uZmlnL3NlcXVlbGl6ZS5qc1wiKTtcblxuY29uc3QgU2xpZGUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIlNsaWRlXCIsXG4gIHtcbiAgICBpZDoge1xuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDEwKSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogKCkgPT4gcmFuZG9tSWQoNiksXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdHlwZTogbmV3IERhdGFUeXBlcy5TVFJJTkcoMzApLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHVuaXF1ZTp0cnVlXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBtb2RlbE5hbWU6IFwiU2xpZGVzXCIsXG4gIH1cbik7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGU7XG4iXSwibmFtZXMiOlsiU2VxdWVsaXplIiwiRGF0YVR5cGVzIiwicmVxdWlyZSIsImRlZmF1bHQiLCJyYW5kb21JZCIsInNlcXVlbGl6ZSIsIlNsaWRlIiwiZGVmaW5lIiwiaWQiLCJhbGxvd051bGwiLCJwcmltYXJ5S2V5IiwidHlwZSIsIlNUUklORyIsImRlZmF1bHRWYWx1ZSIsImltYWdlIiwidW5pcXVlIiwibW9kZWxOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/models/slide.js\n");

/***/ }),

/***/ "(api)/./middleware/role.js":
/*!****************************!*\
  !*** ./middleware/role.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"role\": () => (/* binding */ role)\n/* harmony export */ });\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction role(req, res, next) {\n    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res);\n    if (cookies.get(\"access_token\")) {\n        return next();\n    }\n    res.status(403).end(\"Forbidden access token\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL3JvbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRXZCLFNBQVNDLElBQUksQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRTtJQUNuQyxNQUFNQyxPQUFPLEdBQUcsSUFBSUwsZ0RBQU8sQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUM7SUFDckMsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDL0IsT0FBT0YsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNERCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDaEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL21pZGRsZXdhcmUvcm9sZS5qcz81OWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gXCJjb29raWVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm9sZShyZXEsIHJlcywgbmV4dCkge1xyXG4gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcyk7XHJcbiAgaWYgKGNvb2tpZXMuZ2V0KFwiYWNjZXNzX3Rva2VuXCIpKSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuICByZXMuc3RhdHVzKDQwMykuZW5kKFwiRm9yYmlkZGVuIGFjY2VzcyB0b2tlblwiKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ29va2llcyIsInJvbGUiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29va2llcyIsImdldCIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middleware/role.js\n");

/***/ }),

/***/ "(api)/./pages/api/slide/[[...slug]].js":
/*!****************************************!*\
  !*** ./pages/api/slide/[[...slug]].js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sharp */ \"sharp\");\n/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_multer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config/multer.js */ \"(api)/./config/multer.js\");\n/* harmony import */ var _db_models_slide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../db/models/slide.js */ \"(api)/./db/models/slide.js\");\n/* harmony import */ var _db_models_slide_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_db_models_slide_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _middleware_role_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../middleware/role.js */ \"(api)/./middleware/role.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_0__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    onError: (err, req, res, next)=>{\n        res.status(500).end(\"Server error: \" + err.stack);\n    },\n    onNoMatch: (req, res)=>{\n        res.status(404).end(\"Not Found!\");\n    }\n});\n//EXISTED\nasync function existSlide(req, res, next) {\n    try {\n        const response = await _db_models_slide_js__WEBPACK_IMPORTED_MODULE_5___default().findOne({\n            where: {\n                id: req.query[\"slug\"][0]\n            }\n        });\n        if (response) {\n            res.locals = response;\n            return next();\n        }\n        res.status(404).end(\"Not Found!\");\n    } catch (err) {\n        res.status(500).end(\"Server error: \" + err.stack);\n    }\n}\n//[GET]:/id\nhandler.get(\"/api/slide/:id\", existSlide, async (req, res)=>{\n    try {\n        res.json({\n            data: res.locals\n        });\n    } catch (err) {\n        res.status(500).end(\"Server error: \" + err.stack);\n    }\n});\n//[DELETE]:id\nhandler.delete(\"/api/slide/:id\", _middleware_role_js__WEBPACK_IMPORTED_MODULE_7__.role, existSlide, async (req, res)=>{\n    try {\n        res.locals.destroy();\n        res.status(201).end(\"Successfully updated\");\n    } catch (err) {\n        res.status(500).end(\"Server error: \" + err.stack);\n    }\n});\n//[GETs]\nhandler.get(\"/api/slide\", async (req, res)=>{\n    try {\n        const response = await _db_models_slide_js__WEBPACK_IMPORTED_MODULE_5___default().findAll({});\n        res.json({\n            data: response\n        });\n    } catch (err) {\n        res.status(500).end(\"Server error: \" + err.stack);\n    }\n});\n//[POST]\nhandler.post(\"/api/slide\", _middleware_role_js__WEBPACK_IMPORTED_MODULE_7__.role, _config_multer_js__WEBPACK_IMPORTED_MODULE_4__.upload.single(\"image\"), async (req, res)=>{\n    try {\n        //convert image\n        sharp__WEBPACK_IMPORTED_MODULE_2___default()(req.file.path).resize(623, 485).toFile(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(req.file.destination, \"resize_\" + req.file.filename), function(err) {\n            err ? console.log(err) : console.log(\"success\");\n        });\n        const response = await _db_models_slide_js__WEBPACK_IMPORTED_MODULE_5___default().create({\n            image: \"resize_\" + req.file.filename\n        });\n        fs_extra__WEBPACK_IMPORTED_MODULE_3___default().removeSync(req.file.path);\n        res.status(201).end(\"Successfully created\");\n    } catch (err) {\n        res.status(500).end(\"Server error: \" + err.stack);\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2xpZGUvW1suLi5zbHVnXV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ047QUFDRTtBQUNBO0FBQ3lCO0FBQ0g7QUFDbEI7QUFDcUI7QUFHbkQsTUFBTVEsT0FBTyxHQUFHUix3REFBRSxDQUFDO0lBQ2pCUyxPQUFPLEVBQUUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxHQUFLO1FBRWhDRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixHQUFHTCxHQUFHLENBQUNNLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDREMsU0FBUyxFQUFFLENBQUNOLEdBQUcsRUFBRUMsR0FBRyxHQUFLO1FBQ3ZCQSxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRixDQUFDO0FBS0YsU0FBUztBQUVULGVBQWVHLFVBQVUsQ0FBQ1AsR0FBRyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRTtJQUN4QyxJQUFJO1FBQ0YsTUFBTU0sUUFBUSxHQUFHLE1BQU1kLGtFQUFhLENBQUM7WUFDbkNnQixLQUFLLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRVgsR0FBRyxDQUFDWSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQUU7U0FDcEMsQ0FBQztRQUNGLElBQUlKLFFBQVEsRUFBRTtZQUNaUCxHQUFHLENBQUNZLE1BQU0sR0FBR0wsUUFBUSxDQUFDO1lBQ3RCLE9BQU9OLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDREQsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNwQyxFQUFFLE9BQU9MLEdBQUcsRUFBRTtRQUNaRSxHQUFHLENBQUNFLE1B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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDOUMsRUFBRSxPQUFPTCxHQUFHLEVBQUU7UUFDWkUsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBR0wsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxpRUFBZVIsT0FBTyxFQUFDO0FBRWhCLE1BQU1vQyxNQUFNLEdBQUc7SUFDcEJDLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvc2xpZGUvW1suLi5zbHVnXV0uanM/YzQ2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgc2hhcnAgZnJvbSBcInNoYXJwXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnMtZXh0cmFcIjtcclxuaW1wb3J0IHsgdXBsb2FkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9tdWx0ZXIuanNcIjtcclxuaW1wb3J0IFNsaWRlIGZyb20gXCIuLi8uLi8uLi9kYi9tb2RlbHMvc2xpZGUuanNcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImNvb2tpZXNcIjtcclxuaW1wb3J0IHsgcm9sZSB9IGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlL3JvbGUuanNcIjtcclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoe1xyXG4gIG9uRXJyb3I6IChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgIFxyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIlNlcnZlciBlcnJvcjogXCIgKyBlcnIuc3RhY2spO1xyXG4gIH0sXHJcbiAgb25Ob01hdGNoOiAocmVxLCByZXMpID0+IHtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5lbmQoXCJOb3QgRm91bmQhXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuLy9FWElTVEVEXHJcblxyXG5hc3luYyBmdW5jdGlvbiBleGlzdFNsaWRlKHJlcSwgcmVzLCBuZXh0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2xpZGUuZmluZE9uZSh7XHJcbiAgICAgIHdoZXJlOiB7IGlkOiByZXEucXVlcnlbXCJzbHVnXCJdWzBdIH0sXHJcbiAgICB9KTtcclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICByZXMubG9jYWxzID0gcmVzcG9uc2U7XHJcbiAgICAgIHJldHVybiBuZXh0KCk7XHJcbiAgICB9XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuZW5kKFwiTm90IEZvdW5kIVwiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoXCJTZXJ2ZXIgZXJyb3I6IFwiICsgZXJyLnN0YWNrKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy9bR0VUXTovaWRcclxuaGFuZGxlci5nZXQoXCIvYXBpL3NsaWRlLzppZFwiLCBleGlzdFNsaWRlLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICB0cnkge1xyXG4gICAgcmVzLmpzb24oeyBkYXRhOiByZXMubG9jYWxzIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIlNlcnZlciBlcnJvcjogXCIgKyBlcnIuc3RhY2spO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL1tERUxFVEVdOmlkXHJcbmhhbmRsZXIuZGVsZXRlKFwiL2FwaS9zbGlkZS86aWRcIiwgcm9sZSwgZXhpc3RTbGlkZSwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIHJlcy5sb2NhbHMuZGVzdHJveSgpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmVuZChcIlN1Y2Nlc3NmdWxseSB1cGRhdGVkXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIlNlcnZlciBlcnJvcjogXCIgKyBlcnIuc3RhY2spO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL1tHRVRzXVxyXG5oYW5kbGVyLmdldChcIi9hcGkvc2xpZGVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgU2xpZGUuZmluZEFsbCh7fSk7XHJcbiAgICByZXMuanNvbih7IGRhdGE6IHJlc3BvbnNlIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmVuZChcIlNlcnZlciBlcnJvcjogXCIgKyBlcnIuc3RhY2spO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL1tQT1NUXVxyXG5oYW5kbGVyLnBvc3QoXCIvYXBpL3NsaWRlXCIsIHJvbGUsIHVwbG9hZC5zaW5nbGUoXCJpbWFnZVwiKSwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIC8vY29udmVydCBpbWFnZVxyXG5cclxuICAgIHNoYXJwKHJlcS5maWxlLnBhdGgpXHJcbiAgICAgIC5yZXNpemUoNjIzLCA0ODUpXHJcbiAgICAgIC50b0ZpbGUoXHJcbiAgICAgICAgcGF0aC5yZXNvbHZlKHJlcS5maWxlLmRlc3RpbmF0aW9uLCBcInJlc2l6ZV9cIiArIHJlcS5maWxlLmZpbGVuYW1lKSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICBlcnIgPyBjb25zb2xlLmxvZyhlcnIpIDogY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFNsaWRlLmNyZWF0ZSh7XHJcbiAgICAgIGltYWdlOiBcInJlc2l6ZV9cIiArIHJlcS5maWxlLmZpbGVuYW1lLFxyXG4gICAgfSk7XHJcbiAgICBmcy5yZW1vdmVTeW5jKHJlcS5maWxlLnBhdGgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5lbmQoXCJTdWNjZXNzZnVsbHkgY3JlYXRlZFwiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5lbmQoXCJTZXJ2ZXIgZXJyb3I6IFwiICsgZXJyLnN0YWNrKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiBmYWxzZSwgLy8gRGlzYWxsb3cgYm9keSBwYXJzaW5nLCBjb25zdW1lIGFzIHN0cmVhbVxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJuYyIsInBhdGgiLCJzaGFycCIsImZzIiwidXBsb2FkIiwiU2xpZGUiLCJDb29raWVzIiwicm9sZSIsImhhbmRsZXIiLCJvbkVycm9yIiwiZXJyIiwicmVxIiwicmVzIiwibmV4dCIsInN0YXR1cyIsImVuZCIsInN0YWNrIiwib25Ob01hdGNoIiwiZXhpc3RTbGlkZSIsInJlc3BvbnNlIiwiZmluZE9uZSIsIndoZXJlIiwiaWQiLCJxdWVyeSIsImxvY2FscyIsImdldCIsImpzb24iLCJkYXRhIiwiZGVsZXRlIiwiZGVzdHJveSIsImZpbmRBbGwiLCJwb3N0Iiwic2luZ2xlIiwiZmlsZSIsInJlc2l6ZSIsInRvRmlsZSIsInJlc29sdmUiLCJkZXN0aW5hdGlvbiIsImZpbGVuYW1lIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZSIsImltYWdlIiwicmVtb3ZlU3luYyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/slide/[[...slug]].js\n");

/***/ }),

/***/ "(api)/./utils/randomId.js":
/*!***************************!*\
  !*** ./utils/randomId.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomId)\n/* harmony export */ });\nfunction randomId(length) {\n    var id = \"\";\n    var string = \"abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    var len = string.length;\n    for(var i = 0; i < length; i++){\n        id += string.charAt(Math.floor(Math.random() * len));\n    }\n    return id;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9yYW5kb21JZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsUUFBUSxDQUFDQyxNQUFNLEVBQUU7SUFDdkMsSUFBSUMsRUFBRSxHQUFHLEVBQUU7SUFDWCxJQUFJQyxNQUFNLEdBQ1IsZ0VBQWdFO0lBQ2xFLElBQUlDLEdBQUcsR0FBR0QsTUFBTSxDQUFDRixNQUFNO0lBQ3ZCLElBQUssSUFBSUksQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixNQUFNLEVBQUVJLENBQUMsRUFBRSxDQUFFO1FBQy9CSCxFQUFFLElBQUlDLE1BQU0sQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR0wsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsT0FBT0YsRUFBRSxDQUFDO0FBQ1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3V0aWxzL3JhbmRvbUlkLmpzPzZkMjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tSWQobGVuZ3RoKSB7XHJcbiAgdmFyIGlkID0gXCJcIjtcclxuICB2YXIgc3RyaW5nID1cclxuICAgIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aDtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZCArPSBzdHJpbmcuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbikpO1xyXG4gIH1cclxuICByZXR1cm4gaWQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJhbmRvbUlkIiwibGVuZ3RoIiwiaWQiLCJzdHJpbmciLCJsZW4iLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/randomId.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/slide/[[...slug]].js"));
module.exports = __webpack_exports__;

})();