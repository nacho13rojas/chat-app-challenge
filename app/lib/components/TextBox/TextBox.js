"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBox = void 0;

var _react = _interopRequireDefault(require("react"));

var _send_white_24dp = _interopRequireDefault(require("../../assets/send_white_24dp.png"));

var _language = require("../../constants/language");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextBox = (_ref) => {
  let {
    handleChange,
    handleKeyDown,
    handleSendMessage,
    inputText,
    userName
  } = _ref;
  const placeholder = userName === '' ? _language.TEXTS.enterYourName : _language.TEXTS.enterAMessage;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    autoFocus: true,
    placeholder: placeholder,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    value: inputText
  }), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    onClick: handleSendMessage
  }, /*#__PURE__*/_react.default.createElement(_styles.Icon, {
    alt: _language.TEXTS.send,
    src: _send_white_24dp.default
  })))));
};

exports.TextBox = TextBox;