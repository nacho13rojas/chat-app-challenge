"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Screen = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _Chat = require("../Chat/Chat");

var _TextBox = require("../TextBox/TextBox");

var _language = require("../../constants/language");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Screen = (_ref) => {
  let {
    socket
  } = _ref;
  const [userName, setUserName] = (0, _react.useState)('');
  const [inputText, setInputText] = (0, _react.useState)('');
  const [history, setHistory] = (0, _react.useState)([]);

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText !== '') {
      if (userName === '') {
        setUserName(inputText);
      }

      socket.send(inputText);
      setInputText('');
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleMessage = messageObject => {
    const {
      data,
      type
    } = JSON.parse(messageObject);

    if (type === 'history') {
      setHistory(data);
    } else if (type === 'message') {
      setHistory(history.concat(data));
    }
  };

  if (socket !== undefined) {
    socket.onmessage = event => handleMessage(event.data);
  }

  const title = userName === '' ? _language.TEXTS.startByEnteringYourNameTitle : _language.TEXTS.greetingsUser(userName);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, title), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_Chat.Chat, {
    messages: history,
    userName: userName
  }), /*#__PURE__*/_react.default.createElement(_TextBox.TextBox, {
    handleChange: handleChange,
    handleKeyDown: handleKeyDown,
    handleSendMessage: handleSendMessage,
    inputText: inputText,
    userName: userName
  })));
};

exports.Screen = Screen;