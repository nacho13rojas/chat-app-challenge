"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = exports.Text = exports.Title = exports.MessageContainer = exports.Container = exports.Box = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Box = _styledComponents.default.div.withConfig({
  displayName: "styles__Box",
  componentId: "sc-1awd8ct-0"
})(["align-self:", ";display:inline-flex;text-align:", ";background-color:rgba(253,248,246,0.5);border-radius:", ";color:white;font-size:12px;margin-bottom:8px;"], (_ref) => {
  let {
    alignEnd
  } = _ref;
  return alignEnd ? 'flex-end' : 'auto';
}, (_ref2) => {
  let {
    alignEnd
  } = _ref2;
  return alignEnd ? 'end' : 'auto';
}, (_ref3) => {
  let {
    alignEnd
  } = _ref3;
  return alignEnd ? '5px 5px 0px 5px' : '5px 5px 5px 0px';
});

exports.Box = Box;

const Container = _styledComponents.default.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1awd8ct-1"
})(["align-self:", ";display:inline-flex;"], (_ref4) => {
  let {
    alignEnd
  } = _ref4;
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
})(["color:", ";font-size:10px;margin:0px;"], (_ref5) => {
  let {
    color
  } = _ref5;
  return color;
});

exports.Title = Title;

const Text = _styledComponents.default.p.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1awd8ct-4"
})(["font-size:12px;margin:0px;"]);

exports.Text = Text;

const Time = _styledComponents.default.p.withConfig({
  displayName: "styles__Time",
  componentId: "sc-1awd8ct-5"
})(["align-self:flex-end;font-size:8px;margin:4px;"]);

exports.Time = Time;