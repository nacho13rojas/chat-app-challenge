"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _Chat = require("./components/Chat/Chat");

var _TextBox = require("./components/TextBox/TextBox");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const App = () => {
  const [socket, setSocket] = (0, _react.useState)(undefined);
  const [userName, setUserName] = (0, _react.useState)('');
  const [inputText, setInputText] = (0, _react.useState)('');
  const [history, setHistory] = (0, _react.useState)([]);

  const handleSendMessage = () => {
    if (userName === '') {
      socket.send(inputText);
      setUserName(inputText);
      setInputText('');
      return;
    }

    if (inputText !== '') {
      socket.send(inputText);
      setInputText('');
    }
  };

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleMessage = messageObject => {
    const message = JSON.parse(messageObject);

    if (message.type === 'history') {
      setHistory(message.data);
    } else if (message.type === 'message') {
      setHistory(history.concat(message.data));
    }
  };

  (0, _react.useEffect)(() => {
    if (socket === undefined) {
      setSocket(new WebSocket("ws://localhost:1337/"));
      return;
    }

    return () => {
      if (socket !== undefined) {
        socket.close();
      }
    };
  }, [socket]);

  if (socket !== undefined) {
    socket.onmessage = event => handleMessage(event.data);
  }

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, userName === '' ? 'Para conversar, comece inserindo seu nome' : "Bem vindo, ".concat(userName)), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_Chat.Chat, {
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

exports.App = App;