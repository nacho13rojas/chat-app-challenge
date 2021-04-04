"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChatItem = (_ref) => {
  let {
    message,
    userName
  } = _ref;
  const {
    time,
    text,
    author,
    color
  } = message;
  const isUser = author === userName;
  const date = new Date(time);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = "".concat(hour, ":").concat(minutes);
  console.log(date);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    alignEnd: isUser
  }, /*#__PURE__*/_react.default.createElement(_styles.Box, {
    alignEnd: isUser
  }, isUser && /*#__PURE__*/_react.default.createElement(_styles.Time, null, formattedTime), /*#__PURE__*/_react.default.createElement(_styles.MessageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, {
    color: color
  }, author), /*#__PURE__*/_react.default.createElement(_styles.Text, null, text)), !isUser && /*#__PURE__*/_react.default.createElement(_styles.Time, null, formattedTime)));
};

exports.ChatItem = ChatItem;