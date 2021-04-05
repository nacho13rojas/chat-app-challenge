"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyChat = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmptyChat = () => /*#__PURE__*/_react.default.createElement(_styles.EmptyChatContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EmptyChatText, null, "As mensagens apareceram aqui"));

exports.EmptyChat = EmptyChat;