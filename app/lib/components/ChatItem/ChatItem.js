"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ChatItem = (_ref) => {
  let {
    isFirstMessage,
    isLastMessage,
    message,
    userName
  } = _ref;
  const {
    time,
    text,
    author,
    color
  } = message;
  const isCurrentUser = author === userName;
  const formattedTime = (0, _utils.getFormattedTime)(time);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    alignEnd: isCurrentUser
  }, /*#__PURE__*/_react.default.createElement(_styles.Box, {
    alignEnd: isCurrentUser,
    isFirstMessage: isFirstMessage,
    isLastMessage: isLastMessage
  }, isCurrentUser && /*#__PURE__*/_react.default.createElement(_styles.Time, null, formattedTime), /*#__PURE__*/_react.default.createElement(_styles.MessageContainer, null, isFirstMessage && /*#__PURE__*/_react.default.createElement(_styles.Title, {
    color: color
  }, author), /*#__PURE__*/_react.default.createElement(_styles.Text, null, text)), !isCurrentUser && /*#__PURE__*/_react.default.createElement(_styles.Time, null, formattedTime)));
};

exports.ChatItem = ChatItem;