"use strict";(self.webpackChunklife_restart=self.webpackChunklife_restart||[]).push([[891],{2891:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ CyberSummary)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7327);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1539);\n/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2707);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8309);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2526);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1817);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6992);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8783);\n/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4129);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3948);\n/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8304);\n/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(489);\n/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1299);\n/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2419);\n/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9070);\n/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2165);\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nvar _selectedTalent = /*#__PURE__*/new WeakMap();\n\nvar _enableExtend = /*#__PURE__*/new WeakMap();\n\nvar CyberSummary = /*#__PURE__*/function (_ui$view$CyberTheme$C) {\n  _inherits(CyberSummary, _ui$view$CyberTheme$C);\n\n  var _super = _createSuper(CyberSummary);\n\n  function CyberSummary() {\n    var _this;\n\n    _classCallCheck(this, CyberSummary);\n\n    _this = _super.call(this);\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _selectedTalent, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _enableExtend, {\n      writable: true,\n      value: void 0\n    });\n\n    _this.listSelectedTalents.renderHandler = Laya.Handler.create(_assertThisInitialized(_this), _this.renderTalent, null, false);\n\n    _this.btnAgain.on(Laya.Event.CLICK, _assertThisInitialized(_this), _this.onAgain);\n\n    return _this;\n  }\n\n  _createClass(CyberSummary, [{\n    key: "onAgain",\n    value: function onAgain() {\n      core.talentExtend(_classPrivateFieldGet(this, _selectedTalent));\n      core.times++;\n      $ui.switchView(UI.pages.MAIN);\n    }\n  }, {\n    key: "init",\n    value: function init(_ref) {\n      var talents = _ref.talents,\n          enableExtend = _ref.enableExtend;\n      var _core = core,\n          summary = _core.summary,\n          lastExtendTalent = _core.lastExtendTalent;\n\n      _classPrivateFieldSet(this, _enableExtend, enableExtend);\n\n      var gradeFilters = $ui.common.filter;\n      var gradeColors = $ui.common.grade;\n      var age = summary[core.PropertyTypes.HAGE];\n      this.labAge.text = \'\' + age.value;\n      this.labAgeJudge.text = age.judge;\n      this.labAgeJudge.color = gradeColors[age.grade];\n      var sum = summary[core.PropertyTypes.SUM];\n      this.labTotal.text = \'\' + sum.value;\n      this.labTotalJudge.text = sum.judge;\n      this.labTotalJudge.color = gradeColors[sum.grade];\n      var chr = summary[core.PropertyTypes.HCHR];\n      this.labCharm.text = \'\' + chr.value;\n      this.prgCharm.value = chr.progress;\n      this.labCharmJudge.text = chr.judge;\n      this.labCharmJudge.color = gradeColors[chr.grade];\n      this.boxCharmGrade.colorFilter = gradeFilters[chr.grade];\n      var int = summary[core.PropertyTypes.HINT];\n      this.labIntelligence.text = \'\' + int.value;\n      this.prgIntelligence.value = int.progress;\n      this.labIntelligenceJudge.text = int.judge;\n      this.labIntelligenceJudge.color = gradeColors[int.grade];\n      this.boxIntelligenceGrade.colorFilter = gradeFilters[int.grade];\n      var str = summary[core.PropertyTypes.HSTR];\n      this.labStrength.text = \'\' + str.value;\n      this.prgStrength.value = str.progress;\n      this.labStrengthJudge.text = str.judge;\n      this.labStrengthJudge.color = gradeColors[str.grade];\n      this.boxStrengthGrade.colorFilter = gradeFilters[str.grade];\n      var mny = summary[core.PropertyTypes.HMNY];\n      this.labMoney.text = \'\' + mny.value;\n      this.prgMoney.value = mny.progress;\n      this.labMoneyJudge.text = mny.judge;\n      this.labMoneyJudge.color = gradeColors[mny.grade];\n      this.boxMoneyGrade.colorFilter = gradeFilters[mny.grade];\n      var spr = summary[core.PropertyTypes.HSPR];\n      this.labSpirit.text = \'\' + spr.value;\n      this.prgSpirit.value = spr.progress;\n      this.labSpiritJudge.text = spr.judge;\n      this.labSpiritJudge.color = gradeColors[spr.grade];\n      this.boxSpiritGrade.colorFilter = gradeFilters[spr.grade];\n      talents.sort(function (_ref2, _ref3) {\n        var a = _ref2.id,\n            ag = _ref2.grade;\n        var b = _ref3.id,\n            bg = _ref3.grade;\n        if (a == lastExtendTalent) return -1;\n        if (b == lastExtendTalent) return 1;\n        return bg - ag;\n      });\n\n      if (_classPrivateFieldGet(this, _enableExtend)) {\n        _classPrivateFieldSet(this, _selectedTalent, talents[0].id);\n      } else {\n        _classPrivateFieldSet(this, _selectedTalent, lastExtendTalent);\n      }\n\n      this.listSelectedTalents.array = talents;\n    }\n  }, {\n    key: "renderTalent",\n    value: function renderTalent(box) {\n      var dataSource = box.dataSource;\n      var labTitle = box.getChildByName("labTitle");\n      var grade1 = box.getChildByName("grade1");\n      var grade2 = box.getChildByName("grade2");\n      var grade3 = box.getChildByName("grade3");\n      var labDescription = box.getChildByName("labDescription");\n      var selected = box.getChildByName("selected");\n      var unselected = box.getChildByName("unselected");\n      labTitle.text = dataSource.name;\n      labDescription.text = dataSource.description;\n\n      switch (dataSource.grade) {\n        case 1:\n          grade1.visible = true;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n\n        case 2:\n          grade1.visible = false;\n          grade2.visible = true;\n          grade3.visible = false;\n          break;\n\n        case 3:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = true;\n          break;\n\n        default:\n          grade1.visible = false;\n          grade2.visible = false;\n          grade3.visible = false;\n          break;\n      }\n\n      selected.visible = dataSource.id == _classPrivateFieldGet(this, _selectedTalent);\n      unselected.visible = !selected.visible;\n      box.off(Laya.Event.CLICK, this, this.onSelectTalent);\n      box.on(Laya.Event.CLICK, this, this.onSelectTalent, [dataSource.id]);\n    }\n  }, {\n    key: "onSelectTalent",\n    value: function onSelectTalent(talentId) {\n      if (!_classPrivateFieldGet(this, _enableExtend)) {\n        return $$event(\'message\', [\'M_DisableExtendTalent\']);\n      }\n\n      if (talentId == _classPrivateFieldGet(this, _selectedTalent)) {\n        _classPrivateFieldSet(this, _selectedTalent, null);\n      } else {\n        _classPrivateFieldSet(this, _selectedTalent, talentId);\n      }\n\n      this.listSelectedTalents.refresh();\n    }\n  }]);\n\n  return CyberSummary;\n}(ui.view.CyberTheme.CyberSummaryUI);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjg5MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7O0FBQUE7O0FBQ0E7O0FBREE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7O0FBQ0E7O0FBSEE7QUFJQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBOztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUF0SUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWZlX3Jlc3RhcnQvLi9zcmMvdWkvdGhlbWVzL2N5YmVyL3N1bW1hcnkuanM/NGQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDeWJlclN1bW1hcnkgZXh0ZW5kcyB1aS52aWV3LkN5YmVyVGhlbWUuQ3liZXJTdW1tYXJ5VUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmxpc3RTZWxlY3RlZFRhbGVudHMucmVuZGVySGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5yZW5kZXJUYWxlbnQsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5idG5BZ2Fpbi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uQWdhaW4pO1xuICAgIH1cblxuICAgICNzZWxlY3RlZFRhbGVudDtcbiAgICAjZW5hYmxlRXh0ZW5kO1xuXG4gICAgb25BZ2FpbigpIHtcbiAgICAgICAgY29yZS50YWxlbnRFeHRlbmQodGhpcy4jc2VsZWN0ZWRUYWxlbnQpO1xuICAgICAgICBjb3JlLnRpbWVzICsrO1xuICAgICAgICAkdWkuc3dpdGNoVmlldyhVSS5wYWdlcy5NQUlOKTtcbiAgICB9XG5cbiAgICBpbml0KHt0YWxlbnRzLCBlbmFibGVFeHRlbmR9KSB7XG4gICAgICAgIGNvbnN0IHtzdW1tYXJ5LCBsYXN0RXh0ZW5kVGFsZW50fSA9IGNvcmU7XG4gICAgICAgIHRoaXMuI2VuYWJsZUV4dGVuZCA9IGVuYWJsZUV4dGVuZDtcblxuICAgICAgICBjb25zdCBncmFkZUZpbHRlcnMgPSAkdWkuY29tbW9uLmZpbHRlcjtcbiAgICAgICAgY29uc3QgZ3JhZGVDb2xvcnMgPSAkdWkuY29tbW9uLmdyYWRlO1xuXG4gICAgICAgIGNvbnN0IGFnZSA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLkhBR0VdO1xuICAgICAgICB0aGlzLmxhYkFnZS50ZXh0ID0gJycrYWdlLnZhbHVlO1xuICAgICAgICB0aGlzLmxhYkFnZUp1ZGdlLnRleHQgPSBhZ2UuanVkZ2U7XG4gICAgICAgIHRoaXMubGFiQWdlSnVkZ2UuY29sb3IgPSBncmFkZUNvbG9yc1thZ2UuZ3JhZGVdO1xuXG4gICAgICAgIGNvbnN0IHN1bSA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLlNVTV07XG4gICAgICAgIHRoaXMubGFiVG90YWwudGV4dCA9ICcnK3N1bS52YWx1ZTtcbiAgICAgICAgdGhpcy5sYWJUb3RhbEp1ZGdlLnRleHQgPSBzdW0uanVkZ2U7XG4gICAgICAgIHRoaXMubGFiVG90YWxKdWRnZS5jb2xvciA9IGdyYWRlQ29sb3JzW3N1bS5ncmFkZV07XG5cbiAgICAgICAgY29uc3QgY2hyID0gc3VtbWFyeVtjb3JlLlByb3BlcnR5VHlwZXMuSENIUl07XG4gICAgICAgIHRoaXMubGFiQ2hhcm0udGV4dCA9ICcnK2Noci52YWx1ZTtcbiAgICAgICAgdGhpcy5wcmdDaGFybS52YWx1ZSA9IGNoci5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5sYWJDaGFybUp1ZGdlLnRleHQgPSBjaHIuanVkZ2U7XG4gICAgICAgIHRoaXMubGFiQ2hhcm1KdWRnZS5jb2xvciA9IGdyYWRlQ29sb3JzW2Noci5ncmFkZV07XG4gICAgICAgIHRoaXMuYm94Q2hhcm1HcmFkZS5jb2xvckZpbHRlciA9IGdyYWRlRmlsdGVyc1tjaHIuZ3JhZGVdO1xuXG4gICAgICAgIGNvbnN0IGludCA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLkhJTlRdO1xuICAgICAgICB0aGlzLmxhYkludGVsbGlnZW5jZS50ZXh0ID0gJycraW50LnZhbHVlO1xuICAgICAgICB0aGlzLnByZ0ludGVsbGlnZW5jZS52YWx1ZSA9IGludC5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5sYWJJbnRlbGxpZ2VuY2VKdWRnZS50ZXh0ID0gaW50Lmp1ZGdlO1xuICAgICAgICB0aGlzLmxhYkludGVsbGlnZW5jZUp1ZGdlLmNvbG9yID0gZ3JhZGVDb2xvcnNbaW50LmdyYWRlXTtcbiAgICAgICAgdGhpcy5ib3hJbnRlbGxpZ2VuY2VHcmFkZS5jb2xvckZpbHRlciA9IGdyYWRlRmlsdGVyc1tpbnQuZ3JhZGVdO1xuXG4gICAgICAgIGNvbnN0IHN0ciA9IHN1bW1hcnlbY29yZS5Qcm9wZXJ0eVR5cGVzLkhTVFJdO1xuICAgICAgICB0aGlzLmxhYlN0cmVuZ3RoLnRleHQgPSAnJytzdHIudmFsdWU7XG4gICAgICAgIHRoaXMucHJnU3RyZW5ndGgudmFsdWUgPSBzdHIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMubGFiU3RyZW5ndGhKdWRnZS50ZXh0ID0gc3RyLmp1ZGdlO1xuICAgICAgICB0aGlzLmxhYlN0cmVuZ3RoSnVkZ2UuY29sb3IgPSBncmFkZUNvbG9yc1tzdHIuZ3JhZGVdO1xuICAgICAgICB0aGlzLmJveFN0cmVuZ3RoR3JhZGUuY29sb3JGaWx0ZXIgPSBncmFkZUZpbHRlcnNbc3RyLmdyYWRlXTtcblxuICAgICAgICBjb25zdCBtbnkgPSBzdW1tYXJ5W2NvcmUuUHJvcGVydHlUeXBlcy5ITU5ZXTtcbiAgICAgICAgdGhpcy5sYWJNb25leS50ZXh0ID0gJycrbW55LnZhbHVlO1xuICAgICAgICB0aGlzLnByZ01vbmV5LnZhbHVlID0gbW55LnByb2dyZXNzO1xuICAgICAgICB0aGlzLmxhYk1vbmV5SnVkZ2UudGV4dCA9IG1ueS5qdWRnZTtcbiAgICAgICAgdGhpcy5sYWJNb25leUp1ZGdlLmNvbG9yID0gZ3JhZGVDb2xvcnNbbW55LmdyYWRlXTtcbiAgICAgICAgdGhpcy5ib3hNb25leUdyYWRlLmNvbG9yRmlsdGVyID0gZ3JhZGVGaWx0ZXJzW21ueS5ncmFkZV07XG5cbiAgICAgICAgY29uc3Qgc3ByID0gc3VtbWFyeVtjb3JlLlByb3BlcnR5VHlwZXMuSFNQUl07XG4gICAgICAgIHRoaXMubGFiU3Bpcml0LnRleHQgPSAnJytzcHIudmFsdWU7XG4gICAgICAgIHRoaXMucHJnU3Bpcml0LnZhbHVlID0gc3ByLnByb2dyZXNzO1xuICAgICAgICB0aGlzLmxhYlNwaXJpdEp1ZGdlLnRleHQgPSBzcHIuanVkZ2U7XG4gICAgICAgIHRoaXMubGFiU3Bpcml0SnVkZ2UuY29sb3IgPSBncmFkZUNvbG9yc1tzcHIuZ3JhZGVdO1xuICAgICAgICB0aGlzLmJveFNwaXJpdEdyYWRlLmNvbG9yRmlsdGVyID0gZ3JhZGVGaWx0ZXJzW3Nwci5ncmFkZV07XG5cbiAgICAgICAgdGFsZW50cy5zb3J0KCh7aWQ6YSwgZ3JhZGU6YWd9LCB7aWQ6YiwgZ3JhZGU6Ymd9LCk9PntcbiAgICAgICAgICAgIGlmKGEgPT0gbGFzdEV4dGVuZFRhbGVudCkgcmV0dXJuIC0xO1xuICAgICAgICAgICAgaWYoYiA9PSBsYXN0RXh0ZW5kVGFsZW50KSByZXR1cm4gMTtcbiAgICAgICAgICAgIHJldHVybiBiZyAtIGFnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy4jZW5hYmxlRXh0ZW5kKSB7XG4gICAgICAgICAgICB0aGlzLiNzZWxlY3RlZFRhbGVudCA9IHRhbGVudHNbMF0uaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNzZWxlY3RlZFRhbGVudCA9IGxhc3RFeHRlbmRUYWxlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLmFycmF5ID0gdGFsZW50cztcbiAgICB9XG5cbiAgICByZW5kZXJUYWxlbnQoYm94KSB7XG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBib3guZGF0YVNvdXJjZTtcblxuICAgICAgICBjb25zdCBsYWJUaXRsZSA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxhYlRpdGxlXCIpO1xuICAgICAgICBjb25zdCBncmFkZTEgPSBib3guZ2V0Q2hpbGRCeU5hbWUoXCJncmFkZTFcIik7XG4gICAgICAgIGNvbnN0IGdyYWRlMiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImdyYWRlMlwiKTtcbiAgICAgICAgY29uc3QgZ3JhZGUzID0gYm94LmdldENoaWxkQnlOYW1lKFwiZ3JhZGUzXCIpO1xuICAgICAgICBjb25zdCBsYWJEZXNjcmlwdGlvbiA9IGJveC5nZXRDaGlsZEJ5TmFtZShcImxhYkRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGJveC5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBjb25zdCB1bnNlbGVjdGVkID0gYm94LmdldENoaWxkQnlOYW1lKFwidW5zZWxlY3RlZFwiKTtcblxuICAgICAgICBsYWJUaXRsZS50ZXh0ID0gZGF0YVNvdXJjZS5uYW1lO1xuICAgICAgICBsYWJEZXNjcmlwdGlvbi50ZXh0ID0gZGF0YVNvdXJjZS5kZXNjcmlwdGlvbjtcbiAgICAgICAgc3dpdGNoIChkYXRhU291cmNlLmdyYWRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZ3JhZGUxLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3JhZGUzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBncmFkZTEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGdyYWRlMi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBncmFkZTMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3JhZGUyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBncmFkZTMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGdyYWRlMS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3JhZGUyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBncmFkZTMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWQudmlzaWJsZSA9IGRhdGFTb3VyY2UuaWQgPT0gdGhpcy4jc2VsZWN0ZWRUYWxlbnQ7XG4gICAgICAgIHVuc2VsZWN0ZWQudmlzaWJsZSA9ICFzZWxlY3RlZC52aXNpYmxlO1xuICAgICAgICBib3gub2ZmKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25TZWxlY3RUYWxlbnQpO1xuICAgICAgICBib3gub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblNlbGVjdFRhbGVudCwgW2RhdGFTb3VyY2UuaWRdKTtcbiAgICB9XG5cbiAgICBvblNlbGVjdFRhbGVudCh0YWxlbnRJZCkge1xuICAgICAgICBpZighdGhpcy4jZW5hYmxlRXh0ZW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gJCRldmVudCgnbWVzc2FnZScsIFsnTV9EaXNhYmxlRXh0ZW5kVGFsZW50J10pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRhbGVudElkID09IHRoaXMuI3NlbGVjdGVkVGFsZW50KSB7XG4gICAgICAgICAgICB0aGlzLiNzZWxlY3RlZFRhbGVudCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiNzZWxlY3RlZFRhbGVudCA9IHRhbGVudElkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5saXN0U2VsZWN0ZWRUYWxlbnRzLnJlZnJlc2goKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2891\n')}}]);