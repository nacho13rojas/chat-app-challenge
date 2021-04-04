"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _ChatItem = require("../ChatItem/ChatItem");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Chat = (_ref) => {
  let {
    messages,
    userName
  } = _ref;
  const messagesEndRef = (0, _react.useRef)(null);

  const scrollToBottom = () => {
    var _messagesEndRef$curre;

    (_messagesEndRef$curre = messagesEndRef.current) === null || _messagesEndRef$curre === void 0 ? void 0 : _messagesEndRef$curre.scrollIntoView({
      behavior: "smooth"
    });
  };

  (0, _react.useEffect)(() => {
    scrollToBottom();
  }, [messages]);

  const EmptyChat = () => /*#__PURE__*/_react.default.createElement(_styles.EmptyChatContainer, null, /*#__PURE__*/_react.default.createElement(_styles.EmptyChatText, null, "As mensagens apareceram aqui"));

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, messages.length === 0 && /*#__PURE__*/_react.default.createElement(EmptyChat, null), /*#__PURE__*/_react.default.createElement(_styles.Scroll, null, messages.map((message, index) => /*#__PURE__*/_react.default.createElement(_ChatItem.ChatItem, {
    key: index,
    message: message,
    userName: userName
  })), /*#__PURE__*/_react.default.createElement("div", {
    ref: messagesEndRef
  })));
};

exports.Chat = Chat;