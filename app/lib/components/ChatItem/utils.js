"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormattedTime = void 0;

const getFormattedTime = time => {
  const date = new Date(time);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  return "".concat(hour, ":").concat(minutes);
};

exports.getFormattedTime = getFormattedTime;