/// <reference path="../../../../lib/nittsu/viewcontext.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nts;
(function (nts) {
    var uk;
    (function (uk) {
        var ui;
        (function (ui) {
            var sample;
            (function (sample) {
                var layout;
                (function (layout) {
                    var a;
                    (function (a) {
                        var ViewModel = /** @class */ (function (_super) {
                            __extends(ViewModel, _super);
                            function ViewModel() {
                                var _this = _super !== null && _super.apply(this, arguments) || this;
                                _this.text = ko.observable('Hello');
                                _this.listbox = ko.observableArray([]);
                                _this.show = ko.observable(true);
                                return _this;
                            }
                            ViewModel.prototype.created = function () {
                                var vm = this;
                                var items = [];
                                for (var i = 1; i <= 100; i++) {
                                    var code = _.padStart(i.toString(), 3, '0');
                                    items.push({ code: code, name: "Name  " + code, abolition: false });
                                }
                                vm.listbox(items);
                            };
                            ViewModel.prototype.click = function () {
                                var vm = this;
                                vm.show(!vm.show());
                                // vm.$dialog.error({ messageId: 'MsgB_1', messageParams: [vm.text()] });
                            };
                            ViewModel.prototype.selectDropdown = function (item) {
                                console.log(item);
                            };
                            ViewModel = __decorate([
                                bean()
                            ], ViewModel);
                            return ViewModel;
                        }(ko.ViewModel));
                        a.ViewModel = ViewModel;
                    })(a = layout.a || (layout.a = {}));
                })(layout = sample.layout || (sample.layout = {}));
            })(sample = ui.sample || (ui.sample = {}));
        })(ui = uk.ui || (uk.ui = {}));
    })(uk = nts.uk || (nts.uk = {}));
})(nts || (nts = {}));
//# sourceMappingURL=viewmodel.js.map