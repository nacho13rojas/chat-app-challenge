"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollToBottom = exports.getIsLastMessage = exports.getIsFirstMessage = void 0;

const getIsFirstMessage = (messages, index) => {
  if (index === 0) {
    return true;
  }

  return messages[index].author !== messages[index - 1].author;
};

exports.getIsFirstMessage = getIsFirstMessage;

const getIsLastMessage = (messages, index) => {
  if (index === messages.length - 1) {
    return true;
  }

  return messages[index].author !== messages[index + 1].author;
};

exports.getIsLastMessage = getIsLastMessage;

const scrollToBottom = messagesEndRef => {
  var _messagesEndRef$curre;

  (_messagesEndRef$curre = messagesEndRef.current) === null || _messagesEndRef$curre === void 0 ? void 0 : _messagesEndRef$curre.scrollIntoView({
    behavior: "smooth"
  });
};

exports.scrollToBottom = scrollToBottom;