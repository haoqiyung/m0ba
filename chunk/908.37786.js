"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[908],{9908:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ SaveLoad)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7042);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(285);\n/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1637);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4916);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5306);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2222);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8862);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4747);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7327);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7941);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1299);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9070);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8674);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2165);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1038);\n/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(7601);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(5666);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar SaveLoad = /*#__PURE__*/function (_ui$view$SaveLoadUI) {\n  _inherits(SaveLoad, _ui$view$SaveLoadUI);\n\n  var _super = _createSuper(SaveLoad);\n\n  function SaveLoad() {\n    var _this;\n\n    _classCallCheck(this, SaveLoad);\n\n    _this = _super.call(this);\n\n    _this.btnClose.on(Laya.Event.CLICK, _assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _this.close();\n\n            case 2:\n              $ui.switchView(UI.pages.MAIN);\n\n            case 3:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _this.btnRead.on(Laya.Event.CLICK, _assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      var result;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return $$copy(_this.input.text = _this.data);\n\n            case 2:\n              result = _context2.sent;\n              $$event(\'message\', [result ? \'UI_CopySuccess\' : \'UI_CopyFailed\']);\n\n            case 4:\n            case "end":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    })));\n\n    _this.btnWrite.on(Laya.Event.CLICK, _assertThisInitialized(_this), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n      var text;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return $$read();\n\n            case 2:\n              text = _context3.sent;\n\n              if (text == false) {\n                _this.data = [_this.input.text, \'UI_PasteFailedDecodeSuccess\', \'UI_PasteFailedDecodeFailed\'];\n              } else {\n                _this.input.text = text;\n                _this.data = [text, \'UI_PasteSuccessDecodeSuccess\', \'UI_PasteSuccessDecodeFailed\'];\n              }\n\n            case 4:\n            case "end":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    })));\n\n    _this.btnSave.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      var blob = new Blob([_this.data], {\n        type: \'application/json\'\n      });\n      var slice = blob.slice || blob.webkitSlice || blob.mozSlice;\n      blob = slice.call(blob, 0, blob.size, \'application/octet-stream\');\n      var a = document.createElementNS(\'http://www.w3.org/1999/xhtml\', \'a\');\n      a.href = URL.createObjectURL(blob);\n      a.download = "Remake_save_".concat(new Date().toISOString().replace(\':\', \'.\'), ".json");\n      document.body.appendChild(a);\n      a.click();\n      document.body.removeChild(a);\n      URL.revokeObjectURL(a.href);\n    });\n\n    _this.btnLoad.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      var file = document.createElement(\'input\');\n      file.setAttribute(\'type\', \'file\');\n      file.setAttribute(\'name\', \'file\');\n      file.setAttribute(\'accept\', \'application/json\');\n      file.setAttribute(\'style\', \'display: none;\');\n      document.body.appendChild(file);\n      file.click();\n\n      file.onchange = function (e) {\n        var file = e.target.files[0];\n        if (!file) return;\n        var reader = new FileReader();\n\n        reader.onload = function () {\n          return _this.data = [reader.result];\n        };\n\n        reader.readAsText(file);\n        document.body.removeChild(file);\n      };\n    });\n\n    _this.input.on(Laya.Event.MOUSE_DOWN, _assertThisInitialized(_this), function () {\n      _this.input.setSelection(0, _this.input.text.length);\n    });\n\n    _this.btnBackup.on(Laya.Event.CLICK, _assertThisInitialized(_this), function () {\n      var board = document.createElement("div");\n      document.body.appendChild(board);\n      board.style = "\\n                position: fixed;\\n                top: 0;\\n                left: 0;\\n                right: 0;\\n                bottom: 0;\\n                opacity: 0.95";\n      var bg = document.createElement("div");\n      bg.style = "\\n                position: absolute;\\n                top: 0;\\n                left: 0;\\n                right: 0;\\n                bottom: 0;\\n                background: #fff;\\n                opacity: 0.95";\n      document.body.appendChild(board);\n      board.appendChild(bg);\n      var textarea = document.createElement("textarea");\n      textarea.style = "position: absolute; width: ".concat(window.innerWidth, "px; height: ").concat(window.innerHeight, "px;");\n      textarea.value = JSON.stringify(JSON.parse(_this.data), null, 4);\n      board.appendChild(textarea);\n      var close = document.createElement("div");\n      close.style = "\\n                position: absolute;\\n                top: 0;\\n                right: 0;\\n                width: 100px;\\n                height: 100px;\\n                background: red;\\n                font-size:100px;\\n                padding: 0;\\n                line-height: 100px;\\n                color: white;\\n                opacity: 0.7";\n      close.innerHTML = \'×\';\n      board.appendChild(close);\n\n      close.onclick = function () {\n        return board.remove();\n      };\n\n      var load = document.createElement("div");\n      load.style = "\\n                position: absolute;\\n                bottom: 0;\\n                right: 0;\\n                width: 100px;\\n                height: 100px;\\n                background: limegreen;\\n                font-size: 35px;\\n                padding: 0;\\n                line-height: 50px;\\n                color: white;\\n                opacity: 0.7";\n      load.innerHTML = \'LOAD<br>读取\';\n      board.appendChild(load);\n\n      load.onclick = function () {\n        return _this.data = [textarea.value, \'成功/success\', \'失败/failed\', true];\n      };\n    });\n\n    return _this;\n  }\n\n  _createClass(SaveLoad, [{\n    key: "init",\n    value: function init() {\n      this.input.text = this.data;\n    }\n  }, {\n    key: "data",\n    get: function get() {\n      var data = {};\n      Object.keys(localStorage).filter(function (v) {\n        return v.substr(0, 4) != \'goog\';\n      }).forEach(function (key) {\n        return data[key] = localStorage[key];\n      });\n      return JSON.stringify(data);\n    },\n    set: function set(_ref4) {\n      var _ref5 = _slicedToArray(_ref4, 4),\n          v = _ref5[0],\n          _ref5$ = _ref5[1],\n          success = _ref5$ === void 0 ? \'UI_LoadSuccess\' : _ref5$,\n          _ref5$2 = _ref5[2],\n          failed = _ref5$2 === void 0 ? \'UI_LoadFailed\' : _ref5$2,\n          altMsg = _ref5[3];\n\n      try {\n        var data = JSON.parse(v);\n\n        for (var key in data) {\n          localStorage.setItem(key, data[key]);\n        }\n\n        if (altMsg) alert(success);else $$event(\'message\', [success]);\n        $ui.theme = $ui.theme;\n        this.btnClose.event(Laya.Event.CLICK);\n      } catch (e) {\n        console.error(e);\n        if (altMsg) alert("".concat(failed, "\\n").concat(e));else $$event(\'message\', [failed]);\n      }\n    }\n  }], [{\n    key: "load",\n    value: function load() {\n      return ["images/atlas/images/radio.atlas"];\n    }\n  }]);\n\n  return SaveLoad;\n}(ui.view.SaveLoadUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkwOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQUNBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7O0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0JBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFZQTtBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBWUE7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUE3SEE7QUE4SEE7Ozs7QUFNQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBL0JBO0FBQ0E7QUFDQTs7OztBQW5JQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmVfcmVzdGFydC8uL3NyYy91aS90aGVtZXMvc2F2ZWxvYWQuanM/MDZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBTYXZlTG9hZCBleHRlbmRzIHVpLnZpZXcuU2F2ZUxvYWRVSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2Uub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICR1aS5zd2l0Y2hWaWV3KFVJLnBhZ2VzLk1BSU4pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idG5SZWFkLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCAkJGNvcHkodGhpcy5pbnB1dC50ZXh0ID0gdGhpcy5kYXRhKTtcbiAgICAgICAgICAgICQkZXZlbnQoJ21lc3NhZ2UnLCBbcmVzdWx0PyAnVUlfQ29weVN1Y2Nlc3MnOiAnVUlfQ29weUZhaWxlZCddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuV3JpdGUub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCAkJHJlYWQoKTtcbiAgICAgICAgICAgIGlmKHRleHQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgJ1VJX1Bhc3RlRmFpbGVkRGVjb2RlU3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICdVSV9QYXN0ZUZhaWxlZERlY29kZUZhaWxlZCdcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgJ1VJX1Bhc3RlU3VjY2Vzc0RlY29kZVN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAnVUlfUGFzdGVTdWNjZXNzRGVjb2RlRmFpbGVkJ1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnRuU2F2ZS5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKT0+e1xuICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbdGhpcy5kYXRhXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgICAgICBjb25zdCBzbGljZSA9IGJsb2Iuc2xpY2UgfHwgYmxvYi53ZWJraXRTbGljZSB8fCBibG9iLm1velNsaWNlO1xuICAgICAgICAgICAgYmxvYiA9IHNsaWNlLmNhbGwoYmxvYiwgMCwgYmxvYi5zaXplLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyk7XG4gICAgICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJywgJ2EnKTtcbiAgICAgICAgICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICBhLmRvd25sb2FkID0gYFJlbWFrZV9zYXZlXyR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpLnJlcGxhY2UoJzonLCcuJyl9Lmpzb25gO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgYS5jbGljaygpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYS5ocmVmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnRuTG9hZC5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCAoKT0+e1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmaWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG4gICAgICAgICAgICBmaWxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdmaWxlJyk7XG4gICAgICAgICAgICBmaWxlLnNldEF0dHJpYnV0ZSgnYWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIGZpbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmaWxlKTtcbiAgICAgICAgICAgIGZpbGUuY2xpY2soKTtcbiAgICAgICAgICAgIGZpbGUub25jaGFuZ2UgPSAoZSk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgaWYoIWZpbGUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB0aGlzLmRhdGEgPSBbcmVhZGVyLnJlc3VsdF07XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmaWxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlucHV0Lm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgKCk9PntcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uKDAsIHRoaXMuaW5wdXQudGV4dC5sZW5ndGgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYnRuQmFja3VwLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsICgpPT57XG4gICAgICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJvYXJkKTtcbiAgICAgICAgICAgIGJvYXJkLnN0eWxlID0gYFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45NWA7XG5cbiAgICAgICAgICAgIGNvbnN0IGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJnLnN0eWxlID0gYFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk1YDtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYmcpO1xuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICB0ZXh0YXJlYS5zdHlsZSA9IGBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAke3dpbmRvdy5pbm5lcldpZHRofXB4OyBoZWlnaHQ6ICR7d2luZG93LmlubmVySGVpZ2h0fXB4O2BcbiAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgSlNPTi5wYXJzZSh0aGlzLmRhdGEpLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNsb3NlLnN0eWxlID0gYFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxMDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC43YDtcbiAgICAgICAgICAgIGNsb3NlLmlubmVySFRNTCA9ICfDlyc7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgICAgICAgICBjbG9zZS5vbmNsaWNrID0gKCk9PmJvYXJkLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxvYWQuc3R5bGUgPSBgXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuN2A7XG4gICAgICAgICAgICBsb2FkLmlubmVySFRNTCA9ICdMT0FEPGJyPuivu+WPlic7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChsb2FkKTtcbiAgICAgICAgICAgIGxvYWQub25jbGljayA9ICgpPT50aGlzLmRhdGEgPSBbdGV4dGFyZWEudmFsdWUsICfmiJDlip8vc3VjY2VzcycsICflpLHotKUvZmFpbGVkJywgdHJ1ZV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICByZXR1cm4gW1wiaW1hZ2VzL2F0bGFzL2ltYWdlcy9yYWRpby5hdGxhc1wiXTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLmlucHV0LnRleHQgPSB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICAgICAgT2JqZWN0XG4gICAgICAgICAgICAua2V5cyhsb2NhbFN0b3JhZ2UpXG4gICAgICAgICAgICAuZmlsdGVyKHY9PnYuc3Vic3RyKDAsNCkhPSdnb29nJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGtleT0+ZGF0YVtrZXldID0gbG9jYWxTdG9yYWdlW2tleV0pO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuXG4gICAgc2V0IGRhdGEoW3YsIHN1Y2Nlc3MgPSAnVUlfTG9hZFN1Y2Nlc3MnLCBmYWlsZWQgPSAnVUlfTG9hZEZhaWxlZCcsIGFsdE1zZ10pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBpbiBkYXRhKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YVtrZXldKTtcbiAgICAgICAgICAgIGlmKGFsdE1zZykgYWxlcnQoc3VjY2Vzcyk7XG4gICAgICAgICAgICBlbHNlICQkZXZlbnQoJ21lc3NhZ2UnLCBbc3VjY2Vzc10pO1xuICAgICAgICAgICAgJHVpLnRoZW1lID0gJHVpLnRoZW1lO1xuICAgICAgICAgICAgdGhpcy5idG5DbG9zZS5ldmVudChMYXlhLkV2ZW50LkNMSUNLKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIGlmKGFsdE1zZykgYWxlcnQoYCR7ZmFpbGVkfVxcbiR7ZX1gKTtcbiAgICAgICAgICAgIGVsc2UgJCRldmVudCgnbWVzc2FnZScsIFtmYWlsZWRdKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9908\n')}}]);