"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _Screen = require("./components/Screen/Screen");

var _urls = require("./constants/urls");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const App = () => {
  const [socket, setSocket] = (0, _react.useState)(undefined);
  (0, _react.useEffect)(() => {
    if (socket === undefined) {
      setSocket(new WebSocket(_urls.WEB_SOCKET_URL));
      return;
    }

    return () => {
      if (socket !== undefined) {
        socket.close();
      }
    };
  }, [socket]);
  return /*#__PURE__*/_react.default.createElement(_Screen.Screen, {
    socket: socket
  });
};

exports.App = App;