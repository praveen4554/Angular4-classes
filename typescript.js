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
var a = 10;
var count;
var userName;
var isAgree;
var users;
var cart;
cart = ['name', 10];
var _a = [3, 4], x = _a[0], y = _a[1];
var a = 20;
var _b = [3, 4, 5, 6, 7, 8], x = _b[0], y = _b[1], rajesh = _b.slice(2);
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["YELLOW"] = 2] = "YELLOW";
})(Color || (Color = {}));
;
var da;
da = 10;
function value() {
    console.log(x);
    console.log(y);
    console.log(rajesh[0]);
    console.log(Color.GREEN);
    var da = 20;
}
value();
var base = /** @class */ (function () {
    //  constructor(){
    //      this.message = 'Angular4';
    //  }
    function base(name) {
        this.message = name;
    }
    return base;
}());
var Angular = /** @class */ (function (_super) {
    __extends(Angular, _super);
    function Angular() {
        return _super.call(this, 'praveen') || this;
    }
    Angular.prototype.fullName = function () {
        return 'praveen';
    };
    Angular.prototype.firstName = function () {
        return 'praveen';
    };
    return Angular;
}(base));
var ang = new Angular();
var bas = new base('praveen');
//   var name= 10; // global scope
//   class anular{
//       constructor(){
//           var name = 20;
//       function fullName(){
//           var name = 30;
//       }
//       }
//   }
