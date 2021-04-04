"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => {
  const exampleSocket = new WebSocket("ws://localhost:1337/");

  const handleButtonClick = () => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, "Chat"), /*#__PURE__*/_react.default.createElement(_styles.Input, null), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: handleButtonClick
  }, "Enviar"));
};

var _default = App;
exports.default = _default;