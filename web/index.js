
(function(modules) { 
   // The module cache
   var installedModules = {};
   // The require function
   function __webpack_require__(moduleId) {
       // Check if module is in cache
       if(installedModules[moduleId])
           return installedModules[moduleId].exports;
       // Create a new module (and put it into the cache)
       var module = installedModules[moduleId] = {
           exports: {},
           id: moduleId,
           loaded: false
       };
       // Execute the module function
       modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
       // Flag the module as loaded
       module.loaded = true;
       // Return the exports of the module
       return module.exports;
   }
   // expose the modules object (__webpack_modules__)
   __webpack_require__.m = modules;
   // expose the module cache
   __webpack_require__.c = installedModules;
   // __webpack_public_path__
   __webpack_require__.p = "/";
   // Load entry module and return exports
   
   return __webpack_require__(5);
})([
/***** module 0 start *****/
/***** src/pages/landing.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"container__flex\">\n    <div class=\"flex--item__vertical-center padbox--default\">\n      <img class=\"landing--banner\" mode=\"aspectFit\" src=\"icons/fido_logo_black.png\"/>\n      <div class=\"flex--parent__horizontal padbox--default\">\n        <button class=\"flex--item__half btn--default__medium\" @click=\"navToDogs($event)\">{{t.view_dogs}}</button>\n        <button class=\"flex--item__half btn--default__medium\" @click=\"navToCats($event)\">{{t.view_cats}}</button>\n      </div>\n      <div class=\"padbox--default\" v-if=\"(!isRegistered || !isRescuer)\">\n        <button class=\"btn--default\" @click=\"navToRescueRegistration($event)\">{{t.cta_rescuer}}</button>\n      </div>\n    </div>\n    <img class=\"icon--default landing--profile\" @click=\"handleProfileBtn($event)\" mode=\"aspectFit\" src=\"icons/profile.svg\"/>\n    <languagetoggle></languagetoggle>\n  </div>\n  <modal  v-bind:isopen.sync=\"registrationModalOpen\" v-bind:title.sync=\"modalTitle\" v-bind:subtitle.sync=\"modalSubtitle\"  v-on:masktap=\"toggleModal\">\n    <div class=\"landing--modal-btns\">\n      <button class=\"btn--default__medium landing--register-btn\" @click=\"navToNormalRegistration($event)\">{{t.cta_adopter}}</button>\n      <button class=\"btn--default__medium landing--register-btn\" @click=\"navToRescueRegistration($event)\">{{t.cta_rescuer}}</button>\n    </div>\n    <button class=\"btn--blank landing--login\" @click=\"navToLogin($event)\">{{t.login}}</button>\n  </modal>\n  <div v-if=\"(isRegistered)\">\n    <sideslider  v-bind:isopen.sync=\"sideSliderOpen\"  v-on:tapsheet=\"toggleSlider\">\n      <div class=\"container__flex landing--sideslider\">\n        <button class=\"btn--default__small\">something</button>\n        <button class=\"btn--default__small\">something</button>\n        <button class=\"btn--default__small\"></button>\n        <div v-if=\"(isRescuer)\">\n          <button class=\"btn--default__small\">rescuers only</button>\n          <button class=\"btn--default__small\">rescuers only</button>\n        </div>\n      </div>\n    </sideslider>\n  </div>\n"},/***** module 0 end *****/


/***** module 1 start *****/
/***** src/pages/rescuer-registration.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"container padbox--default\">\n    <div class=\"registration--title\">成为rescuer</div>\n    <div class=\"registration--subtitle\">Are you a compassionate person? Do you come close to tears at the thought of a poor dog being neglected, abused, abandoned or even eaten? Do you collect stray dogs and/or cats and have more of them than you can handle? If so, become a rescuer and find a new home for your little bundles of love.\n    </div>\n    <formparent>\n      <button class=\"btn--default__dark\" @click=\"getWeChat($event)\" :disabled=\"(wechatDisabled)\">\n        <img class=\"icon--inline\" mode=\"aspectFit\" src=\"icons/wechat_white.svg\"/>\n        使用微信登录\n      </button>\n      <div v-if=\"(authData)\">\n        <div class=\"form--group\">\n          <div class=\"form--group__title\">基本信息</div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">名字</div>\n            <div class=\"form-item--input\">{{authData.nickName}}</div>\n          </div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">地方</div>\n            <div class=\"form-item--input\">{{authData.province}}, {{authData.city}}</div>\n          </div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">微信👌</div>\n            <input type=\"text\" placeholder=\"请输入你的微信号\" class=\"form-item--input\" @blur=\"handleWx($event)\" maxlength=\"70\" confirm-type=\"next\" :value=\"(wxUsername || '')\"/>\n          </div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">年龄🍫</div>\n            <input type=\"number\" placeholder=\"输入你的年龄请\" class=\"form-item--input\" @blur=\"handleAge($event)\" maxlength=\"3\" confirm-type=\"next\" :value=\"(age || '')\"/>\n          </div>\n        </div>\n        <div class=\"form--group\">\n          <div class=\"form--group__title\">自我介绍</div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">介绍一下自己，说一说你来这里的目标是什么，你对你的rescue dog 和 rescue cat 有多么多么的爱，等等</div>\n            <textarea class=\"form-item--textinput\" @blur=\"handlePersonal($event)\" confirm-type=\"next\" maxlength=\"200\" :value=\"(personalNote)\"></textarea>\n          </div>\n        </div>\n        <div class=\"form--group\">\n          <div class=\"form--group__title\">实名认证</div>\n          <div class=\"form-item--label\">For Your Safety</div>\n          <div class=\"form-item--default\">\n            <radiolist  v-on:toggle=\"toggleIdType\"  v-bind:choices.sync=\"idChoices\" v-bind:currentchoice.sync=\"idType\"></radiolist>\n          </div>\n          <div v-if=\"(chooseChineseId)\">\n            <div class=\"form-item--default\">\n              <div class=\"form-item--label\">\n                身份证📇\n              </div>\n              <input type=\"idcard\" placeholder=\"身份证\" class=\"form-item--input\" @blur=\"handleId($event)\" confirm-type=\"next\"/>\n            </div>\n          </div>\n            <div  wx:else=\"wx:else\">\n              <div class=\"form-item--default\">\n                <div class=\"form-item--label__fullwidth\">\n                  <coolpicker  v-on:change=\"handleCountryChange\"  v-bind:collection.sync=\"countryChoices\" v-bind:selection.sync=\"country\" v-bind:label.sync=\"countryText\"></coolpicker>\n                </div>\n              </div>\n              <div class=\"form-item--default\">\n                <div class=\"form-item--label\">\n                  姓名📇\n                </div>\n                <input type=\"text\" placeholder=\"请输入你的全法律上的姓名\" class=\"form-item--input\" @blur=\"handleFullName($event)\" maxlength=\"50\" confirm-type=\"next\" :value=\"(fullName || '')\"/>\n              </div>\n              <div class=\"form-item--default\">\n                <div class=\"form-item--label\">\n                  护照🛂\n                </div>\n                <input type=\"number\" placeholder=\"请输入护照号\" class=\"form-item--input\" @blur=\"handleId($event)\" maxlength=\"50\" confirm-type=\"next\" :value=\"(idNumber || '')\"/>\n              </div>\n          </div>\n        </div>\n        <button class=\"btn--default\" @click=\"handleSubmit($event)\">保存</button>\n      </div>\n    </formparent>\n  </div>\n  <redirectmodal></redirectmodal>\n  <errormodal></errormodal>\n  <fidoloader></fidoloader>\n"},/***** module 1 end *****/


/***** module 2 start *****/
/***** src/pages/login.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"container padbox--default\">\n    <div class=\"login--title\">登录</div>\n    <div class=\"login--subtitle\">fido欢迎nin回来👏</div>\n    <formparent>\n      <div class=\"\">stuff here</div>\n    </formparent>\n  </div>\n  <div v-if=\"(isRegistered)\">\n    <redirectmodal  v-bind:message.once=\"message\"></redirectmodal>\n  </div>\n"},/***** module 2 end *****/


/***** module 3 start *****/
/***** src/pages/registration.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"container padbox--default\">\n    <div class=\"registration--title\">加入我们</div>\n    <div class=\"registration--subtitle\">     欢迎你注册fido，在这里找的你想领养的狗或者猫。不要再寂寞下去，实现你的成为家长的好梦想\n    </div>\n    <formparent>\n\n      <button class=\"btn--default__dark\" @click=\"getWeChat($event)\" :disabled=\"(wechatDisabled)\">\n        <img class=\"icon--inline\" mode=\"aspectFit\" src=\"icons/wechat_white.svg\"/>\n        使用微信登录\n      </button>\n      <div v-if=\"(authData)\">\n        <div class=\"form--group\">\n          <div class=\"form--group__title\">基本信息</div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">名字</div>\n            <div class=\"form-item--input\">{{authData.nickName}}</div>\n          </div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">地方</div>\n            <div class=\"form-item--input\">{{authData.province}}, {{authData.city}}</div>\n          </div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">微信👌</div>\n            <input type=\"text\" placeholder=\"请输入你的微信号\" class=\"form-item--input\" @blur=\"handleWx($event)\" maxlength=\"70\" confirm-type=\"next\"/>\n          </div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">年龄🍫</div>\n            <input type=\"number\" placeholder=\"输入你的年龄请\" class=\"form-item--input\" @blur=\"handleAge($event)\" maxlength=\"3\" confirm-type=\"next\"/>\n          </div>\n        </div>\n        <div class=\"form--group\">\n          <div class=\"form--group__title\">自我介绍</div>\n          <div class=\"form-item--default\">\n            <div class=\"form-item--label\">你需要给救狗人士提供你的微信号，这样当你遇到喜欢的狗的时候救狗人士可以更方便的联系你。写个自我介绍让救狗人士认识一下你</div>\n            <textarea class=\"form-item--textinput\" @focus=\"handleFocus($event)\" @blur=\"handlePersonal($event)\" confirm-type=\"send\" @confirm=\"handleSubmit($event)\" maxlength=\"200\"></textarea>\n          </div>\n        </div>\n        <button class=\"btn--default\" @click=\"handleSubmit($event)\">保存</button>\n      </div>\n    </formparent>\n  </div>\n  <redirectmodal></redirectmodal>\n  <errormodal></errormodal>\n  <fidoloader></fidoloader>\n"},/***** module 3 end *****/


/***** module 4 start *****/
/***** src/pages/edit-profile.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"container\">\n    hey\n  </div>\n"},/***** module 4 end *****/


/***** module 5 start *****/
/***** src/app.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _locales = __wepy_require(7);

var _locales2 = _interopRequireDefault(_locales);

var _weappI18n = __wepy_require(8);

var _weappI18n2 = _interopRequireDefault(_weappI18n);

__wepy_require(9);

var _usermodel = __wepy_require(10);

var _usermodel2 = _interopRequireDefault(_usermodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/landing', 'pages/rescuer-registration', 'pages/login', 'pages/registration', 'pages/edit-profile'],
      window: {
        backgroundTextStyle: 'dark',
        navigationBarBackgroundColor: '#FFFFFF',
        navigationBarTitleText: 'fido',
        navigationBarTextStyle: 'black'
      }
    };
    _this.globalData = {
      user: {},
      isWeb: false,
      lang: 'zh_CN'
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'registerLocales',
    value: function registerLocales() {
      _weappI18n2.default.registerLocale(_locales2.default);
      var lang = wx.getStorageSync('lang');
      if (lang) {
        this.globalData.lang = lang;
      } else {
        wx.setStorageSync('lang', 'zh_CN');
      }
      _weappI18n2.default.setLocale(this.globalData.lang);
      _wepy2.default.T = _weappI18n2.default;
    }
  }, {
    key: 'getSystemLang',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2, language;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _wepy2.default.getSystemInfo();

              case 3:
                _ref2 = _context.sent;
                language = _ref2.language;

                if (!(language !== 'zh_CN')) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', 'en');

              case 9:
                return _context.abrupt('return', 'zh_CN');

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));

      function getSystemLang() {
        return _ref.apply(this, arguments);
      }

      return getSystemLang;
    }()
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      if (_wepy2.default.env === 'web') {
        this.globalData.isWeb = true;
      }
      this.globalData.user = new _usermodel2.default();
      this.registerLocales();
    }
  }]);

  return _default;
}(_wepy2.default.app);

exports.default = _default;
__wepy_require(6).default.$createApp(_default, {"routes":{"pages/landing":11,"pages/rescuer-registration":16,"pages/login":25,"pages/registration":26,"pages/edit-profile":27},"style":[57,58,59,60,61,62,63,64,65,66,67,68,69],"components":{},"apis":{}});

},/***** module 5 end *****/


/***** module 6 start *****/
/***** node_modules/wepy-web/lib/wepy.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _app = __wepy_require(37);

var _app2 = _interopRequireDefault(_app);

var _page = __wepy_require(38);

var _page2 = _interopRequireDefault(_page);

var _component = __wepy_require(39);

var _component2 = _interopRequireDefault(_component);

var _event = __wepy_require(40);

var _event2 = _interopRequireDefault(_event);

var _base = __wepy_require(41);

var _base2 = _interopRequireDefault(_base);

var _util = __wepy_require(42);

var _util2 = _interopRequireDefault(_util);

var _mixin = __wepy_require(43);

var _mixin2 = _interopRequireDefault(_mixin);

var _wx = __wepy_require(44);

var _wx2 = _interopRequireDefault(_wx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    env: 'web',
    event: _event2.default,
    app: _app2.default,
    component: _component2.default,
    page: _page2.default,
    mixin: _mixin2.default,

    $createApp: _base2.default.$createApp,
    $createPage: _base2.default.$createPage,

    $isEmpty: _util2.default.$isEmpty,
    $isEqual: _util2.default.$isEqual,
    $isDeepEqual: _util2.default.$isDeepEqual,
    $has: _util2.default.$has,
    $extend: _util2.default.$extend,
    $isPlainObject: _util2.default.$isPlainObject,
    $copy: _util2.default.$copy
};
},/***** module 6 end *****/


/***** module 7 start *****/
/***** src/utils/locales.js *****/
function(module, exports, __wepy_require) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */

exports.default = {
  "en": {
    "landing": {
      "view_dogs": "view dogs",
      "view_cats": "view cats",
      "cta_rescuer": "I'm a rescuer",
      "cta_adopter": "I want to adopt",
      "login": "Login",
      "modal_title": "U need to register first😁",
      "modal_subtitle": "You can sign up to be an adopter or rescuer"
    }
  },
  "zh_CN": {
    "landing": {
      "view_dogs": "看狗狗",
      "view_cats": "看猫猫",
      "cta_rescuer": "我是救狗救猫的人",
      "cta_adopter": "我想领养",
      "login": "登录",
      "modal_title": "你还没有注册😁",
      "modal_subtitle": "你可以成为adopter还是rescuer"
    }
  }
};
},/***** module 7 end *****/


/***** module 8 start *****/
/***** src/utils/weapp-i18n.js *****/
function(module, exports, __wepy_require) {"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var T = {};
T.locale = null;
T.locales = {};

T.registerLocale = function (locales) {
    T.locales = locales;
};

T.setLocale = function (code) {
    T.locale = code;
};

T._ = function (line, data) {
    var locale = T.locale;
    var locales = T.locales;
    if (locale && locales[locale] && locales[locale][line]) {
        line = locales[locale][line];
    }

    return line;
};

exports.default = T;
},/***** module 8 end *****/


/***** module 9 start *****/
/***** node_modules/wepy-async-function/index.js *****/
function(module, exports, __wepy_require) {var g = __wepy_require(45);

// IOS 10.0.1 may cause IOS crash.
g.Promise = __wepy_require(46);
g.regeneratorRuntime = __wepy_require(47);


},/***** module 9 end *****/


/***** module 10 start *****/
/***** src/models/usermodel.js *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _avWeappMin = __wepy_require(48);

var _avWeappMin2 = _interopRequireDefault(_avWeappMin);

var _secret_keys = __wepy_require(49);

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _lodash = __wepy_require(24);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModel = function () {
  function UserModel() {
    _classCallCheck(this, UserModel);

    _avWeappMin2.default.init({
      appId: _secret_keys.appId,
      appKey: _secret_keys.appKey
    });
    this.data = {};
    this.currentUser();
  }

  _createClass(UserModel, [{
    key: 'currentUser',
    value: function currentUser() {
      var current = _avWeappMin2.default.User.current();
      if (current) {
        console.log(current);
        this.data = current.attributes; // should switch this to current.toJSON()
      }
      return current;
    }
  }, {
    key: 'authorize',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var authData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getSetting();

              case 2:
                authData = _context.sent;

                if (authData.authSetting['scope.userInfo']) {
                  _context.next = 13;
                  break;
                }

                _context.prev = 4;
                _context.next = 7;
                return _wepy2.default.authorize({ scope: 'scope.userInfo' });

              case 7:
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](4);

                console.error(_context.t0);
                return _context.abrupt('return', _context.t0);

              case 13:
                _context.prev = 13;
                _context.next = 16;
                return this.logIn();

              case 16:
                return _context.abrupt('return', this.data);

              case 19:
                _context.prev = 19;
                _context.t1 = _context['catch'](13);

                console.error(_context.t1);
                return _context.abrupt('return', _context.t1);

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 9], [13, 19]]);
      }));

      function authorize() {
        return _ref.apply(this, arguments);
      }

      return authorize;
    }()
  }, {
    key: 'fetchUpdate',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var current;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _avWeappMin2.default.User.current().fetch();

              case 2:
                current = _context2.sent;

                console.log(current);
                this.data = current.toJSON();
                return _context2.abrupt('return', this.data);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchUpdate() {
        return _ref2.apply(this, arguments);
      }

      return fetchUpdate;
    }()
  }, {
    key: 'updateProfileInfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
        var updatedUser;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _avWeappMin2.default.User.current().set(params).save();

              case 3:
                updatedUser = _context3.sent;

                this.data = updatedUser.toJSON();
                return _context3.abrupt('return', updatedUser);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3['catch'](0);

                console.error(_context3.t0);
                return _context3.abrupt('return', _context3.t0);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 8]]);
      }));

      function updateProfileInfo(_x) {
        return _ref3.apply(this, arguments);
      }

      return updateProfileInfo;
    }()
  }, {
    key: 'logIn',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var loginPromise, wxPromise, _ref5, _ref6, loginInfo, userInfo, updatedUser;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                loginPromise = _avWeappMin2.default.User.loginWithWeapp();
                wxPromise = _wepy2.default.getUserInfo();
                _context4.next = 5;
                return Promise.all([loginPromise, wxPromise]);

              case 5:
                _ref5 = _context4.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                loginInfo = _ref6[0];
                userInfo = _ref6[1].userInfo;
                _context4.next = 11;
                return _avWeappMin2.default.User.current().set(userInfo).save();

              case 11:
                updatedUser = _context4.sent;

                this.data = updatedUser.toJSON();
                _context4.next = 19;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4['catch'](0);

                console.error(_context4.t0);
                return _context4.abrupt('return', _context4.t0);

              case 19:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 15]]);
      }));

      function logIn() {
        return _ref4.apply(this, arguments);
      }

      return logIn;
    }()
  }, {
    key: 'requestLocation',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var authData;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _wepy2.default.getSetting();

              case 2:
                authData = _context5.sent;

                if (authData.authSetting['scope.userLocation']) {
                  _context5.next = 13;
                  break;
                }

                _context5.prev = 4;
                _context5.next = 7;
                return _wepy2.default.authorize({ scope: 'scope.userLocation' });

              case 7:
                _context5.next = 13;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5['catch'](4);

                console.error(_context5.t0);
                return _context5.abrupt('return', _context5.t0);

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 9]]);
      }));

      function requestLocation() {
        return _ref7.apply(this, arguments);
      }

      return requestLocation;
    }()
  }, {
    key: 'register',
    value: function register() {
      console.log('hey');
    }
  }, {
    key: 'isRegistered',
    get: function get() {
      return !(0, _lodash2.default)(this.data);
    }
  }, {
    key: 'isRescuer',
    get: function get() {
      return !(0, _lodash2.default)(this.data) && this.data.rescueVerified;
    }
  }, {
    key: 'attributes',
    get: function get() {
      return (0, _lodash2.default)(this.data) ? null : this.data;
    }
  }, {
    key: 'language',
    get: function get() {
      return this.data.attributes.language || 'zh_CN';
    }
  }]);

  return UserModel;
}();

exports.default = UserModel;
},/***** module 10 end *****/


/***** module 11 start *****/
/***** src/pages/landing.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _modal = __wepy_require(12);

var _modal2 = _interopRequireDefault(_modal);

var _sideslider = __wepy_require(13);

var _sideslider2 = _interopRequireDefault(_sideslider);

var _languageToggle = __wepy_require(14);

var _languageToggle2 = _interopRequireDefault(_languageToggle);

var _localesmixin = __wepy_require(15);

var _localesmixin2 = _interopRequireDefault(_localesmixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '正在加载'
    }, _this.mixins = [_localesmixin2.default], _this.$repeat = {}, _this.$props = { "modal": { "xmlns:v-bind": "", "v-bind:isopen.sync": "registrationModalOpen", "v-bind:title.sync": "modalTitle", "v-bind:subtitle.sync": "modalSubtitle", "xmlns:v-on": "" }, "sideslider": { "xmlns:v-bind": "", "v-bind:isopen.sync": "sideSliderOpen", "xmlns:v-on": "" } }, _this.$events = { "modal": { "v-on:masktap": "toggleModal" }, "sideslider": { "v-on:tapsheet": "toggleSlider" } }, _this.components = {
      modal: _modal2.default,
      sideslider: _sideslider2.default,
      languagetoggle: _languageToggle2.default
    }, _this.data = {
      isRegistered: false,
      isRescuer: false,
      registrationModalOpen: false,
      sideSliderOpen: false,
      modalTitle: '',
      modalSubtitle: '',
      pageName: 'landing'
    }, _this.methods = {
      handleProfileBtn: function handleProfileBtn() {
        if (!this.isRegistered) {
          this.registrationModalOpen = !this.registrationModalOpen;
        } else {
          this.sideSliderOpen = !this.sideSliderOpen;
        }
      },
      navToDogs: function navToDogs() {
        console.log('dogs');
      },
      navToCats: function navToCats() {
        console.log('cats');
      },
      toggleModal: function toggleModal() {
        this.registrationModalOpen = !this.registrationModalOpen;
      },
      toggleSlider: function toggleSlider() {
        this.sideSliderOpen = !this.sideSliderOpen;
        this.$apply();
      },
      navToNormalRegistration: function navToNormalRegistration() {
        _wepy2.default.navigateTo({ url: 'registration' });
      },
      navToRescueRegistration: function navToRescueRegistration() {
        _wepy2.default.navigateTo({ url: 'rescuer-registration' });
      },
      navToLogin: function navToLogin() {
        _wepy2.default.navigateTo({
          url: 'login'
        });
      }
    }, _this.watch = {
      t: function t() {
        this.modalTitle = this.t.modal_title;
        this.modalSubtitle = this.t.modal_subtitle;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('page onload');
      _wepy2.default.setNavigationBarTitle({
        title: 'fido'
      });
      this.isRegistered = this.$parent.globalData.user.isRegistered;
      this.isRescuer = this.$parent.globalData.user.isRescuer;
      if (_wepy2.default.env === 'web') {
        this.modalTitle = this.data.t.modal_title;
        this.modalSubtitle = this.data.t.modal_subtitle;
        this.$apply();
      }
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      console.log('landing unload');
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      this.sidesliderOpen = false;
      this.registrationModalOpen = false;
    }
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;

exports.default.template=__wepy_require(0);
},/***** module 11 end *****/


/***** module 12 start *****/
/***** src/components/modal.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_wepy$component) {
  _inherits(Modal, _wepy$component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      title: {
        type: String,
        default: null
      },
      isopen: {
        type: Boolean
      },
      subtitle: {
        type: String,
        default: null
      },
      hasclose: {
        type: Boolean,
        default: true
      }
    }, _this.methods = {
      maskTap: function maskTap(e) {
        if (e.target.id === e.currentTarget.id) {
          this.$emit('masktap');
        }
      }
    }, _this.data = {}, _this.components = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Modal;
}(_wepy2.default.component);

exports.default = Modal;

exports.default.template=__wepy_require(28);
},/***** module 12 end *****/


/***** module 13 start *****/
/***** src/components/sideslider.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideSlider = function (_wepy$component) {
  _inherits(SideSlider, _wepy$component);

  function SideSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SideSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideSlider.__proto__ || Object.getPrototypeOf(SideSlider)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      isopen: {}
    }, _this.methods = {
      handleTapSheet: function handleTapSheet(e) {
        var isTarget = e.target.id === 'sheetmask';
        if (isTarget) {
          this.$emit('tapsheet', null);
        }
      },
      handleTapBtn: function handleTapBtn(e) {
        this.$emit('tapsheet', null);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return SideSlider;
}(_wepy2.default.component);

exports.default = SideSlider;

exports.default.template=__wepy_require(29);
},/***** module 13 end *****/


/***** module 14 start *****/
/***** src/components/language-toggle.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LanguageToggle = function (_wepy$component) {
  _inherits(LanguageToggle, _wepy$component);

  function LanguageToggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LanguageToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LanguageToggle.__proto__ || Object.getPrototypeOf(LanguageToggle)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.computed = {
      currentLanguage: function currentLanguage() {
        return _wepy2.default.T.locale;
      },
      langText: function langText() {
        return this.currentLanguage === 'zh_CN' ? 'En' : '中';
      }
    }, _this.watch = {}, _this.methods = {
      changeLanguage: function changeLanguage() {
        var targetLang = this.currentLanguage === 'zh_CN' ? 'en' : 'zh_CN';
        wx.setStorageSync('lang', targetLang);
        if (_wepy2.default.env !== 'web') {
          var pages = getCurrentPages()[0]; // eslint-disable-line
          var targetPage = pages ? pages.route.split('pages/')[1] : 'landing';
          this.$parent.$parent.registerLocales();
          _wepy2.default.reLaunch({ url: targetPage });
        } else {
          window.location.reload();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  /*
    Listen closely. This is browser and xiaochengxu compatible. It's dangerous.
    Also only ever use it as a first level component
  */

  return LanguageToggle;
}(_wepy2.default.component);

exports.default = LanguageToggle;

exports.default.template=__wepy_require(30);
},/***** module 14 end *****/


/***** module 15 start *****/
/***** src/mixins/localesmixin.js *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocalesMixin = function (_wepy$mixin) {
  _inherits(LocalesMixin, _wepy$mixin);

  function LocalesMixin() {
    _classCallCheck(this, LocalesMixin);

    var _this = _possibleConstructorReturn(this, (LocalesMixin.__proto__ || Object.getPrototypeOf(LocalesMixin)).call(this));

    _this.data = {
      t: {},
      currentPage: ''
    };
    _this.methods = {};

    console.log('locales constructor');
    var isWeb = _wepy2.default.env === 'web';
    if (isWeb) {
      _this.handleWebLocales();
    }
    return _this;
  }

  _createClass(LocalesMixin, [{
    key: 'setLocales',
    value: function setLocales() {
      var _ = _wepy2.default.T._;
      var pageLocales = _(this.currentPage);
      this.t = pageLocales;
      this.$apply();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log('mixin onload');
      var pages = getCurrentPages()[0]; // eslint-disable-line
      this.currentPage = pages ? pages.route.split('pages/')[1] : 'landing';
      console.log(this.currentPage);
      this.$apply();
      this.setLocales();
    }
  }, {
    key: 'handleWebLocales',
    value: function handleWebLocales() {
      console.log('handleWebLocales');
      this.currentPage = window.location.hash.split('#!/pages/')[1];
      var _ = _wepy2.default.T._;
      var pageLocales = _(this.currentPage);
      this.data.t = Object.assign({}, pageLocales);
    }
  }]);

  return LocalesMixin;
}(_wepy2.default.mixin);

exports.default = LocalesMixin;
},/***** module 15 end *****/


/***** module 16 start *****/
/***** src/pages/rescuer-registration.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _formParent = __wepy_require(17);

var _formParent2 = _interopRequireDefault(_formParent);

var _redirectModal = __wepy_require(18);

var _redirectModal2 = _interopRequireDefault(_redirectModal);

var _errorModal = __wepy_require(19);

var _errorModal2 = _interopRequireDefault(_errorModal);

var _coolPicker = __wepy_require(20);

var _coolPicker2 = _interopRequireDefault(_coolPicker);

var _radiolist = __wepy_require(21);

var _radiolist2 = _interopRequireDefault(_radiolist);

var _fidoLoader = __wepy_require(22);

var _fidoLoader2 = _interopRequireDefault(_fidoLoader);

var _countries = __wepy_require(23);

var _countries2 = _interopRequireDefault(_countries);

var _lodash = __wepy_require(24);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RescuerRegistration = function (_wepy$page) {
  _inherits(RescuerRegistration, _wepy$page);

  function RescuerRegistration() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RescuerRegistration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RescuerRegistration.__proto__ || Object.getPrototypeOf(RescuerRegistration)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      idChoices: [{
        name: '身份证',
        value: 'chinese_id'
      }, {
        name: '护照',
        value: 'passport'
      }],
      countryChoices: _countries2.default,
      countryText: '护照国家 🎏',
      authData: null,
      wxUsername: null,
      personalNote: null,
      age: null,
      idNumber: '',
      idType: 'chinese_id',
      country: 'China',
      fullName: ''
    }, _this.$repeat = {}, _this.$props = { "coolpicker": { "v-bind:collection.sync": "countryChoices", "v-bind:selection.sync": "country", "v-bind:label.sync": "countryText" }, "radiolist": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:choices.sync": "idChoices", "v-bind:currentchoice.sync": "idType" } }, _this.$events = { "coolpicker": { "v-on:change": "handleCountryChange" }, "radiolist": { "v-on:toggle": "toggleIdType" } }, _this.components = {
      formparent: _formParent2.default,
      redirectmodal: _redirectModal2.default,
      errormodal: _errorModal2.default,
      coolpicker: _coolPicker2.default,
      radiolist: _radiolist2.default,
      fidoloader: _fidoLoader2.default
    }, _this.computed = {
      wechatDisabled: function wechatDisabled() {
        return this.authData !== null;
      },
      chooseChineseId: function chooseChineseId() {
        return this.idType === 'chinese_id';
      },
      hasEmptyFields: function hasEmptyFields() {
        var _data = this.data,
            age = _data.age,
            wxUsername = _data.wxUsername,
            personalNote = _data.personalNote,
            idNumber = _data.idNumber,
            country = _data.country,
            fullName = _data.fullName;

        var fields = { age: age, wxUsername: wxUsername, personalNote: personalNote, idNumber: idNumber };
        if (this.idType === 'passport') {
          fields.country = country;
          fields.fullName = fullName;
        }
        var emptyFields = Object.keys(fields).filter(function (field) {
          var value = fields[field];
          if (value === '' || value === ' ' || value === null) {
            return field;
          }
        });
        return (0, _lodash2.default)(emptyFields) ? false : emptyFields;
      }
    }, _this.methods = {
      handleWx: function handleWx(_ref2) {
        var detail = _ref2.detail;

        this.wxUsername = detail.value;
        this.$apply();
      },
      handlePersonal: function handlePersonal(_ref3) {
        var detail = _ref3.detail;

        this.personalNote = detail.value;
        this.$apply();
      },
      handleAge: function handleAge(_ref4) {
        var detail = _ref4.detail;

        this.age = detail.value;
        this.$apply();
      },
      handleId: function handleId(_ref5) {
        var detail = _ref5.detail;

        this.idNumber = detail.value;
        this.$apply();
      },
      handleFullName: function handleFullName(_ref6) {
        var detail = _ref6.detail;

        this.fullName = detail.value;
        this.$apply();
      },
      toggleIdType: function toggleIdType(e) {
        if (this.idType === 'chinese_id') {
          this.idType = 'passport';
        } else {
          this.idType = 'chinese_id';
        }
        this.idNumber = '';
        this.$apply();
      },
      handleCountryChange: function handleCountryChange(_ref7) {
        var detail = _ref7.detail;

        this.country = _countries2.default[detail.value];
        this.$apply();
      },
      reloadPage: function reloadPage() {
        this.onLoad();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RescuerRegistration, [{
    key: 'onload',
    value: function onload() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      this.isRegistered = this.$parent.globalData.user.isRegistered;
      this.authData = this.$parent.globalData.user.attributes;
      if (this.authData) this.diffAuthData();
      if (this.$parent.globalData.user.isRescuer) {
        var params = {
          message: '你已经是rescuer了，你可以在个人中心编辑你的资料',
          link: 'edit-profile',
          linkname: '编辑'
        };
        this.$invoke('redirectmodal', 'toggleModal', params);
      }
    }
  }, {
    key: 'getWeChat',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$invoke('fidoloader', 'showLoading', '');
                user = this.$parent.globalData.user;
                _context.prev = 2;
                _context.next = 5;
                return user.authorize();

              case 5:
                this.authData = this.$parent.globalData.user.attributes;
                this.$apply();
                this.diffAuthData();
                this.$invoke('fidoloader', 'hideLoading', '');
                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                this.$invoke('fidoloader', 'hideLoading', '');
                // actually deal with the error maybe lol
                console.error(_context.t0);
                this.handleFetchError();

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function getWeChat() {
        return _ref8.apply(this, arguments);
      }

      return getWeChat;
    }()
  }, {
    key: 'handleFetchError',
    value: function handleFetchError() {
      var params = {
        header: '哎哟出错了😯',
        message: '刷新页面再试试一遍',
        refresh: true
      };
      this.$invoke('errormodal', 'showMessage', params);
    }
  }, {
    key: 'handleSubmit',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _data2, wxUsername, personalNote, age, idType, idNumber, fullName, country, params;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.hasEmptyFields) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', this.handleSubmitError());

              case 2:
                this.$invoke('fidoloader', 'showLoading', '');
                _context2.prev = 3;
                _data2 = this.data, wxUsername = _data2.wxUsername, personalNote = _data2.personalNote, age = _data2.age, idType = _data2.idType, idNumber = _data2.idNumber, fullName = _data2.fullName, country = _data2.country;
                _context2.next = 7;
                return this.$parent.globalData.user.updateProfileInfo({ wxUsername: wxUsername, personalNote: personalNote, age: age, idType: idType, idNumber: idNumber, fullName: fullName, country: country });

              case 7:
                params = { message: '恭喜你, 你已经成为fido的rescuer' };

                this.$invoke('fidoloader', 'hideLoading', '');
                this.$invoke('redirectmodal', 'toggleModal', params);
                this.$parent.globalData.user.fetchUpdate();
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](3);

                console.error(_context2.t0);
                this.handleFetchError();

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13]]);
      }));

      function handleSubmit() {
        return _ref9.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'handleSubmitError',
    value: function handleSubmitError() {
      var params = {
        header: '认证失败 🙇‍',
        message: '\u4F60\u8FD8\u6CA1\u6709\u586B\u5B8C\u4F60\u7684\u4FE1\u606F\uFF0C\u6211\u4EEC\u4E3A\u4E86\u4F60\u7684\u5B89\u5168\u52AA\u529B\uFF0C\u8BF7\u586B\u5B8C\u518D\u63D0\u4EA4\u8C22\u8C22\uD83D\uDE4F'
      };
      return this.$invoke('errormodal', 'showMessage', params);
    }
  }, {
    key: 'diffAuthData',
    value: function diffAuthData() {
      this.age = this.authData.age || '';
      this.personalNote = this.authData.personalNote || '';
      this.wxUsername = this.authData.wxUsername || '';
      this.fullName = this.authData.fullName || '';
      this.idNumber = this.authData.idNumber || '';
      this.country = this.authData.country || 'china';
      this.idType = this.authData.idType || 'chinese_id';
      this.$apply();
    }
  }]);

  return RescuerRegistration;
}(_wepy2.default.page);

exports.default = RescuerRegistration;

exports.default.template=__wepy_require(1);
},/***** module 16 end *****/


/***** module 17 start *****/
/***** src/components/form-parent.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormParent = function (_wepy$component) {
  _inherits(FormParent, _wepy$component);

  function FormParent() {
    _classCallCheck(this, FormParent);

    return _possibleConstructorReturn(this, (FormParent.__proto__ || Object.getPrototypeOf(FormParent)).apply(this, arguments));
  }

  return FormParent;
}(_wepy2.default.component);

exports.default = FormParent;

exports.default.template=__wepy_require(31);
},/***** module 17 end *****/


/***** module 18 start *****/
/***** src/components/redirect-modal.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _modal = __wepy_require(12);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RedirectModal = function (_wepy$component) {
  _inherits(RedirectModal, _wepy$component);

  function RedirectModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RedirectModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RedirectModal.__proto__ || Object.getPrototypeOf(RedirectModal)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      link: {
        type: String,
        default: 'landing'
      },
      linkname: {
        type: String,
        default: '回到首页'
      }
    }, _this.data = {
      isChildOpen: false,
      hasClose: false,
      message: ''
    }, _this.$repeat = {}, _this.$props = { "modal": { "xmlns:v-bind": "", "v-bind:isopen.sync": "isChildOpen", "v-bind:hasclose.sync": "hasClose" } }, _this.$events = {}, _this.components = {
      modal: _modal2.default
    }, _this.methods = {
      redirect: function redirect() {
        _wepy2.default.navigateTo({ url: this.link });
      },
      toggleModal: function toggleModal(_ref2) {
        var message = _ref2.message;

        this.message = message;
        this.isChildOpen = !this.isChildOpen;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RedirectModal;
}(_wepy2.default.component);

exports.default = RedirectModal;

exports.default.template=__wepy_require(32);
},/***** module 18 end *****/


/***** module 19 start *****/
/***** src/components/error-modal.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _modal = __wepy_require(12);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorModal = function (_wepy$component) {
  _inherits(ErrorModal, _wepy$component);

  function ErrorModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ErrorModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ErrorModal.__proto__ || Object.getPrototypeOf(ErrorModal)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "modal": { "xmlns:v-bind": "", "v-bind:isopen.sync": "errorModalOpen", "xmlns:v-on": "" } }, _this.$events = { "modal": { "v-on:masktap": "handleTap" } }, _this.components = {
      modal: _modal2.default
    }, _this.data = {
      errorModalOpen: false,
      header: null,
      message: null,
      refresh: false
    }, _this.methods = {
      showMessage: function showMessage(param) {
        this.errorModalOpen = true;
        this.header = param.header;
        this.message = param.message;
        this.refresh = param.refresh || false;
        this.$apply();
      },
      handleTap: function handleTap() {
        this.errorModalOpen = false;
        if (this.refresh) {
          this.$emit('modaltap');
          _wepy2.default.reLaunch();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ErrorModal;
}(_wepy2.default.component);

exports.default = ErrorModal;

exports.default.template=__wepy_require(33);
},/***** module 19 end *****/


/***** module 20 start *****/
/***** src/components/cool-picker.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoolPicker = function (_wepy$component) {
  _inherits(CoolPicker, _wepy$component);

  function CoolPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CoolPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CoolPicker.__proto__ || Object.getPrototypeOf(CoolPicker)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      collection: {
        type: Array
      },
      selection: {
        type: String
      },
      label: {
        type: String
      }
    }, _this.methods = {
      handleChange: function handleChange(param) {
        console.log(param);
        this.$emit('change', param);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return CoolPicker;
}(_wepy2.default.component);

exports.default = CoolPicker;

exports.default.template=__wepy_require(34);
},/***** module 20 end *****/


/***** module 21 start *****/
/***** src/components/radiolist.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioList = function (_wepy$component) {
  _inherits(RadioList, _wepy$component);

  function RadioList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RadioList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioList.__proto__ || Object.getPrototypeOf(RadioList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      choices: {
        type: Array
      },
      currentchoice: {
        type: String
      }
    }, _this.methods = {
      handleChange: function handleChange(_ref2) {
        var detail = _ref2.detail;

        this.$emit('toggle', detail);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return RadioList;
}(_wepy2.default.component);

exports.default = RadioList;

exports.default.template=__wepy_require(35);
},/***** module 21 end *****/


/***** module 22 start *****/
/***** src/components/fido-loader.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FidoLoader = function (_wepy$component) {
  _inherits(FidoLoader, _wepy$component);

  function FidoLoader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FidoLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FidoLoader.__proto__ || Object.getPrototypeOf(FidoLoader)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      visible: false,
      message: '小狗正在跑赶来。。。'
    }, _this.methods = {
      showLoading: function showLoading(message) {
        if (message && message !== '') {
          this.message = message;
        }
        this.visible = true;
        this.$apply();
      },
      hideLoading: function hideLoading() {
        this.visible = false;
        this.$apply();
      }
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FidoLoader, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return FidoLoader;
}(_wepy2.default.component);

exports.default = FidoLoader;

exports.default.template=__wepy_require(36);
},/***** module 22 end *****/


/***** module 23 start *****/
/***** src/utils/countries.js *****/
function(module, exports, __wepy_require) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */
var countries = [{ "name": "Afghanistan", "code": "AF" }, { "name": "land Islands", "code": "AX" }, { "name": "Albania", "code": "AL" }, { "name": "Algeria", "code": "DZ" }, { "name": "American Samoa", "code": "AS" }, { "name": "AndorrA", "code": "AD" }, { "name": "Angola", "code": "AO" }, { "name": "Anguilla", "code": "AI" }, { "name": "Antarctica", "code": "AQ" }, { "name": "Antigua and Barbuda", "code": "AG" }, { "name": "Argentina", "code": "AR" }, { "name": "Armenia", "code": "AM" }, { "name": "Aruba", "code": "AW" }, { "name": "Australia", "code": "AU" }, { "name": "Austria", "code": "AT" }, { "name": "Azerbaijan", "code": "AZ" }, { "name": "Bahamas", "code": "BS" }, { "name": "Bahrain", "code": "BH" }, { "name": "Bangladesh", "code": "BD" }, { "name": "Barbados", "code": "BB" }, { "name": "Belarus", "code": "BY" }, { "name": "Belgium", "code": "BE" }, { "name": "Belize", "code": "BZ" }, { "name": "Benin", "code": "BJ" }, { "name": "Bermuda", "code": "BM" }, { "name": "Bhutan", "code": "BT" }, { "name": "Bolivia", "code": "BO" }, { "name": "Bosnia and Herzegovina", "code": "BA" }, { "name": "Botswana", "code": "BW" }, { "name": "Bouvet Island", "code": "BV" }, { "name": "Brazil", "code": "BR" }, { "name": "British Indian Ocean Territory", "code": "IO" }, { "name": "Brunei Darussalam", "code": "BN" }, { "name": "Bulgaria", "code": "BG" }, { "name": "Burkina Faso", "code": "BF" }, { "name": "Burundi", "code": "BI" }, { "name": "Cambodia", "code": "KH" }, { "name": "Cameroon", "code": "CM" }, { "name": "Canada", "code": "CA" }, { "name": "Cape Verde", "code": "CV" }, { "name": "Cayman Islands", "code": "KY" }, { "name": "Central African Republic", "code": "CF" }, { "name": "Chad", "code": "TD" }, { "name": "Chile", "code": "CL" }, { "name": "China", "code": "CN" }, { "name": "Christmas Island", "code": "CX" }, { "name": "Cocos (Keeling) Islands", "code": "CC" }, { "name": "Colombia", "code": "CO" }, { "name": "Comoros", "code": "KM" }, { "name": "Congo", "code": "CG" }, { "name": "Congo, The Democratic Republic of the", "code": "CD" }, { "name": "Cook Islands", "code": "CK" }, { "name": "Costa Rica", "code": "CR" }, { "name": "Cote D\"Ivoire", "code": "CI" }, { "name": "Croatia", "code": "HR" }, { "name": "Cuba", "code": "CU" }, { "name": "Cyprus", "code": "CY" }, { "name": "Czech Republic", "code": "CZ" }, { "name": "Denmark", "code": "DK" }, { "name": "Djibouti", "code": "DJ" }, { "name": "Dominica", "code": "DM" }, { "name": "Dominican Republic", "code": "DO" }, { "name": "Ecuador", "code": "EC" }, { "name": "Egypt", "code": "EG" }, { "name": "El Salvador", "code": "SV" }, { "name": "Equatorial Guinea", "code": "GQ" }, { "name": "Eritrea", "code": "ER" }, { "name": "Estonia", "code": "EE" }, { "name": "Ethiopia", "code": "ET" }, { "name": "Falkland Islands (Malvinas)", "code": "FK" }, { "name": "Faroe Islands", "code": "FO" }, { "name": "Fiji", "code": "FJ" }, { "name": "Finland", "code": "FI" }, { "name": "France", "code": "FR" }, { "name": "French Guiana", "code": "GF" }, { "name": "French Polynesia", "code": "PF" }, { "name": "French Southern Territories", "code": "TF" }, { "name": "Gabon", "code": "GA" }, { "name": "Gambia", "code": "GM" }, { "name": "Georgia", "code": "GE" }, { "name": "Germany", "code": "DE" }, { "name": "Ghana", "code": "GH" }, { "name": "Gibraltar", "code": "GI" }, { "name": "Greece", "code": "GR" }, { "name": "Greenland", "code": "GL" }, { "name": "Grenada", "code": "GD" }, { "name": "Guadeloupe", "code": "GP" }, { "name": "Guam", "code": "GU" }, { "name": "Guatemala", "code": "GT" }, { "name": "Guernsey", "code": "GG" }, { "name": "Guinea", "code": "GN" }, { "name": "Guinea-Bissau", "code": "GW" }, { "name": "Guyana", "code": "GY" }, { "name": "Haiti", "code": "HT" }, { "name": "Heard Island and Mcdonald Islands", "code": "HM" }, { "name": "Holy See (Vatican City State)", "code": "VA" }, { "name": "Honduras", "code": "HN" }, { "name": "Hong Kong", "code": "HK" }, { "name": "Hungary", "code": "HU" }, { "name": "Iceland", "code": "IS" }, { "name": "India", "code": "IN" }, { "name": "Indonesia", "code": "ID" }, { "name": "Iran, Islamic Republic Of", "code": "IR" }, { "name": "Iraq", "code": "IQ" }, { "name": "Ireland", "code": "IE" }, { "name": "Isle of Man", "code": "IM" }, { "name": "Israel", "code": "IL" }, { "name": "Italy", "code": "IT" }, { "name": "Jamaica", "code": "JM" }, { "name": "Japan", "code": "JP" }, { "name": "Jersey", "code": "JE" }, { "name": "Jordan", "code": "JO" }, { "name": "Kazakhstan", "code": "KZ" }, { "name": "Kenya", "code": "KE" }, { "name": "Kiribati", "code": "KI" }, { "name": "Korea, Democratic People\"S Republic of", "code": "KP" }, { "name": "Korea, Republic of", "code": "KR" }, { "name": "Kuwait", "code": "KW" }, { "name": "Kyrgyzstan", "code": "KG" }, { "name": "Lao People\"S Democratic Republic", "code": "LA" }, { "name": "Latvia", "code": "LV" }, { "name": "Lebanon", "code": "LB" }, { "name": "Lesotho", "code": "LS" }, { "name": "Liberia", "code": "LR" }, { "name": "Libyan Arab Jamahiriya", "code": "LY" }, { "name": "Liechtenstein", "code": "LI" }, { "name": "Lithuania", "code": "LT" }, { "name": "Luxembourg", "code": "LU" }, { "name": "Macao", "code": "MO" }, { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" }, { "name": "Madagascar", "code": "MG" }, { "name": "Malawi", "code": "MW" }, { "name": "Malaysia", "code": "MY" }, { "name": "Maldives", "code": "MV" }, { "name": "Mali", "code": "ML" }, { "name": "Malta", "code": "MT" }, { "name": "Marshall Islands", "code": "MH" }, { "name": "Martinique", "code": "MQ" }, { "name": "Mauritania", "code": "MR" }, { "name": "Mauritius", "code": "MU" }, { "name": "Mayotte", "code": "YT" }, { "name": "Mexico", "code": "MX" }, { "name": "Micronesia, Federated States of", "code": "FM" }, { "name": "Moldova, Republic of", "code": "MD" }, { "name": "Monaco", "code": "MC" }, { "name": "Mongolia", "code": "MN" }, { "name": "Montenegro", "code": "ME" }, { "name": "Montserrat", "code": "MS" }, { "name": "Morocco", "code": "MA" }, { "name": "Mozambique", "code": "MZ" }, { "name": "Myanmar", "code": "MM" }, { "name": "Namibia", "code": "NA" }, { "name": "Nauru", "code": "NR" }, { "name": "Nepal", "code": "NP" }, { "name": "Netherlands", "code": "NL" }, { "name": "Netherlands Antilles", "code": "AN" }, { "name": "New Caledonia", "code": "NC" }, { "name": "New Zealand", "code": "NZ" }, { "name": "Nicaragua", "code": "NI" }, { "name": "Niger", "code": "NE" }, { "name": "Nigeria", "code": "NG" }, { "name": "Niue", "code": "NU" }, { "name": "Norfolk Island", "code": "NF" }, { "name": "Northern Mariana Islands", "code": "MP" }, { "name": "Norway", "code": "NO" }, { "name": "Oman", "code": "OM" }, { "name": "Pakistan", "code": "PK" }, { "name": "Palau", "code": "PW" }, { "name": "Palestinian Territory, Occupied", "code": "PS" }, { "name": "Panama", "code": "PA" }, { "name": "Papua New Guinea", "code": "PG" }, { "name": "Paraguay", "code": "PY" }, { "name": "Peru", "code": "PE" }, { "name": "Philippines", "code": "PH" }, { "name": "Pitcairn", "code": "PN" }, { "name": "Poland", "code": "PL" }, { "name": "Portugal", "code": "PT" }, { "name": "Puerto Rico", "code": "PR" }, { "name": "Qatar", "code": "QA" }, { "name": "Reunion", "code": "RE" }, { "name": "Romania", "code": "RO" }, { "name": "Russian Federation", "code": "RU" }, { "name": "RWANDA", "code": "RW" }, { "name": "Saint Helena", "code": "SH" }, { "name": "Saint Kitts and Nevis", "code": "KN" }, { "name": "Saint Lucia", "code": "LC" }, { "name": "Saint Pierre and Miquelon", "code": "PM" }, { "name": "Saint Vincent and the Grenadines", "code": "VC" }, { "name": "Samoa", "code": "WS" }, { "name": "San Marino", "code": "SM" }, { "name": "Sao Tome and Principe", "code": "ST" }, { "name": "Saudi Arabia", "code": "SA" }, { "name": "Senegal", "code": "SN" }, { "name": "Serbia", "code": "RS" }, { "name": "Seychelles", "code": "SC" }, { "name": "Sierra Leone", "code": "SL" }, { "name": "Singapore", "code": "SG" }, { "name": "Slovakia", "code": "SK" }, { "name": "Slovenia", "code": "SI" }, { "name": "Solomon Islands", "code": "SB" }, { "name": "Somalia", "code": "SO" }, { "name": "South Africa", "code": "ZA" }, { "name": "South Georgia and the South Sandwich Islands", "code": "GS" }, { "name": "Spain", "code": "ES" }, { "name": "Sri Lanka", "code": "LK" }, { "name": "Sudan", "code": "SD" }, { "name": "Suriname", "code": "SR" }, { "name": "Svalbard and Jan Mayen", "code": "SJ" }, { "name": "Swaziland", "code": "SZ" }, { "name": "Sweden", "code": "SE" }, { "name": "Switzerland", "code": "CH" }, { "name": "Syrian Arab Republic", "code": "SY" }, { "name": "Taiwan, Province of China", "code": "TW" }, { "name": "Tajikistan", "code": "TJ" }, { "name": "Tanzania, United Republic of", "code": "TZ" }, { "name": "Thailand", "code": "TH" }, { "name": "Timor-Leste", "code": "TL" }, { "name": "Togo", "code": "TG" }, { "name": "Tokelau", "code": "TK" }, { "name": "Tonga", "code": "TO" }, { "name": "Trinidad and Tobago", "code": "TT" }, { "name": "Tunisia", "code": "TN" }, { "name": "Turkey", "code": "TR" }, { "name": "Turkmenistan", "code": "TM" }, { "name": "Turks and Caicos Islands", "code": "TC" }, { "name": "Tuvalu", "code": "TV" }, { "name": "Uganda", "code": "UG" }, { "name": "Ukraine", "code": "UA" }, { "name": "United Arab Emirates", "code": "AE" }, { "name": "United Kingdom", "code": "GB" }, { "name": "United States", "code": "US" }, { "name": "United States Minor Outlying Islands", "code": "UM" }, { "name": "Uruguay", "code": "UY" }, { "name": "Uzbekistan", "code": "UZ" }, { "name": "Vanuatu", "code": "VU" }, { "name": "Venezuela", "code": "VE" }, { "name": "Viet Nam", "code": "VN" }, { "name": "Virgin Islands, British", "code": "VG" }, { "name": "Virgin Islands, U.S.", "code": "VI" }, { "name": "Wallis and Futuna", "code": "WF" }, { "name": "Western Sahara", "code": "EH" }, { "name": "Yemen", "code": "YE" }, { "name": "Zambia", "code": "ZM" }, { "name": "Zimbabwe", "code": "ZW" }];
var justNames = countries.map(function (country) {
  return country["name"];
});

exports.default = justNames;
},/***** module 23 end *****/


/***** module 24 start *****/
/***** node_modules/lodash.isempty/index.js *****/
function(module, exports, __wepy_require) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' ||
        typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;

},/***** module 24 end *****/


/***** module 25 start *****/
/***** src/pages/login.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _redirectModal = __wepy_require(18);

var _redirectModal2 = _interopRequireDefault(_redirectModal);

var _formParent = __wepy_require(17);

var _formParent2 = _interopRequireDefault(_formParent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录'
    }, _this.data = {
      message: '你已经登录了',
      isRegistered: false
    }, _this.$repeat = {}, _this.$props = { "redirectmodal": { "xmlns:v-bind": "", "v-bind:message.once": "message" } }, _this.$events = {}, _this.components = {
      formparent: _formParent2.default,
      redirectmodal: _redirectModal2.default
    }, _this.computed = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onShow',
    value: function onShow() {
      this.isRegistered = this.$parent.globalData.user.isRegistered;
    }
  }]);

  return Login;
}(_wepy2.default.page);

exports.default = Login;

exports.default.template=__wepy_require(2);
},/***** module 25 end *****/


/***** module 26 start *****/
/***** src/pages/registration.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

var _formParent = __wepy_require(17);

var _formParent2 = _interopRequireDefault(_formParent);

var _redirectModal = __wepy_require(18);

var _redirectModal2 = _interopRequireDefault(_redirectModal);

var _errorModal = __wepy_require(19);

var _errorModal2 = _interopRequireDefault(_errorModal);

var _fidoLoader = __wepy_require(22);

var _fidoLoader2 = _interopRequireDefault(_fidoLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Registration = function (_wepy$page) {
  _inherits(Registration, _wepy$page);

  function Registration() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Registration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Registration.__proto__ || Object.getPrototypeOf(Registration)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '注册'
    }, _this.components = {
      formparent: _formParent2.default,
      redirectmodal: _redirectModal2.default,
      errormodal: _errorModal2.default,
      fidoloader: _fidoLoader2.default
    }, _this.data = {
      isRegistered: false,
      authData: null,
      wxUsername: {},
      personalNote: null,
      age: null
    }, _this.methods = {
      redirectHome: function redirectHome() {
        _wepy2.default.navigateTo({ url: 'landing' });
      },
      handleWx: function handleWx(_ref2) {
        var detail = _ref2.detail;

        this.wxUsername = detail.value;
        this.$apply();
      },
      handlePersonal: function handlePersonal(_ref3) {
        var detail = _ref3.detail;

        this.personalNote = detail.value;
        this.$apply();
      },
      handleAge: function handleAge(_ref4) {
        var detail = _ref4.detail;

        this.age = detail.value;
        this.$apply();
      }
    }, _this.computed = {
      fieldsValid: function fieldsValid() {
        if (!this.personalNote || !this.wxUsername || !this.age) {
          return false;
        }
        return true;
      },
      wechatDisabled: function wechatDisabled() {
        return this.authData !== null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Registration, [{
    key: 'onShow',
    value: function onShow() {
      this.isRegistered = this.$parent.globalData.user.isRegistered;
      if (this.isRegistered) {
        var params = { message: '你已经注册了' };
        this.$invoke('redirectmodal', 'toggleModal', params);
      }
    }
  }, {
    key: 'getWeChat',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = this.$parent.globalData.user;

                this.$invoke('fidoloader', 'showLoading', '');
                _context.prev = 2;
                _context.next = 5;
                return user.authorize();

              case 5:
                this.authData = this.$parent.globalData.user.currentUser();
                this.$apply();
                this.$invoke('fidoloader', 'hideLoading', '');
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](2);

                // actually deal with the error maybe lol
                console.error(_context.t0);
                this.$invoke('fidoloader', 'hideLoading', '');
                this.handleFetchError();

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function getWeChat() {
        return _ref5.apply(this, arguments);
      }

      return getWeChat;
    }()
  }, {
    key: 'handleSubmit',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _data, wxUsername, personalNote, age, params;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.fieldsValid) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt('return', this.handleSubmitError());

              case 2:
                _context2.prev = 2;

                this.$invoke('fidoloader', 'showLoading', '');
                _data = this.data, wxUsername = _data.wxUsername, personalNote = _data.personalNote, age = _data.age;
                _context2.next = 7;
                return this.$parent.globalData.user.updateProfileInfo({ wxUsername: wxUsername, personalNote: personalNote, age: age });

              case 7:
                params = { message: '恭喜你注册成功了' };

                this.$invoke('fidoloader', 'hideLoading', '');
                this.$invoke('redirectmodal', 'toggleModal', params);
                this.$parent.globalData.user.fetchUpdate();
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](2);

                // this error too my guy
                console.error(_context2.t0);
                this.handleFetchError();

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 13]]);
      }));

      function handleSubmit() {
        return _ref6.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: 'handleFetchError',
    value: function handleFetchError() {
      var params = {
        header: '哎哟出错了😯',
        message: '刷新页面再试试一遍',
        refresh: true
      };
      this.$invoke('errormodal', 'showMessage', params);
    }
  }, {
    key: 'handleSubmitError',
    value: function handleSubmitError() {
      var header = '认证失败 🙇‍';
      var message = '你得提供你的个人资料才有权利领养无家可归的小动物。';
      var params = {
        header: header,
        message: message
      };
      return this.$invoke('errormodal', 'showMessage', params);
    }
  }]);

  return Registration;
}(_wepy2.default.page);

exports.default = Registration;

exports.default.template=__wepy_require(3);
},/***** module 26 end *****/


/***** module 27 start *****/
/***** src/pages/edit-profile.wpy *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = __wepy_require(6);

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditProfile = function (_wepy$page) {
  _inherits(EditProfile, _wepy$page);

  function EditProfile() {
    _classCallCheck(this, EditProfile);

    return _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).apply(this, arguments));
  }

  return EditProfile;
}(_wepy2.default.page);

exports.default = EditProfile;

exports.default.template=__wepy_require(4);
},/***** module 27 end *****/


/***** module 28 start *****/
/***** src/components/modal.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"modal--blur\" :style=\"'visibility: ' + (isopen ? 'visible' : 'hidden') + ';'\">\n    <div class=\"container__flex modal--mask\" @click=\"maskTap($event)\" id=\"modalmask\">\n      <div class=\"modal--body\" :style=\"'transform: ' + (isopen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)') + ';'\">\n        <img class=\"modal--close\" @click=\"maskTap($event)\" src=\"icons/close.svg\" v-if=\"(hasclose)\"/>\n        <div class=\"modal--title\" v-if=\"(title)\">{{title}}</div>\n        <div class=\"modal--subtitle\" v-if=\"(subtitle)\">{{subtitle}}</div>\n        <div class=\"modal--slot-outer\">\n          <slot>\n          </slot>\n        </div>\n      </div>\n    </div>\n  </div>\n"},/***** module 28 end *****/


/***** module 29 start *****/
/***** src/components/sideslider.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"sideslider--outer\" @click=\"handleTapSheet($event)\" :style=\"'visibility: ' + (isopen ? 'visible' : 'hidden') + ';'\">\n    <div class=\"sideslider--mask\" id=\"sheetmask\"></div>\n    <div class=\"sideslider--sheet\" :style=\"'transform:' + (isopen ? 'translate3d(0%,0,0)' : 'translate3d(-100%, 0, 0)') + '; -webkit-transform:' + (isopen ? 'translate3d(0%,0,0)' : 'translate3d(-100%, 0, 0)') + ';'\">\n      <div class=\"sideslider--inner\">\n        <img class=\"icon--default\" @click=\"handleTapBtn($event)\" id=\"sideslider-close\" src=\"icons/close.svg\"/>\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n"},/***** module 29 end *****/


/***** module 30 start *****/
/***** src/components/language-toggle.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"lang--outer\">\n    <button class=\"lang--btn\" @click=\"changeLanguage($event)\">{{langText}}</button>\n  </div>\n"},/***** module 30 end *****/


/***** module 31 start *****/
/***** src/components/form-parent.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"form--outer\">\n    <slot></slot>\n  </div>\n  <div class=\"form--bottom-padding\"></div>\n"},/***** module 31 end *****/


/***** module 32 start *****/
/***** src/components/redirect-modal.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <modal  v-bind:isopen.sync=\"isChildOpen\" v-bind:hasclose.sync=\"hasClose\">\n    <div class=\"redirect--title\">\n      {{message}}\n    </div>\n    <button class=\"btn--default__small pull-right btn-redirect\" @click=\"redirect($event)\">{{linkname}}</button>\n  </modal>\n"},/***** module 32 end *****/


/***** module 33 start *****/
/***** src/components/error-modal.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <modal  v-bind:isopen.sync=\"errorModalOpen\"  v-on:masktap=\"handleTap\">\n    <div class=\"error--top\">\n      <img class=\"icon--inline\" src=\"icons/error.svg\"/>\n      <div class=\"error--title\">{{header}}</div>\n      <div class=\"error--body\">{{message}}</div>\n      <button class=\"btn--default__small pull-right\" @click=\"handleTap($event)\">ok</button>\n    </div>\n  </modal>\n"},/***** module 33 end *****/


/***** module 34 start *****/
/***** src/components/cool-picker.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <picker mode=\"selector\" @change=\"handleChange($event)\" :value=\"(country)\" :range=\"(collection)\">\n    <div class=\"picker-choice\">\n      {{label}}：{{selection}}\n    </div>\n  </picker>\n"},/***** module 34 end *****/


/***** module 35 start *****/
/***** src/components/radiolist.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <radio-group @change=\"handleChange($event)\">\n    <div key=\"index\" v-for=\"(index, item) in (choices)\">\n      <div class=\"radio--outer\">\n        <radio class=\"radio--default\" :value=\"(item.value)\" :checked=\"(currentchoice === item.value)\"></radio>\n        <div class=\"radio--label\">{{item.name}}</div>\n      </div>\n    </div>\n  </radio-group>\n"},/***** module 35 end *****/


/***** module 36 start *****/
/***** src/components/fido-loader.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n  <div class=\"loader-container container__flex\" :style=\"'visibility:' + (visible ? 'visible' : 'hidden') + ';'\">\n    <div class=\"loader-outer\">\n      <div class=\"loader-inner\">\n        <div class=\"cloud\"></div>\n      </div>\n      <div class=\"loader--moving-background\"></div>\n      <div class=\"loader-text\">\n        {{message}}\n      </div>\n    </div>\n  </div>\n"},/***** module 36 end *****/


/***** module 37 start *****/
/***** node_modules/wepy-web/lib/app.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _native = __wepy_require(50);

var _native2 = _interopRequireDefault(_native);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$addons = {};
        this.$interceptors = {};
        this.$pages = {};
    }

    _class.prototype.$init = function $init(wepy) {
        this.initAPI(wepy);
        this.$wxapp = getApp();
    };

    _class.prototype.use = function use(addon) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        if (typeof addon === 'string' && this[addon]) {
            this.$addons[addon] = 1;
            this[addon](args);
        } else {
            this.$addons[addon.name] = new addon(args);
        }
    };

    _class.prototype.intercept = function intercept(api, provider) {
        this.$interceptors[api] = provider;
    };

    _class.prototype.promisify = function promisify() {};

    _class.prototype.requestfix = function requestfix() {};

    _class.prototype.initAPI = function initAPI(wepy) {
        var self = this;
        var noPromiseMethods = {
            stopRecord: true,
            pauseVoice: true,
            stopVoice: true,
            pauseBackgroundAudio: true,
            stopBackgroundAudio: true,
            showNavigationBarLoading: true,
            hideNavigationBarLoading: true,
            createAnimation: true,
            createContext: true,
            createCanvasContext: true,
            hideKeyboard: true,
            stopPullDownRefresh: true
        };
        Object.keys(wx).forEach(function (key) {
            if (!noPromiseMethods[key] && key.substr(0, 2) !== 'on' && !/\w+Sync$/.test(key)) {
                Object.defineProperty(_native2.default, key, {
                    get: function get() {
                        return function (obj) {
                            obj = obj || {};
                            if (self.$interceptors[key] && self.$interceptors[key].config) {
                                var rst = self.$interceptors[key].config.call(self, obj);
                                if (rst === false) {
                                    if (self.$addons.promisify) {
                                        return Promise.reject('aborted by interceptor');
                                    } else {
                                        obj.fail && obj.fail('aborted by interceptor');
                                        return;
                                    }
                                }
                                obj = rst;
                            }
                            if (key === 'request') {
                                obj = typeof obj === 'string' ? { url: obj } : obj;
                            }
                            if (self.$addons.promisify) {
                                return new Promise(function (resolve, reject) {
                                    var bak = {};
                                    ['fail', 'success', 'complete'].forEach(function (k) {
                                        bak[k] = obj[k];
                                        obj[k] = function (res) {
                                            if (self.$interceptors[key] && self.$interceptors[key][k]) {
                                                res = self.$interceptors[key][k].call(self, res);
                                            }
                                            if (k === 'success') resolve(res);else if (k === 'fail') reject(res);
                                        };
                                    });
                                    wx[key](obj);
                                });
                            } else {
                                var bak = {};
                                ['fail', 'success', 'complete'].forEach(function (k) {
                                    bak[k] = obj[k];
                                    obj[k] = function (res) {
                                        if (self.$interceptors[key] && self.$interceptors[key][k]) {
                                            res = self.$interceptors[key][k].call(self, res);
                                        }
                                        bak[k] && bak[k].call(self, res);
                                    };
                                });
                                wx[key](obj);
                            }
                        };
                    }
                });
                wepy[key] = _native2.default[key];
            } else {
                Object.defineProperty(_native2.default, key, {
                    get: function get() {
                        return function () {
                            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                                args[_key2] = arguments[_key2];
                            }

                            return wx[key].apply(wx, args);
                        };
                    }
                });
                wepy[key] = _native2.default[key];
            }
        });
    };

    return _class;
}();

exports.default = _class;
},/***** module 37 end *****/


/***** module 38 start *****/
/***** node_modules/wepy-web/lib/page.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _native = __wepy_require(50);

var _native2 = _interopRequireDefault(_native);

var _component2 = __wepy_require(39);

var _component3 = _interopRequireDefault(_component2);

var _util = __wepy_require(42);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_component) {
    _inherits(_class, _component);

    function _class() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _component.call.apply(_component, [this].concat(args))), _this), _this.$isComponent = false, _this.$preloadData = {}, _this.$prefetchData = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _class.prototype.$init = function $init(wxpage, $parent) {

        this.$parent = $parent;
        this.$root = this;
        if (!$parent.$wxapp) {
            $parent.$wxapp = getApp();
        }
        this.$wxapp = $parent.$wxapp;
        _component.prototype.$init.call(this, wxpage, this);
    };

    _class.prototype.onLoad = function onLoad() {
        _component.prototype.onLoad.call(this);
    };

    _class.prototype.$preload = function $preload(key, data) {
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            var k = void 0;
            for (k in key) {
                this.$preload(k, key[k]);
            }
        } else {
            this.$preloadData[key] = data;
        }
    };

    _class.prototype.$route = function $route(type, url) {
        var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        if (typeof url === 'string') {
            var s = url + '?';
            if (params) {
                var k = void 0;
                for (k in params) {
                    s += k + '=' + params[k] + '&';
                }
            }
            s = s.substring(0, s.length - 1);
            url = { url: s };
        } else {
            params = _util2.default.$getParams(url.url);
        }
        var realPath = _util2.default.$resolvePath(this.$vm.$route.path, url.url.split('?')[0]);
        var goTo = this.$parent.$pages[realPath];
        if (goTo && goTo.onPrefetch) {
            var prevPage = this.$parent.__prevPage__;
            var preloadData = {};
            if (prevPage && Object.keys(prevPage.$preloadData).length > 0) {
                preloadData = prevPage.$preloadData;
            }
            goTo.$prefetchData = goTo.onPrefetch(params, { from: this, preload: preloadData });
        }
        return _native2.default[type](url);
    };

    _class.prototype.$redirect = function $redirect(url, params) {
        return this.$route('redirectTo', url, params);
    };

    _class.prototype.$navigate = function $navigate(url, params) {
        return this.$route('navigateTo', url, params);
    };

    _class.prototype.$switch = function $switch(url) {
        if (typeof url === 'string') url = { url: url };

        return _native2.default.switchTab(url);
    };

    _class.prototype.$back = function $back(delta) {
        var p = delta || {};
        if (typeof p === 'number') p = { delta: p };

        if (!p.delta) p.delta = 1;

        return _native2.default.navigateBack(p);
    };

    return _class;
}(_component3.default);

exports.default = _class;
},/***** module 38 end *****/


/***** module 39 start *****/
/***** node_modules/wepy-web/lib/component.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _event = __wepy_require(40);

var _event2 = _interopRequireDefault(_event);

var _util = __wepy_require(42);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Props = {
    check: function check(t, val) {
        switch (t) {
            case String:
                return typeof val === 'string';
            case Number:
                return typeof val === 'number';
            case Boolean:
                return typeof val === 'boolean';
            case Function:
                return typeof val === 'function';
            case Object:
                return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
            case Array:
                return toString.call(val) === '[object Array]';
            default:
                return val instanceof t;
        }
    },
    build: function build(props) {
        var rst = {};
        if (typeof props === 'string') {
            rst[props] = {};
        } else if (toString.call(props) === '[object Array]') {
            props.forEach(function (p) {
                rst[p] = {};
            });
        } else {
            Object.keys(props).forEach(function (p) {
                if (typeof props[p] === 'function') {
                    rst[p] = {
                        type: [props[p]]
                    };
                } else if (toString.call(props[p]) === '[object Array]') {
                    rst[p] = {
                        type: props[p]
                    };
                } else rst[p] = props[p];

                if (rst[p].type && toString.call(rst[p].type) !== '[object Array]') rst[p].type = [rst[p].type];
            });
        }
        return rst;
    },
    valid: function valid(props, key, val) {
        var _this = this;

        var valid = false;
        if (props[key]) {
            if (!props[key].type) {
                valid = true;
            } else {
                return props[key].type.some(function (t) {
                    return _this.check(t, val);
                });
            }
        }
        return valid;
    },
    getValue: function getValue(props, key, value) {
        var rst;
        if (value !== undefined && this.valid(props, key, value)) {
            rst = value;
        } else if (typeof props[key].default === 'function') {
            rst = props[key].default();
        } else rst = props[key].default;
        return props[key].coerce ? props[key].coerce(rst) : rst;
    }
};

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.$com = {};
        this.$mixins = [];
        this.$isComponent = true;
        this.$prefix = '';
        this.$mappingProps = {};
        this.data = {};
        this.methods = {};
    }

    _class.prototype.$init = function $init($wxpage, $root, $parent) {
        var _this2 = this;

        var self = this;

        this.$wxpage = $wxpage;
        if (this.$isComponent) {
            this.$root = $root || this.$root;
            this.$parent = $parent || this.$parent;
            this.$wxapp = this.$root.$parent.$wxapp;
            this.$app = this.$root.$app;
        }

        var coms = Object.getOwnPropertyNames(this.$com);
        if (coms.length) {
            coms.forEach(function (name) {
                _this2.$com[name].$init($wxpage, $root, _this2);
            });
        }

        return;
    };

    _class.prototype.initMixins = function initMixins() {
        var _this3 = this;

        if (this.mixins) {
            if (typeof this.mixins === 'function') {
                this.mixins = [this.mixins];
            }
        } else {
            this.mixins = [];
        }
        this.mixins.forEach(function (mix) {
            var inst = new mix();
            inst.init(_this3);
            _this3.$mixins.push(inst);
        });
    };

    _class.prototype.onLoad = function onLoad() {};

    _class.prototype.setData = function setData(k, v) {
        if (typeof k === 'string') {
            this.$vm[k] = v;
        }
        for (var t in k) {
            this.$vm[t] = k[t];
        }
    };

    _class.prototype.getWxPage = function getWxPage() {
        return this.$wxpage;
    };

    _class.prototype.getCurrentPages = function getCurrentPages() {
        return this.$wxpage.getCurrentPages();
    };

    _class.prototype.$getComponent = function $getComponent(com) {
        var _this4 = this;

        if (typeof com === 'string') {
            if (com.indexOf('/') === -1) {
                return this.$com[com];
            } else if (com === '/') {
                return this.$parent;
            } else {
                var path = com.split('/');
                path.forEach(function (s, i) {
                    if (i === 0) {
                        if (s === '') {
                            com = _this4.$root;
                        } else if (s === '.') {
                            com = _this4;
                        } else if (s === '..') {
                            com = _this4.$parent;
                        } else {
                            com = _this4.$getComponent(s);
                        }
                    } else if (s) {
                        com = com.$com[s];
                    }
                });
            }
        }
        return (typeof com === 'undefined' ? 'undefined' : _typeof(com)) !== 'object' ? null : com;
    };

    _class.prototype.$invoke = function $invoke(com, method) {
        com = this.$getComponent(com);

        if (!com) {
            throw new Error('Invalid path: ' + com);
        }

        var fn = com.methods ? com.methods[method] : '';

        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
        }

        if (typeof fn === 'function') {
            var $evt = new _event2.default('', this, 'invoke');
            var rst = fn.apply(com, args.concat($evt));
            com.$apply();
            return rst;
        } else {
            fn = com[method];
        }

        if (typeof fn === 'function') {
            return fn.apply(com, args);
        } else {
            throw new Error('Invalid method: ' + method);
        }
    };

    _class.prototype.$broadcast = function $broadcast(evtName) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var com = this;
        var $evt = typeof evtName === 'string' ? new _event2.default(evtName, this, 'broadcast') : $evt;
        var queue = [com];

        while (queue.length && $evt.active) {
            var current = queue.shift();

            var _loop = function _loop(_c) {
                _c = current.$com[_c];
                queue.push(_c);
                var fn = getEventsFn(_c, evtName);
                if (fn) {
                    _c.$apply(function () {
                        fn.apply(_c, args.concat($evt));
                    });
                }
                if (!$evt.active) return 'break';
                c = _c;
            };

            for (var c in current.$com) {
                var _ret = _loop(c);

                if (_ret === 'break') break;
            }
        }
    };

    _class.prototype.$emit = function $emit(evtName) {
        var _this5 = this;

        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        var com = this;
        var source = this;
        var $evt = new _event2.default(evtName, source, 'emit');

        if (this.$parent === undefined) console.log(this);

        if (this.$parent.$events && this.$parent.$events[this.$name]) {
            var method = this.$parent.$events[this.$name]['v-on:' + evtName];
            if (method && this.$parent.methods) {
                var _fn = this.$parent.methods[method];
                if (typeof _fn === 'function') {
                    this.$parent.$apply(function () {
                        _fn.apply(_this5.$parent, args.concat($evt));
                    });
                    return;
                } else {
                    throw new Error('Invalid method from emit, component is ' + this.$parent.$name + ', method is ' + method + '. Make sure you defined it already.\n');
                }
            }
        }

        var _loop2 = function _loop2() {
            var comContext = com;
            var fn = getEventsFn(comContext, evtName);
            fn && comContext.$apply(function () {
                fn.apply(comContext, args.concat($evt));
            });
            com = comContext.$parent;
        };

        while (com && com.$isComponent !== undefined && $evt.active) {
            _loop2();
        }
    };

    _class.prototype.$apply = function $apply(fn) {
        if (typeof fn === 'function') {
            fn.call(this);
            this.$apply();
        } else {
            return true;
            if (this.$$phase) {
                this.$$phase = '$apply';
            } else {
                this.$digest();
            }
        }
    };

    _class.prototype.$digest = function $digest() {
        var _this6 = this;

        var k = void 0;
        var originData = this.$data;
        this.$$phase = '$digest';
        while (this.$$phase) {
            var readyToSet = {};
            for (k in originData) {
                if (!_util2.default.$isEqual(this[k], originData[k])) {
                    readyToSet[this.$prefix + k] = this[k];
                    this.data[k] = this[k];
                    originData[k] = _util2.default.$copy(this[k], true);
                    if (this.$mappingProps[k]) {
                        Object.keys(this.$mappingProps[k]).forEach(function (changed) {
                            var mapping = _this6.$mappingProps[k][changed];
                            if ((typeof mapping === 'undefined' ? 'undefined' : _typeof(mapping)) === 'object') {
                                _this6.$parent.$apply();
                            } else if (changed === 'parent' && !_util2.default.$isEqual(_this6.$parent.$data[mapping], _this6[k])) {
                                _this6.$parent[mapping] = _this6[k];
                                _this6.$parent.data[mapping] = _this6[k];
                                _this6.$parent.$apply();
                            } else if (changed !== 'parent' && !_util2.default.$isEqual(_this6.$com[changed].$data[mapping], _this6[k])) {
                                _this6.$com[changed][mapping] = _this6[k];
                                _this6.$com[changed].data[mapping] = _this6[k];
                                _this6.$com[changed].$apply();
                            }
                        });
                    }
                }
            }
            if (Object.keys(readyToSet).length) {
                if (this.computed) {
                    for (k in this.computed) {
                        var _fn2 = this.computed[k],
                            val = _fn2.call(this);
                        if (!_util2.default.$isEqual(this[k], val)) {
                            readyToSet[this.$prefix + k] = val;
                            this[k] = _util2.default.$copy(val, true);
                        }
                    }
                }
                this.setData(readyToSet);
            }
            this.$$phase = this.$$phase === '$apply' ? '$digest' : false;
        }
    };

    return _class;
}();

exports.default = _class;


function getEventsFn(comContext, evtName) {
    var fn = comContext.events ? comContext.events[evtName] : undefined;
    var typeFn = typeof fn === 'undefined' ? 'undefined' : _typeof(fn);
    var fnFn = void 0;
    if (typeFn === 'string') {
        var method = comContext.methods && comContext.methods[fn];
        if (typeof method === 'function') {
            fnFn = method;
        }
    } else if (typeFn === 'function') {
        fnFn = fn;
    }
    return fnFn;
}
},/***** module 39 end *****/


/***** module 40 start *****/
/***** node_modules/wepy-web/lib/event.js *****/
function(module, exports, __wepy_require) {"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(name, source, type) {
        _classCallCheck(this, _class);

        this.active = true;


        this.name = name;
        this.source = source;
        this.type = type;
    }

    _class.prototype.$destroy = function $destroy() {
        this.active = false;
    };

    _class.prototype.$transfor = function $transfor(wxevent) {
        var k = 0;
        for (k in wxevent) {
            this[k] = wxevent[k];
        }
    };

    return _class;
}();

exports.default = _class;
},/***** module 40 end *****/


/***** module 41 start *****/
/***** node_modules/wepy-web/lib/base.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __wepy_require(51);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __wepy_require(52);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _event = __wepy_require(40);

var _event2 = _interopRequireDefault(_event);

var _word = __wepy_require(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageEvent = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage'];

var addStyle = function addStyle(stylelist) {
    var styleElement = document.createElement('style');
    var head = document.head || document.getElementsByTagName('head')[0];

    var css = '';
    stylelist.forEach(function (id) {
        css += __wepy_require(id) + '\r\n';
    });

    var cssNode = document.createTextNode(css);
    styleElement.appendChild(cssNode);
    head.appendChild(styleElement);
    styleElement.type = 'text/css';
    return styleElement;
};

var $createMixin = function $createMixin(com, mixinClass) {
    var obj = {};
    var mixin = new mixinClass();
    for (var k in mixin) {
        if (k === 'data') {
            obj.data = function () {
                return mixin.data;
            };
        } else if (k === 'methods') {
            obj[k] = {};
            for (var method in mixin[k]) {
                obj[k][method] = mixin[k][method].bind(com);
            }
        } else {
            obj[k] = mixin[k];
        }
    }
    return obj;
};

var $createComponent = function $createComponent(com, template) {

    var k = void 0,
        vueObject = {};

    vueObject.template = template;
    vueObject.data = function () {
        return com.data;
    };

    vueObject.components = {};
    vueObject.methods = {};

    Object.getOwnPropertyNames(com.components || {}).forEach(function (name) {
        var cClass = com.components[name];
        var child = new cClass();

        child.$name = name;

        com.$com[name] = child;
        vueObject.components[name] = $createComponent(child, cClass.template);
    });

    Object.getOwnPropertyNames(com.methods || {}).forEach(function (method) {
        var fn = com.methods[method];
        vueObject.methods[method] = function () {
            for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
            }

            var e = arg[arg.length - 1];

            if (!e) {
                e = this.$arguments[0];
            }
            var evt = new _event2.default('system', com, e.type);
            evt.$transfor(e);
            if (evt.type === 'input') {
                evt.detail = {};
                evt.detail.value = evt.srcElement.value;
            }
            arg[arg.length - 1] = evt;

            if (com.$vm !== this) {
                com.$vm = this;
                com.$index = this.$parent.$children.indexOf(this);
                if (this.$parent && this.$parent.$parent && this.$parent.$parent.$children) {
                    com.$parent.$index = this.$parent.$parent.$children.indexOf(this.$parent);
                }
            }
            fn.apply(com, arg);
        };
    });

    if (_typeof(com.mixins) === 'object' && com.mixins.constructor === Array) {
        vueObject.mixins = com.mixins.map(function (mixin) {
            return $createMixin(com, mixin);
        });
    } else if (typeof com.mixins === 'function') {
        vueObject.mixins = [$createMixin(com, mixin)];
    }

    vueObject.props = com.props;
    vueObject.computed = com.computed;
    vueObject.watch = com.watch;
    vueObject.events = com.events;

    vueObject.created = function () {
        com.$wxpage = this;
        com.$vm = this;
        this.$wepy = com;

        if (!com.$isComponent) {
            wx._currentPage = com;
            wx._currentPage.__route__ = this.$route.path;
            wx._currentPage.__wxWebviewId__ = 0;

            var share = typeof com.onShareAppMessage === 'funciton' ? com.onShareAppMessage() : null;
            if (share) {
                wx.__initShare && wx.__initShare(share);
            } else {
                wx.__hideShare && wx.__hideShare();
            }
        }

        if (typeof com.onLoad === 'function') {
            com.onLoad.call(com, com.$vm.$route.query, {});
        }
    };

    vueObject.ready = function () {
        console.log(com.$name + ' is ready');
        com.$wxpage = this;
        com.$vm = this;

        if (typeof com.onShow === 'function') {
            com.onShow.call(com);
        }
    };

    [].concat(Object.getOwnPropertyNames(com.props || {})).concat(Object.getOwnPropertyNames(com.computed || {})).concat(Object.getOwnPropertyNames(com.data || {})).forEach(function (v) {
        v = (0, _word.camelize)(v);
        Object.defineProperty(com, v, {
            get: function get() {
                return com.$vm[v];
            },
            set: function set(val) {
                com.$vm[v] = val;
            }
        });
    });
    return vueObject;
};

exports.default = {
    $createApp: function $createApp(appClass, config) {
        var k = void 0,
            routes = [];

        var app = new appClass();

        this.platform = wx.__platform;
        app.$components = [];
        app.$apis = [];

        if (!this.$instance) {
            app.$init(this);
            this.$instance = app;
        }

        addStyle(config.style);

        if (typeof app.onLaunch === 'function') {
            app.onLaunch();
        }
        if (typeof app.onShow === 'function') {
            console.warn('onShow is not implemented in web');
        }
        if (typeof app.onHide === 'function') {
            console.warn('onHide is not implemented in web');
        }

        for (k in config.components) {
            app.$components.push(k);
            var com = __wepy_require(config.components[k]).default;
            com.name = 'wepy-' + com.name;
            _vue2.default.component('wepy-' + k, com);
        }

        var _loop = function _loop() {
            app.$apis.push(k);
            var apiMod = __wepy_require(config.apis[k]);
            if (apiMod.default) {
                Object.defineProperty(wx, k, {
                    get: function get() {
                        return apiMod.getter(_vue2.default.extend(apiMod.default));
                    }
                });
            } else {
                Object.defineProperty(wx, k, {
                    get: function get() {
                        return apiMod.getter();
                    }
                });
            }
        };

        for (k in config.apis) {
            _loop();
        }

        _vue2.default.use(_vueRouter2.default);

        var router = new _vueRouter2.default();
        var index = '';

        for (k in config.routes) {
            var tmp = {};
            if (!index) index = k;
            tmp['/' + k] = {
                component: this.$createPage(__wepy_require(config.routes[k]).default, '/' + k)
            };
            router.map(tmp);
        }
        router.redirect({
            '*': '/' + index
        });
        router.start({}, '#app');

        router.beforeEach(function (trans) {
            window.scrollTo(0, 0);
            trans.next();
        });

        window.$router = router;
    },
    $createPage: function $createPage(pageClass, pagePath) {

        var page = new pageClass();

        if (pagePath) this.$instance.$pages[pagePath] = page;

        page.$name = pageClass.name || 'unnamed';
        page.$app = this.$instance;

        var vueObject = $createComponent(page, pageClass.template);

        page.$init(_vue2.default, this.$instance, this.$instance);

        wx._currentPages = wx._currentPages || [];
        wx._currentPages.push(page);
        page.__route__ = pagePath;
        page.__wxWebviewId__ = 0;

        return vueObject;
    }
};
},/***** module 41 end *****/


/***** module 42 start *****/
/***** node_modules/wepy-web/lib/util.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
    $isEmpty: function $isEmpty(obj) {
        return Object.keys(obj).length === 0;
    },
    $isEqual: function $isEqual(a, b, aStack, bStack) {
        if (a === b) return a !== 0 || 1 / a === 1 / b;

        if (a !== a) return b !== b;

        if (!a || !b) return a === b;

        var type = typeof a === 'undefined' ? 'undefined' : _typeof(a);
        if (type !== 'function' && type !== 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return false;
        return this.$isDeepEqual(a, b, aStack, bStack);
    },
    $isDeepEqual: function $isDeepEqual(a, b, aStack, bStack) {
        var self = this;

        var className = toString.call(a);
        if (className !== toString.call(b)) return false;
        switch (className) {
            case '[object RegExp]':
            case '[object String]':
                return '' + a === '' + b;
            case '[object Number]':
                if (+a !== +a) return +b !== +b;

                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
            case '[object Date]':
            case '[object Boolean]':
                return +a === +b;
            case '[object Symbol]':
                var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;
                return SymbolProto.valueOf.call(a) === SymbolProto.valueOf.call(b);
        }

        var areArrays = className === '[object Array]';
        if (!areArrays) {
            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return a === b;

            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
                return false;
            }
        }

        aStack = aStack || [];
        bStack = bStack || [];
        var length = aStack.length;
        while (length--) {
            if (aStack[length] === a) return bStack[length] === b;
        }

        aStack.push(a);
        bStack.push(b);

        if (areArrays) {
            length = a.length;
            if (length !== b.length) return false;

            while (length--) {
                if (!self.$isEqual(a[length], b[length], aStack, bStack)) return false;
            }
        } else {
            var keys = Object.keys(a),
                key;
            length = keys.length;

            if (Object.keys(b).length !== length) return false;
            while (length--) {
                key = keys[length];
                if (!(self.$has(b, key) && self.$isEqual(a[key], b[key], aStack, bStack))) return false;
            }
        }

        aStack.pop();
        bStack.pop();
        return true;
    },
    $has: function $has(obj, path) {
        if (toString.call(path) !== '[object Array]') {
            return obj && hasOwnProperty.call(obj, path);
        }
        var length = path.length;
        for (var i = 0; i < length; i++) {
            var key = path[i];
            if (!obj || !hasOwnProperty.call(obj, key)) {
                return false;
            }
            obj = obj[key];
        }
        return !!length;
    },
    $extend: function $extend() {
        var options,
            name,
            src,
            copy,
            copyIsArray,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;
        var self = this;

        if (typeof target === 'boolean') {
            deep = target;

            target = arguments[i] || {};
            i++;
        }

        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !(typeof target === 'function')) {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            if (options = arguments[i]) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if (deep && copy && (self.$isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && self.$isPlainObject(src) ? src : {};
                        }

                        target[name] = self.$extend(deep, clone, copy);
                    } else {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    },
    $copy: function $copy(obj) {
        var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(obj)) {
            return this.$extend(deep, [], obj);
        } else if ('' + obj === 'null') {
            return obj;
        } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
            return this.$extend(deep, {}, obj);
        } else return obj;
    },
    $isPlainObject: function $isPlainObject(obj) {
        var proto, Ctor;

        if (!obj || Object.prototype.toString.call(obj) !== '[object Object]') {
            return false;
        }

        proto = Object.getPrototypeOf(obj);

        if (!proto) {
            return true;
        }

        Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
        return typeof Ctor === 'function' && Object.prototype.hasOwnProperty.toString.call(Ctor) === Object.prototype.hasOwnProperty.toString.call(Object);
    },
    $resolvePath: function $resolvePath(route, url) {
        if (!url) return route;
        if (url[0] === '/') {
            url = url.substr(1);
            return this.$resolvePath('', url);
        }
        if (url[0] !== '.') {
            return this.$resolvePath(route, './' + url);
        }
        var current = route.split('/');
        if (url[0] === '.' && url[1] === '/') {
            url = url.substr(2);
            if (url[0] !== '.') {
                if (current.length) current[current.length - 1] = url;else current = [url];
                return current.length === 1 ? '/' + current[0] : current.join('/');
            }
            return this.$resolvePath(current.join('/'), url);
        }
        if (url[0] === '.' && url[1] === '.' && url[2] === '/') {
            url = url.replace(/^\.*/ig, '');
            current.pop();
            return this.$resolvePath(current.join('/'), '.' + url);
        }
        if (url[0] === '.') {
            return this.$resolvePath(route, url.substr(1));
        }
    },
    $getParams: function $getParams(url) {
        var rst = {};
        var quoteIndex = url.indexOf('?');

        if (quoteIndex !== -1) {
            var str = url.substr(quoteIndex + 1);
            var tmp = void 0;
            str.split('&').forEach(function (v) {
                tmp = v.split('=');
                rst[tmp[0]] = decodeURIComponent(tmp[1]);
            });
        }
        return rst;
    }
};
},/***** module 42 end *****/


/***** module 43 start *****/
/***** node_modules/wepy-web/lib/mixin.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.data = {};
        this.components = {};
        this.methods = {};
        this.events = {};
    }

    _class.prototype.$init = function $init(parent) {
        var _this = this;

        var k = void 0;

        Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(Object.getPrototypeOf(this))).forEach(function (k) {
            if (k[0] + k[1] !== 'on' && k !== 'constructor') {
                if (!parent[k]) parent[k] = _this[k];
            }
        });

        ['data', 'events', 'components'].forEach(function (item) {
            Object.getOwnPropertyNames(_this[item]).forEach(function (k) {
                if (k !== 'init' && !parent[item][k]) parent[item][k] = _this[item][k];
            });
        });
    };

    return _class;
}();

exports.default = _class;
},/***** module 43 end *****/


/***** module 44 start *****/
/***** node_modules/wepy-web/lib/wx.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var _vue = __wepy_require(51);

var _vue2 = _interopRequireDefault(_vue);

var _axios = __wepy_require(54);

var _axios2 = _interopRequireDefault(_axios);

var _query = __wepy_require(55);

var _device = __wepy_require(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callback = function callback(type, o, name, data) {
    if (typeof o[type] === 'function') {
        setTimeout(function () {
            if (name === 'login') {
                o[type].call(wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), code: data.code, data: data });
            } else if (name === 'getSystemInfo') {
                o[type].call(wx, data);
            } else {
                o[type].call(wx, { errMsg: name + ':' + (type === 'fail' ? 'fail' : 'ok'), data: data });
            }
        }, 0);
    }
};

var wx = window.wx || {};

wx.login = wx.login || function login(o) {
    console.error('wx.login is only implemented in browser');
};

wx.getStorageSync = wx.getStorageSync || function getStorageSync(v) {
    var rst = window.localStorage.getItem(v);
    try {
        rst = JSON.parse(rst);
    } catch (e) {}
    return rst;
};
wx.getStorage = wx.getStorage || function getStorage(o) {
    var rst = wx.getStorageSync(o.key);
    callback('success', o, 'getStorage', rst);
    callback('complete', o, 'getStorage', rst);
};
wx.setStorageSync = wx.setStorageSync || function setStorageSync(k, d) {
    if (typeof d !== 'string') {
        d = JSON.stringify(d);
    }
    window.localStorage.setItem(k, d);
};
wx.setStorage = wx.setStorage || function setStorage(o) {
    var rst = void 0;
    try {
        rst = this.setStorageSync(o.key, o.data);
        callback('success', o, 'getStorage', rst);
    } catch (e) {
        callback('fail', o, 'getStorage', rst);
    }
    callback('complete', o, 'getStorage', rst);
};
wx.getStorageInfoSync = wx.getStorageInfoSync || function getStorageInfoSync() {
    var MAX_SIZE = 5 * 1024;
    var keys = Object.keys(window.localStorage);
    return {
        currentSize: 1,
        keys: keys,
        limitSize: MAX_SIZE
    };
};
wx.getStorageInfo = wx.getStorageInfo || function getStorageInfo(o) {
    var rst = this.getStorageInfoSync();
    callback('success', o, 'getStorageInfo', rst);
    callback('complete', o, 'getStorageInfo', rst);
};
wx.removeStorageSync = wx.removeStorageSync || function removeStorageSync(k) {
    window.localStorage.removeItem(k);
};
wx.removeStorage = wx.removeStorage || function removeStorage(o) {
    var rst = void 0;
    try {
        rst = this.removeStorage(o.key);
        callback('success', o, 'getStorage', rst);
    } catch (e) {
        callback('fail', o, 'getStorage', rst);
    }
    callback('complete', o, 'getStorage', rst);
};
wx.clearStorageSync = wx.clearStorageSync || function clearStorageSync() {
    window.localStorage.clear();
};
wx.clearStorage = wx.clearStorage || function clearStorage() {
    var rst = void 0;
    try {
        rst = this.clearStorage();
    } catch (e) {}
};

wx.navigateTo = wx.navigateTo || function navigateTo(o) {
    window.$router.go(o.url);
};
wx.redirectTo = wx.redirectTo || function redirectTo(o) {
    window.$router.go(o.url);
};
wx.switchTab = wx.switchTab || function switchTab(o) {
    window.$router.go(o.url);
};
wx.navigateBack = wx.navigateBack || function navigateBack(o) {
    if (!o) {
        o = {};
    }
    if (o.delta) o.delta = -1;
    window.$router.go(o.delta);
};

wx.getSystemInfoSync = wx.getSystemInfoSync || function getSystemInfoSync() {
    return {
        SDKVersion: '0.0.0',
        language: '-',
        model: (0, _device.browser)(),
        pixelRatio: 0,
        platform: (0, _device.system)(),
        screenHeight: window.screen.height,
        screenWidth: window.screen.width,
        system: (0, _device.system)(),
        version: '0.0.0',
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    };
};
wx.getSystemInfo = wx.getSystemInfo || function getSystemInfo(o) {
    var rst = this.getSystemInfoSync();
    callback('success', o, 'getSystemInfo', rst);
    callback('complete', o, 'getSystemInfo', rst);
};
wx.canIUse = wx.canIUse || function canIUse() {
    return true;
};

wx.getNetworkType = wx.getNetworkType || function getNetworkType() {
    return 'unkown';
};

wx.setNavigationBarTitle = wx.setNavigationBarTitle || function setNavigationBarTitle(o) {
    document.title = o.title;
    callback('success', o, 'setNavigationBarTitle', null);
    callback('complete', o, 'setNavigationBarTitle', null);
};

wx.makePhoneCall = wx.makePhoneCall || function makePhoneCall(o) {
    window.location = 'tel:' + o.phoneNumber;
    callback('success', o, 'makePhoneCall', null);
    callback('complete', o, 'makePhoneCall', null);
};

wx.hideKeyboard = wx.hideKeyboard || function hideKeyboard() {
    setTimeout(function () {
        var field = document.createElement('input');
        field.setAttribute('type', 'text');
        field.setAttribute('style', 'position:absolute; top: 0px; opacity: 0; -webkit-user-modify: read-write-plaintext-only; left:0px;');
        document.body.appendChild(field);

        field.onfocus = function () {
            setTimeout(function () {
                field.setAttribute('style', 'display:none;');
                setTimeout(function () {
                    document.body.removeChild(field);
                    document.body.focus();
                }, 14);
            }, 200);
        };
        field.focus();
    }, 50);
};

['getUserInfo', 'switchTab', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'createAnimation', 'requestPayment', 'chooseImage', 'showModal', 'showToast', 'showActionSheet'].forEach(function (k) {
    if (!wx[k]) {
        wx[k] = function () {
            var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            console.error('wx.' + k + ' is not supported in browser or you did add it in config.');
            callback('fail', o, k, null);
            callback('complete', o, k, null);
        };
    }
});

wx.request = wx.request ? wx.request : function request(options) {
    var handlers = {};
    ['success', 'fail', 'complete', 'beforeAll', 'beforeSuccess', 'afterSuccess', 'beforeCancel', 'cancel', 'afterCancel', 'beforeFail', 'afterFail', 'afterAll'].forEach(function (k) {
        handlers[k] = options[k];
        delete options[k];
    });
    var rst = { errMsg: 'request', statusCode: 0, data: undefined };
    if (!options.method || options.method.toLowerCase() === 'get') {
        options.params = options.data;
        delete options.data;
    }
    (0, _axios2.default)(options).then(function (res) {
        rst.errMsg = rst.errMsg + ':ok';
        rst.statusCode = res.status;
        rst.data = res.data;

        if (typeof handlers.beforeAll === 'function') {
            handlers.beforeAll(res);
        }
        if (typeof handlers.beforeSuccess === 'function') {
            handlers.beforeSuccess(res);
        }
        if (typeof handlers.success === 'function') {
            handlers.success(res);
        }
        if (typeof handlers.afterSuccess === 'function') {
            handlers.afterSuccess(res);
        }
        if (typeof handlers.complete === 'function') {
            handlers.complete(res);
        }
        if (typeof handlers.afterAll === 'function') {
            handlers.afterAll(res);
        }
    }).catch(function (res) {
        if (typeof handlers.beforeAll === 'function') {
            handlers.beforeAll(res);
        }
        if (_axios2.default.isCancel(res)) {
            rst.errMsg = rst.errMsg + ':cancel';
            if (typeof handlers.fail === 'function') {
                handlers.fail(res);
            }
            if (typeof handlers.beforeCancel === 'function') {
                handlers.beforeCancel(res);
            }
            if (typeof handlers.cancel === 'function') {
                handlers.cancel(res);
            }
            if (typeof handlers.afterCancel === 'function') {
                handlers.afterCancel(res);
            }
        } else {
            rst.errMsg = rst.errMsg + ':fail';
            if (typeof handlers.beforeFail === 'function') {
                handlers.beforeFail(res);
            }
            if (typeof handlers.fail === 'function') {
                handlers.fail(res);
            }
            if (typeof handlers.afterFail === 'function') {
                handlers.afterFail(res);
            }
        }
        rst.data = res;
        if (typeof handlers.complete === 'function') {
            handlers.complete(res);
        }
        if (typeof handlers.afterAll === 'function') {
            handlers.afterAll(res);
        }
    });
};

if (typeof window !== 'undefined') {
    window.getApp = function () {
        return _vue2.default;
    };

    window.getCurrentPages = function () {
        if (wx._currentPage) return [wx._currentPage];else return [wx._currentPages[0]];
    };
}

window.wx = wx;

exports.default = wx;
},/***** module 44 end *****/


/***** module 45 start *****/
/***** node_modules/wepy-async-function/global.js *****/
function(module, exports, __wepy_require) {var global = module.exports = typeof window !== 'undefined' && window.Math === Math
  ? window : typeof self !== 'undefined' && self.Math === Math ? self : this;

},/***** module 45 end *****/


/***** module 46 start *****/
/***** node_modules/promise-polyfill/promise.js *****/
function(module, exports, __wepy_require) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

},/***** module 46 end *****/


/***** module 47 start *****/
/***** node_modules/regenerator-runtime/runtime.js *****/
function(module, exports, __wepy_require) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},/***** module 47 end *****/


/***** module 48 start *****/
/***** src/utils/av-weapp-min.js *****/
function(module, exports, __wepy_require) {"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var window = {};var XMLHttpRequest;
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.AV = t() : e.AV = t();
}(undefined, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
    }var n = {};return t.m = e, t.c = n, t.i = function (e) {
      return e;
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 46);
  }([function (e, t, n) {
    var r, i;(function () {
      function n(e) {
        function t(t, n, r, i, o, s) {
          for (; o >= 0 && o < s; o += e) {
            var a = i ? i[o] : o;r = n(r, t[a], a, t);
          }return r;
        }return function (n, r, i, o) {
          r = S(r, o, 4);var s = !x(n) && O.keys(n),
              a = (s || n).length,
              u = e > 0 ? 0 : a - 1;return arguments.length < 3 && (i = n[s ? s[u] : u], u += e), t(n, r, i, s, u, a);
        };
      }function o(e) {
        return function (t, n, r) {
          n = E(n, r);for (var i = N(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e) {
            if (n(t[o], o, t)) return o;
          }return -1;
        };
      }function s(e, t, n) {
        return function (r, i, o) {
          var s = 0,
              a = N(r);if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;if (i !== i) return o = t(p.call(r, s, a), O.isNaN), o >= 0 ? o + s : -1;for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) {
            if (r[o] === i) return o;
          }return -1;
        };
      }function a(e, t) {
        var n = R.length,
            r = e.constructor,
            i = O.isFunction(r) && r.prototype || h,
            o = "constructor";for (O.has(e, o) && !O.contains(t, o) && t.push(o); n--;) {
          (o = R[n]) in e && e[o] !== i[o] && !O.contains(t, o) && t.push(o);
        }
      }var u = this,
          c = u._,
          l = Array.prototype,
          h = Object.prototype,
          f = Function.prototype,
          d = l.push,
          p = l.slice,
          _ = h.toString,
          v = h.hasOwnProperty,
          y = Array.isArray,
          m = Object.keys,
          g = f.bind,
          b = Object.create,
          w = function w() {},
          O = function O(e) {
        return e instanceof O ? e : this instanceof O ? void (this._wrapped = e) : new O(e);
      };void 0 !== e && e.exports && (t = e.exports = O), t._ = O, O.VERSION = "1.8.3";var S = function S(e, t, n) {
        if (void 0 === t) return e;switch (null == n ? 3 : n) {case 1:
            return function (n) {
              return e.call(t, n);
            };case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i);
            };case 4:
            return function (n, r, i, o) {
              return e.call(t, n, r, i, o);
            };}return function () {
          return e.apply(t, arguments);
        };
      },
          E = function E(e, t, n) {
        return null == e ? O.identity : O.isFunction(e) ? S(e, t, n) : O.isObject(e) ? O.matcher(e) : O.property(e);
      };O.iteratee = function (e, t) {
        return E(e, t, 1 / 0);
      };var A = function A(e, t) {
        return function (n) {
          var r = arguments.length;if (r < 2 || null == n) return n;for (var i = 1; i < r; i++) {
            for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
              var c = s[u];t && void 0 !== n[c] || (n[c] = o[c]);
            }
          }return n;
        };
      },
          C = function C(e) {
        if (!O.isObject(e)) return {};if (b) return b(e);w.prototype = e;var t = new w();return w.prototype = null, t;
      },
          T = function T(e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      },
          j = Math.pow(2, 53) - 1,
          N = T("length"),
          x = function x(e) {
        var t = N(e);return "number" == typeof t && t >= 0 && t <= j;
      };O.each = O.forEach = function (e, t, n) {
        t = S(t, n);var r, i;if (x(e)) for (r = 0, i = e.length; r < i; r++) {
          t(e[r], r, e);
        } else {
          var o = O.keys(e);for (r = 0, i = o.length; r < i; r++) {
            t(e[o[r]], o[r], e);
          }
        }return e;
      }, O.map = O.collect = function (e, t, n) {
        t = E(t, n);for (var r = !x(e) && O.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
          var a = r ? r[s] : s;o[s] = t(e[a], a, e);
        }return o;
      }, O.reduce = O.foldl = O.inject = n(1), O.reduceRight = O.foldr = n(-1), O.find = O.detect = function (e, t, n) {
        var r;if (void 0 !== (r = x(e) ? O.findIndex(e, t, n) : O.findKey(e, t, n)) && -1 !== r) return e[r];
      }, O.filter = O.select = function (e, t, n) {
        var r = [];return t = E(t, n), O.each(e, function (e, n, i) {
          t(e, n, i) && r.push(e);
        }), r;
      }, O.reject = function (e, t, n) {
        return O.filter(e, O.negate(E(t)), n);
      }, O.every = O.all = function (e, t, n) {
        t = E(t, n);for (var r = !x(e) && O.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var s = r ? r[o] : o;if (!t(e[s], s, e)) return !1;
        }return !0;
      }, O.some = O.any = function (e, t, n) {
        t = E(t, n);for (var r = !x(e) && O.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var s = r ? r[o] : o;if (t(e[s], s, e)) return !0;
        }return !1;
      }, O.contains = O.includes = O.include = function (e, t, n, r) {
        return x(e) || (e = O.values(e)), ("number" != typeof n || r) && (n = 0), O.indexOf(e, t, n) >= 0;
      }, O.invoke = function (e, t) {
        var n = p.call(arguments, 2),
            r = O.isFunction(t);return O.map(e, function (e) {
          var i = r ? t : e[t];return null == i ? i : i.apply(e, n);
        });
      }, O.pluck = function (e, t) {
        return O.map(e, O.property(t));
      }, O.where = function (e, t) {
        return O.filter(e, O.matcher(t));
      }, O.findWhere = function (e, t) {
        return O.find(e, O.matcher(t));
      }, O.max = function (e, t, n) {
        var r,
            i,
            o = -1 / 0,
            s = -1 / 0;if (null == t && null != e) {
          e = x(e) ? e : O.values(e);for (var a = 0, u = e.length; a < u; a++) {
            (r = e[a]) > o && (o = r);
          }
        } else t = E(t, n), O.each(e, function (e, n, r) {
          ((i = t(e, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = e, s = i);
        });return o;
      }, O.min = function (e, t, n) {
        var r,
            i,
            o = 1 / 0,
            s = 1 / 0;if (null == t && null != e) {
          e = x(e) ? e : O.values(e);for (var a = 0, u = e.length; a < u; a++) {
            (r = e[a]) < o && (o = r);
          }
        } else t = E(t, n), O.each(e, function (e, n, r) {
          ((i = t(e, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = e, s = i);
        });return o;
      }, O.shuffle = function (e) {
        for (var t, n = x(e) ? e : O.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) {
          t = O.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        }return i;
      }, O.sample = function (e, t, n) {
        return null == t || n ? (x(e) || (e = O.values(e)), e[O.random(e.length - 1)]) : O.shuffle(e).slice(0, Math.max(0, t));
      }, O.sortBy = function (e, t, n) {
        return t = E(t, n), O.pluck(O.map(e, function (e, n, r) {
          return { value: e, index: n, criteria: t(e, n, r) };
        }).sort(function (e, t) {
          var n = e.criteria,
              r = t.criteria;if (n !== r) {
            if (n > r || void 0 === n) return 1;if (n < r || void 0 === r) return -1;
          }return e.index - t.index;
        }), "value");
      };var k = function k(e) {
        return function (t, n, r) {
          var i = {};return n = E(n, r), O.each(t, function (r, o) {
            var s = n(r, o, t);e(i, r, s);
          }), i;
        };
      };O.groupBy = k(function (e, t, n) {
        O.has(e, n) ? e[n].push(t) : e[n] = [t];
      }), O.indexBy = k(function (e, t, n) {
        e[n] = t;
      }), O.countBy = k(function (e, t, n) {
        O.has(e, n) ? e[n]++ : e[n] = 1;
      }), O.toArray = function (e) {
        return e ? O.isArray(e) ? p.call(e) : x(e) ? O.map(e, O.identity) : O.values(e) : [];
      }, O.size = function (e) {
        return null == e ? 0 : x(e) ? e.length : O.keys(e).length;
      }, O.partition = function (e, t, n) {
        t = E(t, n);var r = [],
            i = [];return O.each(e, function (e, n, o) {
          (t(e, n, o) ? r : i).push(e);
        }), [r, i];
      }, O.first = O.head = O.take = function (e, t, n) {
        if (null != e) return null == t || n ? e[0] : O.initial(e, e.length - t);
      }, O.initial = function (e, t, n) {
        return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
      }, O.last = function (e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : O.rest(e, Math.max(0, e.length - t));
      }, O.rest = O.tail = O.drop = function (e, t, n) {
        return p.call(e, null == t || n ? 1 : t);
      }, O.compact = function (e) {
        return O.filter(e, O.identity);
      };var U = function U(e, t, n, r) {
        for (var i = [], o = 0, s = r || 0, a = N(e); s < a; s++) {
          var u = e[s];if (x(u) && (O.isArray(u) || O.isArguments(u))) {
            t || (u = U(u, t, n));var c = 0,
                l = u.length;for (i.length += l; c < l;) {
              i[o++] = u[c++];
            }
          } else n || (i[o++] = u);
        }return i;
      };O.flatten = function (e, t) {
        return U(e, t, !1);
      }, O.without = function (e) {
        return O.difference(e, p.call(arguments, 1));
      }, O.uniq = O.unique = function (e, t, n, r) {
        O.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = E(n, r));for (var i = [], o = [], s = 0, a = N(e); s < a; s++) {
          var u = e[s],
              c = n ? n(u, s, e) : u;t ? (s && o === c || i.push(u), o = c) : n ? O.contains(o, c) || (o.push(c), i.push(u)) : O.contains(i, u) || i.push(u);
        }return i;
      }, O.union = function () {
        return O.uniq(U(arguments, !0, !0));
      }, O.intersection = function (e) {
        for (var t = [], n = arguments.length, r = 0, i = N(e); r < i; r++) {
          var o = e[r];if (!O.contains(t, o)) {
            for (var s = 1; s < n && O.contains(arguments[s], o); s++) {}s === n && t.push(o);
          }
        }return t;
      }, O.difference = function (e) {
        var t = U(arguments, !0, !0, 1);return O.filter(e, function (e) {
          return !O.contains(t, e);
        });
      }, O.zip = function () {
        return O.unzip(arguments);
      }, O.unzip = function (e) {
        for (var t = e && O.max(e, N).length || 0, n = Array(t), r = 0; r < t; r++) {
          n[r] = O.pluck(e, r);
        }return n;
      }, O.object = function (e, t) {
        for (var n = {}, r = 0, i = N(e); r < i; r++) {
          t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        }return n;
      }, O.findIndex = o(1), O.findLastIndex = o(-1), O.sortedIndex = function (e, t, n, r) {
        n = E(n, r, 1);for (var i = n(t), o = 0, s = N(e); o < s;) {
          var a = Math.floor((o + s) / 2);n(e[a]) < i ? o = a + 1 : s = a;
        }return o;
      }, O.indexOf = s(1, O.findIndex, O.sortedIndex), O.lastIndexOf = s(-1, O.findLastIndex), O.range = function (e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) {
          i[o] = e;
        }return i;
      };var I = function I(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);var o = C(e.prototype),
            s = e.apply(o, i);return O.isObject(s) ? s : o;
      };O.bind = function (e, t) {
        if (g && e.bind === g) return g.apply(e, p.call(arguments, 1));if (!O.isFunction(e)) throw new TypeError("Bind must be called on a function");var n = p.call(arguments, 2),
            r = function r() {
          return I(e, r, t, this, n.concat(p.call(arguments)));
        };return r;
      }, O.partial = function (e) {
        var t = p.call(arguments, 1),
            n = function n() {
          for (var r = 0, i = t.length, o = Array(i), s = 0; s < i; s++) {
            o[s] = t[s] === O ? arguments[r++] : t[s];
          }for (; r < arguments.length;) {
            o.push(arguments[r++]);
          }return I(e, n, this, this, o);
        };return n;
      }, O.bindAll = function (e) {
        var t,
            n,
            r = arguments.length;if (r <= 1) throw new Error("bindAll must be passed function names");for (t = 1; t < r; t++) {
          n = arguments[t], e[n] = O.bind(e[n], e);
        }return e;
      }, O.memoize = function (e, t) {
        var n = function n(r) {
          var i = n.cache,
              o = "" + (t ? t.apply(this, arguments) : r);return O.has(i, o) || (i[o] = e.apply(this, arguments)), i[o];
        };return n.cache = {}, n;
      }, O.delay = function (e, t) {
        var n = p.call(arguments, 2);return setTimeout(function () {
          return e.apply(null, n);
        }, t);
      }, O.defer = O.partial(O.delay, O, 1), O.throttle = function (e, t, n) {
        var r,
            i,
            o,
            s = null,
            a = 0;n || (n = {});var u = function u() {
          a = !1 === n.leading ? 0 : O.now(), s = null, o = e.apply(r, i), s || (r = i = null);
        };return function () {
          var c = O.now();a || !1 !== n.leading || (a = c);var l = t - (c - a);return r = this, i = arguments, l <= 0 || l > t ? (s && (clearTimeout(s), s = null), a = c, o = e.apply(r, i), s || (r = i = null)) : s || !1 === n.trailing || (s = setTimeout(u, l)), o;
        };
      }, O.debounce = function (e, t, n) {
        var r,
            i,
            o,
            s,
            a,
            u = function u() {
          var c = O.now() - s;c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (a = e.apply(o, i), r || (o = i = null)));
        };return function () {
          o = this, i = arguments, s = O.now();var c = n && !r;return r || (r = setTimeout(u, t)), c && (a = e.apply(o, i), o = i = null), a;
        };
      }, O.wrap = function (e, t) {
        return O.partial(t, e);
      }, O.negate = function (e) {
        return function () {
          return !e.apply(this, arguments);
        };
      }, O.compose = function () {
        var e = arguments,
            t = e.length - 1;return function () {
          for (var n = t, r = e[t].apply(this, arguments); n--;) {
            r = e[n].call(this, r);
          }return r;
        };
      }, O.after = function (e, t) {
        return function () {
          if (--e < 1) return t.apply(this, arguments);
        };
      }, O.before = function (e, t) {
        var n;return function () {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
        };
      }, O.once = O.partial(O.before, 2);var P = !{ toString: null }.propertyIsEnumerable("toString"),
          R = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];O.keys = function (e) {
        if (!O.isObject(e)) return [];if (m) return m(e);var t = [];for (var n in e) {
          O.has(e, n) && t.push(n);
        }return P && a(e, t), t;
      }, O.allKeys = function (e) {
        if (!O.isObject(e)) return [];var t = [];for (var n in e) {
          t.push(n);
        }return P && a(e, t), t;
      }, O.values = function (e) {
        for (var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) {
          r[i] = e[t[i]];
        }return r;
      }, O.mapObject = function (e, t, n) {
        t = E(t, n);for (var r, i = O.keys(e), o = i.length, s = {}, a = 0; a < o; a++) {
          r = i[a], s[r] = t(e[r], r, e);
        }return s;
      }, O.pairs = function (e) {
        for (var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) {
          r[i] = [t[i], e[t[i]]];
        }return r;
      }, O.invert = function (e) {
        for (var t = {}, n = O.keys(e), r = 0, i = n.length; r < i; r++) {
          t[e[n[r]]] = n[r];
        }return t;
      }, O.functions = O.methods = function (e) {
        var t = [];for (var n in e) {
          O.isFunction(e[n]) && t.push(n);
        }return t.sort();
      }, O.extend = A(O.allKeys), O.extendOwn = O.assign = A(O.keys), O.findKey = function (e, t, n) {
        t = E(t, n);for (var r, i = O.keys(e), o = 0, s = i.length; o < s; o++) {
          if (r = i[o], t(e[r], r, e)) return r;
        }
      }, O.pick = function (e, t, n) {
        var r,
            i,
            o = {},
            s = e;if (null == s) return o;O.isFunction(t) ? (i = O.allKeys(s), r = S(t, n)) : (i = U(arguments, !1, !1, 1), r = function r(e, t, n) {
          return t in n;
        }, s = Object(s));for (var a = 0, u = i.length; a < u; a++) {
          var c = i[a],
              l = s[c];r(l, c, s) && (o[c] = l);
        }return o;
      }, O.omit = function (e, t, n) {
        if (O.isFunction(t)) t = O.negate(t);else {
          var r = O.map(U(arguments, !1, !1, 1), String);t = function t(e, _t) {
            return !O.contains(r, _t);
          };
        }return O.pick(e, t, n);
      }, O.defaults = A(O.allKeys, !0), O.create = function (e, t) {
        var n = C(e);return t && O.extendOwn(n, t), n;
      }, O.clone = function (e) {
        return O.isObject(e) ? O.isArray(e) ? e.slice() : O.extend({}, e) : e;
      }, O.tap = function (e, t) {
        return t(e), e;
      }, O.isMatch = function (e, t) {
        var n = O.keys(t),
            r = n.length;if (null == e) return !r;for (var i = Object(e), o = 0; o < r; o++) {
          var s = n[o];if (t[s] !== i[s] || !(s in i)) return !1;
        }return !0;
      };var D = function D(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;if (null == e || null == t) return e === t;e instanceof O && (e = e._wrapped), t instanceof O && (t = t._wrapped);var i = _.call(e);if (i !== _.call(t)) return !1;switch (i) {case "[object RegExp]":case "[object String]":
            return "" + e == "" + t;case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;case "[object Date]":case "[object Boolean]":
            return +e == +t;}var o = "[object Array]" === i;if (!o) {
          if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return !1;var s = e.constructor,
              a = t.constructor;if (s !== a && !(O.isFunction(s) && s instanceof s && O.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
        }n = n || [], r = r || [];for (var u = n.length; u--;) {
          if (n[u] === e) return r[u] === t;
        }if (n.push(e), r.push(t), o) {
          if ((u = e.length) !== t.length) return !1;for (; u--;) {
            if (!D(e[u], t[u], n, r)) return !1;
          }
        } else {
          var c,
              l = O.keys(e);if (u = l.length, O.keys(t).length !== u) return !1;for (; u--;) {
            if (c = l[u], !O.has(t, c) || !D(e[c], t[c], n, r)) return !1;
          }
        }return n.pop(), r.pop(), !0;
      };O.isEqual = function (e, t) {
        return D(e, t);
      }, O.isEmpty = function (e) {
        return null == e || (x(e) && (O.isArray(e) || O.isString(e) || O.isArguments(e)) ? 0 === e.length : 0 === O.keys(e).length);
      }, O.isElement = function (e) {
        return !(!e || 1 !== e.nodeType);
      }, O.isArray = y || function (e) {
        return "[object Array]" === _.call(e);
      }, O.isObject = function (e) {
        var t = typeof e === "undefined" ? "undefined" : _typeof(e);return "function" === t || "object" === t && !!e;
      }, O.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        O["is" + e] = function (t) {
          return _.call(t) === "[object " + e + "]";
        };
      }), O.isArguments(arguments) || (O.isArguments = function (e) {
        return O.has(e, "callee");
      }), "function" != typeof /./ && "object" != (typeof Int8Array === "undefined" ? "undefined" : _typeof(Int8Array)) && (O.isFunction = function (e) {
        return "function" == typeof e || !1;
      }), O.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e));
      }, O.isNaN = function (e) {
        return O.isNumber(e) && e !== +e;
      }, O.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" === _.call(e);
      }, O.isNull = function (e) {
        return null === e;
      }, O.isUndefined = function (e) {
        return void 0 === e;
      }, O.has = function (e, t) {
        return null != e && v.call(e, t);
      }, O.noConflict = function () {
        return u._ = c, this;
      }, O.identity = function (e) {
        return e;
      }, O.constant = function (e) {
        return function () {
          return e;
        };
      }, O.noop = function () {}, O.property = T, O.propertyOf = function (e) {
        return null == e ? function () {} : function (t) {
          return e[t];
        };
      }, O.matcher = O.matches = function (e) {
        return e = O.extendOwn({}, e), function (t) {
          return O.isMatch(t, e);
        };
      }, O.times = function (e, t, n) {
        var r = Array(Math.max(0, e));t = S(t, n, 1);for (var i = 0; i < e; i++) {
          r[i] = t(i);
        }return r;
      }, O.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
      }, O.now = Date.now || function () {
        return new Date().getTime();
      };var F = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
          L = O.invert(F),
          q = function q(e) {
        var t = function t(_t2) {
          return e[_t2];
        },
            n = "(?:" + O.keys(e).join("|") + ")",
            r = RegExp(n),
            i = RegExp(n, "g");return function (e) {
          return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
        };
      };O.escape = q(F), O.unescape = q(L), O.result = function (e, t, n) {
        var r = null == e ? void 0 : e[t];return void 0 === r && (r = n), O.isFunction(r) ? r.call(e) : r;
      };var M = 0;O.uniqueId = function (e) {
        var t = ++M + "";return e ? e + t : t;
      }, O.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };var B = /(.)^/,
          J = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
          Q = /\\|'|\r|\n|\u2028|\u2029/g,
          W = function W(e) {
        return "\\" + J[e];
      };O.template = function (e, t, n) {
        !t && n && (t = n), t = O.defaults({}, t, O.templateSettings);var r = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
            i = 0,
            o = "__p+='";e.replace(r, function (t, n, r, s, a) {
          return o += e.slice(i, a).replace(Q, W), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t;
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";try {
          var s = new Function(t.variable || "obj", "_", o);
        } catch (e) {
          throw e.source = o, e;
        }var a = function a(e) {
          return s.call(this, e, O);
        };return a.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", a;
      }, O.chain = function (e) {
        var t = O(e);return t._chain = !0, t;
      };var V = function V(e, t) {
        return e._chain ? O(t).chain() : t;
      };O.mixin = function (e) {
        O.each(O.functions(e), function (t) {
          var n = O[t] = e[t];O.prototype[t] = function () {
            var e = [this._wrapped];return d.apply(e, arguments), V(this, n.apply(O, e));
          };
        });
      }, O.mixin(O), O.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = l[e];O.prototype[e] = function () {
          var n = this._wrapped;return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], V(this, n);
        };
      }), O.each(["concat", "join", "slice"], function (e) {
        var t = l[e];O.prototype[e] = function () {
          return V(this, t.apply(this._wrapped, arguments));
        };
      }), O.prototype.value = function () {
        return this._wrapped;
      }, O.prototype.valueOf = O.prototype.toJSON = O.prototype.value, O.prototype.toString = function () {
        return "" + this._wrapped;
      }, r = [], void 0 !== (i = function () {
        return O;
      }.apply(t, r)) && (e.exports = i);
    }).call(this);
  }, function (e, t, n) {
    "use strict";
    var r = (n(0), n(57).Promise);r._continueWhile = function (e, t) {
      return e() ? t().then(function () {
        return r._continueWhile(e, t);
      }) : r.resolve();
    }, e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(63),
        o = n(0),
        s = o.extend,
        a = n(1),
        u = n(5),
        c = n(3),
        l = c.getSessionToken,
        h = c.ajax,
        f = function f(e, t) {
      var n = new Date().getTime(),
          r = i(n + e);return t ? r + "," + n + ",master" : r + "," + n;
    },
        d = function d(e, t) {
      t ? e["X-LC-Sign"] = f(u.applicationKey) : e["X-LC-Key"] = u.applicationKey;
    },
        p = function p() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          n = { "X-LC-Id": u.applicationId, "Content-Type": "application/json;charset=UTF-8" },
          r = !1;return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? t ? n["X-LC-Sign"] = f(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, t)) : d(n, t), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._sharedConfig.userAgent, a.resolve().then(function () {
        var t = l(e);if (t) n["X-LC-Session"] = t;else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function (e) {
          return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n;
        });return n;
      });
    },
        _ = function _(e) {
      var t = e.service,
          n = void 0 === t ? "api" : t,
          r = e.version,
          i = void 0 === r ? "1.1" : r,
          o = e.path,
          s = u._config.serverURLs[n];if (!s) throw new Error("undefined server URL for " + n);return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s;
    },
        v = function v(e) {
      var t = e.service,
          n = e.version,
          i = e.method,
          o = e.path,
          s = e.query,
          a = e.data,
          c = void 0 === a ? {} : a,
          l = e.authOptions,
          f = e.signKey,
          d = void 0 === f || f;if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");u._appRouter.refresh();var v = _({ service: t, path: o, version: n });return p(l, d).then(function (e) {
        return h({ method: i, url: v, query: s, data: c, headers: e }).catch(function (e) {
          var t = { code: e.code || -1, error: e.message || e.responseText };if (e.response && e.response.code) t = e.response;else if (e.responseText) try {
            t = JSON.parse(e.responseText);
          } catch (e) {}t.rawMessage = t.rawMessage || t.error, u._sharedConfig.keepErrorRawMessage || (t.error += " [" + (e.statusCode || "N/A") + " " + i + " " + v + "]");var n = new Error(t.error);throw delete t.error, r.extend(n, t);
        });
      });
    },
        y = function y(e, t, n, r) {
      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o = arguments[5],
          a = arguments[6],
          u = "";if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");if (i && i._where) throw new Error("_where should be in the query");return r && "get" === r.toLowerCase() && (a = s({}, a, i), i = null), v({ method: r, path: u, query: a, data: i, authOptions: o });
    };u.request = v, e.exports = { _request: y, request: v };
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
          n = t.exec(e);if (!n) return null;var r = n[1] || 0,
          i = (n[2] || 1) - 1,
          o = n[3] || 0,
          s = n[4] || 0,
          a = n[5] || 0,
          u = n[6] || 0,
          c = n[8] || 0;return new Date(Date.UTC(r, i, o, s, a, u, c));
    }var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        o = n(0),
        s = n(7),
        a = n(6),
        u = a("leancloud:request"),
        c = a("leancloud:request:error"),
        l = n(1),
        h = 0,
        f = function f(e) {
      var t = e.method,
          n = e.url,
          r = e.query,
          o = e.data,
          f = e.headers,
          d = void 0 === f ? {} : f,
          p = e.onprogress,
          _ = h++;u("request(" + _ + ")", t, n, r, o, d);var v = {};if (r) for (var y in r) {
        "object" === i(r[y]) ? v[y] = JSON.stringify(r[y]) : v[y] = r[y];
      }return new l(function (e, i) {
        var l = s(t, n).set(d).query(v).send(o);p && l.on("progress", p), l.end(function (s, l) {
          return s ? (l && (a.enabled("leancloud:request") || c("request(" + _ + ")", t, n, r, o, d), c("response(" + _ + ")", l.status, l.body || l.text, l.header), s.statusCode = l.status, s.responseText = l.text, s.response = l.body), i(s)) : (u("response(" + _ + ")", l.status, l.body || l.text, l.header), e(l.body));
        });
      });
    },
        d = function d(e) {
      return o.isNull(e) || o.isUndefined(e);
    },
        p = function p(e) {
      return o.isArray(e) ? e : void 0 === e || null === e ? [] : [e];
    },
        _ = function _() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.keys,
          n = e.include,
          r = e.includeACL,
          i = {};return t && (i.keys = p(t).join(",")), n && (i.include = p(n).join(",")), r && (i.returnACL = r), i;
    },
        v = function v(e) {
      return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0;
    },
        y = function y(e) {
      return function (t) {
        return e(t), t;
      };
    },
        m = function m() {},
        g = function g(e, t, n) {
      var r;return r = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
        e.apply(this, arguments);
      }, o.extend(r, e), m.prototype = e.prototype, r.prototype = new m(), t && o.extend(r.prototype, t), n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r;
    },
        b = function b(e, t, n) {
      var r = t.split("."),
          i = r.pop(),
          o = e;return r.forEach(function (e) {
        void 0 === o[e] && (o[e] = {}), o = o[e];
      }), o[i] = n, e;
    },
        w = function w(e, t) {
      for (var n = t.split("."), r = n.pop(), i = e, o = 0; o < n.length; o++) {
        if (void 0 === (i = i[n[o]])) return [void 0, void 0, r];
      }return [i[r], i, r];
    };e.exports = { ajax: f, isNullOrUndefined: d, ensureArray: p, transformFetchOptions: _, getSessionToken: v, tap: y, inherits: g, parseDate: r, setValue: b, findValue: w };
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = new Error(t);return n.code = e, n;
    }n(0).extend(r, { OTHER_CAUSE: -1, INTERNAL_SERVER_ERROR: 1, CONNECTION_FAILED: 100, OBJECT_NOT_FOUND: 101, INVALID_QUERY: 102, INVALID_CLASS_NAME: 103, MISSING_OBJECT_ID: 104, INVALID_KEY_NAME: 105, INVALID_POINTER: 106, INVALID_JSON: 107, COMMAND_UNAVAILABLE: 108, NOT_INITIALIZED: 109, INCORRECT_TYPE: 111, INVALID_CHANNEL_NAME: 112, PUSH_MISCONFIGURED: 115, OBJECT_TOO_LARGE: 116, OPERATION_FORBIDDEN: 119, CACHE_MISS: 120, INVALID_NESTED_KEY: 121, INVALID_FILE_NAME: 122, INVALID_ACL: 123, TIMEOUT: 124, INVALID_EMAIL_ADDRESS: 125, MISSING_CONTENT_TYPE: 126, MISSING_CONTENT_LENGTH: 127, INVALID_CONTENT_LENGTH: 128, FILE_TOO_LARGE: 129, FILE_SAVE_ERROR: 130, FILE_DELETE_ERROR: 153, DUPLICATE_VALUE: 137, INVALID_ROLE_NAME: 139, EXCEEDED_QUOTA: 140, SCRIPT_FAILED: 141, VALIDATION_ERROR: 142, INVALID_IMAGE_DATA: 150, UNSAVED_FILE_ERROR: 151, INVALID_PUSH_TIME_ERROR: 152, USERNAME_MISSING: 200, PASSWORD_MISSING: 201, USERNAME_TAKEN: 202, EMAIL_TAKEN: 203, EMAIL_MISSING: 204, EMAIL_NOT_FOUND: 205, SESSION_MISSING: 206, MUST_CREATE_USER_THROUGH_SIGNUP: 207, ACCOUNT_ALREADY_LINKED: 208, LINKED_ID_MISSING: 250, INVALID_LINKED_SESSION: 251, UNSUPPORTED_SERVICE: 252, X_DOMAIN_REQUEST: 602 }), e.exports = r;
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
          i = n(48),
          o = n(3),
          s = o.inherits,
          a = o.parseDate,
          u = t.AV || {};u._config = { serverURLs: {}, useMasterKey: !1, production: null, realtime: null }, u._sharedConfig = { userAgent: i, liveQueryRealtime: null }, u._getAVPath = function (e) {
        if (!u.applicationId) throw new Error("You need to call AV.initialize before using AV.");if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");return "/" === e[0] && (e = e.substring(1)), "AV/" + u.applicationId + "/" + e;
      };var c = function c() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      },
          l = function l() {
        return "" + c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c();
      };u._installationId = null, u._getInstallationId = function () {
        if (u._installationId) return u.Promise.resolve(u._installationId);var e = u._getAVPath("installationId");return u.localStorage.getItemAsync(e).then(function (t) {
          return u._installationId = t, u._installationId ? t : (u._installationId = t = l(), u.localStorage.setItemAsync(e, t).then(function () {
            return t;
          }));
        });
      }, u._subscriptionId = null, u._refreshSubscriptionId = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u._getAVPath("subscriptionId"),
            t = u._subscriptionId = l();return u.localStorage.setItemAsync(e, t).then(function () {
          return t;
        });
      }, u._getSubscriptionId = function () {
        if (u._subscriptionId) return u.Promise.resolve(u._subscriptionId);var e = u._getAVPath("subscriptionId");return u.localStorage.getItemAsync(e).then(function (t) {
          return u._subscriptionId = t, u._subscriptionId || (t = u._refreshSubscriptionId(e)), t;
        });
      }, u._parseDate = a, u._extend = function (e, t) {
        var n = s(this, e, t);return n.extend = this.extend, n;
      }, u._encode = function (e, t, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];if (e instanceof u.Object) {
          if (n) throw new Error("AV.Objects not allowed here");return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer();
        }if (e instanceof u.ACL) return e.toJSON();if (r.isDate(e)) return i ? { __type: "Date", iso: e.toJSON() } : e.toJSON();if (e instanceof u.GeoPoint) return e.toJSON();if (r.isArray(e)) return r.map(e, function (e) {
          return u._encode(e, t, n, i);
        });if (r.isRegExp(e)) return e.source;if (e instanceof u.Relation) return e.toJSON();if (e instanceof u.Op) return e.toJSON();if (e instanceof u.File) {
          if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");return e._toFullJSON(t, i);
        }return r.isObject(e) ? r.mapObject(e, function (e, r) {
          return u._encode(e, t, n, i);
        }) : e;
      }, u._decode = function (e, t) {
        if (!r.isObject(e) || r.isDate(e)) return e;if (r.isArray(e)) return r.map(e, function (e) {
          return u._decode(e);
        });if (e instanceof u.Object) return e;if (e instanceof u.File) return e;if (e instanceof u.Op) return e;if (e instanceof u.GeoPoint) return e;if (e instanceof u.ACL) return e;if ("ACL" === t) return new u.ACL(e);if (e.__op) return u.Op._decode(e);var n;if ("Pointer" === e.__type) {
          n = e.className;var i = u.Object._create(n);if (Object.keys(e).length > 3) {
            var o = r.clone(e);delete o.__type, delete o.className, i._finishFetch(o, !0);
          } else i._finishFetch({ objectId: e.objectId }, !1);return i;
        }if ("Object" === e.__type) {
          n = e.className;var s = r.clone(e);delete s.__type, delete s.className;var a = u.Object._create(n);return a._finishFetch(s, !0), a;
        }if ("Date" === e.__type) return u._parseDate(e.iso);if ("GeoPoint" === e.__type) return new u.GeoPoint({ latitude: e.latitude, longitude: e.longitude });if ("Relation" === e.__type) {
          if (!t) throw new Error("key missing decoding a Relation");var c = new u.Relation(null, t);return c.targetClassName = e.className, c;
        }if ("File" === e.__type) {
          var l = new u.File(e.name),
              h = r.clone(e);return delete h.__type, l._finishFetch(h), l;
        }return r.mapObject(e, u._decode);
      }, u.parseJSON = u._decode, u._encodeObjectOrArray = function (e) {
        var t = function t(e) {
          return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function (e) {
            return u._encode(e, []);
          });
        };return r.isArray(e) ? e.map(function (e) {
          return t(e);
        }) : t(e);
      }, u._arrayEach = r.each, u._traverse = function (e, t, n) {
        if (e instanceof u.Object) {
          if (n = n || [], r.indexOf(n, e) >= 0) return;return n.push(e), u._traverse(e.attributes, t, n), t(e);
        }return e instanceof u.Relation || e instanceof u.File ? t(e) : r.isArray(e) ? (r.each(e, function (r, i) {
          var o = u._traverse(r, t, n);o && (e[i] = o);
        }), t(e)) : r.isObject(e) ? (u._each(e, function (r, i) {
          var o = u._traverse(r, t, n);o && (e[i] = o);
        }), t(e)) : t(e);
      }, u._objectEach = u._each = function (e, t) {
        r.isObject(e) ? r.each(r.keys(e), function (n) {
          t(e[n], n);
        }) : r.each(e, t);
      }, e.exports = u;
    }).call(t, n(8));
  }, function (e, t, n) {
    function r() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }function i(e) {
      var n = this.useColors;if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
        var r = "color: " + this.color;e.splice(1, 0, r, "color: inherit");var i = 0,
            o = 0;e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && (i++, "%c" === e && (o = i));
        }), e.splice(o, 0, r);
      }
    }function o() {
      return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }function s(e) {
      try {
        null == e ? t.storage.removeItem("debug") : t.storage.debug = e;
      } catch (e) {}
    }function a() {
      var e;try {
        e = t.storage.debug;
      } catch (e) {}return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e;
    }t = e.exports = n(56), t.log = o, t.formatArgs = i, t.save = s, t.load = a, t.useColors = r, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
      try {
        return window.localStorage;
      } catch (e) {}
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message;
      }
    }, t.enable(a());
  }, function (e, t, n) {
    function r() {}function i(e) {
      if (!_(e)) return e;var t = [];for (var n in e) {
        o(t, n, e[n]);
      }return t.join("&");
    }function o(e, t, n) {
      if (null != n) {
        if (Array.isArray(n)) n.forEach(function (n) {
          o(e, t, n);
        });else if (_(n)) for (var r in n) {
          o(e, t + "[" + r + "]", n[r]);
        } else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
      } else null === n && e.push(encodeURIComponent(t));
    }function s(e) {
      for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) {
        t = i[o], n = t.indexOf("="), -1 == n ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
      }return r;
    }function a(e) {
      for (var t, n, r, i, o = e.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) {
        n = o[a], -1 !== (t = n.indexOf(":")) && (r = n.slice(0, t).toLowerCase(), i = g(n.slice(t + 1)), s[r] = i);
      }return s;
    }function u(e) {
      return (/[\/+]json($|[^-\w])/.test(e)
      );
    }function c(e) {
      this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;var t = this.xhr.status;1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
    }function l(e, t) {
      var n = this;this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function () {
        var e = null,
            t = null;try {
          t = new c(n);
        } catch (t) {
          return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e);
        }n.emit("response", t);var r;try {
          n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"));
        } catch (e) {
          r = e;
        }r ? (r.original = e, r.response = t, r.status = t.status, n.callback(r, t)) : n.callback(null, t);
      });
    }function h(e, t, n) {
      var r = m("DELETE", e);return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }var f;"undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);var d = n(54),
        p = n(66),
        _ = n(21),
        v = n(67),
        y = n(65),
        m = t = e.exports = function (e, n) {
      return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n);
    };t.Request = l, m.getXHR = function () {
      if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest();try {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
      } catch (e) {}try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
      } catch (e) {}try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {}throw Error("Browser-only version of superagent could not find XHR");
    };var g = "".trim ? function (e) {
      return e.trim();
    } : function (e) {
      return e.replace(/(^\s*|\s*$)/g, "");
    };m.serializeObject = i, m.parseString = s, m.types = { html: "text/html", json: "application/json", xml: "text/xml", urlencoded: "application/x-www-form-urlencoded", form: "application/x-www-form-urlencoded", "form-data": "application/x-www-form-urlencoded" }, m.serialize = { "application/x-www-form-urlencoded": i, "application/json": JSON.stringify }, m.parse = { "application/x-www-form-urlencoded": s, "application/json": JSON.parse }, v(c.prototype), c.prototype._parseBody = function (e) {
      var t = m.parse[this.type];return this.req._parser ? this.req._parser(this, e) : (!t && u(this.type) && (t = m.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null);
    }, c.prototype.toError = function () {
      var e = this.req,
          t = e.method,
          n = e.url,
          r = "cannot " + t + " " + n + " (" + this.status + ")",
          i = new Error(r);return i.status = this.status, i.method = t, i.url = n, i;
    }, m.Response = c, d(l.prototype), p(l.prototype), l.prototype.type = function (e) {
      return this.set("Content-Type", m.types[e] || e), this;
    }, l.prototype.accept = function (e) {
      return this.set("Accept", m.types[e] || e), this;
    }, l.prototype.auth = function (e, t, n) {
      1 === arguments.length && (t = ""), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t && (n = t, t = ""), n || (n = { type: "function" == typeof btoa ? "basic" : "auto" });var r = function r(e) {
        if ("function" == typeof btoa) return btoa(e);throw new Error("Cannot use basic auth, btoa is not a function");
      };return this._auth(e, t, n, r);
    }, l.prototype.query = function (e) {
      return "string" != typeof e && (e = i(e)), e && this._query.push(e), this;
    }, l.prototype.attach = function (e, t, n) {
      if (t) {
        if (this._data) throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(e, t, n || t.name);
      }return this;
    }, l.prototype._getFormData = function () {
      return this._formData || (this._formData = new f.FormData()), this._formData;
    }, l.prototype.callback = function (e, t) {
      if (this._shouldRetry(e, t)) return this._retry();var n = this._callback;this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t);
    }, l.prototype.crossDomainError = function () {
      var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e);
    }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function () {
      return console.warn("This is not supported in browser version of superagent"), this;
    }, l.prototype.pipe = l.prototype.write = function () {
      throw Error("Streaming is not supported in browser version of superagent");
    }, l.prototype._isHost = function (e) {
      return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e);
    }, l.prototype.end = function (e) {
      return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || r, this._finalizeQueryString(), this._end();
    }, l.prototype._end = function () {
      var e = this,
          t = this.xhr = m.getXHR(),
          n = this._formData || this._data;this._setTimeouts(), t.onreadystatechange = function () {
        var n = t.readyState;if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
          var r;try {
            r = t.status;
          } catch (e) {
            r = 0;
          }if (!r) {
            if (e.timedout || e._aborted) return;return e.crossDomainError();
          }e.emit("end");
        }
      };var r = function r(t, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n);
      };if (this.hasListeners("progress")) try {
        t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"));
      } catch (e) {}try {
        this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0);
      } catch (e) {
        return this.callback(e);
      }if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
        var i = this._header["content-type"],
            o = this._serializer || m.serialize[i ? i.split(";")[0] : ""];!o && u(i) && (o = m.serialize["application/json"]), o && (n = o(n));
      }for (var s in this.header) {
        null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);
      }return this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 !== n ? n : null), this;
    }, m.agent = function () {
      return new y();
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (e) {
      y.prototype[e.toLowerCase()] = function (t, n) {
        var r = new m.Request(e, t);return this._setDefaults(r), n && r.end(n), r;
      };
    }), y.prototype.del = y.prototype.delete, m.get = function (e, t, n) {
      var r = m("GET", e);return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r;
    }, m.head = function (e, t, n) {
      var r = m("HEAD", e);return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r;
    }, m.options = function (e, t, n) {
      var r = m("OPTIONS", e);return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, m.del = h, m.delete = h, m.patch = function (e, t, n) {
      var r = m("PATCH", e);return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, m.post = function (e, t, n) {
      var r = m("POST", e);return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    }, m.put = function (e, t, n) {
      var r = m("PUT", e);return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r;
    };
  }, function (e, t) {
    var n;n = function () {
      return this;
    }();try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }e.exports = n;
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        o = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        s = function () {
      function e() {
        r(this, e), this._entries = [];
      }return o(e, [{ key: "append", value: function value(e, t) {
          if ("string" != typeof e) throw new TypeError("FormData name must be a string");if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : i(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");this._entries.push([e, t]);
        } }, { key: "set", value: function value(e, t) {
          var n = this.get(e);n ? n[1] = t : this.append(e, t);
        } }, { key: "delete", value: function value(e) {
          this._entries = this._entries.filter(function (t) {
            return t[0] !== e;
          });
        } }, { key: "entries", value: function value() {
          return this._entries;
        } }, { key: "get", value: function value(e) {
          return this._entries.find(function (t) {
            return t[0] === e;
          });
        } }, { key: "getAll", value: function value(e) {
          return this._entries.filter(function (t) {
            return t[0] === e;
          });
        } }, { key: "has", value: function value(e) {
          return this._entries.some(function (t) {
            return t[0] === e;
          });
        } }, { key: "keys", value: function value() {
          return this._entries.map(function (e) {
            return e[0];
          });
        } }, { key: "values", value: function value() {
          return this._entries.map(function (e) {
            return e[1];
          });
        } }]), e;
    }();e.exports = s;
  }, function (e, t, n) {
    "use strict";
    var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function (e) {
      return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]";
    };t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function (e, t) {
      return { listener: e, kind: t, next: null };
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(10),
        i = n(58),
        o = n(59),
        s = r.LISTENERS,
        a = r.CAPTURE,
        u = r.BUBBLE,
        c = r.ATTRIBUTE,
        l = r.newNode,
        h = i.defineCustomEventTarget,
        f = o.createEventWrapper,
        d = o.STOP_IMMEDIATE_PROPAGATION_FLAG,
        p = "undefined" != typeof window && void 0 !== window.EventTarget,
        _ = e.exports = function e() {
      if (!(this instanceof e)) {
        if (1 === arguments.length && Array.isArray(arguments[0])) return h(e, arguments[0]);if (arguments.length > 0) {
          for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) {
            t[n] = arguments[n];
          }return h(e, t);
        }throw new TypeError("Cannot call a class as a function");
      }Object.defineProperty(this, s, { value: Object.create(null) });
    };_.prototype = Object.create((p ? window.EventTarget : Object).prototype, { constructor: { value: _, writable: !0, configurable: !0 }, addEventListener: { value: function value(e, t, n) {
          if (null == t) return !1;if ("function" != typeof t && "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) throw new TypeError('"listener" is not an object.');var r = n ? a : u,
              i = this[s][e];if (null == i) return this[s][e] = l(t, r), !0;for (var o = null; null != i;) {
            if (i.listener === t && i.kind === r) return !1;o = i, i = i.next;
          }return o.next = l(t, r), !0;
        }, configurable: !0, writable: !0 }, removeEventListener: { value: function value(e, t, n) {
          if (null == t) return !1;for (var r = n ? a : u, i = null, o = this[s][e]; null != o;) {
            if (o.listener === t && o.kind === r) return null == i ? this[s][e] = o.next : i.next = o.next, !0;i = o, o = o.next;
          }return !1;
        }, configurable: !0, writable: !0 }, dispatchEvent: { value: function value(e) {
          var t = this[s][e.type];if (null == t) return !0;for (var n = f(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== c && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), !n[d]);) {
            t = t.next;
          }return !n.defaultPrevented;
        }, configurable: !0, writable: !0 } });
  }, function (e, t, n) {
    "use strict";
    var r = n(13),
        i = n(5),
        o = t.removeAsync = r.removeItemAsync.bind(r),
        s = function s(e, t) {
      try {
        e = JSON.parse(e);
      } catch (e) {
        return null;
      }if (e) {
        return e.expiredAt && e.expiredAt < Date.now() ? o(t).then(function () {
          return null;
        }) : e.value;
      }return null;
    };t.getAsync = function (e) {
      return e = "AV/" + i.applicationId + "/" + e, r.getItemAsync(e).then(function (t) {
        return s(t, e);
      });
    }, t.setAsync = function (e, t, n) {
      var o = { value: t };return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + e, JSON.stringify(o));
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(1),
        o = n(52),
        s = ["getItem", "setItem", "removeItem", "clear"];o.async ? r(s).each(function (e) {
      "function" != typeof o[e] && (o[e] = function () {
        var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");throw t.code = "SYNC_API_NOT_AVAILABLE", t;
      });
    }) : r(s).each(function (e) {
      "function" == typeof o[e] && (o[e + "Async"] = function () {
        return i.resolve(o[e].apply(o, arguments));
      });
    }), e.exports = o;
  }, function (e, t, n) {
    "use strict";
    e.exports = "3.5.0";
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        o = function () {
      function e() {
        r(this, e);
      }return i(e, [{ key: "getItem", value: function value(e) {
          return wx.getStorageSync(e);
        } }, { key: "setItem", value: function value(e, t) {
          return wx.setStorageSync(e, t);
        } }, { key: "removeItem", value: function value(e) {
          return this.setItem(e, "");
        } }, { key: "clear", value: function value() {
          return wx.clearStorageSync();
        } }]), e;
    }();e.exports = new o();
  }, function (e, t, n) {
    "use strict";
    e.exports = {};
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function s(e) {
      "" !== e.message && p && (p._readyState = f, p.dispatchEvent({ type: "error", message: e.errMsg }));
    }var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        u = n(20),
        c = n(11),
        l = 0,
        h = 1,
        f = 3,
        d = ["open", "error", "message", "close"],
        p = void 0,
        _ = function (e) {
      function t(e, n) {
        if (r(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");if (n && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return o._url = e, o._protocal = n || "", o._readyState = l, p && p.dispatchEvent({ type: "close" }), p = o, wx.onSocketOpen(function (e) {
          p && (p._readyState = h, p.dispatchEvent({ type: "open" }));
        }), wx.onSocketError(s), wx.onSocketMessage(function (e) {
          if (p) {
            var t = e.data,
                n = e.origin,
                r = e.ports,
                i = e.source;p.dispatchEvent({ data: t, origin: n, ports: r, source: i, type: "message" });
          }
        }), wx.onSocketClose(function (e) {
          if (p) {
            p._readyState = f;var t = e.code,
                n = e.reason,
                r = e.wasClean;p.dispatchEvent({ code: t, reason: n, wasClean: r, type: "close" }), p = null;
          }
        }), wx.connectSocket({ url: e, protocals: o._protocal, fail: function fail(e) {
            return setTimeout(function () {
              return s(e);
            }, 0);
          } }), o;
      }return o(t, e), a(t, [{ key: "close", value: function value() {
          this.readyState !== f && (this.readyState === l && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket());
        } }, { key: "send", value: function value(e) {
          if (this.readyState !== h) throw new Error("INVALID_STATE_ERR");if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");wx.sendSocketMessage({ data: e });
        } }, { key: "url", get: function get() {
          return this._url;
        } }, { key: "protocal", get: function get() {
          return this._protocal;
        } }, { key: "readyState", get: function get() {
          return this._readyState;
        } }]), t;
    }(c(d));u(_, { CONNECTING: l, OPEN: h, CLOSING: 2, CLOSED: f }), e.exports = _;
  }, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }function a(e) {
      this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Object.keys(e.header).reduce(function (t, n) {
        return t[n.toLowerCase()] = e.header[n], t;
      }, {}));var t = e.data;"string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, this.readyState = d, this.dispatchEvent({ type: "readystatechange" });
    }var u = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    }(),
        c = n(20),
        l = n(11),
        h = n(9),
        f = 0,
        d = 4,
        p = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
        _ = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend"],
        v = function (e) {
      function t() {
        return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
      }return s(t, e), t;
    }(l(_)),
        y = function (e) {
      function t() {
        i(this, t);var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));return e.readyState = f, e._headers = {}, e.upload = new v(), e;
      }return s(t, e), u(t, [{ key: "abort", value: function value() {
          if (!this._request || this._request.abort) return this.status = 0, this.readyState = d, this._request.abort();throw new Error("该版本基础库不支持 abort request");
        } }, { key: "getAllResponseHeaders", value: function value() {
          var e = this;return this._responseHeaders ? Object.keys(this._responseHeaders).map(function (t) {
            return t + ": " + e._responseHeaders[t];
          }).join("\r\n") : "";
        } }, { key: "getResponseHeader", value: function value(e) {
          var t = e.toLowerCase();return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null;
        } }, { key: "overrideMimeType", value: function value() {
          throw new Error("not supported in weapp");
        } }, { key: "open", value: function value(e, t) {
          var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];if (this.readyState !== f) throw new Error("request is already opened");if (!n) throw new Error("sync request is not supported");this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({ type: "readystatechange" });
        } }, { key: "setRequestHeader", value: function value(e, t) {
          if (1 !== this.readyState) throw new Error("request is not opened");this._headers[e.toLowerCase()] = t;
        } }, { key: "send", value: function value(e) {
          var t = this;if (1 !== this.readyState) throw new Error("request is not opened");if (e instanceof h) {
            var n = e.entries(),
                i = n.filter(function (e) {
              return "string" != typeof e[1];
            });if (0 === i.length) throw new Error("Must specify a Blob field in FormData");i.length > 1 && console.warn("Only the first Blob will be send in Weapp");var o = n.filter(function (e) {
              return "string" == typeof e[1];
            }).reduce(function (e, t) {
              return c(e, r({}, t[0], t[1]));
            }, {});this._request = wx.uploadFile({ url: this._url, name: i[0][0], filePath: i[0][1].uri, formData: o, header: this._headers, success: a.bind(this), fail: function fail(e) {
                t.status = 0, t.readyState = d, t.dispatchEvent({ type: "readystatechange" }), t.dispatchEvent({ type: "error" });
              } }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function (e) {
              var n = e.totalBytesSent,
                  r = e.totalBytesExpectedToSend;t.upload.dispatchEvent({ type: "progress", loaded: n, total: r });
            });
          } else this._request = wx.request({ url: this._url, data: e || "", method: this._method.toUpperCase(), header: this._headers, success: a.bind(this), fail: function fail(e) {
              t.status = 0, t.readyState = d, t.dispatchEvent({ type: "readystatechange" }), t.dispatchEvent({ type: "error" });
            } });
        } }]), t;
    }(l(p));c(y, { UNSENT: f, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: d }), e.exports = y;
  }, function (e, t) {
    var n = { utf8: { stringToBytes: function stringToBytes(e) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
        }, bytesToString: function bytesToString(e) {
          return decodeURIComponent(escape(n.bin.bytesToString(e)));
        } }, bin: { stringToBytes: function stringToBytes(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            t.push(255 & e.charCodeAt(n));
          }return t;
        }, bytesToString: function bytesToString(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            t.push(String.fromCharCode(e[n]));
          }return t.join("");
        } } };e.exports = n;
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e);
    } /*
      object-assign
      (c) Sindre Sorhus
      @license MIT
      */
    var i = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;e.exports = function () {
      try {
        if (!Object.assign) return !1;var e = new String("abc");if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;for (var t = {}, n = 0; n < 10; n++) {
          t["_" + String.fromCharCode(n)] = n;
        }if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return !1;var r = {};return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          r[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
      } catch (e) {
        return !1;
      }
    }() ? Object.assign : function (e, t) {
      for (var n, a, u = r(e), c = 1; c < arguments.length; c++) {
        n = Object(arguments[c]);for (var l in n) {
          o.call(n, l) && (u[l] = n[l]);
        }if (i) {
          a = i(n);for (var h = 0; h < a.length; h++) {
            s.call(n, a[h]) && (u[a[h]] = n[a[h]]);
          }
        }
      }return u;
    };
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
    }e.exports = r;
  }, function (e, t, n) {
    "use strict";
    var r = n(0);e.exports = function (e) {
      e.ACL = function (t) {
        var n = this;if (n.permissionsById = {}, r.isObject(t)) if (t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);else {
          if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");e._objectEach(t, function (t, i) {
            if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");n.permissionsById[i] = {}, e._objectEach(t, function (e, t) {
              if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");n.permissionsById[i][t] = e;
            });
          });
        }
      }, e.ACL.prototype.toJSON = function () {
        return r.clone(this.permissionsById);
      }, e.ACL.prototype._setAccess = function (t, n, i) {
        if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");var o = this.permissionsById[n];if (!o) {
          if (!i) return;o = {}, this.permissionsById[n] = o;
        }i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n]);
      }, e.ACL.prototype._getAccess = function (t, n) {
        n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());var r = this.permissionsById[n];return !!r && !!r[t];
      }, e.ACL.prototype.setReadAccess = function (e, t) {
        this._setAccess("read", e, t);
      }, e.ACL.prototype.getReadAccess = function (e) {
        return this._getAccess("read", e);
      }, e.ACL.prototype.setWriteAccess = function (e, t) {
        this._setAccess("write", e, t);
      }, e.ACL.prototype.getWriteAccess = function (e) {
        return this._getAccess("write", e);
      }, e.ACL.prototype.setPublicReadAccess = function (e) {
        this.setReadAccess("*", e);
      }, e.ACL.prototype.getPublicReadAccess = function () {
        return this.getReadAccess("*");
      }, e.ACL.prototype.setPublicWriteAccess = function (e) {
        this.setWriteAccess("*", e);
      }, e.ACL.prototype.getPublicWriteAccess = function () {
        return this.getWriteAccess("*");
      }, e.ACL.prototype.getRoleReadAccess = function (t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);throw new Error("role must be a AV.Role or a String");
      }, e.ACL.prototype.getRoleWriteAccess = function (t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);throw new Error("role must be a AV.Role or a String");
      }, e.ACL.prototype.setRoleReadAccess = function (t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setReadAccess("role:" + t, n);throw new Error("role must be a AV.Role or a String");
      }, e.ACL.prototype.setRoleWriteAccess = function (t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setWriteAccess("role:" + t, n);throw new Error("role must be a AV.Role or a String");
      };
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(3),
        o = i.tap;e.exports = function (e) {
      e.Captcha = function (e, t) {
        this._options = e, this._authOptions = t, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0;
      }, e.Captcha.prototype.refresh = function () {
        var t = this;return e.Cloud._requestCaptcha(this._options, this._authOptions).then(function (e) {
          var n = e.captchaToken,
              i = e.url;return r.extend(t, { captchaToken: n, url: i }), i;
        });
      }, e.Captcha.prototype.verify = function (t) {
        var n = this;return e.Cloud.verifyCaptcha(t, this.captchaToken).then(o(function (e) {
          return n.validateToken = e;
        }));
      }, e.Captcha.request = function (t, n) {
        var r = new e.Captcha(t, n);return r.refresh().then(function () {
          return r;
        });
      };
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(2),
        o = i._request,
        s = i.request,
        a = n(1);e.exports = function (e) {
      e.Cloud = e.Cloud || {}, r.extend(e.Cloud, { run: function run(t, n, r) {
          return s({ service: "engine", method: "POST", path: "/functions/" + t, data: e._encode(n, null, !0), authOptions: r }).then(function (t) {
            return e._decode(t).result;
          });
        }, rpc: function rpc(t, n, i) {
          return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({ service: "engine", method: "POST", path: "/call/" + t, data: e._encodeObjectOrArray(n), authOptions: i }).then(function (t) {
            return e._decode(t).result;
          });
        }, getServerDate: function getServerDate() {
          return o("date", null, null, "GET").then(function (t) {
            return e._decode(t);
          });
        }, requestSmsCode: function requestSmsCode(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (r.isString(e) && (e = { mobilePhoneNumber: e }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");return t.validateToken && (e = r.extend({}, e, { validate_token: t.validateToken })), o("requestSmsCode", null, null, "POST", e, t);
        }, verifySmsCode: function verifySmsCode(e, t) {
          if (!e) throw new Error("Missing sms code.");var n = {};return r.isString(t) && (n.mobilePhoneNumber = t), o("verifySmsCode", e, null, "POST", n);
        }, _requestCaptcha: function _requestCaptcha(e, t) {
          return o("requestCaptcha", null, null, "GET", e, t).then(function (e) {
            var t = e.captcha_url;return { captchaToken: e.captcha_token, url: t };
          });
        }, requestCaptcha: e.Captcha.request, verifyCaptcha: function verifyCaptcha(e, t) {
          return o("verifyCaptcha", null, null, "POST", { captcha_code: e, captcha_token: t }).then(function (e) {
            return e.validate_token;
          });
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(2),
        o = i._request,
        s = n(5);e.exports = s.Object.extend("_Conversation", { constructor: function constructor(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};s.Object.prototype.constructor.call(this, null, null), this.set("name", e), void 0 !== t.isSystem && this.set("sys", !!t.isSystem), void 0 !== t.isTransient && this.set("tr", !!t.isTransient);
      }, getCreator: function getCreator() {
        return this.get("c");
      }, getLastMessageAt: function getLastMessageAt() {
        return this.get("lm");
      }, getMembers: function getMembers() {
        return this.get("m");
      }, addMember: function addMember(e) {
        return this.add("m", e);
      }, getMutedMembers: function getMutedMembers() {
        return this.get("mu");
      }, getName: function getName() {
        return this.get("name");
      }, isTransient: function isTransient() {
        return this.get("tr");
      }, isSystem: function isSystem() {
        return this.get("sys");
      }, send: function send(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};"function" == typeof t.toJSON && (t = t.toJSON()), "string" != typeof t && (t = JSON.stringify(t));var i = { from_peer: e, conv_id: this.id, transient: !1, message: t };return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), o("rtm", "messages", null, "POST", i, r);
      }, broadcast: function broadcast(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};"function" == typeof t.toJSON && (t = t.toJSON()), "string" != typeof t && (t = JSON.stringify(t));var s = { from_peer: e, conv_id: this.id, message: t };if (void 0 !== n.pushData && (s.push = n.pushData), void 0 !== n.validTill) {
          var a = n.validTill;r.isDate(a) && (a = a.getTime()), n.valid_till = a;
        }return o("rtm", "broadcast", null, "POST", s, i);
      } });
  }, function (e, t, n) {
    "use strict";
    var r = n(0);e.exports = function (e) {
      var t = /\s+/,
          n = Array.prototype.slice;e.Events = { on: function on(e, n, r) {
          var i, o, s, a, u;if (!n) return this;for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o;) {
            u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = { tail: a, next: u ? u.next : s }, o = e.shift();
          }return this;
        }, off: function off(e, n, i) {
          var o, s, a, u, c, l;if (s = this._callbacks) {
            if (!(e || n || i)) return delete this._callbacks, this;for (e = e ? e.split(t) : r.keys(s), o = e.shift(); o;) {
              if (a = s[o], delete s[o], a && (n || i)) {
                for (u = a.tail, a = a.next; a !== u;) {
                  c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), a = a.next;
                }o = e.shift();
              }
            }return this;
          }
        }, trigger: function trigger(e) {
          var r, i, o, s, a, u, c;if (!(o = this._callbacks)) return this;for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
            if (i = o[r]) for (s = i.tail; (i = i.next) !== s;) {
              i.callback.apply(i.context || this, c);
            }if (i = u) for (s = i.tail, a = [r].concat(c); (i = i.next) !== s;) {
              i.callback.apply(i.context || this, a);
            }r = e.shift();
          }return this;
        } }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(49),
        o = n(50),
        s = n(51),
        a = n(4),
        u = n(2)._request,
        c = n(1),
        l = n(3),
        h = l.tap,
        f = l.transformFetchOptions,
        d = n(6)("leancloud:file"),
        p = n(53);e.exports = function (e) {
      var t = function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      },
          n = function n(e) {
        return r.isString(e) ? e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : "";
      },
          l = function l(e) {
        if (e < 26) return String.fromCharCode(65 + e);if (e < 52) return String.fromCharCode(e - 26 + 97);if (e < 62) return String.fromCharCode(e - 52 + 48);if (62 === e) return "+";if (63 === e) return "/";throw new Error("Tried to encode large digit " + e + " in base64.");
      },
          _ = function _(e) {
        var t = [];return t.length = Math.ceil(e.length / 3), r.times(t.length, function (n) {
          var r = e[3 * n],
              i = e[3 * n + 1] || 0,
              o = e[3 * n + 2] || 0,
              s = 3 * n + 1 < e.length,
              a = 3 * n + 2 < e.length;t[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), s ? l(i << 2 & 60 | o >> 6 & 3) : "=", a ? l(63 & o) : "="].join("");
        }), t.join("");
      };e.File = function (t, i, o) {
        if (this.attributes = { name: t, url: "", metaData: {}, base64: "" }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");r.isArray(i) && (this.attributes.metaData.size = i.length, i = { base64: _(i) }), this._extName = "", this._data = i, this._uploadHeaders = {}, i && i.blob && (this._extName = n(i.blob.uri)), "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), i.name && (this._extName = n(i.name)));var s = void 0;if (i && i.owner) s = i.owner;else if (!e._config.disableCurrentUser) try {
          s = e.User.current();
        } catch (e) {
          if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().");
        }this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", o);
      }, e.File.withURL = function (t, n, r, i) {
        if (!t || !n) throw new Error("Please provide file name and url");var o = new e.File(t, null, i);if (r) for (var s in r) {
          o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
        }return o.attributes.url = n, o.attributes.metaData.__source = "external", o;
      }, e.File.createWithoutData = function (t) {
        var n = new e.File();return n.id = t, n;
      }, r.extend(e.File.prototype, { className: "_File", _toFullJSON: function _toFullJSON(t) {
          var n = this,
              i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              o = r.clone(this.attributes);return e._objectEach(o, function (n, r) {
            o[r] = e._encode(n, t, void 0, i);
          }), e._objectEach(this._operations, function (e, t) {
            o[t] = e;
          }), r.has(this, "id") && (o.objectId = this.id), r(["createdAt", "updatedAt"]).each(function (e) {
            if (r.has(n, e)) {
              var t = n[e];o[e] = r.isDate(t) ? t.toJSON() : t;
            }
          }), i && (o.__type = "File"), o;
        }, toFullJSON: function toFullJSON() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];return this._toFullJSON(e);
        }, toJSON: function toJSON(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];return this._toFullJSON(n, !1);
        }, getACL: function getACL() {
          return this._acl;
        }, setACL: function setACL(t) {
          if (!(t instanceof e.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");this._acl = t;
        }, name: function name() {
          return this.get("name");
        }, url: function url() {
          return this.get("url");
        }, get: function get(e) {
          switch (e) {case "objectId":
              return this.id;case "url":case "name":case "mime_type":case "metaData":case "createdAt":case "updatedAt":
              return this.attributes[e];default:
              return this.attributes.metaData[e];}
        }, set: function set() {
          for (var e = this, t = function t(_t3, n) {
            switch (_t3) {case "name":case "url":case "mime_type":case "base64":case "metaData":
                e.attributes[_t3] = n;break;default:
                e.attributes.metaData[_t3] = n;}
          }, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
            r[i] = arguments[i];
          }switch (r.length) {case 1:
              for (var o in r[0]) {
                t(o, r[0][o]);
              }break;case 2:
              t(r[0], r[1]);}
        }, setUploadHeader: function setUploadHeader(e, t) {
          return this._uploadHeaders[e] = t, this;
        }, metaData: function metaData(e, t) {
          return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData;
        }, thumbnailURL: function thumbnailURL(e, t, n, r, i) {
          var o = this.attributes.url;if (!o) throw new Error("Invalid url.");if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");if (n = n || 100, r = r || !0, n <= 0 || n > 100) throw new Error("Invalid quality value.");return i = i || "png", o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i;
        }, size: function size() {
          return this.metaData().size;
        }, ownerId: function ownerId() {
          return this.metaData().owner;
        }, destroy: function destroy(e) {
          return this.id ? u("files", null, this.id, "DELETE", null, e) : c.reject(new Error("The file id is not eixsts."));
        }, _fileToken: function _fileToken(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fileTokens",
              i = this.attributes.name,
              o = n(i);!o && this._extName && (i += this._extName, o = this._extName);var s = t() + t() + t() + t() + t() + o,
              a = { key: s, name: i, ACL: this._acl, mime_type: e, metaData: this.attributes.metaData };return this._qiniu_key = s, u(r, null, null, "POST", a);
        }, save: function save(e) {
          var t = this;if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");if (!this._previousSave) if (this._data) {
            var n = this.get("mime_type");this._previousSave = this._fileToken(n).then(function (r) {
              return r.mime_type && (n = r.mime_type, t.set("mime_type", n)), t._token = r.token, c.resolve().then(function () {
                var e = t._data;if (e && e.base64) return p(e.base64, n);if (e && e.blob) return !e.blob.type && n && (e.blob.type = n), e.blob.name || (e.blob.name = t.get("name")), e.blob;if ("undefined" != typeof Blob && e instanceof Blob) return e;throw new TypeError("malformed file data");
              }).then(function (n) {
                switch (r.provider) {case "s3":
                    return s(r, n, t, e);case "qcloud":
                    return i(r, n, t, e);case "qiniu":default:
                    return o(r, n, t, e);}
              }).then(h(function () {
                return t._callback(!0);
              }), function (e) {
                throw t._callback(!1), e;
              });
            });
          } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
            var r = { name: this.attributes.name, ACL: this._acl, metaData: this.attributes.metaData, mime_type: this.mimeType, url: this.attributes.url };this._previousSave = u("files", this.attributes.name, null, "post", r).then(function (e) {
              return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t;
            });
          }return this._previousSave;
        }, _callback: function _callback(e) {
          u("fileCallback", null, null, "post", { token: this._token, result: e }).catch(d), delete this._token, delete this._data;
        }, fetch: function fetch(e, t) {
          return u("files", null, this.id, "GET", f(e), t).then(this._finishFetch.bind(this));
        }, _finishFetch: function _finishFetch(t) {
          var n = e.Object.prototype.parse(t);return n.attributes = { name: n.name, url: n.url, mime_type: n.mime_type, bucket: n.bucket }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this;
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0);e.exports = function (e) {
      e.GeoPoint = function (t, n) {
        r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);var i = this;this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
          return i._latitude;
        }), this.__defineGetter__("longitude", function () {
          return i._longitude;
        }), this.__defineSetter__("latitude", function (t) {
          e.GeoPoint._validate(t, i.longitude), i._latitude = t;
        }), this.__defineSetter__("longitude", function (t) {
          e.GeoPoint._validate(i.latitude, t), i._longitude = t;
        }));
      }, e.GeoPoint._validate = function (e, t) {
        if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.");
      }, e.GeoPoint.current = function () {
        return new e.Promise(function (t, n) {
          navigator.geolocation.getCurrentPosition(function (n) {
            t(new e.GeoPoint({ latitude: n.coords.latitude, longitude: n.coords.longitude }));
          }, n);
        });
      }, r.extend(e.GeoPoint.prototype, { toJSON: function toJSON() {
          return e.GeoPoint._validate(this.latitude, this.longitude), { __type: "GeoPoint", latitude: this.latitude, longitude: this.longitude };
        }, radiansTo: function radiansTo(e) {
          var t = Math.PI / 180,
              n = this.latitude * t,
              r = this.longitude * t,
              i = e.latitude * t,
              o = e.longitude * t,
              s = n - i,
              a = r - o,
              u = Math.sin(s / 2),
              c = Math.sin(a / 2),
              l = u * u + Math.cos(n) * Math.cos(i) * c * c;return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l));
        }, kilometersTo: function kilometersTo(e) {
          return 6371 * this.radiansTo(e);
        }, milesTo: function milesTo(e) {
          return 3958.8 * this.radiansTo(e);
        } });
    };
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      if ("us" === t) return h("https://us-api.leancloud.cn");var n = void 0;switch (e.slice(-9)) {case "-9Nh9j0Va":
          return h("https://e1-api.leancloud.cn");case "-MdYXbMMI":
          return h("https://us-api.leancloud.cn");default:
          return n = e.slice(0, 8).toLowerCase(), { push: "https://" + n + ".push.lncld.net", stats: "https://" + n + ".stats.lncld.net", engine: "https://" + n + ".engine.lncld.net", api: "https://" + n + ".api.lncld.net" };}
    }var i = n(5),
        o = n(45),
        s = n(3),
        a = s.isNullOrUndefined,
        u = n(0),
        c = u.extend,
        l = u.isObject,
        h = function h(e) {
      return { push: e, stats: e, engine: e, api: e };
    },
        f = !1;i.init = function (e) {
      if (!l(e)) return i.init({ appId: e, appKey: arguments.length <= 1 ? void 0 : arguments[1], masterKey: arguments.length <= 2 ? void 0 : arguments[2], region: arguments.length <= 3 ? void 0 : arguments[3] });var t = e.appId,
          n = e.appKey,
          s = e.masterKey,
          a = (e.hookKey, e.region),
          u = void 0 === a ? "cn" : a,
          d = e.serverURLs,
          p = e.disableCurrentUser,
          _ = e.production,
          v = e.realtime;if (i.applicationId) throw new Error("SDK is already initialized.");if (!t) throw new TypeError("appId must be a string");if (!n) throw new TypeError("appKey must be a string");s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = t, i._config.applicationKey = n, i._config.masterKey = s, void 0 !== _ && (i._config.production = _), void 0 !== p && (i._config.disableCurrentUser = p), i._appRouter = new o(i);var y = f || void 0 !== d || "cn" !== u;i._setServerURLs(c({}, r(t, u), i._config.serverURLs, "string" == typeof d ? h(d) : d), y), v ? i._config.realtime = v : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({ appId: t, appKey: n, region: u }));
    }, i.setProduction = function (e) {
      a(e) ? i._config.production = null : i._config.production = e ? 1 : 0;
    }, i._setServerURLs = function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];"string" != typeof e ? c(i._config.serverURLs, e) : i._config.serverURLs = h(e), t && (i._appRouter ? i._appRouter.disable() : f = !0);
    }, i.setServerURLs = function (e) {
      return i._setServerURLs(e);
    }, i.keepErrorRawMessage = function (e) {
      i._sharedConfig.keepErrorRawMessage = e;
    }, i.initialize = i.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(function (e) {
      return Object.defineProperty(i, e, { get: function get() {
          return i._config[e];
        }, set: function set(t) {
          i._config[e] = t;
        } });
    });
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(4),
        o = n(2),
        s = o.request;e.exports = function (e) {
      e.Insight = e.Insight || {}, r.extend(e.Insight, { startJob: function startJob(t, n) {
          if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");var r = { jobConfig: t, appId: e.applicationId };return s({ path: "/bigquery/jobs", method: "POST", data: e._encode(r, null, !0), authOptions: n, signKey: !1 }).then(function (t) {
            return e._decode(t).id;
          });
        }, on: function on(e, t) {} }), e.Insight.JobQuery = function (e, t) {
        if (!e) throw new Error("Please provide the job id.");this.id = e, this.className = t, this._skip = 0, this._limit = 100;
      }, r.extend(e.Insight.JobQuery.prototype, { skip: function skip(e) {
          return this._skip = e, this;
        }, limit: function limit(e) {
          return this._limit = e, this;
        }, find: function find(t) {
          var n = { skip: this._skip, limit: this._limit };return s({ path: "/bigquery/jobs/" + this.id, method: "GET", query: n, authOptions: t, signKey: !1 }).then(function (t) {
            return t.error ? e.Promise.reject(new i(t.code, t.error)) : e.Promise.resolve(t);
          });
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(60),
        o = n(1),
        s = n(3),
        a = s.inherits,
        u = n(2),
        c = u.request;e.exports = function (e) {
      e.LiveQuery = a(i, { constructor: function constructor(e, t) {
          i.apply(this), this.id = e, this._client = t, this._client.register(this), t.on("message", this._dispatch.bind(this));
        }, _dispatch: function _dispatch(t) {
          var n = this;t.forEach(function (t) {
            var i = t.op,
                o = t.object,
                s = t.query_id,
                a = t.updatedKeys;if (s === n.id) {
              var u = e.parseJSON(r.extend({ __type: "_File" === o.className ? "File" : "Object" }, o));a ? n.emit(i, u, a) : n.emit(i, u);
            }
          });
        }, unsubscribe: function unsubscribe() {
          return this._client.deregister(this), c({ method: "POST", path: "/LiveQuery/unsubscribe", data: { id: this._client.id, query_id: this.id } });
        } }, { init: function init(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = n.subscriptionId,
              i = void 0 === r ? e._getSubscriptionId() : r;if (!e._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");if (!(t instanceof e.Query)) throw new TypeError("LiveQuery must be inited with a Query");var s = t.toJSON(),
              a = s.where,
              u = s.keys,
              l = s.returnACL;return o.resolve(i).then(function (n) {
            return c({ method: "POST", path: "/LiveQuery/subscribe", data: { query: { where: a, keys: u, returnACL: l, className: t.className }, id: n } }).then(function (t) {
              var r = t.query_id;return e._config.realtime.createLiveQueryClient(n).then(function (t) {
                return new e.LiveQuery(r, t);
              });
            });
          });
        } });
    };
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      return e && e[t] ? o.isFunction(e[t]) ? e[t]() : e[t] : null;
    }var i = function () {
      function e(e, t) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;try {
          for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0) {}
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            !r && a.return && a.return();
          } finally {
            if (i) throw o;
          }
        }return n;
      }return function (t, n) {
        if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return e(t, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(),
        o = n(0),
        s = n(4),
        a = n(2),
        u = a._request,
        c = n(3),
        l = c.isNullOrUndefined,
        h = c.ensureArray,
        f = c.transformFetchOptions,
        d = c.setValue,
        p = c.findValue,
        _ = ["objectId", "createdAt", "updatedAt"],
        v = function v(e) {
      if (-1 !== _.indexOf(e)) throw new Error("key[" + e + "] is reserved");
    },
        y = function y(e) {
      var t = o.find(e, function (e) {
        return e instanceof Error;
      });if (!t) return e;var n = new s(t.code, t.message);throw n.results = e, n;
    };e.exports = function (e) {
      e.Object = function (t, n) {
        if (o.isString(t)) return e.Object._create.apply(this, arguments);t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));var i = r(this, "defaults");i && (t = o.extend({}, i, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = o.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, { silent: !0 }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = o.clone(this.attributes), this.initialize.apply(this, arguments);
      }, e.Object.saveAll = function (t, n) {
        return e.Object._deepSaveAsync(t, null, n);
      }, e.Object.fetchAll = function (t, n) {
        return e.Promise.resolve().then(function () {
          return u("batch", null, null, "POST", { requests: o.map(t, function (e) {
              if (!e.className) throw new Error("object must have className to fetch");if (!e.id) throw new Error("object must have id to fetch");if (e.dirty()) throw new Error("object is modified but not saved");return { method: "GET", path: "/1.1/classes/" + e.className + "/" + e.id };
            }) }, n);
        }).then(function (e) {
          var n = o.map(t, function (t, n) {
            return e[n].success ? (t._finishFetch(t.parse(e[n].success)), t) : null === e[n].success ? new s(s.OBJECT_NOT_FOUND, "Object not found.") : new s(e[n].error.code, e[n].error.error);
          });return y(n);
        });
      }, o.extend(e.Object.prototype, e.Events, { _fetchWhenSave: !1, initialize: function initialize() {}, fetchWhenSave: function fetchWhenSave(e) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !o.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");this._fetchWhenSave = e;
        }, getObjectId: function getObjectId() {
          return this.id;
        }, getCreatedAt: function getCreatedAt() {
          return this.createdAt || this.get("createdAt");
        }, getUpdatedAt: function getUpdatedAt() {
          return this.updatedAt || this.get("updatedAt");
        }, toJSON: function toJSON(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];return this._toFullJSON(n, !1);
        }, toFullJSON: function toFullJSON() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];return this._toFullJSON(e);
        }, _toFullJSON: function _toFullJSON(t) {
          var n = this,
              r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              i = o.clone(this.attributes);if (o.isArray(t)) var s = t.concat(this);return e._objectEach(i, function (t, n) {
            i[n] = e._encode(t, s, void 0, r);
          }), e._objectEach(this._operations, function (e, t) {
            i[t] = e;
          }), o.has(this, "id") && (i.objectId = this.id), o(["createdAt", "updatedAt"]).each(function (e) {
            if (o.has(n, e)) {
              var t = n[e];i[e] = o.isDate(t) ? t.toJSON() : t;
            }
          }), r && (i.__type = "Object", o.isArray(t) && t.length && (i.__type = "Pointer"), i.className = this.className), i;
        }, _refreshCache: function _refreshCache() {
          var t = this;t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function (n, r) {
            n instanceof e.Object ? n._refreshCache() : o.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), { silent: !0 });
          }), delete t._refreshingCache);
        }, dirty: function dirty(e) {
          return this._refreshCache(), this._dirty();
        }, _dirty: function _dirty(e) {
          var t = o.last(this._opSetQueue);return e ? !!t[e] : !this.id || o.keys(t).length > 0;
        }, _toPointer: function _toPointer() {
          return { __type: "Pointer", className: this.className, objectId: this.id };
        }, get: function get(e) {
          switch (e) {case "objectId":
              return this.id;case "createdAt":case "updatedAt":
              return this[e];default:
              return this.attributes[e];}
        }, relation: function relation(t) {
          var n = this.get(t);if (n) {
            if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);return n._ensureParentAndKey(this, t), n;
          }return new e.Relation(this, t);
        }, escape: function escape(e) {
          var t = this._escapedAttributes[e];if (t) return t;var n,
              r = this.attributes[e];return n = l(r) ? "" : o.escape(r.toString()), this._escapedAttributes[e] = n, n;
        }, has: function has(e) {
          return !l(this.attributes[e]);
        }, _mergeMagicFields: function _mergeMagicFields(t) {
          var n = this,
              r = ["objectId", "createdAt", "updatedAt"];return e._arrayEach(r, function (r) {
            t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || o.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), delete t[r]);
          }), t;
        }, _startSave: function _startSave() {
          this._opSetQueue.push({});
        }, _cancelSave: function _cancelSave() {
          var t = o.first(this._opSetQueue);this._opSetQueue = o.rest(this._opSetQueue);var n = o.first(this._opSetQueue);e._objectEach(t, function (e, r) {
            var i = t[r],
                o = n[r];i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i);
          }), this._saving = this._saving - 1;
        }, _finishSave: function _finishSave(t) {
          var n = {};e._traverse(this.attributes, function (t) {
            t instanceof e.Object && t.id && t._hasData && (n[t.id] = t);
          });var r = o.first(this._opSetQueue);this._opSetQueue = o.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(t);var i = this;e._objectEach(t, function (t, r) {
            i._serverData[r] = e._decode(t, r);var o = e._traverse(i._serverData[r], function (t) {
              if (t instanceof e.Object && n[t.id]) return n[t.id];
            });o && (i._serverData[r] = o);
          }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1;
        }, _finishFetch: function _finishFetch(t, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(t);var r = this;e._objectEach(t, function (t, n) {
            r._serverData[n] = e._decode(t, n);
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n;
        }, _applyOpSet: function _applyOpSet(t, n) {
          var r = this;e._objectEach(t, function (t, o) {
            var s = p(n, o),
                a = i(s, 3),
                u = a[0],
                c = a[1],
                l = a[2];d(n, o, t._estimate(u, r, o)), c && c[l] === e.Op._UNSET && delete c[l];
          });
        }, _resetCacheForKey: function _resetCacheForKey(t) {
          var n = this.attributes[t];if (o.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
            n = n.toJSON ? n.toJSON() : n;var r = JSON.stringify(n);if (this._hashedJSON[t] !== r) {
              var i = !!this._hashedJSON[t];return this._hashedJSON[t] = r, i;
            }
          }return !1;
        }, _rebuildEstimatedDataForKey: function _rebuildEstimatedDataForKey(t) {
          var n = this;delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function (r) {
            var o = r[t];if (o) {
              var s = p(n.attributes, t),
                  a = i(s, 3),
                  u = a[0],
                  c = a[1],
                  l = a[2];d(n.attributes, t, o._estimate(u, n, t)), c && c[l] === e.Op._UNSET ? delete c[l] : n._resetCacheForKey(t);
            }
          });
        }, _rebuildAllEstimatedData: function _rebuildAllEstimatedData() {
          var t = this,
              n = o.clone(this.attributes);this.attributes = o.clone(this._serverData), e._arrayEach(this._opSetQueue, function (n) {
            t._applyOpSet(n, t.attributes), e._objectEach(n, function (e, n) {
              t._resetCacheForKey(n);
            });
          }), e._objectEach(n, function (e, n) {
            t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {});
          }), e._objectEach(this.attributes, function (e, r) {
            o.has(n, r) || t.trigger("change:" + r, t, e, {});
          });
        }, set: function set(t, n, r) {
          var i;if (o.isObject(t) || l(t) ? (i = o.mapObject(t, function (t, n) {
            return v(n), e._decode(t, n);
          }), r = n) : (i = {}, v(t), i[t] = e._decode(n, t)), r = r || {}, !i) return this;i instanceof e.Object && (i = i.attributes), r.unset && e._objectEach(i, function (t, n) {
            i[n] = new e.Op.Unset();
          });var s = o.clone(i),
              a = this;e._objectEach(s, function (t, n) {
            t instanceof e.Op && (s[n] = t._estimate(a.attributes[n], a, n), s[n] === e.Op._UNSET && delete s[n]);
          }), this._validate(i, r), r.changes = {};var u = this._escapedAttributes;this._previousAttributes;return e._arrayEach(o.keys(i), function (t) {
            var n = i[t];n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));var s = !0;n instanceof e.Op.Set && o.isEqual(a.attributes[t], n.value) && (s = !1), s && (delete u[t], r.silent ? a._silent[t] = !0 : r.changes[t] = !0);var c = o.last(a._opSetQueue);c[t] = n._mergeWithPrevious(c[t]), a._rebuildEstimatedDataForKey(t), s ? (a.changed[t] = a.attributes[t], r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t]);
          }), r.silent || this.change(r), this;
        }, unset: function unset(e, t) {
          return t = t || {}, t.unset = !0, this.set(e, null, t);
        }, increment: function increment(t, n) {
          return (o.isUndefined(n) || o.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n));
        }, add: function add(t, n) {
          return this.set(t, new e.Op.Add(h(n)));
        }, addUnique: function addUnique(t, n) {
          return this.set(t, new e.Op.AddUnique(h(n)));
        }, remove: function remove(t, n) {
          return this.set(t, new e.Op.Remove(h(n)));
        }, bitAnd: function bitAnd(t, n) {
          return this.set(t, new e.Op.BitAnd(n));
        }, bitOr: function bitOr(t, n) {
          return this.set(t, new e.Op.BitOr(n));
        }, bitXor: function bitXor(t, n) {
          return this.set(t, new e.Op.BitXor(n));
        }, op: function op(e) {
          return o.last(this._opSetQueue)[e];
        }, clear: function clear(e) {
          e = e || {}, e.unset = !0;var t = o.extend(this.attributes, this._operations);return this.set(t, e);
        }, _getSaveJSON: function _getSaveJSON() {
          var t = o.clone(o.first(this._opSetQueue));return e._objectEach(t, function (e, n) {
            t[n] = e.toJSON();
          }), t;
        }, _canBeSerialized: function _canBeSerialized() {
          return e.Object._canBeSerializedAsValue(this.attributes);
        }, fetch: function fetch(e, t) {
          var n = this;return u("classes", this.className, this.id, "GET", f(e), t).then(function (e) {
            return n._finishFetch(n.parse(e), !0), n;
          });
        }, save: function save(t, n, r) {
          var i, s, a;o.isObject(t) || l(t) ? (i = t, a = n) : (i = {}, i[t] = n, a = r), a = o.clone(a) || {}, a.wait && (s = o.clone(this.attributes));var c = o.clone(a) || {};c.wait && (c.silent = !0), i && this.set(i, c);var h = this,
              f = [],
              d = [];return e.Object._findUnsavedChildren(h, f, d), f.length + d.length > 1 ? e.Object._deepSaveAsync(this, h, a) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function (e) {}).then(function () {
            var e = h.id ? "PUT" : "POST",
                t = h._getSaveJSON(),
                n = {};if ((h._fetchWhenSave || a.fetchWhenSave) && (n.new = "true"), a.query) {
              var r;if ("function" == typeof a.query.toJSON && (r = a.query.toJSON()) && (n.where = r.where), !n.where) {
                throw new Error("options.query is not an AV.Query");
              }
            }o.extend(t, h._flags);var l = "classes",
                f = h.className;"_User" !== h.className || h.id || (l = "users", f = null);var d = a._makeRequest || u,
                p = d(l, f, h.id, e, t, a, n);return p = p.then(function (e) {
              var t = h.parse(e);return a.wait && (t = o.extend(i || {}, t)), h._finishSave(t), a.wait && h.set(s, c), h;
            }, function (e) {
              throw h._cancelSave(), e;
            });
          }), this._allPreviousSaves);
        }, destroy: function destroy(e) {
          e = e || {};var t = this,
              n = function n() {
            t.trigger("destroy", t, t.collection, e);
          };return this.id ? (e.wait || n(), u("classes", this.className, this.id, "DELETE", this._flags, e).then(function () {
            return e.wait && n(), t;
          })) : n();
        }, parse: function parse(t) {
          var n = o.clone(t);return o(["createdAt", "updatedAt"]).each(function (t) {
            n[t] && (n[t] = e._parseDate(n[t]));
          }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n;
        }, clone: function clone() {
          return new this.constructor(this.attributes);
        }, isNew: function isNew() {
          return !this.id;
        }, change: function change(t) {
          t = t || {};var n = this._changing;this._changing = !0;var r = this;e._objectEach(this._silent, function (e) {
            r._pending[e] = !0;
          });var i = o.extend({}, t.changes, this._silent);if (this._silent = {}, e._objectEach(i, function (e, n) {
            r.trigger("change:" + n, r, r.get(n), t);
          }), n) return this;for (var s = function s(e, t) {
            r._pending[t] || r._silent[t] || delete r.changed[t];
          }; !o.isEmpty(this._pending);) {
            this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, s), r._previousAttributes = o.clone(this.attributes);
          }return this._changing = !1, this;
        }, hasChanged: function hasChanged(e) {
          return arguments.length ? this.changed && o.has(this.changed, e) : !o.isEmpty(this.changed);
        }, changedAttributes: function changedAttributes(t) {
          if (!t) return !!this.hasChanged() && o.clone(this.changed);var n = {},
              r = this._previousAttributes;return e._objectEach(t, function (e, t) {
            o.isEqual(r[t], e) || (n[t] = e);
          }), n;
        }, previous: function previous(e) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null;
        }, previousAttributes: function previousAttributes() {
          return o.clone(this._previousAttributes);
        }, isValid: function isValid() {
          try {
            this.validate(this.attributes);
          } catch (e) {
            return !1;
          }return !0;
        }, validate: function validate(t) {
          if (o.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.");
        }, _validate: function _validate(e, t) {
          !t.silent && this.validate && (e = o.extend({}, this.attributes, e), this.validate(e));
        }, getACL: function getACL() {
          return this.get("ACL");
        }, setACL: function setACL(e, t) {
          return this.set("ACL", e, t);
        }, disableBeforeHook: function disableBeforeHook() {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete");
        }, disableAfterHook: function disableAfterHook() {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete");
        }, ignoreHook: function ignoreHook(t) {
          o.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], t) || console.trace("Unsupported hookName: " + t), e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(t);
        } }), e.Object.createWithoutData = function (t, n, r) {
        var i = new e.Object(t);return i.id = n, i._hasData = r, i;
      }, e.Object.destroyAll = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (!t || 0 === t.length) return e.Promise.resolve();var r = o.groupBy(t, function (e) {
          return JSON.stringify({ className: e.className, flags: e._flags });
        }),
            i = { requests: o.map(r, function (e) {
            var t = o.map(e, "id").join(",");return { method: "DELETE", path: "/1.1/classes/" + e[0].className + "/" + t, body: e[0]._flags };
          }) };return u("batch", null, null, "POST", i, n).then(function (e) {
          var t = o.find(e, function (e) {
            return !e.success;
          });if (t) throw new s(t.error.code, t.error.error);
        });
      }, e.Object._getSubclass = function (t) {
        if (!o.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");var n = e.Object._classMap[t];return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n;
      }, e.Object._create = function (t, n, r) {
        return new (e.Object._getSubclass(t))(n, r);
      }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function (t, n) {
        return new e.Object(t, n);
      }, e.Object.extend = function (t, n, r) {
        if (!o.isString(t)) {
          if (t && o.has(t, "className")) return e.Object.extend(t.className, t, n);throw new Error("AV.Object.extend's first argument should be the className.");
        }"User" === t && (t = "_User");var i = null;if (o.has(e.Object._classMap, t)) {
          var s = e.Object._classMap[t];if (!n && !r) return s;i = s._extend(n, r);
        } else n = n || {}, n._className = t, i = this._extend(n, r);return i.extend = function (n) {
          if (o.isString(n) || n && o.has(n, "className")) return e.Object.extend.apply(i, arguments);var r = [t].concat(o.toArray(arguments));return e.Object.extend.apply(i, r);
        }, Object.defineProperty(i, "query", Object.getOwnPropertyDescriptor(e.Object, "query")), i.new = function (e, t) {
          return new i(e, t);
        }, e.Object._classMap[t] = i, i;
      }, Object.defineProperty(e.Object.prototype, "className", { get: function get() {
          var e = this._className || this.constructor._LCClassName || this.constructor.name;return "User" === e ? "_User" : e;
        } }), e.Object.register = function (t, n) {
        if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");var r = n || t.name;if (!r.length) throw new Error("registered class must be named");n && (t._LCClassName = n), e.Object._classMap[r] = t;
      }, Object.defineProperty(e.Object, "query", { get: function get() {
          return new e.Query(this.prototype.className);
        } }), e.Object._findUnsavedChildren = function (t, n, r) {
        e._traverse(t, function (t) {
          return t instanceof e.Object ? void (t._dirty() && n.push(t)) : t instanceof e.File ? void (t.url() || t.id || r.push(t)) : void 0;
        });
      }, e.Object._canBeSerializedAsValue = function (t) {
        var n = !0;return t instanceof e.Object || t instanceof e.File ? n = !!t.id : o.isArray(t) ? e._arrayEach(t, function (t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1);
        }) : o.isObject(t) && e._objectEach(t, function (t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1);
        }), n;
      }, e.Object._deepSaveAsync = function (t, n, r) {
        var i = [],
            a = [];e.Object._findUnsavedChildren(t, i, a);var c = e.Promise.resolve();o.each(a, function (e) {
          c = c.then(function () {
            return e.save();
          });
        });var l = o.uniq(i),
            h = o.uniq(l);return c.then(function () {
          return e.Promise._continueWhile(function () {
            return h.length > 0;
          }, function () {
            var t = [],
                n = [];if (e._arrayEach(h, function (e) {
              if (t.length > 20) return void n.push(e);e._canBeSerialized() ? t.push(e) : n.push(e);
            }), h = n, 0 === t.length) return e.Promise.reject(new s(s.OTHER_CAUSE, "Tried to save a batch with a cycle."));var i = e.Promise.resolve(o.map(t, function (t) {
              return t._allPreviousSaves || e.Promise.resolve();
            })),
                a = i.then(function () {
              return u("batch", null, null, "POST", { requests: o.map(t, function (e) {
                  var t = e.id ? "PUT" : "POST",
                      n = e._getSaveJSON();o.extend(n, e._flags);var r = e.className,
                      i = "/classes/" + r;"_User" !== e.className || e.id || (i = "/users");var i = "/1.1" + i;return e.id && (i = i + "/" + e.id), e._startSave(), { method: t, path: i, body: n };
                }) }, r).then(function (e) {
                var n = o.map(t, function (t, n) {
                  return e[n].success ? (t._finishSave(t.parse(e[n].success)), t) : (t._cancelSave(), new s(e[n].error.code, e[n].error.error));
                });return y(n);
              });
            });return e._arrayEach(t, function (e) {
              e._allPreviousSaves = a;
            }), a;
          });
        }).then(function () {
          return t;
        });
      };
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0);e.exports = function (e) {
      e.Op = function () {
        this._initialize.apply(this, arguments);
      }, r.extend(e.Op.prototype, { _initialize: function _initialize() {} }), r.extend(e.Op, { _extend: e._extend, _opDecoderMap: {}, _registerDecoder: function _registerDecoder(t, n) {
          e.Op._opDecoderMap[t] = n;
        }, _decode: function _decode(t) {
          var n = e.Op._opDecoderMap[t.__op];return n ? n(t) : void 0;
        } }), e.Op._registerDecoder("Batch", function (t) {
        var n = null;return e._arrayEach(t.ops, function (t) {
          t = e.Op._decode(t), n = t._mergeWithPrevious(n);
        }), n;
      }), e.Op.Set = e.Op._extend({ _initialize: function _initialize(e) {
          this._value = e;
        }, value: function value() {
          return this._value;
        }, toJSON: function toJSON() {
          return e._encode(this.value());
        }, _mergeWithPrevious: function _mergeWithPrevious(e) {
          return this;
        }, _estimate: function _estimate(e) {
          return this.value();
        } }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({ toJSON: function toJSON() {
          return { __op: "Delete" };
        }, _mergeWithPrevious: function _mergeWithPrevious(e) {
          return this;
        }, _estimate: function _estimate(t) {
          return e.Op._UNSET;
        } }), e.Op._registerDecoder("Delete", function (t) {
        return new e.Op.Unset();
      }), e.Op.Increment = e.Op._extend({ _initialize: function _initialize(e) {
          this._amount = e;
        }, amount: function amount() {
          return this._amount;
        }, toJSON: function toJSON() {
          return { __op: "Increment", amount: this._amount };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(e) {
          return e ? e + this.amount() : this.amount();
        } }), e.Op._registerDecoder("Increment", function (t) {
        return new e.Op.Increment(t.amount);
      }), e.Op.BitAnd = e.Op._extend({ _initialize: function _initialize(e) {
          this._value = e;
        }, value: function value() {
          return this._value;
        }, toJSON: function toJSON() {
          return { __op: "BitAnd", value: this.value() };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(0);if (t instanceof e.Op.Set) return new e.Op.Set(t.value() & this.value());throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(e) {
          return e & this.value();
        } }), e.Op._registerDecoder("BitAnd", function (t) {
        return new e.Op.BitAnd(t.value);
      }), e.Op.BitOr = e.Op._extend({ _initialize: function _initialize(e) {
          this._value = e;
        }, value: function value() {
          return this._value;
        }, toJSON: function toJSON() {
          return { __op: "BitOr", value: this.value() };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());if (t instanceof e.Op.Set) return new e.Op.Set(t.value() | this.value());throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(e) {
          return e | this.value();
        } }), e.Op._registerDecoder("BitOr", function (t) {
        return new e.Op.BitOr(t.value);
      }), e.Op.BitXor = e.Op._extend({ _initialize: function _initialize(e) {
          this._value = e;
        }, value: function value() {
          return this._value;
        }, toJSON: function toJSON() {
          return { __op: "BitXor", value: this.value() };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());if (t instanceof e.Op.Set) return new e.Op.Set(t.value() ^ this.value());throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(e) {
          return e ^ this.value();
        } }), e.Op._registerDecoder("BitXor", function (t) {
        return new e.Op.BitXor(t.value);
      }), e.Op.Add = e.Op._extend({ _initialize: function _initialize(e) {
          this._objects = e;
        }, objects: function objects() {
          return this._objects;
        }, toJSON: function toJSON() {
          return { __op: "Add", objects: e._encode(this.objects()) };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(e) {
          return e ? e.concat(this.objects()) : r.clone(this.objects());
        } }), e.Op._registerDecoder("Add", function (t) {
        return new e.Op.Add(e._decode(t.objects));
      }), e.Op.AddUnique = e.Op._extend({ _initialize: function _initialize(e) {
          this._objects = r.uniq(e);
        }, objects: function objects() {
          return this._objects;
        }, toJSON: function toJSON() {
          return { __op: "AddUnique", objects: e._encode(this.objects()) };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(t) {
          if (t) {
            var n = r.clone(t);return e._arrayEach(this.objects(), function (t) {
              if (t instanceof e.Object && t.id) {
                var i = r.find(n, function (n) {
                  return n instanceof e.Object && n.id === t.id;
                });if (i) {
                  var o = r.indexOf(n, i);n[o] = t;
                } else n.push(t);
              } else r.contains(n, t) || n.push(t);
            }), n;
          }return r.clone(this.objects());
        } }), e.Op._registerDecoder("AddUnique", function (t) {
        return new e.Op.AddUnique(e._decode(t.objects));
      }), e.Op.Remove = e.Op._extend({ _initialize: function _initialize(e) {
          this._objects = r.uniq(e);
        }, objects: function objects() {
          return this._objects;
        }, toJSON: function toJSON() {
          return { __op: "Remove", objects: e._encode(this.objects()) };
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) return t;if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(t) {
          if (t) {
            var n = r.difference(t, this.objects());return e._arrayEach(this.objects(), function (t) {
              t instanceof e.Object && t.id && (n = r.reject(n, function (n) {
                return n instanceof e.Object && n.id === t.id;
              }));
            }), n;
          }return [];
        } }), e.Op._registerDecoder("Remove", function (t) {
        return new e.Op.Remove(e._decode(t.objects));
      }), e.Op.Relation = e.Op._extend({ _initialize: function _initialize(t, n) {
          this._targetClassName = null;var i = this,
              o = function o(t) {
            if (t instanceof e.Object) {
              if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");return t.id;
            }return t;
          };this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o));
        }, added: function added() {
          var t = this;return r.map(this.relationsToAdd, function (n) {
            var r = e.Object._create(t._targetClassName);return r.id = n, r;
          });
        }, removed: function removed() {
          var t = this;return r.map(this.relationsToRemove, function (n) {
            var r = e.Object._create(t._targetClassName);return r.id = n, r;
          });
        }, toJSON: function toJSON() {
          var e = null,
              t = null,
              n = this,
              i = function i(e) {
            return { __type: "Pointer", className: n._targetClassName, objectId: e };
          },
              o = null;return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = { __op: "AddRelation", objects: o }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), t = { __op: "RemoveRelation", objects: o }), e && t ? { __op: "Batch", ops: [e, t] } : e || t || {};
        }, _mergeWithPrevious: function _mergeWithPrevious(t) {
          if (t) {
            if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");if (t instanceof e.Op.Relation) {
              if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                  i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                  o = new e.Op.Relation(n, i);return o._targetClassName = this._targetClassName, o;
            }throw new Error("Op is invalid after previous op.");
          }return this;
        }, _estimate: function _estimate(t, n, r) {
          if (t) {
            if (t instanceof e.Relation) {
              if (this._targetClassName) if (t.targetClassName) {
                if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.");
              } else t.targetClassName = this._targetClassName;return t;
            }throw new Error("Op is invalid after previous op.");
          }new e.Relation(n, r).targetClassName = this._targetClassName;
        } }), e.Op._registerDecoder("AddRelation", function (t) {
        return new e.Op.Relation(e._decode(t.objects), []);
      }), e.Op._registerDecoder("RemoveRelation", function (t) {
        return new e.Op.Relation([], e._decode(t.objects));
      });
    };
  }, function (e, t, n) {
    "use strict";
    n(42);
  }, function (e, t, n) {
    "use strict";
    var r = n(2).request;e.exports = function (e) {
      e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function (e, t) {
        if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");return r({ service: "push", method: "POST", path: "/push", data: e, authOptions: t });
      };
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(6)("leancloud:query"),
        o = n(1),
        s = n(4),
        a = n(2),
        u = a._request,
        c = a.request,
        l = n(3),
        h = l.ensureArray,
        f = l.transformFetchOptions,
        d = function d(e, t) {
      if (void 0 === e) throw new Error(t);
    };e.exports = function (e) {
      e.Query = function (t) {
        r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {};
      }, e.Query.or = function () {
        var t = r.toArray(arguments),
            n = null;e._arrayEach(t, function (e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
        });var i = new e.Query(n);return i._orQuery(t), i;
      }, e.Query.and = function () {
        var t = r.toArray(arguments),
            n = null;e._arrayEach(t, function (e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
        });var i = new e.Query(n);return i._andQuery(t), i;
      }, e.Query.doCloudQuery = function (t, n, i) {
        var o = { cql: t };return r.isArray(n) ? o.pvalues = n : i = n, u("cloudQuery", null, null, "GET", o, i).then(function (t) {
          var n = new e.Query(t.className);return { results: r.map(t.results, function (e) {
              var r = n._newObject(t);return r._finishFetch && r._finishFetch(n._processResult(e), !0), r;
            }), count: t.count, className: t.className };
        });
      }, e.Query._extend = e._extend, r.extend(e.Query.prototype, { _processResult: function _processResult(e) {
          return e;
        }, get: function get(e, t) {
          if (!e) {
            throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
          }var n = this._newObject();n.id = e;var i = this.toJSON(),
              o = {};return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), i.includeACL && (o.includeACL = i.includeACL), u("classes", this.className, e, "GET", f(o), t).then(function (e) {
            if (r.isEmpty(e)) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");return n._finishFetch(n.parse(e), !0), n;
          });
        }, toJSON: function toJSON() {
          var t = { where: this._where };return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function (e, n) {
            t[n] = e;
          }), t;
        }, _newObject: function _newObject(t) {
          return t && t.className ? new e.Object(t.className) : new this.objectClass();
        }, _createRequest: function _createRequest() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
              t = arguments[1],
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;if (encodeURIComponent(JSON.stringify(e)).length > 2e3) {
            return c({ path: "/batch", method: "POST", data: { requests: [{ method: "GET", path: "/1.1" + n, params: e }] }, authOptions: t }).then(function (e) {
              var t = e[0];if (t.success) return t.success;var n = new Error(t.error.error || "Unknown batch error");throw n.code = t.error.code, n;
            });
          }return c({ method: "GET", path: n, query: e, authOptions: t });
        }, _parseResponse: function _parseResponse(e) {
          var t = this;return r.map(e.results, function (n) {
            var r = t._newObject(e);return r._finishFetch && r._finishFetch(t._processResult(n), !0), r;
          });
        }, find: function find(e) {
          return this._createRequest(void 0, e).then(this._parseResponse.bind(this));
        }, scan: function scan() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = t.orderedBy,
              s = t.batchSize,
              a = arguments[1],
              c = this.toJSON();i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), s && (c.limit = s);var l = o.resolve([]),
              h = void 0,
              f = !1;return { next: function next() {
              return l = l.then(function (t) {
                return f ? [] : t.length > 1 ? t : h || 0 === t.length ? u("scan/classes", e.className, null, "GET", h ? r.extend({}, c, { cursor: h }) : c, a).then(function (t) {
                  return h = t.cursor, e._parseResponse(t);
                }).then(function (e) {
                  return e.length || (f = !0), t.concat(e);
                }) : (f = !0, t);
              }), l.then(function (e) {
                return e.shift();
              }).then(function (e) {
                return { value: e, done: f };
              });
            } };
        }, destroyAll: function destroyAll(t) {
          return this.find(t).then(function (n) {
            return e.Object.destroyAll(n, t);
          });
        }, count: function count(e) {
          var t = this.toJSON();return t.limit = 0, t.count = 1, this._createRequest(t, e).then(function (e) {
            return e.count;
          });
        }, first: function first(e) {
          var t = this,
              n = this.toJSON();return n.limit = 1, this._createRequest(n, e).then(function (e) {
            return r.map(e.results, function (e) {
              var n = t._newObject();return n._finishFetch && n._finishFetch(t._processResult(e), !0), n;
            })[0];
          });
        }, skip: function skip(e) {
          return d(e, "undefined is not a valid skip value"), this._skip = e, this;
        }, limit: function limit(e) {
          return d(e, "undefined is not a valid limit value"), this._limit = e, this;
        }, equalTo: function equalTo(t, n) {
          return d(t, "undefined is not a valid key"), d(n, "undefined is not a valid value"), this._where[t] = e._encode(n), this;
        }, _addCondition: function _addCondition(t, n, r) {
          return d(t, "undefined is not a valid condition key"), d(n, "undefined is not a valid condition"), d(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this;
        }, sizeEqualTo: function sizeEqualTo(e, t) {
          this._addCondition(e, "$size", t);
        }, notEqualTo: function notEqualTo(e, t) {
          return this._addCondition(e, "$ne", t), this;
        }, lessThan: function lessThan(e, t) {
          return this._addCondition(e, "$lt", t), this;
        }, greaterThan: function greaterThan(e, t) {
          return this._addCondition(e, "$gt", t), this;
        }, lessThanOrEqualTo: function lessThanOrEqualTo(e, t) {
          return this._addCondition(e, "$lte", t), this;
        }, greaterThanOrEqualTo: function greaterThanOrEqualTo(e, t) {
          return this._addCondition(e, "$gte", t), this;
        }, containedIn: function containedIn(e, t) {
          return this._addCondition(e, "$in", t), this;
        }, notContainedIn: function notContainedIn(e, t) {
          return this._addCondition(e, "$nin", t), this;
        }, containsAll: function containsAll(e, t) {
          return this._addCondition(e, "$all", t), this;
        }, exists: function exists(e) {
          return this._addCondition(e, "$exists", !0), this;
        }, doesNotExist: function doesNotExist(e) {
          return this._addCondition(e, "$exists", !1), this;
        }, matches: function matches(e, t, n) {
          return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this;
        }, matchesQuery: function matchesQuery(e, t) {
          var n = t.toJSON();return n.className = t.className, this._addCondition(e, "$inQuery", n), this;
        }, doesNotMatchQuery: function doesNotMatchQuery(e, t) {
          var n = t.toJSON();return n.className = t.className, this._addCondition(e, "$notInQuery", n), this;
        }, matchesKeyInQuery: function matchesKeyInQuery(e, t, n) {
          var r = n.toJSON();return r.className = n.className, this._addCondition(e, "$select", { key: t, query: r }), this;
        }, doesNotMatchKeyInQuery: function doesNotMatchKeyInQuery(e, t, n) {
          var r = n.toJSON();return r.className = n.className, this._addCondition(e, "$dontSelect", { key: t, query: r }), this;
        }, _orQuery: function _orQuery(e) {
          var t = r.map(e, function (e) {
            return e.toJSON().where;
          });return this._where.$or = t, this;
        }, _andQuery: function _andQuery(e) {
          var t = r.map(e, function (e) {
            return e.toJSON().where;
          });return this._where.$and = t, this;
        }, _quote: function _quote(e) {
          return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E";
        }, contains: function contains(e, t) {
          return this._addCondition(e, "$regex", this._quote(t)), this;
        }, startsWith: function startsWith(e, t) {
          return this._addCondition(e, "$regex", "^" + this._quote(t)), this;
        }, endsWith: function endsWith(e, t) {
          return this._addCondition(e, "$regex", this._quote(t) + "$"), this;
        }, ascending: function ascending(e) {
          return d(e, "undefined is not a valid key"), this._order = e, this;
        }, addAscending: function addAscending(e) {
          return d(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, this;
        }, descending: function descending(e) {
          return d(e, "undefined is not a valid key"), this._order = "-" + e, this;
        }, addDescending: function addDescending(e) {
          return d(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, this;
        }, near: function near(t, n) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this;
        }, withinRadians: function withinRadians(e, t, n) {
          return this.near(e, t), this._addCondition(e, "$maxDistance", n), this;
        }, withinMiles: function withinMiles(e, t, n) {
          return this.withinRadians(e, t, n / 3958.8);
        }, withinKilometers: function withinKilometers(e, t, n) {
          return this.withinRadians(e, t, n / 6371);
        }, withinGeoBox: function withinGeoBox(t, n, r) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", { $box: [n, r] }), this;
        }, include: function include(e) {
          var t = this;return d(e, "undefined is not a valid key"), r(arguments).forEach(function (e) {
            t._include = t._include.concat(h(e));
          }), this;
        }, includeACL: function includeACL() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];return this._includeACL = e, this;
        }, select: function select(e) {
          var t = this;return d(e, "undefined is not a valid key"), r(arguments).forEach(function (e) {
            t._select = t._select.concat(h(e));
          }), this;
        }, each: function each(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");return e.Promise.reject(i);
          }var o = new e.Query(this.objectClass);o._limit = n.batchSize || 100, o._where = r.clone(this._where), o._include = r.clone(this._include), o.ascending("objectId");var s = !1;return e.Promise._continueWhile(function () {
            return !s;
          }, function () {
            return o.find(n).then(function (n) {
              var i = e.Promise.resolve();return r.each(n, function (e) {
                i = i.then(function () {
                  return t(e);
                });
              }), i.then(function () {
                n.length >= o._limit ? o.greaterThan("objectId", n[n.length - 1].id) : s = !0;
              });
            });
          });
        }, subscribe: function subscribe(t) {
          return e.LiveQuery.init(this, t);
        } }), e.FriendShipQuery = e.Query._extend({ _objectClass: e.User, _newObject: function _newObject() {
          return new e.User();
        }, _processResult: function _processResult(e) {
          if (e && e[this._friendshipTag]) {
            var t = e[this._friendshipTag];return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t;
          }return null;
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0);e.exports = function (e) {
      e.Relation = function (e, t) {
        if (!r.isString(t)) throw new TypeError("key must be a string");this.parent = e, this.key = t, this.targetClassName = null;
      }, e.Relation.reverseQuery = function (t, n, r) {
        var i = new e.Query(t);return i.equalTo(n, r._toPointer()), i;
      }, r.extend(e.Relation.prototype, { _ensureParentAndKey: function _ensureParentAndKey(e, t) {
          if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.");
        }, add: function add(t) {
          r.isArray(t) || (t = [t]);var n = new e.Op.Relation(t, []);this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
        }, remove: function remove(t) {
          r.isArray(t) || (t = [t]);var n = new e.Op.Relation([], t);this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
        }, toJSON: function toJSON() {
          return { __type: "Relation", className: this.targetClassName };
        }, query: function query() {
          var t, n;return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n;
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(4);e.exports = function (e) {
      e.Role = e.Object.extend("_Role", { constructor: function constructor(t, n) {
          if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), n) {
            if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");this.setACL(n);
          }
        }, getName: function getName() {
          return this.get("name");
        }, setName: function setName(e, t) {
          return this.set("name", e, t);
        }, getUsers: function getUsers() {
          return this.relation("users");
        }, getRoles: function getRoles() {
          return this.relation("roles");
        }, validate: function validate(t, n) {
          if ("name" in t && t.name !== this.getName()) {
            var o = t.name;if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
          }return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n);
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(2)._request;e.exports = function (e) {
      e.SearchSortBuilder = function () {
        this._sortFields = [];
      }, r.extend(e.SearchSortBuilder.prototype, { _addField: function _addField(e, t, n, r) {
          var i = {};return i[e] = { order: t || "asc", mode: n || "avg", missing: "_" + (r || "last") }, this._sortFields.push(i), this;
        }, ascending: function ascending(e, t, n) {
          return this._addField(e, "asc", t, n);
        }, descending: function descending(e, t, n) {
          return this._addField(e, "desc", t, n);
        }, whereNear: function whereNear(e, t, n) {
          n = n || {};var r = {},
              i = { lat: t.latitude, lon: t.longitude },
              o = { order: n.order || "asc", mode: n.mode || "avg", unit: n.unit || "km" };return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this;
        }, build: function build() {
          return JSON.stringify(e._encode(this._sortFields));
        } }), e.SearchQuery = e.Query._extend({ _sid: null, _hits: 0, _queryString: null, _highlights: null, _sortBuilder: null, _createRequest: function _createRequest(e, t) {
          return i("search/select", null, null, "GET", e || this.toJSON(), t);
        }, sid: function sid(e) {
          return this._sid = e, this;
        }, queryString: function queryString(e) {
          return this._queryString = e, this;
        }, highlights: function highlights(e) {
          var t;return t = e && r.isString(e) ? arguments : e, this._highlights = t, this;
        }, sortBy: function sortBy(e) {
          return this._sortBuilder = e, this;
        }, hits: function hits() {
          return this._hits || (this._hits = 0), this._hits;
        }, _processResult: function _processResult(e) {
          return delete e.className, delete e._app_url, delete e._deeplink, e;
        }, hasMore: function hasMore() {
          return !this._hitEnd;
        }, reset: function reset() {
          this._hitEnd = !1, this._sid = null, this._hits = 0;
        }, find: function find() {
          var e = this;return this._createRequest().then(function (t) {
            return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, r.map(t.results, function (n) {
              n.className && (t.className = n.className);var r = e._newObject(t);return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r;
            });
          });
        }, toJSON: function toJSON() {
          var t = e.SearchQuery.__super__.toJSON.call(this);if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw new Error("Please set query string.");if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");return this._sortBuilder && (t.sort = this._sortBuilder.build()), t;
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        i = n(0),
        o = n(2)._request,
        s = n(3),
        a = s.getSessionToken;e.exports = function (e) {
      var t = function t() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return a(t) ? e.User._fetchUserBySessionToken(a(t)) : e.User.currentAsync();
      },
          n = function n(_n) {
        return t(_n).then(function (t) {
          return e.Object.createWithoutData("_User", t.id)._toPointer();
        });
      };e.Status = function (e, t) {
        return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : r(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this;
      }, i.extend(e.Status.prototype, { get: function get(e) {
          return this.data[e];
        }, set: function set(e, t) {
          return this.data[e] = t, this;
        }, destroy: function destroy(t) {
          return this.id ? o("statuses", null, this.id, "DELETE", t) : e.Promise.reject(new Error("The status id is not exists."));
        }, toObject: function toObject() {
          return this.id ? e.Object.createWithoutData("_Status", this.id) : null;
        }, _getDataJSON: function _getDataJSON() {
          var t = i.clone(this.data);return e._encode(t);
        }, send: function send() {
          var t = this,
              r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};if (!a(r) && !e.User.current()) throw new Error("Please signin an user.");return this.query ? n(r).then(function (e) {
            var n = t.query.toJSON();n.className = t.query.className;var i = {};return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), i.inboxType = t.inboxType || "default", o("statuses", null, null, "POST", i, r);
          }).then(function (n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
          }) : e.Status.sendStatusToFollowers(this, r);
        }, _finishFetch: function _finishFetch(t) {
          this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(t);
        } }), e.Status.sendStatusToFollowers = function (t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (!a(r) && !e.User.current()) throw new Error("Please signin an user.");return n(r).then(function (n) {
          var i = {};i.className = "_Follower", i.keys = "follower", i.where = { user: n };var s = {};return s.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, s.data = t._getDataJSON(), s.inboxType = t.inboxType || "default", o("statuses", null, null, "POST", s, r).then(function (n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
          });
        });
      }, e.Status.sendPrivateStatus = function (t, r) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (!a(s) && !e.User.current()) throw new Error("Please signin an user.");if (!r) throw new Error("Invalid target user.");var u = i.isString(r) ? r : r.id;if (!u) throw new Error("Invalid target user.");return n(s).then(function (n) {
          var r = {};r.className = "_User", r.where = { objectId: u };var i = {};return i.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, i.data = t._getDataJSON(), i.inboxType = "private", t.inboxType = "private", o("statuses", null, null, "POST", i, s).then(function (n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
          });
        });
      }, e.Status.countUnreadStatuses = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (i.isString(r) || (s = r), !a(s) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");return t(s).then(function (t) {
          var n = {};return n.inboxType = e._encode(r), n.owner = e._encode(t), o("subscribe/statuses/count", null, null, "GET", n, s);
        });
      }, e.Status.resetUnreadCount = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};if (i.isString(r) || (s = r), !a(s) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");return t(s).then(function (t) {
          var n = {};return n.inboxType = e._encode(r), n.owner = e._encode(t), o("subscribe/statuses/resetUnreadCount", null, null, "POST", n, s);
        });
      }, e.Status.statusQuery = function (t) {
        var n = new e.Query("_Status");return t && n.equalTo("source", t), n;
      }, e.InboxQuery = e.Query._extend({ _objectClass: e.Status, _sinceId: 0, _maxId: 0, _inboxType: "default", _owner: null, _newObject: function _newObject() {
          return new e.Status();
        }, _createRequest: function _createRequest(t, n) {
          return e.InboxQuery.__super__._createRequest.call(this, t, n, "/subscribe/statuses");
        }, sinceId: function sinceId(e) {
          return this._sinceId = e, this;
        }, maxId: function maxId(e) {
          return this._maxId = e, this;
        }, owner: function owner(e) {
          return this._owner = e, this;
        }, inboxType: function inboxType(e) {
          return this._inboxType = e, this;
        }, toJSON: function toJSON() {
          var t = e.InboxQuery.__super__.toJSON.call(this);return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t;
        } }), e.Status.inboxQuery = function (t, n) {
        var r = new e.InboxQuery(e.Status);return t && (r._owner = t), n && (r._inboxType = n), r;
      };
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(4),
        o = n(2),
        s = o._request,
        a = o.request,
        u = n(1),
        c = function c() {
      if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");return new u(function (e, t) {
        wx.login({ success: function success(n) {
            var r = n.code,
                i = n.errMsg;r ? e(r) : t(new Error(i));
          }, fail: function fail() {
            return t(new Error("wx.login 失败"));
          } });
      });
    };e.exports = function (e) {
      e.User = e.Object.extend("_User", { _isCurrentUser: !1, _mergeMagicFields: function _mergeMagicFields(t) {
          return t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t);
        }, _cleanupAuthData: function _cleanupAuthData() {
          if (this.isCurrent()) {
            var t = this.get("authData");t && e._objectEach(this.get("authData"), function (e, n) {
              t[n] || delete t[n];
            });
          }
        }, _synchronizeAllAuthData: function _synchronizeAllAuthData() {
          if (this.get("authData")) {
            var t = this;e._objectEach(this.get("authData"), function (e, n) {
              t._synchronizeAuthData(n);
            });
          }
        }, _synchronizeAuthData: function _synchronizeAuthData(t) {
          if (this.isCurrent()) {
            var n;r.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();var i = this.get("authData");if (i && t) {
              t.restoreAuthentication(i[n]) || this.dissociateAuthData(t);
            }
          }
        }, _handleSaveResult: function _handleSaveResult(t) {
          return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? u.resolve() : u.resolve(e.User._saveCurrentUser(this));
        }, _linkWith: function _linkWith(t, n) {
          var i,
              o = this;if (r.isString(t) ? (i = t, t = e.User._authProviders[t]) : i = t.getAuthType(), n) {
            var s = this.get("authData") || {};return s[i] = n, this.save({ authData: s }).then(function (e) {
              return e._handleSaveResult(!0).then(function () {
                return e;
              });
            });
          }return t.authenticate().then(function (e) {
            return o._linkWith(t, e);
          });
        }, associateWithAuthData: function associateWithAuthData(e, t) {
          return this._linkWith(t, e);
        }, linkWithWeapp: function linkWithWeapp() {
          var e = this;return c().then(function (t) {
            return e._linkWith("lc_weapp", { code: t });
          });
        }, dissociateAuthData: function dissociateAuthData(e) {
          return this.unset("authData." + e), this.save().then(function (e) {
            return e._handleSaveResult(!0).then(function () {
              return e;
            });
          });
        }, _unlinkFrom: function _unlinkFrom(e) {
          return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(e);
        }, _isLinked: function _isLinked(e) {
          var t;return t = r.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t];
        }, logOut: function logOut() {
          this._logOutWithAll(), this._isCurrentUser = !1;
        }, _logOutWithAll: function _logOutWithAll() {
          if (this.get("authData")) {
            var t = this;e._objectEach(this.get("authData"), function (e, n) {
              t._logOutWith(n);
            });
          }
        }, _logOutWith: function _logOutWith(t) {
          this.isCurrent() && (r.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate());
        }, signUp: function signUp(e, t) {
          var n = e && e.username || this.get("username");if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name.");var r = e && e.password || this.get("password");if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password.");return this.save(e, t).then(function (e) {
            return e._handleSaveResult(!0).then(function () {
              return e;
            });
          });
        }, signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");var r = e && e.smsCode || this.get("smsCode");if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");return t._makeRequest = function (e, t, n, r, i) {
            return s("usersByMobilePhone", null, null, "POST", i);
          }, this.save(e, t).then(function (e) {
            return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function () {
              return e;
            });
          });
        }, logIn: function logIn() {
          var e = this;return s("login", null, null, "POST", this.toJSON()).then(function (t) {
            var n = e.parse(t);return e._finishFetch(n), e._handleSaveResult(!0).then(function () {
              return n.smsCode || delete e.attributes.smsCode, e;
            });
          });
        }, save: function save(t, n, i) {
          var o, s;return r.isObject(t) || r.isNull(t) || r.isUndefined(t) ? (o = t, s = n) : (o = {}, o[t] = n, s = i), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function (e) {
            return e._handleSaveResult(!1).then(function () {
              return e;
            });
          });
        }, follow: function follow(t, n) {
          if (!this.id) throw new Error("Please signin.");var i = void 0,
              o = void 0;t.user ? (i = t.user, o = t.attributes) : i = t;var a = r.isString(i) ? i : i.id;if (!a) throw new Error("Invalid target user.");var u = "users/" + this.id + "/friendship/" + a;return s(u, null, null, "POST", e._encode(o), n);
        }, unfollow: function unfollow(e, t) {
          if (!this.id) throw new Error("Please signin.");var n = void 0;n = e.user ? e.user : e;var i = r.isString(n) ? n : n.id;if (!i) throw new Error("Invalid target user.");var o = "users/" + this.id + "/friendship/" + i;return s(o, null, null, "DELETE", null, t);
        }, followerQuery: function followerQuery() {
          return e.User.followerQuery(this.id);
        }, followeeQuery: function followeeQuery() {
          return e.User.followeeQuery(this.id);
        }, fetch: function fetch(t, n) {
          return e.Object.prototype.fetch.call(this, t, n).then(function (e) {
            return e._handleSaveResult(!1).then(function () {
              return e;
            });
          });
        }, updatePassword: function updatePassword(e, t, n) {
          var r = "users/" + this.id + "/updatePassword";return s(r, null, null, "PUT", { old_password: e, new_password: t }, n);
        }, isCurrent: function isCurrent() {
          return this._isCurrentUser;
        }, getUsername: function getUsername() {
          return this.get("username");
        }, getMobilePhoneNumber: function getMobilePhoneNumber() {
          return this.get("mobilePhoneNumber");
        }, setMobilePhoneNumber: function setMobilePhoneNumber(e, t) {
          return this.set("mobilePhoneNumber", e, t);
        }, setUsername: function setUsername(e, t) {
          return this.set("username", e, t);
        }, setPassword: function setPassword(e, t) {
          return this.set("password", e, t);
        }, getEmail: function getEmail() {
          return this.get("email");
        }, setEmail: function setEmail(e, t) {
          return this.set("email", e, t);
        }, authenticated: function authenticated() {
          return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id;
        }, isAuthenticated: function isAuthenticated() {
          var t = this;return u.resolve().then(function () {
            return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function () {
              return !0;
            }, function (e) {
              if (211 === e.code) return !1;throw e;
            });
          });
        }, getSessionToken: function getSessionToken() {
          return this._sessionToken;
        }, refreshSessionToken: function refreshSessionToken(e) {
          var t = this;return s("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function (e) {
            return t._finishFetch(e), t._handleSaveResult(!0).then(function () {
              return t;
            });
          });
        }, getRoles: function getRoles(t) {
          return e.Relation.reverseQuery("_Role", "users", this).find(t);
        } }, { _currentUser: null, _currentUserMatchesDisk: !1, _CURRENT_USER_KEY: "currentUser", _authProviders: {}, signUp: function signUp(t, n, r, i) {
          return r = r || {}, r.username = t, r.password = n, e.Object._create("_User").signUp(r, i);
        }, logIn: function logIn(t, n, r) {
          var i = e.Object._create("_User");return i._finishFetch({ username: t, password: n }), i.logIn(r);
        }, become: function become(e) {
          return this._fetchUserBySessionToken(e).then(function (e) {
            return e._handleSaveResult(!0).then(function () {
              return e;
            });
          });
        }, _fetchUserBySessionToken: function _fetchUserBySessionToken(t) {
          var n = e.Object._create("_User");return a({ method: "GET", path: "/users/me", authOptions: { sessionToken: t } }).then(function (e) {
            var t = n.parse(e);return n._finishFetch(t), n;
          });
        }, logInWithMobilePhoneSmsCode: function logInWithMobilePhoneSmsCode(t, n, r) {
          var i = e.Object._create("_User");return i._finishFetch({ mobilePhoneNumber: t, smsCode: n }), i.logIn(r);
        }, signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(t, n, r, i) {
          return r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i);
        }, logInWithMobilePhone: function logInWithMobilePhone(t, n, r) {
          var i = e.Object._create("_User");return i._finishFetch({ mobilePhoneNumber: t, password: n }), i.logIn(r);
        }, signUpOrlogInWithAuthData: function signUpOrlogInWithAuthData(t, n) {
          return e.User._logInWith(n, t);
        }, loginWithWeapp: function loginWithWeapp() {
          var e = this;return c().then(function (t) {
            return e.signUpOrlogInWithAuthData({ code: t }, "lc_weapp");
          });
        }, associateWithAuthData: function associateWithAuthData(e, t, n) {
          return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), e._linkWith(t, n);
        }, logOut: function logOut() {
          return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), u.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function () {
            return e._refreshSubscriptionId();
          }));
        }, followerQuery: function followerQuery(t) {
          if (!t || !r.isString(t)) throw new Error("Invalid user object id.");var n = new e.FriendShipQuery("_Follower");return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n;
        }, followeeQuery: function followeeQuery(t) {
          if (!t || !r.isString(t)) throw new Error("Invalid user object id.");var n = new e.FriendShipQuery("_Followee");return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n;
        }, requestPasswordReset: function requestPasswordReset(e) {
          return s("requestPasswordReset", null, null, "POST", { email: e });
        }, requestEmailVerify: function requestEmailVerify(e) {
          return s("requestEmailVerify", null, null, "POST", { email: e });
        }, requestMobilePhoneVerify: function requestMobilePhoneVerify(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = { mobilePhoneNumber: e };return t.validateToken && (n.validate_token = t.validateToken), s("requestMobilePhoneVerify", null, null, "POST", n, t);
        }, requestPasswordResetBySmsCode: function requestPasswordResetBySmsCode(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = { mobilePhoneNumber: e };return t.validateToken && (n.validate_token = t.validateToken), s("requestPasswordResetBySmsCode", null, null, "POST", n, t);
        }, resetPasswordBySmsCode: function resetPasswordBySmsCode(e, t) {
          return s("resetPasswordBySmsCode", null, e, "PUT", { password: t });
        }, verifyMobilePhone: function verifyMobilePhone(e) {
          return s("verifyMobilePhone", null, e, "POST", null);
        }, requestLoginSmsCode: function requestLoginSmsCode(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = { mobilePhoneNumber: e };return t.validateToken && (n.validate_token = t.validateToken), s("requestLoginSmsCode", null, null, "POST", n, t);
        }, currentAsync: function currentAsync() {
          return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), u.resolve(null)) : e.User._currentUser ? u.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? u.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function (t) {
            if (!t) return null;e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;var n = JSON.parse(t);return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser;
          });
        }, current: function current() {
          if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;if (e.User._currentUser) return e.User._currentUser;if (e.User._currentUserMatchesDisk) return e.User._currentUser;e.User._currentUserMatchesDisk = !0;var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));if (!t) return null;e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;var n = JSON.parse(t);return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser;
        }, _saveCurrentUser: function _saveCurrentUser(t) {
          var n;return n = e.User._currentUser !== t ? e.User.logOut() : u.resolve(), n.then(function () {
            t._isCurrentUser = !0, e.User._currentUser = t;var n = t.toJSON();return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function () {
              return e.User._currentUserMatchesDisk = !0, e._refreshSubscriptionId();
            });
          });
        }, _registerAuthenticationProvider: function _registerAuthenticationProvider(t) {
          e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType());
        }, _logInWith: function _logInWith(t, n) {
          return e.Object._create("_User")._linkWith(t, n);
        } });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(43).polyfill;try {
      r();
    } catch (e) {}try {
      r(GameGlobal);
    } catch (e) {}try {
      window = window || {}, r(window);
    } catch (e) {}try {
      localStorage = localStorage || n(15);
    } catch (e) {}try {
      XMLHttpRequest = XMLHttpRequest || n(18);
    } catch (e) {}try {
      FormData = FormData || n(9);
    } catch (e) {}try {
      WebSocket = WebSocket || n(17);
    } catch (e) {}try {
      navigator = navigator || n(16);
    } catch (e) {}
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          i = n(15),
          o = n(18),
          s = n(9),
          a = n(17),
          u = n(44),
          c = n(16);e.exports = { polyfill: function polyfill() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || window;if ("object" !== (void 0 === e ? "undefined" : r(e))) throw new Error("polyfill target is not an Object");var n = { localStorage: i, XMLHttpRequest: o, FormData: s, WebSocket: a, Object: Object, navigator: c };for (var l in n) {
            e[l] || (e[l] = n[l]);
          }u.polyfill(e), e.navigator.product = "ReactNative";
        }, localStorage: i, XMLHttpRequest: o, FormData: s, WebSocket: a };
    }).call(t, n(8));
  }, function (e, t, n) {
    "use strict";
    var r = n(11);t.polyfill = function (e) {
      if (wx.onNetworkStatusChange && !e.__onlineOfflinePolyfilled) {
        e.__onlineOfflinePolyfilled = !0;var t = new r();e.dispatchEvent || (e.addEventListener = t.addEventListener.bind(t), e.removeEventListener = t.removeEventListener.bind(t), e.dispatchEvent = t.dispatchEvent.bind(t), "function" != typeof postMessage || e.importScripts || (e.importScripts = function () {
          throw new Error("mocked");
        })), wx.getNetworkType({ success: function success(t) {
            var n = t.networkType;e.onLine = "none" !== n, wx.onNetworkStatusChange(function (t) {
              var n = t.isConnected;e.onLine !== n && (e.onLine = n, e.dispatchEvent({ type: n ? "online" : "offline" }));
            });
          } });
      }
    };
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      var t = this;this.AV = e, this.lockedUntil = 0, s.getAsync("serverURLs").then(function (e) {
        if (!e) return t.lock(0);var n = e.serverURLs,
            r = e.lockedUntil;t.AV._setServerURLs(n, !1), t.lockedUntil = r;
      }).catch(function () {
        return t.lock(0);
      });
    }var i = n(3),
        o = i.ajax,
        s = n(12);r.prototype.disable = function () {
      this.disabled = !0;
    }, r.prototype.lock = function (e) {
      this.lockedUntil = Date.now() + e;
    }, r.prototype.refresh = function () {
      var e = this;if (!(this.disabled || Date.now() < this.lockedUntil)) {
        this.lock(10);return o({ method: "get", url: "https://app-router.leancloud.cn/2/route", query: { appId: this.AV.applicationId } }).then(function (t) {
          if (!e.disabled) {
            var n = t.ttl;if (!n) throw new Error("missing ttl");n *= 1e3;var r = { push: "https://" + t.push_server, stats: "https://" + t.stats_server, engine: "https://" + t.engine_server, api: "https://" + t.api_server };return e.AV._setServerURLs(r, !1), e.lock(n), s.setAsync("serverURLs", { serverURLs: r, lockedUntil: e.lockedUntil }, n);
          }
        }).catch(function (t) {
          console.warn("refresh server URLs failed: " + t.message), e.lock(600);
        });
      }
    }, e.exports = r;
  }, function (e, t, n) {
    "use strict"; /*!
                  * LeanCloud JavaScript SDK
                  * https://leancloud.cn
                  *
                  * Copyright 2016 LeanCloud.cn, Inc.
                  * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
                  */

    n(34);var r = n(5);r._ = n(0), r.version = n(14), r.Promise = n(1), r.localStorage = n(13), r.Cache = n(12), r.Error = n(4), n(29), n(26)(r), n(28)(r), n(22)(r), n(33)(r), n(37)(r), n(27)(r), n(32)(r), n(38)(r), n(41)(r), n(36)(r), n(31)(r), n(23)(r), n(24)(r), n(35)(r), n(40)(r), n(39)(r), n(30)(r), r.Conversation = n(25), e.exports = r;
  }, function (e, t, n) {
    "use strict";
    e.exports = [];
  }, function (e, t, n) {
    "use strict";
    var r = n(14),
        i = ["Weapp"].concat(n(47));e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")";
  }, function (e, t, n) {
    "use strict";
    var r = n(7),
        i = n(6)("cos"),
        o = n(1);e.exports = function (e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);return new o(function (e, o) {
        var u = r("POST", a).set(n._uploadHeaders).attach("fileContent", t, n.attributes.name).field("op", "upload");s.onprogress && u.on("progress", s.onprogress), u.end(function (t, r) {
          if (r && i(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), o(t);e(n);
        });
      });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(7),
        i = n(1),
        o = n(6)("qiniu");e.exports = function (e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;var a = e.token,
          u = e.upload_url || "https://upload.qiniup.com";return new i(function (e, i) {
        var c = r("POST", u).set(n._uploadHeaders).attach("file", t, n.attributes.name).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);s.onprogress && c.on("progress", s.onprogress), c.end(function (t, r) {
          if (r && o(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), i(t);e(n);
        });
      });
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(7),
        i = n(1),
        o = function o(e, t) {
      return t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), e;
    };e.exports = function (e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new i(function (i, a) {
        var u = r("PUT", e.upload_url).set(Object.assign({ "Content-Type": n.get("mime_type"), "Cache-Control": "public, max-age=31536000" }, n._uploadHeaders));s.onprogress && u.on("progress", s.onprogress), u.on("response", function (e) {
          if (e.ok) return i(n);a(o(e.error, e));
        }), u.on("error", function (e, t) {
          return a(o(e, t));
        }), u.send(t).end();
      });
    };
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
          i = (n(1), {}),
          o = ["getItem", "setItem", "removeItem", "clear"],
          s = t.localStorage;try {
        var a = "__storejs__";if (s.setItem(a, a), s.getItem(a) != a) throw new Error();s.removeItem(a);
      } catch (e) {
        s = n(62);
      }r(o).each(function (e) {
        i[e] = function () {
          return s[e].apply(s, arguments);
        };
      }), i.async = !1, e.exports = i;
    }).call(t, n(8));
  }, function (e, t, n) {
    "use strict";
    var r = function r(e, t) {
      var n;e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) {
        r[i] = n.charCodeAt(i);
      }return new Blob([r], { type: t });
    };e.exports = r;
  }, function (e, t, n) {
    function r(e) {
      if (e) return i(e);
    }function i(e) {
      for (var t in r.prototype) {
        e[t] = r.prototype[t];
      }return e;
    }e.exports = r, r.prototype.on = r.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
    }, r.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments);
      }return n.fn = t, this.on(e, n), this;
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks["$" + e];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + e], this;for (var r, i = 0; i < n.length; i++) {
        if ((r = n[i]) === t || r.fn === t) {
          n.splice(i, 1);break;
        }
      }return this;
    }, r.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};var t = [].slice.call(arguments, 1),
          n = this._callbacks["$" + e];if (n) {
        n = n.slice(0);for (var r = 0, i = n.length; r < i; ++r) {
          n[r].apply(this, t);
        }
      }return this;
    }, r.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
    }, r.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length;
    };
  }, function (e, t) {
    !function () {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          n = { rotl: function rotl(e, t) {
          return e << t | e >>> 32 - t;
        }, rotr: function rotr(e, t) {
          return e << 32 - t | e >>> t;
        }, endian: function endian(e) {
          if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);for (var t = 0; t < e.length; t++) {
            e[t] = n.endian(e[t]);
          }return e;
        }, randomBytes: function randomBytes(e) {
          for (var t = []; e > 0; e--) {
            t.push(Math.floor(256 * Math.random()));
          }return t;
        }, bytesToWords: function bytesToWords(e) {
          for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) {
            t[r >>> 5] |= e[n] << 24 - r % 32;
          }return t;
        }, wordsToBytes: function wordsToBytes(e) {
          for (var t = [], n = 0; n < 32 * e.length; n += 8) {
            t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
          }return t;
        }, bytesToHex: function bytesToHex(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
          }return t.join("");
        }, hexToBytes: function hexToBytes(e) {
          for (var t = [], n = 0; n < e.length; n += 2) {
            t.push(parseInt(e.substr(n, 2), 16));
          }return t;
        }, bytesToBase64: function bytesToBase64(e) {
          for (var n = [], r = 0; r < e.length; r += 3) {
            for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) {
              8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
            }
          }return n.join("");
        }, base64ToBytes: function base64ToBytes(e) {
          e = e.replace(/[^A-Z0-9+\/]/gi, "");for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) {
            0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
          }return n;
        } };e.exports = n;
    }();
  }, function (e, t, n) {
    function r(e) {
      var n,
          r = 0;for (n in e) {
        r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      }return t.colors[Math.abs(r) % t.colors.length];
    }function i(e) {
      function n() {
        if (n.enabled) {
          var e = n,
              r = +new Date(),
              o = r - (i || r);e.diff = o, e.prev = i, e.curr = r, i = r;for (var s = new Array(arguments.length), a = 0; a < s.length; a++) {
            s[a] = arguments[a];
          }s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");var u = 0;s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;u++;var i = t.formatters[r];if ("function" == typeof i) {
              var o = s[u];n = i.call(e, o), s.splice(u, 1), u--;
            }return n;
          }), t.formatArgs.call(e, s);(n.log || t.log || console.log.bind(console)).apply(e, s);
        }
      }var i;return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), n.destroy = o, "function" == typeof t.init && t.init(n), t.instances.push(n), n;
    }function o() {
      var e = t.instances.indexOf(this);return -1 !== e && (t.instances.splice(e, 1), !0);
    }function s(e) {
      t.save(e), t.names = [], t.skips = [];var n,
          r = ("string" == typeof e ? e : "").split(/[\s,]+/),
          i = r.length;for (n = 0; n < i; n++) {
        r[n] && (e = r[n].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      }for (n = 0; n < t.instances.length; n++) {
        var o = t.instances[n];o.enabled = t.enabled(o.namespace);
      }
    }function a() {
      t.enable("");
    }function u(e) {
      if ("*" === e[e.length - 1]) return !0;var n, r;for (n = 0, r = t.skips.length; n < r; n++) {
        if (t.skips[n].test(e)) return !1;
      }for (n = 0, r = t.names.length; n < r; n++) {
        if (t.names[n].test(e)) return !0;
      }return !1;
    }function c(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }t = e.exports = i.debug = i.default = i, t.coerce = c, t.disable = a, t.enable = s, t.enabled = u, t.humanize = n(64), t.instances = [], t.names = [], t.skips = [], t.formatters = {};
  }, function (e, t, n) {
    (function (t) {
      /*!
      * @overview es6-promise - a tiny implementation of Promises/A+.
      * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
      * @license   Licensed under MIT license
      *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
      * @version   v4.2.2+97478eb6
      */
      !function (t, n) {
        e.exports = n();
      }(0, function () {
        "use strict";
        function e(e) {
          var t = typeof e === "undefined" ? "undefined" : _typeof(e);return null !== e && ("object" === t || "function" === t);
        }function r(e) {
          return "function" == typeof e;
        }function i(e) {
          J = e;
        }function o(e) {
          Q = e;
        }function s() {
          return void 0 !== B ? function () {
            B(u);
          } : a();
        }function a() {
          var e = setTimeout;return function () {
            return e(u, 1);
          };
        }function u() {
          for (var e = 0; e < M; e += 2) {
            (0, G[e])(G[e + 1]), G[e] = void 0, G[e + 1] = void 0;
          }M = 0;
        }function c(e, t) {
          var n = this,
              r = new this.constructor(h);void 0 === r[X] && x(r);var i = n._state;if (i) {
            var o = arguments[i - 1];Q(function () {
              return T(i, r, o, n._result);
            });
          } else S(n, r, e, t);return r;
        }function l(e) {
          var t = this;if (e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.constructor === t) return e;var n = new t(h);return g(n, e), n;
        }function h() {}function f() {
          return new TypeError("You cannot resolve a promise with itself");
        }function d() {
          return new TypeError("A promises callback cannot return that same promise.");
        }function p(e) {
          try {
            return e.then;
          } catch (e) {
            return te.error = e, te;
          }
        }function _(e, t, n, r) {
          try {
            e.call(t, n, r);
          } catch (e) {
            return e;
          }
        }function v(e, t, n) {
          Q(function (e) {
            var r = !1,
                i = _(n, t, function (n) {
              r || (r = !0, t !== n ? g(e, n) : w(e, n));
            }, function (t) {
              r || (r = !0, O(e, t));
            }, "Settle: " + (e._label || " unknown promise"));!r && i && (r = !0, O(e, i));
          }, e);
        }function y(e, t) {
          t._state === Z ? w(e, t._result) : t._state === ee ? O(e, t._result) : S(t, void 0, function (t) {
            return g(e, t);
          }, function (t) {
            return O(e, t);
          });
        }function m(e, t, n) {
          t.constructor === e.constructor && n === c && t.constructor.resolve === l ? y(e, t) : n === te ? (O(e, te.error), te.error = null) : void 0 === n ? w(e, t) : r(n) ? v(e, t, n) : w(e, t);
        }function g(t, n) {
          t === n ? O(t, f()) : e(n) ? m(t, n, p(n)) : w(t, n);
        }function b(e) {
          e._onerror && e._onerror(e._result), E(e);
        }function w(e, t) {
          e._state === Y && (e._result = t, e._state = Z, 0 !== e._subscribers.length && Q(E, e));
        }function O(e, t) {
          e._state === Y && (e._state = ee, e._result = t, Q(b, e));
        }function S(e, t, n, r) {
          var i = e._subscribers,
              o = i.length;e._onerror = null, i[o] = t, i[o + Z] = n, i[o + ee] = r, 0 === o && e._state && Q(E, e);
        }function E(e) {
          var t = e._subscribers,
              n = e._state;if (0 !== t.length) {
            for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) {
              r = t[s], i = t[s + n], r ? T(n, r, i, o) : i(o);
            }e._subscribers.length = 0;
          }
        }function A() {
          this.error = null;
        }function C(e, t) {
          try {
            return e(t);
          } catch (e) {
            return ne.error = e, ne;
          }
        }function T(e, t, n, i) {
          var o = r(n),
              s = void 0,
              a = void 0,
              u = void 0,
              c = void 0;if (o) {
            if (s = C(n, i), s === ne ? (c = !0, a = s.error, s.error = null) : u = !0, t === s) return void O(t, d());
          } else s = i, u = !0;t._state !== Y || (o && u ? g(t, s) : c ? O(t, a) : e === Z ? w(t, s) : e === ee && O(t, s));
        }function j(e, t) {
          try {
            t(function (t) {
              g(e, t);
            }, function (t) {
              O(e, t);
            });
          } catch (t) {
            O(e, t);
          }
        }function N() {
          return re++;
        }function x(e) {
          e[X] = re++, e._state = void 0, e._result = void 0, e._subscribers = [];
        }function k() {
          return new Error("Array Methods must be provided an Array");
        }function k() {
          return new Error("Array Methods must be provided an Array");
        }function U(e) {
          return new ie(this, e).promise;
        }function I(e) {
          var t = this;return new t(q(e) ? function (n, r) {
            for (var i = e.length, o = 0; o < i; o++) {
              t.resolve(e[o]).then(n, r);
            }
          } : function (e, t) {
            return t(new TypeError("You must pass an array to race."));
          });
        }function P(e) {
          var t = this,
              n = new t(h);return O(n, e), n;
        }function R() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }function D() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }function F() {
          var e = void 0;if (void 0 !== t) e = t;else if ("undefined" != typeof self) e = self;else try {
            e = Function("return this")();
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
          }var n = e.Promise;if (n) {
            var r = null;try {
              r = Object.prototype.toString.call(n.resolve());
            } catch (e) {}if ("[object Promise]" === r && !n.cast) return;
          }e.Promise = oe;
        }var L = void 0;L = Array.isArray ? Array.isArray : function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };var q = L,
            M = 0,
            B = void 0,
            J = void 0,
            Q = function Q(e, t) {
          G[M] = e, G[M + 1] = t, 2 === (M += 2) && (J ? J(u) : $());
        },
            W = "undefined" != typeof window ? window : void 0,
            V = W || {},
            H = V.MutationObserver || V.WebKitMutationObserver,
            z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            G = new Array(1e3),
            $ = void 0;$ = z ? function () {
          return function () {
            return process.nextTick(u);
          };
        }() : H ? function () {
          var e = 0,
              t = new H(u),
              n = document.createTextNode("");return t.observe(n, { characterData: !0 }), function () {
            n.data = e = ++e % 2;
          };
        }() : K ? function () {
          var e = new MessageChannel();return e.port1.onmessage = u, function () {
            return e.port2.postMessage(0);
          };
        }() : void 0 === W ? function () {
          try {
            var e = n(69);return B = e.runOnLoop || e.runOnContext, s();
          } catch (e) {
            return a();
          }
        }() : a();var X = Math.random().toString(36).substring(16),
            Y = void 0,
            Z = 1,
            ee = 2,
            te = new A(),
            ne = new A(),
            re = 0,
            ie = function () {
          function e(e, t) {
            this._instanceConstructor = e, this.promise = new e(h), this.promise[X] || x(this.promise), q(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : O(this.promise, k());
          }return e.prototype._enumerate = function (e) {
            for (var t = 0; this._state === Y && t < e.length; t++) {
              this._eachEntry(e[t], t);
            }
          }, e.prototype._eachEntry = function (e, t) {
            var n = this._instanceConstructor,
                r = n.resolve;if (r === l) {
              var i = p(e);if (i === c && e._state !== Y) this._settledAt(e._state, t, e._result);else if ("function" != typeof i) this._remaining--, this._result[t] = e;else if (n === oe) {
                var o = new n(h);m(o, e, i), this._willSettleAt(o, t);
              } else this._willSettleAt(new n(function (t) {
                return t(e);
              }), t);
            } else this._willSettleAt(r(e), t);
          }, e.prototype._settledAt = function (e, t, n) {
            var r = this.promise;r._state === Y && (this._remaining--, e === ee ? O(r, n) : this._result[t] = n), 0 === this._remaining && w(r, this._result);
          }, e.prototype._willSettleAt = function (e, t) {
            var n = this;S(e, void 0, function (e) {
              return n._settledAt(Z, t, e);
            }, function (e) {
              return n._settledAt(ee, t, e);
            });
          }, e;
        }(),
            oe = function () {
          function e(t) {
            this[X] = N(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && R(), this instanceof e ? j(this, t) : D());
          }return e.prototype.catch = function (e) {
            return this.then(null, e);
          }, e.prototype.finally = function (e) {
            var t = this,
                n = t.constructor;return t.then(function (t) {
              return n.resolve(e()).then(function () {
                return t;
              });
            }, function (t) {
              return n.resolve(e()).then(function () {
                throw t;
              });
            });
          }, e;
        }();return oe.prototype.then = c, oe.all = U, oe.race = I, oe.resolve = l, oe.reject = P, oe._setScheduler = i, oe._setAsap = o, oe._asap = Q, oe.polyfill = F, oe.Promise = oe, oe;
      });
    }).call(t, n(8));
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = e[s][t]; null != n;) {
        if (n.kind === a) return n.listener;n = n.next;
      }return null;
    }function i(e, t, n) {
      "function" != typeof n && "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && (n = null);for (var r = null, i = e[s][t]; null != i;) {
        i.kind === a ? null == r ? e[s][t] = i.next : r.next = i.next : r = i, i = i.next;
      }null != n && (null == r ? e[s][t] = u(n, a) : r.next = u(n, a));
    }var o = n(10),
        s = o.LISTENERS,
        a = o.ATTRIBUTE,
        u = o.newNode;t.defineCustomEventTarget = function (e, t) {
      function n() {
        e.call(this);
      }var o = { constructor: { value: n, configurable: !0, writable: !0 } };return t.forEach(function (e) {
        o["on" + e] = { get: function get() {
            return r(this, e);
          }, set: function set(t) {
            i(this, e, t);
          }, configurable: !0, enumerable: !0 };
      }), n.prototype = Object.create(e.prototype, o), n;
    };
  }, function (e, t, n) {
    "use strict";
    var r = n(10).createUniqueKey,
        i = r("stop_immediate_propagation_flag"),
        o = r("canceled_flag"),
        s = r("original_event"),
        a = Object.freeze({ stopPropagation: Object.freeze({ value: function value() {
          var e = this[s];"function" == typeof e.stopPropagation && e.stopPropagation();
        }, writable: !0, configurable: !0 }), stopImmediatePropagation: Object.freeze({ value: function value() {
          this[i] = !0;var e = this[s];"function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation();
        }, writable: !0, configurable: !0 }), preventDefault: Object.freeze({ value: function value() {
          !0 === this.cancelable && (this[o] = !0);var e = this[s];"function" == typeof e.preventDefault && e.preventDefault();
        }, writable: !0, configurable: !0 }), defaultPrevented: Object.freeze({ get: function get() {
          return this[o];
        }, enumerable: !0, configurable: !0 }) });t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function (e, t) {
      var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(),
          r = { type: { value: e.type, enumerable: !0 }, target: { value: t, enumerable: !0 }, currentTarget: { value: t, enumerable: !0 }, eventPhase: { value: 2, enumerable: !0 }, bubbles: { value: Boolean(e.bubbles), enumerable: !0 }, cancelable: { value: Boolean(e.cancelable), enumerable: !0 }, timeStamp: { value: n, enumerable: !0 }, isTrusted: { value: !1, enumerable: !0 } };return r[i] = { value: !1, writable: !0 }, r[o] = { value: !1, writable: !0 }, r[s] = { value: e }, void 0 !== e.detail && (r.detail = { value: e.detail, enumerable: !0 }), Object.create(Object.create(e, a), r);
    };
  }, function (e, t, n) {
    "use strict";
    function r() {}function i(e, t, n) {
      this.fn = e, this.context = t, this.once = n || !1;
    }function o() {
      this._events = new r(), this._eventsCount = 0;
    }var s = Object.prototype.hasOwnProperty,
        a = "~";Object.create && (r.prototype = Object.create(null), new r().__proto__ || (a = !1)), o.prototype.eventNames = function () {
      var e,
          t,
          n = [];if (0 === this._eventsCount) return n;for (t in e = this._events) {
        s.call(e, t) && n.push(a ? t.slice(1) : t);
      }return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
    }, o.prototype.listeners = function (e, t) {
      var n = a ? a + e : e,
          r = this._events[n];if (t) return !!r;if (!r) return [];if (r.fn) return [r.fn];for (var i = 0, o = r.length, s = new Array(o); i < o; i++) {
        s[i] = r[i].fn;
      }return s;
    }, o.prototype.emit = function (e, t, n, r, i, o) {
      var s = a ? a + e : e;if (!this._events[s]) return !1;var u,
          c,
          l = this._events[s],
          h = arguments.length;if (l.fn) {
        switch (l.once && this.removeListener(e, l.fn, void 0, !0), h) {case 1:
            return l.fn.call(l.context), !0;case 2:
            return l.fn.call(l.context, t), !0;case 3:
            return l.fn.call(l.context, t, n), !0;case 4:
            return l.fn.call(l.context, t, n, r), !0;case 5:
            return l.fn.call(l.context, t, n, r, i), !0;case 6:
            return l.fn.call(l.context, t, n, r, i, o), !0;}for (c = 1, u = new Array(h - 1); c < h; c++) {
          u[c - 1] = arguments[c];
        }l.fn.apply(l.context, u);
      } else {
        var f,
            d = l.length;for (c = 0; c < d; c++) {
          switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), h) {case 1:
              l[c].fn.call(l[c].context);break;case 2:
              l[c].fn.call(l[c].context, t);break;case 3:
              l[c].fn.call(l[c].context, t, n);break;case 4:
              l[c].fn.call(l[c].context, t, n, r);break;default:
              if (!u) for (f = 1, u = new Array(h - 1); f < h; f++) {
                u[f - 1] = arguments[f];
              }l[c].fn.apply(l[c].context, u);}
        }
      }return !0;
    }, o.prototype.on = function (e, t, n) {
      var r = new i(t, n || this),
          o = a ? a + e : e;return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this;
    }, o.prototype.once = function (e, t, n) {
      var r = new i(t, n || this, !0),
          o = a ? a + e : e;return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this;
    }, o.prototype.removeListener = function (e, t, n, i) {
      var o = a ? a + e : e;if (!this._events[o]) return this;if (!t) return 0 == --this._eventsCount ? this._events = new r() : delete this._events[o], this;var s = this._events[o];if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r() : delete this._events[o]);else {
        for (var u = 0, c = [], l = s.length; u < l; u++) {
          (s[u].fn !== t || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
        }c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r() : delete this._events[o];
      }return this;
    }, o.prototype.removeAllListeners = function (e) {
      var t;return e ? (t = a ? a + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new r() : delete this._events[t])) : (this._events = new r(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function () {
      return this;
    }, o.prefixed = a, o.EventEmitter = o, e.exports = o;
  }, function (e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }function r(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
    } /*!
      * Determine if an object is a Buffer
      *
      * @author   Feross Aboukhadijeh <https://feross.org>
      * @license  MIT
      */
    e.exports = function (e) {
      return null != e && (n(e) || r(e) || !!e._isBuffer);
    };
  }, function (e, t, n) {
    !function (t) {
      var n = {},
          r = {};n.length = 0, n.getItem = function (e) {
        return r[e] || null;
      }, n.setItem = function (e, t) {
        void 0 === t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t);
      }, n.removeItem = function (e) {
        r.hasOwnProperty(e) && (delete r[e], n.length--);
      }, n.key = function (e) {
        return Object.keys(r)[e] || null;
      }, n.clear = function () {
        r = {}, n.length = 0;
      }, e.exports = n;
    }();
  }, function (e, t, n) {
    !function () {
      var t = n(55),
          r = n(19).utf8,
          i = n(61),
          o = n(19).bin,
          s = function s(e, n) {
        e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());for (var a = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) {
          a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
        }a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;for (var p = s._ff, _ = s._gg, v = s._hh, y = s._ii, d = 0; d < a.length; d += 16) {
          var m = c,
              g = l,
              b = h,
              w = f;c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = y(c, l, h, f, a[d + 0], 6, -198630844), f = y(f, c, l, h, a[d + 7], 10, 1126891415), h = y(h, f, c, l, a[d + 14], 15, -1416354905), l = y(l, h, f, c, a[d + 5], 21, -57434055), c = y(c, l, h, f, a[d + 12], 6, 1700485571), f = y(f, c, l, h, a[d + 3], 10, -1894986606), h = y(h, f, c, l, a[d + 10], 15, -1051523), l = y(l, h, f, c, a[d + 1], 21, -2054922799), c = y(c, l, h, f, a[d + 8], 6, 1873313359), f = y(f, c, l, h, a[d + 15], 10, -30611744), h = y(h, f, c, l, a[d + 6], 15, -1560198380), l = y(l, h, f, c, a[d + 13], 21, 1309151649), c = y(c, l, h, f, a[d + 4], 6, -145523070), f = y(f, c, l, h, a[d + 11], 10, -1120210379), h = y(h, f, c, l, a[d + 2], 15, 718787259), l = y(l, h, f, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0;
        }return t.endian([c, l, h, f]);
      };s._ff = function (e, t, n, r, i, o, s) {
        var a = e + (t & n | ~t & r) + (i >>> 0) + s;return (a << o | a >>> 32 - o) + t;
      }, s._gg = function (e, t, n, r, i, o, s) {
        var a = e + (t & r | n & ~r) + (i >>> 0) + s;return (a << o | a >>> 32 - o) + t;
      }, s._hh = function (e, t, n, r, i, o, s) {
        var a = e + (t ^ n ^ r) + (i >>> 0) + s;return (a << o | a >>> 32 - o) + t;
      }, s._ii = function (e, t, n, r, i, o, s) {
        var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;return (a << o | a >>> 32 - o) + t;
      }, s._blocksize = 16, s._digestsize = 16, e.exports = function (e, n) {
        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);var r = t.wordsToBytes(s(e, n));return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r);
      };
    }();
  }, function (e, t) {
    function n(e) {
      if (e = String(e), !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if (t) {
          var n = parseFloat(t[1]);switch ((t[2] || "ms").toLowerCase()) {case "years":case "year":case "yrs":case "yr":case "y":
              return n * l;case "days":case "day":case "d":
              return n * c;case "hours":case "hour":case "hrs":case "hr":case "h":
              return n * u;case "minutes":case "minute":case "mins":case "min":case "m":
              return n * a;case "seconds":case "second":case "secs":case "sec":case "s":
              return n * s;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
              return n;default:
              return;}
        }
      }
    }function r(e) {
      return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= a ? Math.round(e / a) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms";
    }function i(e) {
      return o(e, c, "day") || o(e, u, "hour") || o(e, a, "minute") || o(e, s, "second") || e + " ms";
    }function o(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
    }var s = 1e3,
        a = 60 * s,
        u = 60 * a,
        c = 24 * u,
        l = 365.25 * c;e.exports = function (e, t) {
      t = t || {};var o = typeof e === "undefined" ? "undefined" : _typeof(e);if ("string" === o && e.length > 0) return n(e);if ("number" === o && !1 === isNaN(e)) return t.long ? i(e) : r(e);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
  }, function (e, t) {
    function n() {
      this._defaults = [];
    }["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (e) {
      n.prototype[e] = function () {
        return this._defaults.push({ fn: e, arguments: arguments }), this;
      };
    }), n.prototype._setDefaults = function (e) {
      this._defaults.forEach(function (t) {
        e[t.fn].apply(e, t.arguments);
      });
    }, e.exports = n;
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      if (e) return i(e);
    }function i(e) {
      for (var t in r.prototype) {
        e[t] = r.prototype[t];
      }return e;
    }var o = n(21);e.exports = r, r.prototype.clearTimeout = function () {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this;
    }, r.prototype.parse = function (e) {
      return this._parser = e, this;
    }, r.prototype.responseType = function (e) {
      return this._responseType = e, this;
    }, r.prototype.serialize = function (e) {
      return this._serializer = e, this;
    }, r.prototype.timeout = function (e) {
      if (!e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return this._timeout = e, this._responseTimeout = 0, this;for (var t in e) {
        switch (t) {case "deadline":
            this._timeout = e.deadline;break;case "response":
            this._responseTimeout = e.response;break;default:
            console.warn("Unknown timeout option", t);}
      }return this;
    }, r.prototype.retry = function (e, t) {
      return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this;
    };var s = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];r.prototype._shouldRetry = function (e, t) {
      if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;if (this._retryCallback) try {
        var n = this._retryCallback(e, t);if (!0 === n) return !0;if (!1 === n) return !1;
      } catch (e) {
        console.error(e);
      }if (t && t.status && t.status >= 500 && 501 != t.status) return !0;if (e) {
        if (e.code && ~s.indexOf(e.code)) return !0;if (e.timeout && "ECONNABORTED" == e.code) return !0;if (e.crossDomain) return !0;
      }return !1;
    }, r.prototype._retry = function () {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end();
    }, r.prototype.then = function (e, t) {
      if (!this._fullfilledPromise) {
        var n = this;this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (e, t) {
          n.end(function (n, r) {
            n ? t(n) : e(r);
          });
        });
      }return this._fullfilledPromise.then(e, t);
    }, r.prototype.catch = function (e) {
      return this.then(void 0, e);
    }, r.prototype.use = function (e) {
      return e(this), this;
    }, r.prototype.ok = function (e) {
      if ("function" != typeof e) throw Error("Callback required");return this._okCallback = e, this;
    }, r.prototype._isResponseOK = function (e) {
      return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
    }, r.prototype.get = function (e) {
      return this._header[e.toLowerCase()];
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function (e, t) {
      if (o(e)) {
        for (var n in e) {
          this.set(n, e[n]);
        }return this;
      }return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
    }, r.prototype.unset = function (e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this;
    }, r.prototype.field = function (e, t) {
      if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(e)) {
        for (var n in e) {
          this.field(n, e[n]);
        }return this;
      }if (Array.isArray(t)) {
        for (var r in t) {
          this.field(e, t[r]);
        }return this;
      }if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this;
    }, r.prototype.abort = function () {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
    }, r.prototype._auth = function (e, t, n, r) {
      switch (n.type) {case "basic":
          this.set("Authorization", "Basic " + r(e + ":" + t));break;case "auto":
          this.username = e, this.password = t;break;case "bearer":
          this.set("Authorization", "Bearer " + e);}return this;
    }, r.prototype.withCredentials = function (e) {
      return void 0 == e && (e = !0), this._withCredentials = e, this;
    }, r.prototype.redirects = function (e) {
      return this._maxRedirects = e, this;
    }, r.prototype.maxResponseSize = function (e) {
      if ("number" != typeof e) throw TypeError("Invalid argument");return this._maxResponseSize = e, this;
    }, r.prototype.toJSON = function () {
      return { method: this.method, url: this.url, data: this._data, headers: this._header };
    }, r.prototype.send = function (e) {
      var t = o(e),
          n = this._header["content-type"];if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");if (t && o(this._data)) for (var r in e) {
        this._data[r] = e[r];
      } else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;return !t || this._isHost(e) ? this : (n || this.type("json"), this);
    }, r.prototype.sortQuery = function (e) {
      return this._sort = void 0 === e || e, this;
    }, r.prototype._finalizeQueryString = function () {
      var e = this._query.join("&");if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, this._sort) {
        var t = this.url.indexOf("?");if (t >= 0) {
          var n = this.url.substring(t + 1).split("&");"function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&");
        }
      }
    }, r.prototype._appendQueryString = function () {
      console.trace("Unsupported");
    }, r.prototype._timeoutError = function (e, t, n) {
      if (!this._aborted) {
        var r = new Error(e + t + "ms exceeded");r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r);
      }
    }, r.prototype._setTimeouts = function () {
      var e = this;this._timeout && !this._timer && (this._timer = setTimeout(function () {
        e._timeoutError("Timeout of ", e._timeout, "ETIME");
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
        e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT");
      }, this._responseTimeout));
    };
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      if (e) return i(e);
    }function i(e) {
      for (var t in r.prototype) {
        e[t] = r.prototype[t];
      }return e;
    }var o = n(68);e.exports = r, r.prototype.get = function (e) {
      return this.header[e.toLowerCase()];
    }, r.prototype._setHeaderProperties = function (e) {
      var t = e["content-type"] || "";this.type = o.type(t);var n = o.params(t);for (var r in n) {
        this[r] = n[r];
      }this.links = {};try {
        e.link && (this.links = o.parseLinks(e.link));
      } catch (e) {}
    }, r.prototype._setStatusProperties = function (e) {
      var t = e / 100 | 0;this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e;
    };
  }, function (e, t, n) {
    "use strict";
    t.type = function (e) {
      return e.split(/ *; */).shift();
    }, t.params = function (e) {
      return e.split(/ *; */).reduce(function (e, t) {
        var n = t.split(/ *= */),
            r = n.shift(),
            i = n.shift();return r && i && (e[r] = i), e;
      }, {});
    }, t.parseLinks = function (e) {
      return e.split(/ *, */).reduce(function (e, t) {
        var n = t.split(/ *; */),
            r = n[0].slice(1, -1);return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e;
      }, {});
    }, t.cleanHeader = function (e, t) {
      return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e;
    };
  }, function (e, t) {}]);
});
//# sourceMappingURL=av-weapp-min.js.map
},/***** module 48 end *****/


/***** module 49 start *****/
/***** src/secret_keys.js *****/
function(module, exports, __wepy_require) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// fidofinder leancloud keys
// const appId = 'xoKGfXYndfV8c7rszMRq6yjL-9Nh9j0Va'
// const appKey = '6IrMhfRa47FE4VzHBFxiz2WW'

// fido north leancloud keys
var appId = 'tSaB7MBClaYfLMBAe5uC5RqP-gzGzoHsz';
var appKey = 'QKBpAySHMxB1XbGAdKFAThgf';
exports.appId = appId;
exports.appKey = appKey;
},/***** module 49 end *****/


/***** module 50 start *****/
/***** node_modules/wepy-web/lib/native.js *****/
function(module, exports, __wepy_require) {"use strict";

exports.__esModule = true;
exports.default = {};
},/***** module 50 end *****/


/***** module 51 start *****/
/***** node_modules/vue/dist/vue.js *****/
function(module, exports, __wepy_require) {/*!
 * Vue.js v1.0.28
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, (function () { 'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    if (obj._isVue) {
      delete obj._data[key];
      obj._digest();
    }
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delimited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([^-])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a property.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && UA.indexOf('trident') > 0;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/* istanbul ignore next */
function isNative(Ctor) {
  return (/native code/.test(Ctor.toString())
  );
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc = undefined;

  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var noop = function noop() {};
    timerFunc = function () {
      p.then(nextTickHandler);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) setTimeout(noop);
    };
  } else if (typeof MutationObserver !== 'undefined') {
    // use MutationObserver where native Promise is not available,
    // e.g. IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = setTimeout;
  }

  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

var _Set = undefined;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = function () {
    this.set = Object.create(null);
  };
  _Set.prototype.has = function (key) {
    return this.set[key] !== undefined;
  };
  _Set.prototype.add = function (key) {
    this.set[key] = 1;
  };
  _Set.prototype.clear = function () {
    this.set = Object.create(null);
  };
}

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;

  var entry = this.get(key, true);
  if (!entry) {
    if (this.size === this.limit) {
      removed = this.shift();
    }
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var len;
var index;
var chr;
var state;
var startState = 0;
var filterState = 1;
var filterNameState = 2;
var filterArgState = 3;

var doubleChr = 0x22;
var singleChr = 0x27;
var pipeChr = 0x7C;
var escapeChr = 0x5C;
var spaceChr = 0x20;

var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };

function peek() {
  return str.charCodeAt(index + 1);
}

function next() {
  return str.charCodeAt(++index);
}

function eof() {
  return index >= len;
}

function eatSpace() {
  while (peek() === spaceChr) {
    next();
  }
}

function isStringStart(chr) {
  return chr === doubleChr || chr === singleChr;
}

function isExpStart(chr) {
  return expStartChr[chr];
}

function isExpEnd(start, chr) {
  return expChrPair[start] === chr;
}

function parseString() {
  var stringQuote = next();
  var chr;
  while (!eof()) {
    chr = next();
    // escape char
    if (chr === escapeChr) {
      next();
    } else if (chr === stringQuote) {
      break;
    }
  }
}

function parseSpecialExp(chr) {
  var inExp = 0;
  var startChr = chr;

  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
      continue;
    }

    if (startChr === chr) {
      inExp++;
    }
    if (isExpEnd(startChr, chr)) {
      inExp--;
    }

    next();

    if (inExp === 0) {
      break;
    }
  }
}

/**
 * syntax:
 * expression | filterName  [arg  arg [| filterName arg arg]]
 */

function parseExpression() {
  var start = index;
  while (!eof()) {
    chr = peek();
    if (isStringStart(chr)) {
      parseString();
    } else if (isExpStart(chr)) {
      parseSpecialExp(chr);
    } else if (chr === pipeChr) {
      next();
      chr = peek();
      if (chr === pipeChr) {
        next();
      } else {
        if (state === startState || state === filterArgState) {
          state = filterState;
        }
        break;
      }
    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
      eatSpace();
      break;
    } else {
      if (state === filterState) {
        state = filterNameState;
      }
      next();
    }
  }

  return str.slice(start + 1, index) || null;
}

function parseFilterList() {
  var filters = [];
  while (!eof()) {
    filters.push(parseFilter());
  }
  return filters;
}

function parseFilter() {
  var filter = {};
  var args;

  state = filterState;
  filter.name = parseExpression().trim();

  state = filterArgState;
  args = parseFilterArguments();

  if (args.length) {
    filter.args = args;
  }
  return filter;
}

function parseFilterArguments() {
  var args = [];
  while (!eof() && state !== filterState) {
    var arg = parseExpression();
    if (!arg) {
      break;
    }
    args.push(processFilterArg(arg));
  }

  return args;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} s
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  dir = {};
  len = str.length;
  index = -1;
  chr = '';
  state = startState;

  var filters;

  if (str.indexOf('|') < 0) {
    dir.expression = str.trim();
  } else {
    dir.expression = parseExpression().trim();
    filters = parseFilterList();
    if (filters.length) {
      dir.filters = filters;
    }
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Whether to allow devtools inspection.
   * Disabled by default in production builds.
   */

  devtools: 'development' !== 'production',

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;
var formatComponentName = undefined;

if ('development' !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';

    warn = function (msg, vm) {
      if (hasConsole && !config.silent) {
        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
      }
    };

    formatComponentName = function (vm) {
      var name = vm._isVue ? vm.$options.name : vm.name;
      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      'development' !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  if (!node) return false;
  var doc = node.ownerDocument.documentElement;
  var parent = node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */

function getClass(el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname;
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
var reservedTagRE = /^(slot|partial|component)$/i;

var isUnknownElement = undefined;
if ('development' !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        // Firefox returns unknown for some "Interactive elements."
        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el, options);
      if (is) {
        return is;
      } else if ('development' !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el, options);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function getIsBinding(el, options) {
  // dynamic syntax
  var exp = el.getAttribute('is');
  if (exp != null) {
    if (resolveAsset(options, 'components', exp)) {
      el.removeAttribute('is');
      return { id: exp };
    }
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      'development' !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    'development' !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if ('development' !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        'development' !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if ('development' !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        'development' !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  if ('development' !== 'production') {
    if (child.propsData && !vm) {
      warn('propsData can only be used as an instantiation option.');
    }
  }
  var options = {};
  var key;
  if (child['extends']) {
    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
      parent = mergeOptions(parent, mixinOptions, vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @param {Boolean} warnMissing
 * @return {Object|Function}
 */

function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  var res = assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
  if ('development' !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }
  return res;
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index or target element reference.
 *
 * @param {*} item
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However in certain cases, e.g.
 * v-for scope alias and props, we don't want to force conversion
 * because the value may be a nested value under a frozen data structure.
 *
 * So whenever we want to set a reactive property without forcing
 * conversion on the new value, we wrap that call inside this function.
 */

var shouldConvert = true;

function withoutConversion(fn) {
  shouldConvert = false;
  fn();
  shouldConvert = true;
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} src
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE: isIE,
	isIE9: isIE9,
	isAndroid: isAndroid,
	isIOS: isIOS,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	get _Set () { return _Set; },
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	checkComponentAttr: checkComponentAttr,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to register itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initData().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression$1(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if ('development' !== 'production') {
  warnNonExistent = function (path, vm) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression$1(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if ('development' !== 'production' && last._isVue) {
          warnNonExistent(path, last);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if ('development' !== 'production' && obj._isVue) {
          warnNonExistent(path, obj);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;

function noop() {}

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    'development' !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here because the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    if ('development' !== 'production') {
      /* istanbul ignore if */
      if (e.toString().match(/unsafe-eval|CSP/)) {
        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
      } else {
        warn('Invalid expression. ' + 'Generated function body: ' + body);
      }
    }
    return noop;
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    'development' !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression$1(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat literal values as paths
  !literalValueRE$1.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression$1,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.

var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue.length = 0;
  userQueue.length = 0;
  has = {};
  circular = {};
  waiting = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  var _again = true;

  _function: while (_again) {
    _again = false;

    runBatcherQueue(queue);
    runBatcherQueue(userQueue);
    // user watchers triggered more watchers,
    // keep flushing until it depletes
    if (queue.length) {
      _again = true;
      continue _function;
    }
    // dev tool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
    resetBatcherState();
  }
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ('development' !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
        break;
      }
    }
  }
  queue.length = 0;
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String|Function} expOrFn
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression$1(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if ('development' !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if ('development' !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      'development' !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
};

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if ('development' !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if ('development' !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

var seenObjects = new _Set();
function traverse(val, seen) {
  var i = undefined,
      keys = undefined;
  if (!seen) {
    seen = seenObjects;
    seen.clear();
  }
  var isA = isArray(val);
  var isO = isObject(val);
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return;
      } else {
        seen.add(depId);
      }
    }
    if (isA) {
      i = val.length;
      while (i--) traverse(val[i], seen);
    } else if (isO) {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) traverse(val[keys[i]], seen);
    }
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:-]+)/;
var entityRE = /&#?\w+?;/;
var commentRE = /<!--/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);
  var commentMatch = commentRE.test(templateString);

  if (!tagMatch && !entityMatch && !commentMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment. However, iOS Safari has
  // bug when using directly cloned template content with touch
  // events and can cause crashes when the nodes are removed from DOM, so we
  // have to treat template elements as string templates. (#2805)
  /* istanbul ignore if */
  if (isRealTemplate(node)) {
    return stringToFragment(node.innerHTML);
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  /* istanbul ignore if */
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 * @param {Fragment} [parentFrag]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached && inDoc(child.$el)) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached && !inDoc(child.$el)) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var IF = 2100;
var FOR = 2200;
var SLOT = 2300;

var uid$3 = 0;

var vFor = {

  priority: FOR,
  terminal: true,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    if ('development' !== 'production' && this.el.hasAttribute('v-if')) {
      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
    }

    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      'development' !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          withoutConversion(function () {
            frag.scope[alias] = value;
          });
        }
      } else {
        // new instance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    // important: define the scope alias without forced conversion
    // so that frozen data structures remain non-reactive.
    withoutConversion(function () {
      defineReactive(scope, alias, value);
    });
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      var target = prevEl.nextSibling;
      /* istanbul ignore if */
      if (!target) {
        // reset end anchor position in case the position was messed up
        // by an external drag-n-drop library.
        after(this.end, prevEl);
        target = this.end;
      }
      frag.before(target);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = getTrackByKey(index, key, value, trackByKey);
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        'development' !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          'development' !== 'production' && this.warnDuplicate(value);
        }
      } else if (Object.isExtensible(value)) {
        def(value, id, frag);
      } else if ('development' !== 'production') {
        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      'development' !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = getTrackByKey(index, key, value, trackByKey);
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * watcher's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

/**
 * Get the track by key for an item.
 *
 * @param {Number} index
 * @param {String} key
 * @param {*} value
 * @param {String} [trackByKey]
 */

function getTrackByKey(index, key, value, trackByKey) {
  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
}

if ('development' !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
  };
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

var vIf = {

  priority: IF,
  terminal: true,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseEl = next;
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
    } else {
      'development' !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    // lazy init factory
    if (!this.factory) {
      this.factory = new FragmentFactory(this.vm, this.el);
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseEl && !this.elseFrag) {
      if (!this.elseFactory) {
        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
      }
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
        // do not sync value after fragment removal (#2017)
        if (!self._frag || self._frag.inserted) {
          self.rawListener();
        }
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    // #3029 only update when the value changes. This prevent
    // browsers from overwriting values like selectionStart
    value = _toString(value);
    if (value !== this.el.value) this.el.value = value;
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var _this = this;

    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', function () {
      nextTick(_this.forceUpdate);
    });
    if (!inDoc(el)) {
      nextTick(this.forceUpdate);
    }
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.get();
      if (isArray(model)) {
        var val = self.getValue();
        var i = indexOf(model, val);
        if (el.checked) {
          if (i < 0) {
            self.set(model.concat(val));
          }
        } else if (i > -1) {
          self.set(model.slice(0, i).concat(model.slice(i + 1)));
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      'development' !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      'development' !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      'development' !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        /* istanbul ignore if */
        if ('development' !== 'production') {
          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
        }
        value = value.replace(importantRE, '').trim();
        this.el.style.setProperty(prop.kebab, value, isImportant);
      } else {
        this.el.style[prop.camel] = value;
      }
    } else {
      this.el.style[prop.camel] = '';
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  if (camel !== 'filter' && camel in testEl.style) {
    return {
      kebab: prop,
      camel: camel
    };
  }
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return {
        kebab: prefixes[i] + prop,
        camel: prefixed
      };
    }
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        'development' !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if ('development' !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;

      if (el[attr] !== attrValue) {
        el[attr] = attrValue;
      }
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    'development' !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// logic control
// two-way binding
// event handling
// attributes
// ref & el
// cloak
// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (!value) {
      this.cleanup();
    } else if (typeof value === 'string') {
      this.setClass(value.trim().split(/\s+/));
    } else {
      this.setClass(normalize$1(value));
    }
  },

  setClass: function setClass(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      var val = value[i];
      if (val) {
        apply(this.el, val, addClass);
      }
    }
    this.prevKeys = value;
  },

  cleanup: function cleanup(value) {
    var prevKeys = this.prevKeys;
    if (!prevKeys) return;
    var i = prevKeys.length;
    while (i--) {
      var key = prevKeys[i];
      if (!value || value.indexOf(key) < 0) {
        apply(this.el, key, removeClass);
      }
    }
  }
};

/**
 * Normalize objects and arrays (potentially containing objects)
 * into array of strings.
 *
 * @param {Object|Array<String|Object>} value
 * @return {Array<String>}
 */

function normalize$1(value) {
  var res = [];
  if (isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var _key = value[i];
      if (_key) {
        if (typeof _key === 'string') {
          res.push(_key);
        } else {
          for (var k in _key) {
            if (_key[k]) res.push(k);
          }
        }
      }
    }
  } else if (isObject(value)) {
    for (var key in value) {
      if (value[key]) res.push(key);
    }
  }
  return res;
}

/**
 * Add or remove a class/classes on an element
 *
 * @param {Element} el
 * @param {String} key The class name. This may or may not
 *                     contain a space character, in such a
 *                     case we'll deal with multiple class
 *                     names at once.
 * @param {Function} fn
 */

function apply(el, key, fn) {
  key = key.trim();
  if (key.indexOf(' ') === -1) {
    fn(el, key);
    return;
  }
  // The key contains one or more space characters.
  // Since a class name doesn't accept such characters, we
  // treat it as multiple classes.
  var keys = key.split(/\s+/);
  for (var i = 0, l = keys.length; i < l; i++) {
    fn(el, keys[i]);
  }
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      this.el.removeAttribute(':is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      'development' !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  resolveComponent: function resolveComponent(value, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(value, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if ('development' !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      if (!this.keepAlive) {
        this.waitingFor.$destroy();
      }
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._inactive = true;
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (current) current._inactive = true;
    target._inactive = false;
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @param {Vue} vm
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions, vm) {
  var props = [];
  var propsData = vm.$options.propsData;
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if ('development' !== 'production' && name === '$data') {
      warn('Do not use $data as prop.', vm);
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      'development' !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if ('development' !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if ('development' !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.', vm);
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
      // has propsData
      prop.raw = value;
    } else if ('development' !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
        // warn missing required
        warn('Missing required prop: ' + name, vm);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var inlineProps = vm.$options.propsData;
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (inlineProps && hasOwn(inlineProps, path)) {
        initProp(vm, prop, inlineProps[path]);
      }if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, undefined);
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value, or with same
        // literal value (e.g. disabled="disabled")
        // see https://github.com/vuejs/vue-loader/issues/182
        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Process a prop with a rawValue, applying necessary coersions,
 * default values & assertions and call the given callback with
 * processed value.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} rawValue
 * @param {Function} fn
 */

function processPropValue(vm, prop, rawValue, fn) {
  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
  var value = rawValue;
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop);
  }
  value = coerceProp(prop, value, vm);
  var coerced = value !== rawValue;
  if (!assertProp(prop, value, vm)) {
    value = undefined;
  }
  if (isSimple && !coerced) {
    withoutConversion(function () {
      fn(value);
    });
  } else {
    fn(value);
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    defineReactive(vm, prop.path, value);
  });
}

/**
 * Update a prop's value on a vm.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function updateProp(vm, prop, value) {
  processPropValue(vm, prop, value, function (value) {
    vm[prop.path] = value;
  });
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @return {*}
 */

function getPropDefaultValue(vm, prop) {
  // no default, return undefined
  var options = prop.options;
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    'development' !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 * @param {Vue} vm
 */

function assertProp(prop, value, vm) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = !type;
  var expectedTypes = [];
  if (type) {
    if (!isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType);
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    if ('development' !== 'production') {
      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
    }
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      'development' !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value, vm) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  if (typeof coerce === 'function') {
    return coerce(value);
  } else {
    'development' !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
    return value;
  }
}

/**
 * Assert the type of a value
 *
 * @param {*} value
 * @param {Function} type
 * @return {Object}
 */

function assertType(value, type) {
  var valid;
  var expectedType;
  if (type === String) {
    expectedType = 'string';
    valid = typeof value === expectedType;
  } else if (type === Number) {
    expectedType = 'number';
    valid = typeof value === expectedType;
  } else if (type === Boolean) {
    expectedType = 'boolean';
    valid = typeof value === expectedType;
  } else if (type === Function) {
    expectedType = 'function';
    valid = typeof value === expectedType;
  } else if (type === Object) {
    expectedType = 'object';
    valid = isPlainObject(value);
  } else if (type === Array) {
    expectedType = 'array';
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  };
}

/**
 * Format type for output
 *
 * @param {String} type
 * @return {String}
 */

function formatType(type) {
  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
}

/**
 * Format value
 *
 * @param {*} value
 * @return {String}
 */

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      updateProp(child, prop, val);
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * If a just-entered element is applied the
 * leave class while its enter transition hasn't started yet,
 * and the transitioned property has the same value for both
 * enter/leave, then the leave transition will be skipped and
 * the transitionend event never fires. This function ensures
 * its callback to be called after a transition has started
 * by waiting for double raf.
 *
 * It falls back to setTimeout on devices that support CSS
 * transitions but not raf (e.g. Android 4.2 browser) - since
 * these environments are usually slow, we are giving it a
 * relatively large timeout.
 */

var raf = inBrowser && window.requestAnimationFrame;
var waitForTransitionStart = raf
/* istanbul ignore next */
? function (fn) {
  raf(function () {
    raf(fn);
  });
} : function (fn) {
  setTimeout(fn, 50);
};

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if ('development' !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  var _this = this;

  // prevent transition skipping
  this.justEntered = true;
  waitForTransitionStart(function () {
    _this.justEntered = false;
  });
  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    oldId = oldId || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    removeClass(el, oldId + '-transition');
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// default directive priority
var DEFAULT_PRIORITY = 1000;
var DEFAULT_TERMINAL_PRIORITY = 2000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if ('development' === 'production') {}
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  sortDirectives(dirs);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * sort directives by priority (stable sort)
 *
 * @param {Array} dirs
 */
function sortDirectives(dirs) {
  if (dirs.length === 0) return;

  var groupedMap = {};
  var i, j, k, l;
  var index = 0;
  var priorities = [];
  for (i = 0, j = dirs.length; i < j; i++) {
    var dir = dirs[i];
    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
    var array = groupedMap[priority];
    if (!array) {
      array = groupedMap[priority] = [];
      priorities.push(priority);
    }
    array.push(dir);
  }

  priorities.sort(function (a, b) {
    return a > b ? -1 : a === b ? 0 : 1;
  });
  for (i = 0, j = priorities.length; i < j; i++) {
    var group = groupedMap[priorities[i]];
    for (k = 0, l = group.length; k < l; k++) {
      dirs[index++] = group[k];
    }
  }
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if ('development' !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props, vm);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if ('development' !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;

      var componentName = options.el.tagName.toLowerCase();
      if (componentName === 'component' && options.name) {
        componentName += ':' + options.name;
      }

      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && !isScript(node)) {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    // a textarea which has v-pre attr should skip complie.
    if (getAttr(el, 'v-pre') !== null) {
      return skip;
    }
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  var attrs = hasAttrs && toArray(el.attributes);
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, attrs, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(attrs, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = _toString(value);
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Array} attrs
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, attrs, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }

  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
  for (var i = 0, j = attrs.length; i < j; i++) {
    attr = attrs[i];
    name = attr.name.replace(modifierRE, '');
    if (matched = name.match(dirAttrRE)) {
      def = resolveAsset(options, 'directives', matched[1]);
      if (def && def.terminal) {
        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
          termDef = def;
          rawName = attr.name;
          modifiers = parseModifiers(attr.name);
          value = attr.value;
          dirName = matched[1];
          arg = matched[2];
        }
      }
    }
  }

  if (termDef) {
    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} def
 * @param {String} [rawName]
 * @param {String} [arg]
 * @param {Object} [modifiers]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    arg: arg,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    attr: rawName,
    modifiers: modifiers,
    def: def
  };
  // check ref for v-for, v-if and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if ('development' !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName, true);
              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

function isScript(el) {
  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    if (!replacer) {
      return frag;
    }
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        'development' !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    'development' !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function resolveSlots(vm, content) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = Object.create(null);
  var el, name;
  for (var i = 0, l = content.children.length; i < l; i++) {
    el = content.children[i];
    /* eslint-disable no-cond-assign */
    if (name = el.getAttribute('slot')) {
      (contents[name] || (contents[name] = [])).push(el);
    }
    /* eslint-enable no-cond-assign */
    if ('development' !== 'production' && getBindAttr(el, 'slot')) {
      warn('The "slot" attribute must be static.', vm.$parent);
    }
  }
  for (name in contents) {
    contents[name] = extractFragment(contents[name], content);
  }
  if (content.hasChildNodes()) {
    var nodes = content.childNodes;
    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
      return;
    }
    contents['default'] = extractFragment(content.childNodes, content);
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
      parent.removeChild(node);
      node = parseTemplate(node, true);
    }
    frag.appendChild(node);
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	transclude: transclude,
	resolveSlots: resolveSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      'development' !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var dataFn = this.$options.data;
    var data = this._data = dataFn ? dataFn() : {};
    if (!isPlainObject(data)) {
      data = {};
      'development' !== 'production' && warn('data functions should return an object.', this);
    }
    var props = this._props;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      // there are two scenarios where we can proxy a data key:
      // 1. it's not already defined as a prop
      // 2. it's provided via a instantiation option AND there are no
      //    template prop present
      if (!props || !hasOwn(props, key)) {
        this._proxy(key);
      } else if ('development' !== 'production') {
        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
      }
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, value, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        // force the expression into a statement so that
        // it always dynamically resolves the method to call (#2670)
        // kinda ugly hack, but does the job.
        value = attrs[i].value;
        if (isSimplePath(value)) {
          value += '.apply(this, $arguments)';
        }
        handler = (vm._scope || vm._context).$eval(value, true);
        handler._fromParent = true;
        vm.$on(name.replace(eventRE), handler);
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        'development' !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop$1() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Object} [modifiers]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} arg
 *                 - {String} raw
 *                 - {String} [ref]
 *                 - {Array<Object>} [interp]
 *                 - {Boolean} [hasOneTime]
 * @param {Vue} vm
 * @param {Node} el
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if ('development' !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop$1;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = hyphenate(params[i]);
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression$1(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if ('development' !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if ('development' !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // resolve slot distribution
    resolveSlots(this, options._content);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {Object} descriptor - parsed directive descriptor
   * @param {Node} node   - target node
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data && this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[write ? l - i - 1 : i];
      fn = resolveAsset(this.$options, 'filters', filter.name, true);
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String|Function} value
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (value, cb) {
    var factory;
    if (typeof value === 'function') {
      factory = value;
    } else {
      factory = resolveAsset(this.$options, 'components', value, true);
    }
    /* istanbul ignore if */
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          'development' !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression$1(exp);
    if (res) {
      if (asStatement) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression$1(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      var key;
      for (key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
      if (this._props) {
        for (key in this._props) {
          data[key] = clean(this[key]);
        }
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      'development' !== 'production' && warn('$mount() should be called only once.', this);
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   *
   * @param {Boolean} remove
   * @param {Boolean} deferCleanup
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @param {Object} [scope]
   * @param {Fragment} [frag]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Order filter for arrays
 *
 * @param {String|Array<String>|Function} ...sortKeys
 * @param {Number} [order]
 */

function orderBy(arr) {
  var comparator = null;
  var sortKeys = undefined;
  arr = convertArray(arr);

  // determine order (last argument)
  var args = toArray(arguments, 1);
  var order = args[args.length - 1];
  if (typeof order === 'number') {
    order = order < 0 ? -1 : 1;
    args = args.length > 1 ? args.slice(0, -1) : args;
  } else {
    order = 1;
  }

  // determine sortKeys & comparator
  var firstArg = args[0];
  if (!firstArg) {
    return arr;
  } else if (typeof firstArg === 'function') {
    // custom comparator
    comparator = function (a, b) {
      return firstArg(a, b) * order;
    };
  } else {
    // string keys. flatten first
    sortKeys = Array.prototype.concat.apply([], args);
    comparator = function (a, b, i) {
      i = i || 0;
      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
    };
  }

  function baseCompare(a, b, sortKeyIndex) {
    var sortKey = sortKeys[sortKeyIndex];
    if (sortKey) {
      if (sortKey !== '$key') {
        if (isObject(a) && '$value' in a) a = a.$value;
        if (isObject(b) && '$value' in b) b = b.$value;
      }
      a = isObject(a) ? getPath(a, sortKey) : a;
      b = isObject(b) ? getPath(b, sortKey) : b;
    }
    return a === b ? 0 : a > b ? order : -order;
  }

  // sort on a copy to avoid mutating original array
  return arr.slice().sort(comparator);
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   * @param {Number} decimals Decimal places
   */

  currency: function currency(value, _currency, decimals) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    decimals = decimals != null ? decimals : 2;
    var stringified = Math.abs(value).toFixed(decimals);
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = decimals ? stringified.slice(-1 - decimals) : '';
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    var length = args.length;
    if (length > 1) {
      var index = value % 10 - 1;
      return index in args ? args[index] : args[length - 1];
    } else {
      return args[0] + (value === 1 ? '' : 's');
    }
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if ('development' !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ('development' !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          if (!definition.name) {
            definition.name = id;
          }
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.28';

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue);
    } else if ('development' !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
    }
  }
}, 0);

return Vue;

})));
},/***** module 51 end *****/


/***** module 52 start *****/
/***** node_modules/vue-router/dist/vue-router.js *****/
function(module, exports, __wepy_require) {/*!
 * vue-router v0.7.13
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.VueRouter = factory();
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0, l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  function map (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  var noWarning = false;
  function warn(msg) {
    if (!noWarning && typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  function tryDecode(uri, asComponent) {
    try {
      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
    } catch (e) {
      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
    }
  }

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(callback) {
      var string = this.string,
          ch;

      for (var i = 0, l = string.length; i < l; i++) {
        ch = string.charAt(i);
        callback({ validChars: ch });
      }
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "/", repeat: true });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "", repeat: true });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar() {},
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        specificity.val += '2';
        names.push(match[1]);
      } else if (segment === "") {
        results.push(new EpsilonSegment());
        specificity.val += '1';
      } else {
        results.push(new StaticSegment(segment));
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype = {
    get: function get(charSpec) {
      var nextStates = this.nextStates;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      // DEBUG "Processing `" + ch + "`:"
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      // DEBUG "  " + debugState(this)
      var returned = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }

    /** IF DEBUG
    , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
    END IF **/
  };

  /** IF DEBUG
  function debug(log) {
    console.log(log);
  }

  function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
  END IF **/

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    return tryDecode(part, true);
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = [],
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0, l = routes.length; i < l; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0, m = segments.length; j < m; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = addSegment(currentState, segment);
          regex += segment.regex();
        }

        var handler = { handler: route.handler, names: names };
        handlers.push(handler);
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name],
          result = [];
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0, l = value.length; j < l; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path, silent) {
      noWarning = silent;
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        if (queryString) {
          queryParams = this.parseQueryString(queryString);
        }
      }

      path = tryDecode(path);
      if (!path) return;

      // DEBUG GROUP path

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      // END DEBUG GROUP

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = map;

  var genQuery = RouteRecognizer.prototype.generateQueryString;

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * Warn stuff.
   *
   * @param {String} msg
   */

  function warn$1(msg) {
    /* istanbul ignore next */
    if (typeof console !== 'undefined') {
      console.error('[vue-router] ' + msg);
    }
  }

  /**
   * Resolve a relative path.
   *
   * @param {String} base
   * @param {String} relative
   * @param {Boolean} append
   * @return {String}
   */

  function resolvePath(base, relative, append) {
    var query = base.match(/(\?.*)$/);
    if (query) {
      query = query[1];
      base = base.slice(0, -query.length);
    }
    // a query!
    if (relative.charAt(0) === '?') {
      return base + relative;
    }
    var stack = base.split('/');
    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }
    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }
    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }
    return stack.join('/');
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig(component, name) {
    var options = component && (component.$options || component.options);
    return options && options.route && options.route[name];
  }

  /**
   * Resolve an async component factory. Have to do a dirty
   * mock here because of Vue core's internal API depends on
   * an ID check.
   *
   * @param {Object} handler
   * @param {Function} cb
   */

  var resolver = undefined;

  function resolveAsyncComponent(handler, cb) {
    if (!resolver) {
      resolver = {
        resolve: exports$1.Vue.prototype._resolveComponent,
        $options: {
          components: {
            _: handler.component
          }
        }
      };
    } else {
      resolver.$options.components._ = handler.component;
    }
    resolver.resolve('_', function (Component) {
      handler.component = Component;
      cb(Component);
    });
  }

  /**
   * Map the dynamic segments in a path to params.
   *
   * @param {String} path
   * @param {Object} params
   * @param {Object} query
   */

  function mapParams(path, params, query) {
    if (params === undefined) params = {};

    path = path.replace(/:([^\/]+)/g, function (_, key) {
      var val = params[key];
      /* istanbul ignore if */
      if (!val) {
        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
      }
      return val || '';
    });
    if (query) {
      path += genQuery(query);
    }
    return path;
  }

  var hashRE = /#.*$/;

  var HTML5History = (function () {
    function HTML5History(_ref) {
      var root = _ref.root;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HTML5History);

      if (root && root !== '/') {
        // make sure there's the starting slash
        if (root.charAt(0) !== '/') {
          root = '/' + root;
        }
        // remove trailing slash
        this.root = root.replace(/\/$/, '');
        this.rootRE = new RegExp('^\\' + this.root);
      } else {
        this.root = null;
      }
      this.onChange = onChange;
      // check base tag
      var baseEl = document.querySelector('base');
      this.base = baseEl && baseEl.getAttribute('href');
    }

    HTML5History.prototype.start = function start() {
      var _this = this;

      this.listener = function (e) {
        var url = location.pathname + location.search;
        if (_this.root) {
          url = url.replace(_this.rootRE, '');
        }
        _this.onChange(url, e && e.state, location.hash);
      };
      window.addEventListener('popstate', this.listener);
      this.listener();
    };

    HTML5History.prototype.stop = function stop() {
      window.removeEventListener('popstate', this.listener);
    };

    HTML5History.prototype.go = function go(path, replace, append) {
      var url = this.formatPath(path, append);
      if (replace) {
        history.replaceState({}, '', url);
      } else {
        // record scroll position by replacing current state
        history.replaceState({
          pos: {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }, '', location.href);
        // then push new state
        history.pushState({}, '', url);
      }
      var hashMatch = path.match(hashRE);
      var hash = hashMatch && hashMatch[0];
      path = url
      // strip hash so it doesn't mess up params
      .replace(hashRE, '')
      // remove root before matching
      .replace(this.rootRE, '');
      this.onChange(path, null, hash);
    };

    HTML5History.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/'
      // absolute path
      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
    };

    return HTML5History;
  })();

  var HashHistory = (function () {
    function HashHistory(_ref) {
      var hashbang = _ref.hashbang;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HashHistory);

      this.hashbang = hashbang;
      this.onChange = onChange;
    }

    HashHistory.prototype.start = function start() {
      var self = this;
      this.listener = function () {
        var path = location.hash;
        var raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
          raw = '/' + raw;
        }
        var formattedPath = self.formatPath(raw);
        if (formattedPath !== path) {
          location.replace(formattedPath);
          return;
        }
        // determine query
        // note it's possible to have queries in both the actual URL
        // and the hash fragment itself.
        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
        self.onChange(path.replace(/^#!?/, '') + query);
      };
      window.addEventListener('hashchange', this.listener);
      this.listener();
    };

    HashHistory.prototype.stop = function stop() {
      window.removeEventListener('hashchange', this.listener);
    };

    HashHistory.prototype.go = function go(path, replace, append) {
      path = this.formatPath(path, append);
      if (replace) {
        location.replace(path);
      } else {
        location.hash = path;
      }
    };

    HashHistory.prototype.formatPath = function formatPath(path, append) {
      var isAbsoloute = path.charAt(0) === '/';
      var prefix = '#' + (this.hashbang ? '!' : '');
      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
    };

    return HashHistory;
  })();

  var AbstractHistory = (function () {
    function AbstractHistory(_ref) {
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, AbstractHistory);

      this.onChange = onChange;
      this.currentPath = '/';
    }

    AbstractHistory.prototype.start = function start() {
      this.onChange('/');
    };

    AbstractHistory.prototype.stop = function stop() {
      // noop
    };

    AbstractHistory.prototype.go = function go(path, replace, append) {
      path = this.currentPath = this.formatPath(path, append);
      this.onChange(path);
    };

    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
    };

    return AbstractHistory;
  })();

  /**
   * Determine the reusability of an existing router view.
   *
   * @param {Directive} view
   * @param {Object} handler
   * @param {Transition} transition
   */

  function canReuse(view, handler, transition) {
    var component = view.childVM;
    if (!component || !handler) {
      return false;
    }
    // important: check view.Component here because it may
    // have been changed in activate hook
    if (view.Component !== handler.component) {
      return false;
    }
    var canReuseFn = getRouteConfig(component, 'canReuse');
    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
      to: transition.to,
      from: transition.from
    }) : true; // defaults to true
  }

  /**
   * Check if a component can deactivate.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function canDeactivate(view, transition, next) {
    var fromComponent = view.childVM;
    var hook = getRouteConfig(fromComponent, 'canDeactivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, fromComponent, next, {
        expectBoolean: true
      });
    }
  }

  /**
   * Check if a component can activate.
   *
   * @param {Object} handler
   * @param {Transition} transition
   * @param {Function} next
   */

  function canActivate(handler, transition, next) {
    resolveAsyncComponent(handler, function (Component) {
      // have to check due to async-ness
      if (transition.aborted) {
        return;
      }
      // determine if this component can be activated
      var hook = getRouteConfig(Component, 'canActivate');
      if (!hook) {
        next();
      } else {
        transition.callHook(hook, null, next, {
          expectBoolean: true
        });
      }
    });
  }

  /**
   * Call deactivate hooks for existing router-views.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function deactivate(view, transition, next) {
    var component = view.childVM;
    var hook = getRouteConfig(component, 'deactivate');
    if (!hook) {
      next();
    } else {
      transition.callHooks(hook, component, next);
    }
  }

  /**
   * Activate / switch component for a router-view.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Number} depth
   * @param {Function} [cb]
   */

  function activate(view, transition, depth, cb, reuse) {
    var handler = transition.activateQueue[depth];
    if (!handler) {
      saveChildView(view);
      if (view._bound) {
        view.setComponent(null);
      }
      cb && cb();
      return;
    }

    var Component = view.Component = handler.component;
    var activateHook = getRouteConfig(Component, 'activate');
    var dataHook = getRouteConfig(Component, 'data');
    var waitForData = getRouteConfig(Component, 'waitForData');

    view.depth = depth;
    view.activated = false;

    var component = undefined;
    var loading = !!(dataHook && !waitForData);

    // "reuse" is a flag passed down when the parent view is
    // either reused via keep-alive or as a child of a kept-alive view.
    // of course we can only reuse if the current kept-alive instance
    // is of the correct type.
    reuse = reuse && view.childVM && view.childVM.constructor === Component;

    if (reuse) {
      // just reuse
      component = view.childVM;
      component.$loadingRouteData = loading;
    } else {
      saveChildView(view);

      // unbuild current component. this step also destroys
      // and removes all nested child views.
      view.unbuild(true);

      // build the new component. this will also create the
      // direct child view of the current one. it will register
      // itself as view.childView.
      component = view.build({
        _meta: {
          $loadingRouteData: loading
        },
        created: function created() {
          this._routerView = view;
        }
      });

      // handle keep-alive.
      // when a kept-alive child vm is restored, we need to
      // add its cached child views into the router's view list,
      // and also properly update current view's child view.
      if (view.keepAlive) {
        component.$loadingRouteData = loading;
        var cachedChildView = component._keepAliveRouterView;
        if (cachedChildView) {
          view.childView = cachedChildView;
          component._keepAliveRouterView = null;
        }
      }
    }

    // cleanup the component in case the transition is aborted
    // before the component is ever inserted.
    var cleanup = function cleanup() {
      component.$destroy();
    };

    // actually insert the component and trigger transition
    var insert = function insert() {
      if (reuse) {
        cb && cb();
        return;
      }
      var router = transition.router;
      if (router._rendered || router._transitionOnLoad) {
        view.transition(component);
      } else {
        // no transition on first render, manual transition
        /* istanbul ignore if */
        if (view.setCurrent) {
          // 0.12 compat
          view.setCurrent(component);
        } else {
          // 1.0
          view.childVM = component;
        }
        component.$before(view.anchor, null, false);
      }
      cb && cb();
    };

    var afterData = function afterData() {
      // activate the child view
      if (view.childView) {
        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
      }
      insert();
    };

    // called after activation hook is resolved
    var afterActivate = function afterActivate() {
      view.activated = true;
      if (dataHook && waitForData) {
        // wait until data loaded to insert
        loadData(component, transition, dataHook, afterData, cleanup);
      } else {
        // load data and insert at the same time
        if (dataHook) {
          loadData(component, transition, dataHook);
        }
        afterData();
      }
    };

    if (activateHook) {
      transition.callHooks(activateHook, component, afterActivate, {
        cleanup: cleanup,
        postActivate: true
      });
    } else {
      afterActivate();
    }
  }

  /**
   * Reuse a view, just reload data if necessary.
   *
   * @param {Directive} view
   * @param {Transition} transition
   */

  function reuse(view, transition) {
    var component = view.childVM;
    var dataHook = getRouteConfig(component, 'data');
    if (dataHook) {
      loadData(component, transition, dataHook);
    }
  }

  /**
   * Asynchronously load and apply data to component.
   *
   * @param {Vue} component
   * @param {Transition} transition
   * @param {Function} hook
   * @param {Function} cb
   * @param {Function} cleanup
   */

  function loadData(component, transition, hook, cb, cleanup) {
    component.$loadingRouteData = true;
    transition.callHooks(hook, component, function () {
      component.$loadingRouteData = false;
      component.$emit('route-data-loaded', component);
      cb && cb();
    }, {
      cleanup: cleanup,
      postActivate: true,
      processData: function processData(data) {
        // handle promise sugar syntax
        var promises = [];
        if (isPlainObject(data)) {
          Object.keys(data).forEach(function (key) {
            var val = data[key];
            if (isPromise(val)) {
              promises.push(val.then(function (resolvedVal) {
                component.$set(key, resolvedVal);
              }));
            } else {
              component.$set(key, val);
            }
          });
        }
        if (promises.length) {
          return promises[0].constructor.all(promises);
        }
      }
    });
  }

  /**
   * Save the child view for a kept-alive view so that
   * we can restore it when it is switched back to.
   *
   * @param {Directive} view
   */

  function saveChildView(view) {
    if (view.keepAlive && view.childVM && view.childView) {
      view.childVM._keepAliveRouterView = view.childView;
    }
    view.childView = null;
  }

  /**
   * Check plain object.
   *
   * @param {*} val
   */

  function isPlainObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  /**
   * A RouteTransition object manages the pipeline of a
   * router-view switching process. This is also the object
   * passed into user route hooks.
   *
   * @param {Router} router
   * @param {Route} to
   * @param {Route} from
   */

  var RouteTransition = (function () {
    function RouteTransition(router, to, from) {
      babelHelpers.classCallCheck(this, RouteTransition);

      this.router = router;
      this.to = to;
      this.from = from;
      this.next = null;
      this.aborted = false;
      this.done = false;
    }

    /**
     * Abort current transition and return to previous location.
     */

    RouteTransition.prototype.abort = function abort() {
      if (!this.aborted) {
        this.aborted = true;
        // if the root path throws an error during validation
        // on initial load, it gets caught in an infinite loop.
        var abortingOnLoad = !this.from.path && this.to.path === '/';
        if (!abortingOnLoad) {
          this.router.replace(this.from.path || '/');
        }
      }
    };

    /**
     * Abort current transition and redirect to a new location.
     *
     * @param {String} path
     */

    RouteTransition.prototype.redirect = function redirect(path) {
      if (!this.aborted) {
        this.aborted = true;
        if (typeof path === 'string') {
          path = mapParams(path, this.to.params, this.to.query);
        } else {
          path.params = path.params || this.to.params;
          path.query = path.query || this.to.query;
        }
        this.router.replace(path);
      }
    };

    /**
     * A router view transition's pipeline can be described as
     * follows, assuming we are transitioning from an existing
     * <router-view> chain [Component A, Component B] to a new
     * chain [Component A, Component C]:
     *
     *  A    A
     *  | => |
     *  B    C
     *
     * 1. Reusablity phase:
     *   -> canReuse(A, A)
     *   -> canReuse(B, C)
     *   -> determine new queues:
     *      - deactivation: [B]
     *      - activation: [C]
     *
     * 2. Validation phase:
     *   -> canDeactivate(B)
     *   -> canActivate(C)
     *
     * 3. Activation phase:
     *   -> deactivate(B)
     *   -> activate(C)
     *
     * Each of these steps can be asynchronous, and any
     * step can potentially abort the transition.
     *
     * @param {Function} cb
     */

    RouteTransition.prototype.start = function start(cb) {
      var transition = this;

      // determine the queue of views to deactivate
      var deactivateQueue = [];
      var view = this.router._rootView;
      while (view) {
        deactivateQueue.unshift(view);
        view = view.childView;
      }
      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

      // determine the queue of route handlers to activate
      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
        return match.handler;
      });

      // 1. Reusability phase
      var i = undefined,
          reuseQueue = undefined;
      for (i = 0; i < reverseDeactivateQueue.length; i++) {
        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
          break;
        }
      }
      if (i > 0) {
        reuseQueue = reverseDeactivateQueue.slice(0, i);
        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
        activateQueue = activateQueue.slice(i);
      }

      // 2. Validation phase
      transition.runQueue(deactivateQueue, canDeactivate, function () {
        transition.runQueue(activateQueue, canActivate, function () {
          transition.runQueue(deactivateQueue, deactivate, function () {
            // 3. Activation phase

            // Update router current route
            transition.router._onTransitionValidated(transition);

            // trigger reuse for all reused views
            reuseQueue && reuseQueue.forEach(function (view) {
              return reuse(view, transition);
            });

            // the root of the chain that needs to be replaced
            // is the top-most non-reusable view.
            if (deactivateQueue.length) {
              var _view = deactivateQueue[deactivateQueue.length - 1];
              var depth = reuseQueue ? reuseQueue.length : 0;
              activate(_view, transition, depth, cb);
            } else {
              cb();
            }
          });
        });
      });
    };

    /**
     * Asynchronously and sequentially apply a function to a
     * queue.
     *
     * @param {Array} queue
     * @param {Function} fn
     * @param {Function} cb
     */

    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
      var transition = this;
      step(0);
      function step(index) {
        if (index >= queue.length) {
          cb();
        } else {
          fn(queue[index], transition, function () {
            step(index + 1);
          });
        }
      }
    };

    /**
     * Call a user provided route transition hook and handle
     * the response (e.g. if the user returns a promise).
     *
     * If the user neither expects an argument nor returns a
     * promise, the hook is assumed to be synchronous.
     *
     * @param {Function} hook
     * @param {*} [context]
     * @param {Function} [cb]
     * @param {Object} [options]
     *                 - {Boolean} expectBoolean
     *                 - {Boolean} postActive
     *                 - {Function} processData
     *                 - {Function} cleanup
     */

    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var _ref$expectBoolean = _ref.expectBoolean;
      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
      var _ref$postActivate = _ref.postActivate;
      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
      var processData = _ref.processData;
      var cleanup = _ref.cleanup;

      var transition = this;
      var nextCalled = false;

      // abort the transition
      var abort = function abort() {
        cleanup && cleanup();
        transition.abort();
      };

      // handle errors
      var onError = function onError(err) {
        postActivate ? next() : abort();
        if (err && !transition.router._suppress) {
          warn$1('Uncaught error during transition: ');
          throw err instanceof Error ? err : new Error(err);
        }
      };

      // since promise swallows errors, we have to
      // throw it in the next tick...
      var onPromiseError = function onPromiseError(err) {
        try {
          onError(err);
        } catch (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      };

      // advance the transition to the next step
      var next = function next() {
        if (nextCalled) {
          warn$1('transition.next() should be called only once.');
          return;
        }
        nextCalled = true;
        if (transition.aborted) {
          cleanup && cleanup();
          return;
        }
        cb && cb();
      };

      var nextWithBoolean = function nextWithBoolean(res) {
        if (typeof res === 'boolean') {
          res ? next() : abort();
        } else if (isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort();
          }, onPromiseError);
        } else if (!hook.length) {
          next();
        }
      };

      var nextWithData = function nextWithData(data) {
        var res = undefined;
        try {
          res = processData(data);
        } catch (err) {
          return onError(err);
        }
        if (isPromise(res)) {
          res.then(next, onPromiseError);
        } else {
          next();
        }
      };

      // expose a clone of the transition object, so that each
      // hook gets a clean copy and prevent the user from
      // messing with the internals.
      var exposed = {
        to: transition.to,
        from: transition.from,
        abort: abort,
        next: processData ? nextWithData : next,
        redirect: function redirect() {
          transition.redirect.apply(transition, arguments);
        }
      };

      // actually call the hook
      var res = undefined;
      try {
        res = hook.call(context, exposed);
      } catch (err) {
        return onError(err);
      }

      if (expectBoolean) {
        // boolean hooks
        nextWithBoolean(res);
      } else if (isPromise(res)) {
        // promise
        if (processData) {
          res.then(nextWithData, onPromiseError);
        } else {
          res.then(next, onPromiseError);
        }
      } else if (processData && isPlainOjbect(res)) {
        // data promise sugar
        nextWithData(res);
      } else if (!hook.length) {
        next();
      }
    };

    /**
     * Call a single hook or an array of async hooks in series.
     *
     * @param {Array} hooks
     * @param {*} context
     * @param {Function} cb
     * @param {Object} [options]
     */

    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
      var _this = this;

      if (Array.isArray(hooks)) {
        this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, next, options);
          }
        }, cb);
      } else {
        this.callHook(hooks, context, cb, options);
      }
    };

    return RouteTransition;
  })();

  function isPlainOjbect(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  function toArray(val) {
    return val ? Array.prototype.slice.call(val) : [];
  }

  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

  /**
   * Route Context Object
   *
   * @param {String} path
   * @param {Router} router
   */

  var Route = function Route(path, router) {
    var _this = this;

    babelHelpers.classCallCheck(this, Route);

    var matched = router._recognizer.recognize(path);
    if (matched) {
      // copy all custom fields from route configs
      [].forEach.call(matched, function (match) {
        for (var key in match.handler) {
          if (!internalKeysRE.test(key)) {
            _this[key] = match.handler[key];
          }
        }
      });
      // set query and params
      this.query = matched.queryParams;
      this.params = [].reduce.call(matched, function (prev, cur) {
        if (cur.params) {
          for (var key in cur.params) {
            prev[key] = cur.params[key];
          }
        }
        return prev;
      }, {});
    }
    // expose path and router
    this.path = path;
    // for internal use
    this.matched = matched || router._notFoundHandler;
    // internal reference to router
    Object.defineProperty(this, 'router', {
      enumerable: false,
      value: router
    });
    // Important: freeze self to prevent observation
    Object.freeze(this);
  };

  function applyOverride (Vue) {
    var _Vue$util = Vue.util;
    var extend = _Vue$util.extend;
    var isArray = _Vue$util.isArray;
    var defineReactive = _Vue$util.defineReactive;

    // override Vue's init and destroy process to keep track of router instances
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      options = options || {};
      var root = options._parent || options.parent || this;
      var router = root.$router;
      var route = root.$route;
      if (router) {
        // expose router
        this.$router = router;
        router._children.push(this);
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          defineReactive(this, '$route', route);
        }
      }
      init.call(this, options);
    };

    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      if (!this._isBeingDestroyed && this.$router) {
        this.$router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    };

    // 1.0 only: enable route mixins
    var strats = Vue.config.optionMergeStrategies;
    var hooksToMergeRE = /^(data|activate|deactivate)$/;

    if (strats) {
      strats.route = function (parentVal, childVal) {
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var a = ret[key];
          var b = childVal[key];
          // for data, activate and deactivate, we need to merge them into
          // arrays similar to lifecycle hooks.
          if (a && hooksToMergeRE.test(key)) {
            ret[key] = (isArray(a) ? a : [a]).concat(b);
          } else {
            ret[key] = b;
          }
        }
        return ret;
      };
    }
  }

  function View (Vue) {

    var _ = Vue.util;
    var componentDef =
    // 0.12
    Vue.directive('_component') ||
    // 1.0
    Vue.internalDirectives.component;
    // <router-view> extends the internal component directive
    var viewDef = _.extend({}, componentDef);

    // with some overrides
    _.extend(viewDef, {

      _isRouterView: true,

      bind: function bind() {
        var route = this.vm.$route;
        /* istanbul ignore if */
        if (!route) {
          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
          return;
        }
        // force dynamic directive so v-component doesn't
        // attempt to build right now
        this._isDynamicLiteral = true;
        // finally, init by delegating to v-component
        componentDef.bind.call(this);

        // locate the parent view
        var parentView = undefined;
        var parent = this.vm;
        while (parent) {
          if (parent._routerView) {
            parentView = parent._routerView;
            break;
          }
          parent = parent.$parent;
        }
        if (parentView) {
          // register self as a child of the parent view,
          // instead of activating now. This is so that the
          // child's activate hook is called after the
          // parent's has resolved.
          this.parentView = parentView;
          parentView.childView = this;
        } else {
          // this is the root view!
          var router = route.router;
          router._rootView = this;
        }

        // handle late-rendered view
        // two possibilities:
        // 1. root view rendered after transition has been
        //    validated;
        // 2. child view rendered after parent view has been
        //    activated.
        var transition = route.router._currentTransition;
        if (!parentView && transition.done || parentView && parentView.activated) {
          var depth = parentView ? parentView.depth + 1 : 0;
          activate(this, transition, depth);
        }
      },

      unbind: function unbind() {
        if (this.parentView) {
          this.parentView.childView = null;
        }
        componentDef.unbind.call(this);
      }
    });

    Vue.elementDirective('router-view', viewDef);
  }

  var trailingSlashRE = /\/$/;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var queryStringRE = /\?.*$/;

  // install v-link, which provides navigation support for
  // HTML5 history mode
  function Link (Vue) {
    var _Vue$util = Vue.util;
    var _bind = _Vue$util.bind;
    var isObject = _Vue$util.isObject;
    var addClass = _Vue$util.addClass;
    var removeClass = _Vue$util.removeClass;

    var onPriority = Vue.directive('on').priority;
    var LINK_UPDATE = '__vue-router-link-update__';

    var activeId = 0;

    Vue.directive('link-active', {
      priority: 9999,
      bind: function bind() {
        var _this = this;

        var id = String(activeId++);
        // collect v-links contained within this element.
        // we need do this here before the parent-child relationship
        // gets messed up by terminal directives (if, for, components)
        var childLinks = this.el.querySelectorAll('[v-link]');
        for (var i = 0, l = childLinks.length; i < l; i++) {
          var link = childLinks[i];
          var existingId = link.getAttribute(LINK_UPDATE);
          var value = existingId ? existingId + ',' + id : id;
          // leave a mark on the link element which can be persisted
          // through fragment clones.
          link.setAttribute(LINK_UPDATE, value);
        }
        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
          if (link.activeIds.indexOf(id) > -1) {
            link.updateClasses(path, _this.el);
          }
        });
      },
      unbind: function unbind() {
        this.vm.$off(LINK_UPDATE, this.cb);
      }
    });

    Vue.directive('link', {
      priority: onPriority - 2,

      bind: function bind() {
        var vm = this.vm;
        /* istanbul ignore if */
        if (!vm.$route) {
          warn$1('v-link can only be used inside a router-enabled app.');
          return;
        }
        this.router = vm.$route.router;
        // update things when the route changes
        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
        // check v-link-active ids
        var activeIds = this.el.getAttribute(LINK_UPDATE);
        if (activeIds) {
          this.el.removeAttribute(LINK_UPDATE);
          this.activeIds = activeIds.split(',');
        }
        // no need to handle click if link expects to be opened
        // in a new window/tab.
        /* istanbul ignore if */
        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
          return;
        }
        // handle click
        this.handler = _bind(this.onClick, this);
        this.el.addEventListener('click', this.handler);
      },

      update: function update(target) {
        this.target = target;
        if (isObject(target)) {
          this.append = target.append;
          this.exact = target.exact;
          this.prevActiveClass = this.activeClass;
          this.activeClass = target.activeClass;
        }
        this.onRouteUpdate(this.vm.$route);
      },

      onClick: function onClick(e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) return;
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) return;

        var target = this.target;
        if (target) {
          // v-link with expression, just go
          e.preventDefault();
          this.router.go(target);
        } else {
          // no expression, delegate for an <a> inside
          var el = e.target;
          while (el.tagName !== 'A' && el !== this.el) {
            el = el.parentNode;
          }
          if (el.tagName === 'A' && sameOrigin(el)) {
            e.preventDefault();
            var path = el.pathname;
            if (this.router.history.root) {
              path = path.replace(this.router.history.rootRE, '');
            }
            this.router.go({
              path: path,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      },

      onRouteUpdate: function onRouteUpdate(route) {
        // router.stringifyPath is dependent on current route
        // and needs to be called again whenver route changes.
        var newPath = this.router.stringifyPath(this.target);
        if (this.path !== newPath) {
          this.path = newPath;
          this.updateActiveMatch();
          this.updateHref();
        }
        if (this.activeIds) {
          this.vm.$emit(LINK_UPDATE, this, route.path);
        } else {
          this.updateClasses(route.path, this.el);
        }
      },

      updateActiveMatch: function updateActiveMatch() {
        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      },

      updateHref: function updateHref() {
        if (this.el.tagName !== 'A') {
          return;
        }
        var path = this.path;
        var router = this.router;
        var isAbsolute = path.charAt(0) === '/';
        // do not format non-hash relative paths
        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      },

      updateClasses: function updateClasses(path, el) {
        var activeClass = this.activeClass || this.router._linkActiveClass;
        // clear old class
        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
          toggleClasses(el, this.prevActiveClass, removeClass);
        }
        // remove query string before matching
        var dest = this.path.replace(queryStringRE, '');
        path = path.replace(queryStringRE, '');
        // add new class
        if (this.exact) {
          if (dest === path ||
          // also allow additional trailing slash
          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        } else {
          if (this.activeRE && this.activeRE.test(path)) {
            toggleClasses(el, activeClass, addClass);
          } else {
            toggleClasses(el, activeClass, removeClass);
          }
        }
      },

      unbind: function unbind() {
        this.el.removeEventListener('click', this.handler);
        this.unwatch && this.unwatch();
      }
    });

    function sameOrigin(link) {
      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
    }

    // this function is copied from v-bind:class implementation until
    // we properly expose it...
    function toggleClasses(el, key, fn) {
      key = key.trim();
      if (key.indexOf(' ') === -1) {
        fn(el, key);
        return;
      }
      var keys = key.split(/\s+/);
      for (var i = 0, l = keys.length; i < l; i++) {
        fn(el, keys[i]);
      }
    }
  }

  var historyBackends = {
    abstract: AbstractHistory,
    hash: HashHistory,
    html5: HTML5History
  };

  // late bind during install
  var Vue = undefined;

  /**
   * Router constructor
   *
   * @param {Object} [options]
   */

  var Router = (function () {
    function Router() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$hashbang = _ref.hashbang;
      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
      var _ref$abstract = _ref.abstract;
      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
      var _ref$history = _ref.history;
      var history = _ref$history === undefined ? false : _ref$history;
      var _ref$saveScrollPosition = _ref.saveScrollPosition;
      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
      var _ref$transitionOnLoad = _ref.transitionOnLoad;
      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
      var _ref$suppressTransitionError = _ref.suppressTransitionError;
      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
      var _ref$root = _ref.root;
      var root = _ref$root === undefined ? null : _ref$root;
      var _ref$linkActiveClass = _ref.linkActiveClass;
      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
      babelHelpers.classCallCheck(this, Router);

      /* istanbul ignore if */
      if (!Router.installed) {
        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
      }

      // Vue instances
      this.app = null;
      this._children = [];

      // route recognizer
      this._recognizer = new RouteRecognizer();
      this._guardRecognizer = new RouteRecognizer();

      // state
      this._started = false;
      this._startCb = null;
      this._currentRoute = {};
      this._currentTransition = null;
      this._previousTransition = null;
      this._notFoundHandler = null;
      this._notFoundRedirect = null;
      this._beforeEachHooks = [];
      this._afterEachHooks = [];

      // trigger transition on initial render?
      this._rendered = false;
      this._transitionOnLoad = transitionOnLoad;

      // history mode
      this._root = root;
      this._abstract = abstract;
      this._hashbang = hashbang;

      // check if HTML5 history is available
      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
      this._history = history && hasPushState;
      this._historyFallback = history && !hasPushState;

      // create history object
      var inBrowser = Vue.util.inBrowser;
      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

      var History = historyBackends[this.mode];
      this.history = new History({
        root: root,
        hashbang: this._hashbang,
        onChange: function onChange(path, state, anchor) {
          _this._match(path, state, anchor);
        }
      });

      // other options
      this._saveScrollPosition = saveScrollPosition;
      this._linkActiveClass = linkActiveClass;
      this._suppress = suppressTransitionError;
    }

    /**
     * Allow directly passing components to a route
     * definition.
     *
     * @param {String} path
     * @param {Object} handler
     */

    // API ===================================================

    /**
    * Register a map of top-level paths.
    *
    * @param {Object} map
    */

    Router.prototype.map = function map(_map) {
      for (var route in _map) {
        this.on(route, _map[route]);
      }
      return this;
    };

    /**
     * Register a single root-level path
     *
     * @param {String} rootPath
     * @param {Object} handler
     *                 - {String} component
     *                 - {Object} [subRoutes]
     *                 - {Boolean} [forceRefresh]
     *                 - {Function} [before]
     *                 - {Function} [after]
     */

    Router.prototype.on = function on(rootPath, handler) {
      if (rootPath === '*') {
        this._notFound(handler);
      } else {
        this._addRoute(rootPath, handler, []);
      }
      return this;
    };

    /**
     * Set redirects.
     *
     * @param {Object} map
     */

    Router.prototype.redirect = function redirect(map) {
      for (var path in map) {
        this._addRedirect(path, map[path]);
      }
      return this;
    };

    /**
     * Set aliases.
     *
     * @param {Object} map
     */

    Router.prototype.alias = function alias(map) {
      for (var path in map) {
        this._addAlias(path, map[path]);
      }
      return this;
    };

    /**
     * Set global before hook.
     *
     * @param {Function} fn
     */

    Router.prototype.beforeEach = function beforeEach(fn) {
      this._beforeEachHooks.push(fn);
      return this;
    };

    /**
     * Set global after hook.
     *
     * @param {Function} fn
     */

    Router.prototype.afterEach = function afterEach(fn) {
      this._afterEachHooks.push(fn);
      return this;
    };

    /**
     * Navigate to a given path.
     * The path can be an object describing a named path in
     * the format of { name: '...', params: {}, query: {}}
     * The path is assumed to be already decoded, and will
     * be resolved against root (if provided)
     *
     * @param {String|Object} path
     * @param {Boolean} [replace]
     */

    Router.prototype.go = function go(path) {
      var replace = false;
      var append = false;
      if (Vue.util.isObject(path)) {
        replace = path.replace;
        append = path.append;
      }
      path = this.stringifyPath(path);
      if (path) {
        this.history.go(path, replace, append);
      }
    };

    /**
     * Short hand for replacing current path
     *
     * @param {String} path
     */

    Router.prototype.replace = function replace(path) {
      if (typeof path === 'string') {
        path = { path: path };
      }
      path.replace = true;
      this.go(path);
    };

    /**
     * Start the router.
     *
     * @param {VueConstructor} App
     * @param {String|Element} container
     * @param {Function} [cb]
     */

    Router.prototype.start = function start(App, container, cb) {
      /* istanbul ignore if */
      if (this._started) {
        warn$1('already started.');
        return;
      }
      this._started = true;
      this._startCb = cb;
      if (!this.app) {
        /* istanbul ignore if */
        if (!App || !container) {
          throw new Error('Must start vue-router with a component and a ' + 'root container.');
        }
        /* istanbul ignore if */
        if (App instanceof Vue) {
          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
        }
        this._appContainer = container;
        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
        // give it a name for better debugging
        Ctor.options.name = Ctor.options.name || 'RouterApp';
      }

      // handle history fallback in browsers that do not
      // support HTML5 history API
      if (this._historyFallback) {
        var _location = window.location;
        var _history = new HTML5History({ root: this._root });
        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
        if (path && path !== '/') {
          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
          return;
        }
      }

      this.history.start();
    };

    /**
     * Stop listening to route changes.
     */

    Router.prototype.stop = function stop() {
      this.history.stop();
      this._started = false;
    };

    /**
     * Normalize named route object / string paths into
     * a string.
     *
     * @param {Object|String|Number} path
     * @return {String}
     */

    Router.prototype.stringifyPath = function stringifyPath(path) {
      var generatedPath = '';
      if (path && typeof path === 'object') {
        if (path.name) {
          var extend = Vue.util.extend;
          var currentParams = this._currentTransition && this._currentTransition.to.params;
          var targetParams = path.params || {};
          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
        } else if (path.path) {
          generatedPath = encodeURI(path.path);
        }
        if (path.query) {
          // note: the generated query string is pre-URL-encoded by the recognizer
          var query = this._recognizer.generateQueryString(path.query);
          if (generatedPath.indexOf('?') > -1) {
            generatedPath += '&' + query.slice(1);
          } else {
            generatedPath += query;
          }
        }
      } else {
        generatedPath = encodeURI(path ? path + '' : '');
      }
      return generatedPath;
    };

    // Internal methods ======================================

    /**
    * Add a route containing a list of segments to the internal
    * route recognizer. Will be called recursively to add all
    * possible sub-routes.
    *
    * @param {String} path
    * @param {Object} handler
    * @param {Array} segments
    */

    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
      guardComponent(path, handler);
      handler.path = path;
      handler.fullPath = (segments.reduce(function (path, segment) {
        return path + segment.path;
      }, '') + path).replace('//', '/');
      segments.push({
        path: path,
        handler: handler
      });
      this._recognizer.add(segments, {
        as: handler.name
      });
      // add sub routes
      if (handler.subRoutes) {
        for (var subPath in handler.subRoutes) {
          // recursively walk all sub routes
          this._addRoute(subPath, handler.subRoutes[subPath],
          // pass a copy in recursion to avoid mutating
          // across branches
          segments.slice());
        }
      }
    };

    /**
     * Set the notFound route handler.
     *
     * @param {Object} handler
     */

    Router.prototype._notFound = function _notFound(handler) {
      guardComponent('*', handler);
      this._notFoundHandler = [{ handler: handler }];
    };

    /**
     * Add a redirect record.
     *
     * @param {String} path
     * @param {String} redirectPath
     */

    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
      if (path === '*') {
        this._notFoundRedirect = redirectPath;
      } else {
        this._addGuard(path, redirectPath, this.replace);
      }
    };

    /**
     * Add an alias record.
     *
     * @param {String} path
     * @param {String} aliasPath
     */

    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
      this._addGuard(path, aliasPath, this._match);
    };

    /**
     * Add a path guard.
     *
     * @param {String} path
     * @param {String} mappedPath
     * @param {Function} handler
     */

    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
      var _this2 = this;

      this._guardRecognizer.add([{
        path: path,
        handler: function handler(match, query) {
          var realPath = mapParams(mappedPath, match.params, query);
          _handler.call(_this2, realPath);
        }
      }]);
    };

    /**
     * Check if a path matches any redirect records.
     *
     * @param {String} path
     * @return {Boolean} - if true, will skip normal match.
     */

    Router.prototype._checkGuard = function _checkGuard(path) {
      var matched = this._guardRecognizer.recognize(path, true);
      if (matched) {
        matched[0].handler(matched[0], matched.queryParams);
        return true;
      } else if (this._notFoundRedirect) {
        matched = this._recognizer.recognize(path);
        if (!matched) {
          this.replace(this._notFoundRedirect);
          return true;
        }
      }
    };

    /**
     * Match a URL path and set the route context on vm,
     * triggering view updates.
     *
     * @param {String} path
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._match = function _match(path, state, anchor) {
      var _this3 = this;

      if (this._checkGuard(path)) {
        return;
      }

      var currentRoute = this._currentRoute;
      var currentTransition = this._currentTransition;

      if (currentTransition) {
        if (currentTransition.to.path === path) {
          // do nothing if we have an active transition going to the same path
          return;
        } else if (currentRoute.path === path) {
          // We are going to the same path, but we also have an ongoing but
          // not-yet-validated transition. Abort that transition and reset to
          // prev transition.
          currentTransition.aborted = true;
          this._currentTransition = this._prevTransition;
          return;
        } else {
          // going to a totally different path. abort ongoing transition.
          currentTransition.aborted = true;
        }
      }

      // construct new route and transition context
      var route = new Route(path, this);
      var transition = new RouteTransition(this, route, currentRoute);

      // current transition is updated right now.
      // however, current route will only be updated after the transition has
      // been validated.
      this._prevTransition = currentTransition;
      this._currentTransition = transition;

      if (!this.app) {
        (function () {
          // initial render
          var router = _this3;
          _this3.app = new _this3._appConstructor({
            el: _this3._appContainer,
            created: function created() {
              this.$router = router;
            },
            _meta: {
              $route: route
            }
          });
        })();
      }

      // check global before hook
      var beforeHooks = this._beforeEachHooks;
      var startTransition = function startTransition() {
        transition.start(function () {
          _this3._postTransition(route, state, anchor);
        });
      };

      if (beforeHooks.length) {
        transition.runQueue(beforeHooks, function (hook, _, next) {
          if (transition === _this3._currentTransition) {
            transition.callHook(hook, null, next, {
              expectBoolean: true
            });
          }
        }, startTransition);
      } else {
        startTransition();
      }

      if (!this._rendered && this._startCb) {
        this._startCb.call(null);
      }

      // HACK:
      // set rendered to true after the transition start, so
      // that components that are acitvated synchronously know
      // whether it is the initial render.
      this._rendered = true;
    };

    /**
     * Set current to the new transition.
     * This is called by the transition object when the
     * validation of a route has succeeded.
     *
     * @param {Transition} transition
     */

    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
      // set current route
      var route = this._currentRoute = transition.to;
      // update route context for all children
      if (this.app.$route !== route) {
        this.app.$route = route;
        this._children.forEach(function (child) {
          child.$route = route;
        });
      }
      // call global after hook
      if (this._afterEachHooks.length) {
        this._afterEachHooks.forEach(function (hook) {
          return hook.call(null, {
            to: transition.to,
            from: transition.from
          });
        });
      }
      this._currentTransition.done = true;
    };

    /**
     * Handle stuff after the transition.
     *
     * @param {Route} route
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
      // handle scroll positions
      // saved scroll positions take priority
      // then we check if the path has an anchor
      var pos = state && state.pos;
      if (pos && this._saveScrollPosition) {
        Vue.nextTick(function () {
          window.scrollTo(pos.x, pos.y);
        });
      } else if (anchor) {
        Vue.nextTick(function () {
          var el = document.getElementById(anchor.slice(1));
          if (el) {
            window.scrollTo(window.scrollX, el.offsetTop);
          }
        });
      }
    };

    return Router;
  })();

  function guardComponent(path, handler) {
    var comp = handler.component;
    if (Vue.util.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      warn$1('invalid component for route "' + path + '".');
    }
  }

  /* Installation */

  Router.installed = false;

  /**
   * Installation interface.
   * Install the necessary directives.
   */

  Router.install = function (externalVue) {
    /* istanbul ignore if */
    if (Router.installed) {
      warn$1('already installed.');
      return;
    }
    Vue = externalVue;
    applyOverride(Vue);
    View(Vue);
    Link(Vue);
    exports$1.Vue = Vue;
    Router.installed = true;
  };

  // auto install
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Router);
  }

  return Router;

}));
},/***** module 52 end *****/


/***** module 53 start *****/
/***** node_modules/wepy-web/lib/helper/word.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;

var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = exports.hyphenate = function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};

var camelizeRE = /-(\w)/g;
var camelize = exports.camelize = function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
};
},/***** module 53 end *****/


/***** module 54 start *****/
/***** node_modules/axios/dist/axios.js *****/
function(module, exports, __wepy_require) {/* axios v0.17.1 | (c) 2017 by Matt Zabriskie */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["axios"] = factory();
	else
		root["axios"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var bind = __webpack_require__(3);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(23);
	axios.CancelToken = __webpack_require__(24);
	axios.isCancel = __webpack_require__(20);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(25);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var bind = __webpack_require__(3);
	var isBuffer = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(2);
	var InterceptorManager = __webpack_require__(17);
	var dispatchRequest = __webpack_require__(18);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	  config.method = config.method.toLowerCase();
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var normalizeHeaderName = __webpack_require__(7);
	
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(8);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(8);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var settle = __webpack_require__(9);
	var buildURL = __webpack_require__(12);
	var parseHeaders = __webpack_require__(13);
	var isURLSameOrigin = __webpack_require__(14);
	var createError = __webpack_require__(10);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(15);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (("production") !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config, null, request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
	        request));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(16);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(10);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(11);
	
	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  return error;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) { return parsed; }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });
	
	  return parsed;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;
	
	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;
	
	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }
	
	      urlParsingNode.setAttribute('href', href);
	
	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }
	
	    originURL = resolveURL(window.location.href);
	
	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :
	
	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	module.exports = (
	  utils.isStandardBrowserEnv() ?
	
	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));
	
	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }
	
	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }
	
	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }
	
	        if (secure === true) {
	          cookie.push('secure');
	        }
	
	        document.cookie = cookie.join('; ');
	      },
	
	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },
	
	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :
	
	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	var transformData = __webpack_require__(19);
	var isCancel = __webpack_require__(20);
	var defaults = __webpack_require__(6);
	var isAbsoluteURL = __webpack_require__(21);
	var combineURLs = __webpack_require__(22);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	
	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );
	
	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(2);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(23);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ })
/******/ ])
});
;
//# sourceMappingURL=axios.map
},/***** module 54 end *****/


/***** module 55 start *****/
/***** node_modules/wepy-web/lib/helper/query.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;
exports.resolveQuery = resolveQuery;
exports.stringifyQuery = stringifyQuery;


var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
    return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

var encode = function encode(str) {
    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent;

function parseQuery(query) {
    var res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
        return res;
    }

    query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = decode(parts.shift());
        var val = parts.length > 0 ? decode(parts.join('=')) : null;

        if (res[key] === undefined) {
            res[key] = val;
        } else if (Array.isArray(res[key])) {
            res[key].push(val);
        } else {
            res[key] = [res[key], val];
        }
    });

    return res;
}

function resolveQuery(query, extraQuery, _parseQuery) {
    var parse = _parseQuery || parseQuery;
    var parsedQuery = void 0;
    try {
        parsedQuery = parse(query || '');
    } catch (e) {
        parsedQuery = {};
    }
    for (var key in extraQuery) {
        var val = extraQuery[key];
        parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
    }
    return parsedQuery;
}

function stringifyQuery(obj) {
    var res = obj ? Object.keys(obj).map(function (key) {
        var val = obj[key];

        if (val === undefined) {
            return '';
        }

        if (val === null) {
            return encode(key);
        }

        if (Array.isArray(val)) {
            var result = [];
            val.slice().forEach(function (val2) {
                if (val2 === undefined) {
                    return;
                }
                if (val2 === null) {
                    result.push(encode(key));
                } else {
                    result.push(encode(key) + '=' + encode(val2));
                }
            });
            return result.join('&');
        }

        return encode(key) + '=' + encode(val);
    }).filter(function (x) {
        return x.length > 0;
    }).join('&') : null;

    return res ? '?' + res : '';
}
},/***** module 55 end *****/


/***** module 56 start *****/
/***** node_modules/wepy-web/lib/helper/device.js *****/
function(module, exports, __wepy_require) {'use strict';

exports.__esModule = true;
exports.system = system;
exports.mobile = mobile;
exports.browser = browser;
var MOBILE_DEVICE = ['android', 'iphone', 'symbianos', 'windows phone', 'ipad', 'ipod'];

function system() {
    var ua = window.navigator.userAgent.toLowerCase();

    for (var i = 0; i < MOBILE_DEVICE.length; i++) {
        if (ua.indexOf(MOBILE_DEVICE[i]) !== -1) {
            switch (MOBILE_DEVICE[i]) {
                case 'iphone':
                    return 'mobile_iPhone';
                case 'symbianos':
                    return 'mobile_SymbianOS';
                case 'windows phone':
                    return 'mobile_WindowsPhone';
                case 'iPad':
                    return 'pad_iPad';
                case 'iPod':
                    return 'pad_iPod';
                case 'Android':
                    if (ua.indexOf('Mobile') !== -1) {
                        return 'mobile_Android';
                    } else {
                        return 'pad_Android';
                    }

            }
        }
    }

    var sys = void 0;

    if (ua.indexOf('nt 5.1') > -1) {
        sys = 'Windows xp';
    } else if (ua.indexOf('nt 6.1') > -1) {
        sys = 'Windows 7';
    } else if (ua.indexOf('nt 6.3') > -1) {
        sys = 'Windows 8';
    } else if (ua.indexOf('nt 10.0') > -1) {
        sys = 'Windows 10';
    } else if (ua.indexOf('nt 6.0') > -1) {
        sys = 'Windows Vista';
    } else if (ua.indexOf('nt 5.2') > -1) {
        sys = 'Windows 2003';
    } else if (ua.indexOf('nt 5.0') > -1) {
        sys = 'Windows 2000';
    } else if (ua.indexOf('windows') !== -1 || ua.indexOf('win32') !== -1) {
        sys = 'Windows';
    } else if (ua.indexOf('macintosh') !== -1 || ua.indexOf('mac os x') !== -1) {
        sys = 'Macintosh';
    } else if (ua.indexOf('adobeair') !== -1) {
        sys = 'Adobeair';
    } else {
        sys = 'Unknow';
    }

    return sys;
};

function mobile() {
    var ua = window.navigator.userAgent.toLowerCase();
    return MOBILE_DEVICE.some(function (v) {
        return ua.indexOf(v) !== -1;
    });
};

function browser() {};
},/***** module 56 end *****/


/***** module 57 start *****/
/***** src/app.wpy *****/
function(module, exports, __wepy_require) {module.exports = "view,view:before,view:after,text,text:before,text:after,image,image:before,image:after,scroll-view,scroll-view:before,scroll-view:after,movable-area,movable-area:before,movable-area:after,cover-view,cover-view:before,cover-view:after,icon,icon:before,icon:after,rich-text,rich-text:before,rich-text:after,progress,progress:before,progress:after,button,button:before,button:after,checkbox,checkbox:before,checkbox:after,form,form:before,form:after,input,input:before,input:after,label,label:before,label:after,picker,picker:before,picker:after,picker-view,picker-view:before,picker-view:after,radio,radio:before,radio:after,slider,slider:before,slider:after,switch,switch:before,switch:after,textarea,textarea:before,textarea:after,navigator,navigator:before,navigator:after,audio,audio:before,audio:after,video,video:before,video:after{box-sizing:border-box}view::-webkit-scrollbar,view:before::-webkit-scrollbar,view:after::-webkit-scrollbar,text::-webkit-scrollbar,text:before::-webkit-scrollbar,text:after::-webkit-scrollbar,image::-webkit-scrollbar,image:before::-webkit-scrollbar,image:after::-webkit-scrollbar,scroll-view::-webkit-scrollbar,scroll-view:before::-webkit-scrollbar,scroll-view:after::-webkit-scrollbar,movable-area::-webkit-scrollbar,movable-area:before::-webkit-scrollbar,movable-area:after::-webkit-scrollbar,cover-view::-webkit-scrollbar,cover-view:before::-webkit-scrollbar,cover-view:after::-webkit-scrollbar,icon::-webkit-scrollbar,icon:before::-webkit-scrollbar,icon:after::-webkit-scrollbar,rich-text::-webkit-scrollbar,rich-text:before::-webkit-scrollbar,rich-text:after::-webkit-scrollbar,progress::-webkit-scrollbar,progress:before::-webkit-scrollbar,progress:after::-webkit-scrollbar,button::-webkit-scrollbar,button:before::-webkit-scrollbar,button:after::-webkit-scrollbar,checkbox::-webkit-scrollbar,checkbox:before::-webkit-scrollbar,checkbox:after::-webkit-scrollbar,form::-webkit-scrollbar,form:before::-webkit-scrollbar,form:after::-webkit-scrollbar,input::-webkit-scrollbar,input:before::-webkit-scrollbar,input:after::-webkit-scrollbar,label::-webkit-scrollbar,label:before::-webkit-scrollbar,label:after::-webkit-scrollbar,picker::-webkit-scrollbar,picker:before::-webkit-scrollbar,picker:after::-webkit-scrollbar,picker-view::-webkit-scrollbar,picker-view:before::-webkit-scrollbar,picker-view:after::-webkit-scrollbar,radio::-webkit-scrollbar,radio:before::-webkit-scrollbar,radio:after::-webkit-scrollbar,slider::-webkit-scrollbar,slider:before::-webkit-scrollbar,slider:after::-webkit-scrollbar,switch::-webkit-scrollbar,switch:before::-webkit-scrollbar,switch:after::-webkit-scrollbar,textarea::-webkit-scrollbar,textarea:before::-webkit-scrollbar,textarea:after::-webkit-scrollbar,navigator::-webkit-scrollbar,navigator:before::-webkit-scrollbar,navigator:after::-webkit-scrollbar,audio::-webkit-scrollbar,audio:before::-webkit-scrollbar,audio:after::-webkit-scrollbar,video::-webkit-scrollbar,video:before::-webkit-scrollbar,video:after::-webkit-scrollbar{width:0;height:0;color:transparent;display:none !important}::-webkit-scrollbar{width:0;height:0;color:transparent;display:none !important}body{background:#fff;font-size:14px;font-family:-apple-system-font,Helvetica Neue,Helvetica,sans-serif}.container,.container__flex,.container__has-footer,.container__has-tabbar{height:100%;min-height:100vh;position:relative}.padbox--default{padding:20px}.container__has-footer{padding-bottom:100px}.container__has-tabbar{padding-bottom:55px}.container__flex{display:flex;align-items:center;justify-content:space-between;box-sizing:border-box}.flex--item__vertical-center{width:100%;text-align:center;margin-top:-55px}.flex--parent__horizontal{display:flex;justify-content:space-around;max-width:600px;margin:0 auto}.flex--item__half{flex:0 0 45%}.btn--default,.btn--default__medium,.btn--default__small,.btn--default__dark,.btn--default__fixed{background:#50E3C2;color:#333;border-radius:0;border:2px solid #333;box-shadow:4px 4px 0 #333}.btn--default:after,.btn--default__medium:after,.btn--default__small:after,.btn--default__dark:after,.btn--default__fixed:after{display:none}.btn--default[disabled],.btn--default__medium[disabled],.btn--default__dark[disabled],.btn--default__fixed[disabled]{opacity:0.8}.btn--default__medium{border:2px solid #333;padding:10px;box-shadow:4px 4px 0 #333;background-color:#fff;max-width:230px;margin:10px}.btn--default__fixed{position:fixed;width:200px;bottom:55px;margin:0 auto;width:70%;left:15%;z-index:99}.btn--default__dark,.btn--default__dark[disabled]{background-color:#333 !important;color:#fff !important;font-size:14px;box-shadow:none;transition:all 0.3s ease}.btn--default__small{background-color:#333;color:#fff;font-size:10px;max-width:60px;box-shadow:none}.btn--blank{border:0px;color:#333}.btn--blank:after{display:none}.icon--default{width:40px;height:40px}.icon--inline{width:30px;height:30px;vertical-align:middle}.pull-right{float:right}.pull-left{float:left}.form--group{background-color:rgba(0,0,0,0.1);padding:10px;margin:20px 0}.form--group .form--group__title{font-size:15px;font-weight:bold}.form-item--default{margin:10px 0}.form-item--default .form-item--label,.form-item--default .form-item--label__fullwidth{display:inline-block;color:#333;font-size:14px;font-weight:400;padding-right:10px;vertical-align:middle;line-height:1.4rem}.form-item--default .form-item--label__fullwidth{width:100%;text-align:left;margin-bottom:5px}.form-item--default .form-item--input{display:inline-block;width:100%;vertical-align:middle;line-height:1.4rem;padding:10px 5px;height:auto;border-left:2px solid #333;background-color:#fff;transition:all 0.3s ease}.form-item--default .form-item--input[focus]{border-left:2px solid #50E3C2}.form-item--default .form-item--textinput{border-left:2px solid #333;padding:10px;width:auto;z-index:99;margin-top:10px;background-color:#fff}.form-message{background-color:rgba(0,0,0,0.1);padding:10px;color:#333;text-align:center;margin-top:20px;box-shadow:0 10px 30px 0 rgba(0,0,0,0.1)}.registration--title{font-size:20px;color:#333;text-align:center;font-weight:500;padding-bottom:5px;max-width:500px;margin:0 auto}.registration--subtitle{padding-bottom:5px;text-align:center;font-size:14px;max-width:500px;margin:0 auto}@media all and (min-width: 640px){.registration--subtitle{padding-bottom:25px}}\n\n"},/***** module 57 end *****/


/***** module 58 start *****/
/***** src/pages/landing.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".landing--profile{position:absolute;bottom:20px;left:20px}.landing--banner{width:120px;height:120px}.landing--register-btn{font-size:15px;margin:10px auto;max-width:200px;width:100%;display:block}.landing--login{opacity:0.8;width:100%;text-align:center;font-size:11px;text-decoration:underline;margin-top:25px}.landing--modal-btns{text-align:center}.landing--sideslider{flex-wrap:wrap;padding:50% 0}.landing--sideslider .btn--default__small{width:100%;display:block;max-width:unset}\n\n"},/***** module 58 end *****/


/***** module 59 start *****/
/***** src/pages/login.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".login--title{font-size:20px;color:#333;text-align:center;font-weight:500;padding-bottom:5px}.login--subtitle{padding-bottom:5px;text-align:center;font-size:14px}\n\n"},/***** module 59 end *****/


/***** module 60 start *****/
/***** src/pages/edit-profile.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".something{color:pink}\n\n"},/***** module 60 end *****/


/***** module 61 start *****/
/***** src/components/modal.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".modal--mask{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(51,51,51,0.2);box-sizing:border-box;padding:30px;z-index:199}.modal--body{transition:transform 0.3s ease;padding:20px;background-color:#fff;position:relative;border:2px solid #333;box-shadow:0 10px 30px 0 rgba(0,0,0,0.1);width:100%;max-width:450px;margin:0 auto;z-index:200}.modal--title{font-size:20px;color:#333;text-align:center;font-weight:500;padding-bottom:5px}.modal--subtitle{padding-bottom:5px;text-align:center;font-size:14px}.modal--slot-outer{padding:10px 0}.modal--close{position:absolute;padding:2.5px;top:10px;right:10px;width:20px;height:20px}\n\n"},/***** module 61 end *****/


/***** module 62 start *****/
/***** src/components/sideslider.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".sideslider--outer{width:100%;z-index:99;height:100vh;position:fixed;top:0;bottom:0;left:0;right:0;box-sizing:border-box;overflow:hidden}.sideslider--mask{height:100%;background-color:rgba(0,0,0,0.5);top:0;bottom:0;left:0;right:0}.sideslider--sheet{transition:all 0.3s ease-in-out;position:absolute;left:0;top:0;bottom:0;width:65%;background-color:#fff;padding:20px;padding-bottom:0;box-sizing:border-box;box-shadow:10px 10px 30px 0 rgba(0,0,0,0.1)}.sideslider--inner{position:relative;width:100%;z-index:99;padding-top:10px}.sideslider__exit-button{position:absolute;padding:4px}#sideslider-close{position:absolute;top:-20px;left:0;z-index:99;width:20px;height:20px}\n\n"},/***** module 62 end *****/


/***** module 63 start *****/
/***** src/components/language-toggle.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".lang--outer{position:absolute;top:10px;right:10px;padding:10px}.lang--btn{background-color:rgba(0,0,0,0.1)}.lang--btn:before,.lang--btn:after{display:none}\n\n"},/***** module 63 end *****/


/***** module 64 start *****/
/***** src/components/form-parent.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".form--outer{border-left:1px solid rgba(51,51,51,0.5);padding:20px;max-width:500px;margin:0 auto}.form--bottom-padding{height:300px}\n\n"},/***** module 64 end *****/


/***** module 65 start *****/
/***** src/components/redirect-modal.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".redirect--title{padding:5px 0;font-size:15px}\n\n"},/***** module 65 end *****/


/***** module 66 start *****/
/***** src/components/error-modal.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".error--title{font-size:20px;display:inline-block;vertical-align:middle;padding-left:10px}.error--body{opacity:0.8;font-size:14px;padding:10px 5px}\n\n"},/***** module 66 end *****/


/***** module 67 start *****/
/***** src/components/cool-picker.wpy *****/
function(module, exports, __wepy_require) {module.exports = "\n"},/***** module 67 end *****/


/***** module 68 start *****/
/***** src/components/radiolist.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".radio--default{visibility:hidden}.radio--default:before{visibility:visible;content:'';border-radius:2px;background-color:#333;opacity:0.8;width:10px !important;height:10px !important;padding:4px 12px}.radio--default[checked]:before{background-color:#50E3C2;background-image:url(\"https://up.img.heidiancdn.com/o_1c0o37aq312v91kk4mrdbobb0k0hecked.png\");background-repeat:no-repeat;background-position:center;background-size:contain}.radio--label{display:inline-block;margin-left:-18px}.radio--outer{display:block;margin-bottom:10px}\n\n"},/***** module 68 end *****/


/***** module 69 start *****/
/***** src/components/fido-loader.wpy *****/
function(module, exports, __wepy_require) {module.exports = ".loader-container{position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(51,51,51,0.2);box-sizing:border-box;padding:30px;z-index:199}.loader-outer{transition:transform 0.3s ease;padding:20px;padding-top:0;background-color:#fff;position:relative;border:2px solid #333;box-shadow:0 10px 30px 0 rgba(0,0,0,0.1);width:100%;max-width:600px;margin:0 auto;z-index:200;overflow:hidden !important}.loader-inner{width:100%;height:100px}.loader-text{text-align:center;margin-top:10px;z-index:201;position:relative;color:#fff}.cloud{border-radius:50%;position:absolute;background-color:#fff;padding:10px;opacity:0.8;top:10px;left:0px;z-index:201;animation-delay:2s;animation:shuffling 3s linear infinite alternate}.cloud:before,.cloud:after{display:none}.loader--moving-background{position:absolute;background-image:linear-gradient(to top, #30cfd0 0%, #330867 100%);width:300%;height:500px;animation:backgroundAnimation 4s linear infinite;animation-direction:alternate}@keyframes backgroundAnimation{from{left:0%;top:-80px;transform:rotate(0deg)}to{left:-90%;top:-10px;transform:rotate(100deg)}}@keyframes shuffling{from{left:-15%;transform:scale(1);top:10px}to{left:100%;transform:scale(82);opacity:0.3}}\n\n"}/***** module 69 end *****/



]);
