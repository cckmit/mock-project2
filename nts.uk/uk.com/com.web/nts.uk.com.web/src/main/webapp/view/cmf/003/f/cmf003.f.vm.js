var nts;
(function (nts) {
    var uk;
    (function (uk) {
        var com;
        (function (com) {
            var view;
            (function (view) {
                var cmf003;
                (function (cmf003) {
                    var f;
                    (function (f) {
                        var getText = nts.uk.resource.getText;
                        var viewmodel;
                        (function (viewmodel) {
                            var ScreenModel = /** @class */ (function () {
                                function ScreenModel() {
                                    this.errorText = nts.uk.text.format(nts.uk.resource.getText("CMF003_190"), 0);
                                    var self = this;
                                    var params = nts.uk.ui.windows.getShared("CMF001_E_PARAMS");
                                    self.timeStart = new Date();
                                    self.timeOver = ko.observable('00:00:00');
                                    self.storeProcessingId = params.storeProcessingId;
                                    self.dataSaveSetName = params.dataSaveSetName;
                                    if (!params.dayValue.startDate) {
                                        self.dayStartValue = "";
                                    }
                                    else {
                                        self.dayStartValue = moment.utc(params.dayValue.startDate, 'YYYY/MM/DD').format("YYYY/MM/DD");
                                    }
                                    if (!params.dayValue.endDate) {
                                        self.dayEndValue = "";
                                    }
                                    else {
                                        self.dayEndValue = moment.utc(params.dayValue.endDate, 'YYYY/MM/DD').format("YYYY/MM/DD");
                                    }
                                    if (!params.monthValue.startDate) {
                                        self.monthStartValue = "";
                                    }
                                    else {
                                        self.monthStartValue = moment.utc(params.monthValue.startDate, 'YYYY/MM/DD').format("YYYY/MM");
                                    }
                                    if (!params.monthValue.endDate) {
                                        self.monthEndValue = "";
                                    }
                                    else {
                                        self.monthEndValue = moment.utc(params.monthValue.endDate, 'YYYY/MM/DD').format("YYYY/MM");
                                    }
                                    if (!params.yearValue.startDate) {
                                        self.yearStartValue = "";
                                    }
                                    else {
                                        self.yearStartValue = moment.utc(params.yearValue.startDate, 'YYYY/MM/DD').format("YYYY");
                                    }
                                    if (!params.yearValue.endDate) {
                                        self.yearEndValue = "";
                                    }
                                    else {
                                        self.yearEndValue = moment.utc(params.yearValue.endDate, 'YYYY/MM/DD').format("YYYY");
                                    }
                                    // init F1_7
                                    self.status = ko.observable('');
                                    self.categoryCount = ko.observable(0);
                                    self.categoryTotalCount = ko.observable(0);
                                    self.errorCount = ko.observable(0);
                                    self.dialogMode = ko.observable("saving");
                                    self.isDownloaded = ko.observable(false);
                                }
                                //開始
                                ScreenModel.prototype.start = function () {
                                    var self = this, dfd = $.Deferred();
                                    //データ保存監視処理: 
                                    self.interval = setInterval(self.confirmProcess, 1000, self);
                                    dfd.resolve();
                                    return dfd.promise();
                                };
                                /**
                                * confirm process after 1s
                                */
                                ScreenModel.prototype.confirmProcess = function (self) {
                                    var storeProcessingId = self.storeProcessingId;
                                    f.service.findDataStorageMng(storeProcessingId).done(function (res) {
                                        var storageMng = res;
                                        // F1_6 set time over 
                                        var timeNow = new Date();
                                        var over = (timeNow.getSeconds() + timeNow.getMinutes() * 60 + timeNow.getHours() * 60 * 60) - (self.timeStart.getSeconds() + self.timeStart.getMinutes() * 60 + self.timeStart.getHours() * 60 * 60);
                                        var time = new Date(null);
                                        time.setSeconds(over); // specify value for SECONDS here
                                        var result = time.toISOString().substr(11, 8);
                                        self.timeOver(result);
                                        // F1_7
                                        self.status(self.getStatusEnum(storageMng.operatingCondition));
                                        self.categoryCount(storageMng.categoryCount);
                                        self.categoryTotalCount(storageMng.categoryTotalCount);
                                        self.errorCount(storageMng.errorCount);
                                        self.operatingCondition = storageMng.operatingCondition;
                                        // update mode when end: DONE, INTERRUPTION_END, ABNORMAL_TERMINATION
                                        // 完了, 中断終了, 異常終了
                                        if ((storageMng.operatingCondition == 4) || (storageMng.operatingCondition == 5) || (storageMng.operatingCondition == 6)) {
                                            // stop auto request to server
                                            clearInterval(self.interval);
                                            // end: update dialog to complete mode
                                            if (storageMng.operatingCondition == 4) {
                                                self.dialogMode("done");
                                                var fileId_1 = null;
                                                f.service.findResultOfSaving(storeProcessingId).done(function (res) {
                                                    fileId_1 = res.fileId;
                                                    f.service.updateFileSize(storeProcessingId, fileId_1).done(function (data) {
                                                    });
                                                }).fail(function (res) {
                                                    console.log("Get fileId fail");
                                                });
                                                // confirm down load when done
                                                nts.uk.ui.dialog.confirm({ messageId: "Msg_334" })
                                                    .ifYes(function () {
                                                    if (fileId_1) {
                                                        nts.uk.request.specials.donwloadFile(fileId_1);
                                                        self.isDownloaded(true);
                                                        $('#F3_3').focus();
                                                    }
                                                })
                                                    .ifNo(function () {
                                                    $('#F3_3').focus();
                                                    return;
                                                });
                                            }
                                            // end: update dialog to Error/Interrupt mode
                                            if ((storageMng.operatingCondition == 5) || (storageMng.operatingCondition == 6)) {
                                                self.dialogMode("error_interrupt");
                                                $('#F3_3').focus();
                                            }
                                            // delete dataStorageMng of process when end
                                            var dataStorageMng = new DataStorageMng(storeProcessingId, 0, 0, 0, 0, 0);
                                            f.service.deleteDataStorageMng(dataStorageMng).done(function (res) {
                                                console.log("delete success");
                                            }).fail(function (res) {
                                                console.log("delete fails");
                                            });
                                        }
                                    }).fail(function (res) {
                                        console.log("findDataStorageMng fail");
                                    });
                                };
                                // interrupt process when click button
                                ScreenModel.prototype.interrupt = function () {
                                    var self = this;
                                    var dataStorageMng = new DataStorageMng(self.storeProcessingId, 1, self.categoryCount(), self.categoryTotalCount(), self.errorCount(), self.operatingCondition);
                                    nts.uk.ui.dialog.confirm({ messageId: "Msg_387" })
                                        .ifYes(function () {
                                        self.dialogMode("error_interrupt");
                                        self.status(self.getStatusEnum(5));
                                        $('#F3_3').focus();
                                        // stop auto request to server
                                        clearInterval(self.interval);
                                        // delete dataStorageMng of process when interrupt
                                        var dataStorageMng = new DataStorageMng(self.storeProcessingId, 0, 0, 0, 0, 0);
                                        f.service.deleteDataStorageMng(dataStorageMng).done(function (res) {
                                            console.log("delete success");
                                        }).fail(function (res) {
                                            console.log("delete fails");
                                        });
                                    })
                                        .ifNo(function () {
                                        return;
                                    });
                                };
                                ScreenModel.prototype.download = function () {
                                    var self = this;
                                    // confirm down load when click button
                                    nts.uk.ui.dialog.confirm({ messageId: "Msg_388" })
                                        .ifYes(function () {
                                        f.service.findResultOfSaving(self.storeProcessingId).done(function (res) {
                                            var fileId = res.fileId;
                                            nts.uk.request.specials.donwloadFile(fileId);
                                            self.isDownloaded(true);
                                        }).fail(function (res) {
                                            console.log("Get fileId fail");
                                        });
                                    })
                                        .ifNo(function () {
                                        return;
                                    });
                                };
                                // close popup
                                ScreenModel.prototype.close = function () {
                                    nts.uk.ui.windows.close();
                                    $("#E1_1").focus();
                                };
                                ScreenModel.prototype.getStatusEnum = function (value) {
                                    if (value && value === 0) {
                                        return getText('Enum_OperatingCondition_INPREPARATION');
                                    }
                                    else if (value && value === 1) {
                                        return getText('Enum_OperatingCondition_SAVING');
                                    }
                                    else if (value && value === 2) {
                                        return getText('Enum_OperatingCondition_INPROGRESS');
                                    }
                                    else if (value && value === 3) {
                                        return getText('Enum_OperatingCondition_DELETING');
                                    }
                                    else if (value && value === 4) {
                                        return getText('Enum_OperatingCondition_DONE');
                                    }
                                    else if (value && value === 5) {
                                        return getText('Enum_OperatingCondition_INTERRUPTION_END');
                                    }
                                    else if (value && value === 6) {
                                        return getText('Enum_OperatingCondition_ABNORMAL_TERMINATION');
                                    }
                                };
                                return ScreenModel;
                            }());
                            viewmodel.ScreenModel = ScreenModel;
                            var DataStorageMng = /** @class */ (function () {
                                function DataStorageMng(storeProcessingId, doNotInterrupt, categoryCount, categoryTotalCount, errorCount, operatingCondition) {
                                    this.storeProcessingId = storeProcessingId;
                                    this.doNotInterrupt = doNotInterrupt;
                                    this.categoryCount = categoryCount;
                                    this.categoryTotalCount = categoryTotalCount;
                                    this.errorCount = errorCount;
                                    this.operatingCondition = operatingCondition;
                                }
                                return DataStorageMng;
                            }());
                        })(viewmodel = f.viewmodel || (f.viewmodel = {}));
                    })(f = cmf003.f || (cmf003.f = {}));
                })(cmf003 = view.cmf003 || (view.cmf003 = {}));
            })(view = com.view || (com.view = {}));
        })(com = uk.com || (uk.com = {}));
    })(uk = nts.uk || (nts.uk = {}));
})(nts || (nts = {}));
//# sourceMappingURL=cmf003.f.vm.js.map