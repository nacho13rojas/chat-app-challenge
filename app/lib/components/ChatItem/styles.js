"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = exports.Text = exports.Title = exports.MessageContainer = exports.Container = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../theme/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Box = _styledComponents.default.div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-1awd8ct-0"
})(["align-self:", ";background-color:", ";border-radius:", ";color:", ";display:inline-flex;font-size:12px;margin-bottom:", ";text-align:", ";"], (_ref) => {
  let {
    alignEnd
  } = _ref;
  return alignEnd ? 'flex-end' : 'auto';
}, _colors.SECONDARY, (_ref2) => {
  let {
    alignEnd,
    isFirstMessage
  } = _ref2;

  if (!isFirstMessage) {
    return '6px 6px 6px 6px';
  }

  return alignEnd ? '6px 0px 6px 6px' : '0px 6px 6px 6px';
}, _colors.WHITE, (_ref3) => {
  let {
    isLastMessage
  } = _ref3;
  return isLastMessage ? '8px' : '2px';
}, (_ref4) => {
  let {
    alignEnd
  } = _ref4;
  return alignEnd ? 'end' : 'auto';
});

exports.Box = Box;

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1awd8ct-1"
})(["align-self:", ";display:inline-flex;"], (_ref5) => {
  let {
    alignEnd
  } = _ref5;
  return alignEnd ? 'flex-end' : 'auto';
});

exports.Container = Container;

const MessageContainer = _styledComponents.default.div.withConfig({
  displayName: "styles__MessageContainer",
  componentId: "sc-1awd8ct-2"
})(["margin:4px 8px;"]);

exports.MessageContainer = MessageContainer;

const Title = _styledComponents.default.h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1awd8ct-3"
})(["color:", ";font-size:14px;margin:0px;"], (_ref6) => {
  let {
    color
  } = _ref6;
  return color;
});

exports.Title = Title;

const Text = _styledComponents.default.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1awd8ct-4"
})(["font-size:16px;margin:4px 0px 4px;"]);

exports.Text = Text;

const Time = _styledComponents.default.p.withConfig({
  displayName: "styles__Time",
  componentId: "sc-1awd8ct-5"
})(["align-self:flex-end;font-size:10px;margin:4px;"]);

exports.Time = Time;