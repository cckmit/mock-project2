var nts;
(function (nts) {
    var uk;
    (function (uk) {
        var com;
        (function (com) {
            var view;
            (function (view) {
                var cmf004;
                (function (cmf004) {
                    var a;
                    (function (a) {
                        var viewmodel;
                        (function (viewmodel) {
                            var ScreenModel = /** @class */ (function () {
                                function ScreenModel() {
                                }
                                /**
                                 * request to create creation screen
                                 */
                                ScreenModel.prototype.save = function () {
                                    var self = this;
                                    nts.uk.request.jump("/view/cmf/004/b/index.xhtml");
                                };
                                /**
                                 * request to create creation screen
                                 */
                                ScreenModel.prototype.autoSave = function () {
                                    var self = this;
                                    nts.uk.request.jump("/view/cmf/004/j/index.xhtml");
                                };
                                /**
                                 * request to reference history screen
                                 */
                                ScreenModel.prototype.referenceHistoryScreen = function () {
                                    var self = this;
                                    nts.uk.request.jump("/view/cmf/002/4/index.xhtml");
                                };
                                return ScreenModel;
                            }());
                            viewmodel.ScreenModel = ScreenModel;
                        })(viewmodel = a.viewmodel || (a.viewmodel = {}));
                    })(a = cmf004.a || (cmf004.a = {}));
                })(cmf004 = view.cmf004 || (view.cmf004 = {}));
            })(view = com.view || (com.view = {}));
        })(com = uk.com || (uk.com = {}));
    })(uk = nts.uk || (nts.uk = {}));
})(nts || (nts = {}));
//# sourceMappingURL=cmf004.a.vm.js.map