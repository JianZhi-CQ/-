(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL, process) {"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_dom_1 = require("react-dom");
require("./style.css");
require("semantic-ui-css/semantic.min.css");
var semantic_ui_react_1 = require("semantic-ui-react");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = this;
        _this.state = {
            issueLength: 2,
            issueArray: [
                '声讨六四屠杀',
                '支持天安门母亲',
                '支持结束一党专政',
                '支持维权律师',
                '支持劳工讨薪',
                '拥护司法独立',
                '支持香港反送中',
                '支持双普选',
                '为反送中发声',
                '关注新疆集中营',
                '关注铜锣湾书店案',
                '关注北戴河会议',
                '给何韵诗点赞'
            ],
            fileLength: 1,
            fileArray: [
                '新疆集中营',
                '港警恶行',
                '巴拿马文件',
                '中国制造业困局',
                '中美贸易战分析',
                '习维尼',
                '活摘器官',
                '08宪章'
            ],
            thankArray: [
                '多谢',
                '谢谢',
                '感恩',
                '十分感谢',
                '万分感谢',
                '非常感谢',
                '自当重谢',
                '好人一生平安',
            ],
            p: 'this is test text',
            intenseRandomOn: false
        };
        return _this;
    }
    App.prototype.genP = function () {
        var issueLength = this.state.intenseRandomOn ?
            Math.floor(Math.random() * (this.state.issueArray.length - 2)) :
            this.state.issueLength;
        this.setState({
            issueLength: issueLength,
            p: this.getIssueP() + this.genDocuP()
        });
    };
    App.prototype.copyToClipBoard = function () {
        document.querySelector('#textArea').select();
        document.execCommand("copy");
    };
    App.prototype.getIssueP = function () {
        var _a;
        var p = '';
        var array = this.state.issueArray;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
        array.slice(0, this.state.issueLength + 2).forEach(function (item) {
            return p += "多谢一直" + item + "，";
        });
        return p;
    };
    App.prototype.genDocuP = function () {
        var p = "你上次提供的关于";
        var fileArray = this.state.fileArray;
        var fileIndex = Math.floor(Math.random() * Math.floor(fileArray.length));
        p += fileArray[fileIndex] + "的资料非常有价值，" + this.getThankP() + "！";
        return p;
    };
    App.prototype.getThankP = function () {
        var thankArray = this.state.thankArray;
        var thankIndex = Math.floor(Math.random() * Math.floor(thankArray.length));
        return thankArray[thankIndex];
    };
    App.prototype.intensifyRandomization = function () {
        this.setState({
            intenseRandomOn: !this.state.intenseRandomOn
        });
    };
    App.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(semantic_ui_react_1.Container, null,
            react_1.default.createElement(semantic_ui_react_1.Form, { id: "todoList" },
                "v0.0.3",
                react_1.default.createElement("h2", null, "\u8D75\u5F39\u78C1\u94C1"),
                react_1.default.createElement(semantic_ui_react_1.TextArea, { id: "textArea", type: "text", value: this.state.p }),
                react_1.default.createElement(semantic_ui_react_1.Button, { size: 'small', primary: true, onClick: function () { return _this.genP(); } }, "\u751F\u6210"),
                react_1.default.createElement(semantic_ui_react_1.Button, { size: 'small', color: 'orange', onClick: function () { return _this.copyToClipBoard(); } }, "\u590D\u5236\u5230\u526A\u5207\u677F"),
                react_1.default.createElement(semantic_ui_react_1.Button, { size: 'small', toggle: true, active: this.state.intenseRandomOn, onClick: function () { return _this.intensifyRandomization(); } }, "\u52A0\u5927\u968F\u673A\u529B\u5EA6"),
                react_1.default.createElement("p", null, "\u4F7F\u7528\u65B9\u6CD5\uFF1A\u70B9\u51FB\u751F\u6210\u4EE5\u540E\u7528\u751F\u6210\u7684\u6BB5\u843D\u56DE\u590D\u4E94\u6BDB\u6216\u81EA\u5E72\u4E94"))));
    };
    return App;
}(react_1.Component));
react_dom_1.render(react_1.default.createElement(App, null), document.getElementById('root'));

}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);