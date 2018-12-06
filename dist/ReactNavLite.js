"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./ReactNavLite.scss");
var ReactSideNav = /** @class */ (function (_super) {
    __extends(ReactSideNav, _super);
    function ReactSideNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactSideNav.prototype.render = function () {
        var _a = this.props, show = _a.show, children = _a.children;
        return (React.createElement("div", { className: "left-nav " + (show ? 'expanded' : 'collapsed') }, show ? children : null));
    };
    return ReactSideNav;
}(React.Component));
exports.default = ReactSideNav;
