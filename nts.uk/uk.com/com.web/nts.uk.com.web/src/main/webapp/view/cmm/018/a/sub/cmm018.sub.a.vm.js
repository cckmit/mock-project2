var nts;
(function (nts) {
    var uk;
    (function (uk) {
        var com;
        (function (com) {
            var view;
            (function (view) {
                var cmm018;
                (function (cmm018) {
                    var a;
                    (function (a_1) {
                        var sub;
                        (function (sub) {
                            var getText = nts.uk.resource.getText;
                            var vmbase = cmm018.shr.vmbase;
                            //=========Mode A: まとめて登録モード==============
                            var viewmodelSubA;
                            (function (viewmodelSubA) {
                                var ScreenModel = /** @class */ (function () {
                                    function ScreenModel() {
                                        this.items = ko.observableArray([]);
                                        this.lstData = ko.observableArray([]);
                                    }
                                    // fix bug 109950
                                    ScreenModel.prototype.scrollToIndex = function (object) {
                                        var index = 0;
                                        // not to use Array.findIndex in IE
                                        if (this.lstData() != null) {
                                            for (var i_1 = 0; i_1 < this.lstData().length; ++i_1) {
                                                if (this.lstData()[i_1].approvalId == object.approvalId) {
                                                    index = i_1;
                                                    break;
                                                }
                                            }
                                        }
                                        $(this.gridName).igGrid("virtualScrollTo", index);
                                    };
                                    ScreenModel.prototype.reloadGridN = function (lstRoot, rootType, mode) {
                                        var dfd = $.Deferred();
                                        var self = this;
                                        var systemAtr = __viewContext.viewModel.viewmodelA.systemAtr();
                                        var width = 950;
                                        var height = 530;
                                        self.gridName = '#grid_matome';
                                        $('html.sidebar-html').css('overflow', 'visible');
                                        $('div#left-contents').css('margin-top', "0px");
                                        if (rootType == vmbase.RootType.COMPANY) {
                                            if (mode == vmbase.MODE.MATOME) {
                                                self.gridName = '#grid_matome';
                                                if (systemAtr == 0) {
                                                    width = screen.width - 435 > 925 ? 925 : screen.width - 435;
                                                    //                            width = (screen.width * 1000)/(1920);
                                                    if (screen.height == 768) {
                                                        height = 385;
                                                    }
                                                    //1920*1040
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        width = 950;
                                                        height = 700;
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        //                                     width = 750;
                                                        width = 850;
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        //                                width = 510;
                                                        width = 600;
                                                    }
                                                }
                                                else {
                                                    width = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        height = 430;
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        height = 230;
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        height = 230;
                                                    }
                                                }
                                            }
                                            else {
                                                self.gridName = '#grid_matomeB';
                                                if (systemAtr == 0) {
                                                    width = screen.width - 435 > 920 ? 920 : screen.width - 435;
                                                    if (screen.height == 768) {
                                                        height = 385;
                                                    }
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        $('#treegrid2_scroll').height(360);
                                                        $('#treegrid2_container').height(360);
                                                        width = 950;
                                                        height = 700;
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        width = 845;
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        width = 600;
                                                    }
                                                }
                                                else {
                                                    width = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                }
                                            }
                                        }
                                        else if (rootType == vmbase.RootType.WORKPLACE) {
                                            if (mode == vmbase.MODE.MATOME) {
                                                self.gridName = '#grid_matomeC';
                                                if (systemAtr == 0) {
                                                    width = screen.width - 435 > 925 ? 925 : screen.width - 435;
                                                    if (screen.height == 768) {
                                                        height = 355;
                                                    }
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        width = 950;
                                                        height = 650;
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        width = 850;
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        width = 600;
                                                    }
                                                }
                                                else {
                                                    width = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        height = 430;
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        height = 180;
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        height = 180;
                                                    }
                                                }
                                            }
                                            else {
                                                self.gridName = '#grid_matomeD';
                                                if (systemAtr == 0) {
                                                    width = screen.width - 435 > 920 ? 920 : screen.width - 435;
                                                    $('#treegrid2_container').height(360);
                                                    if (screen.height == 768) {
                                                        height = 355;
                                                        $('#treegrid2_scroll').height(330);
                                                    }
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        height = 650;
                                                        $('#treegrid2_scroll').height(360);
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                    }
                                                }
                                                else {
                                                    width = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                }
                                            }
                                        }
                                        else { //PERSON
                                            if (mode == vmbase.MODE.MATOME) {
                                                self.gridName = '#grid_matomeE';
                                                if (systemAtr == 0) {
                                                    width = screen.width - 435 > 870 ? 870 : screen.width - 435;
                                                    if (screen.height == 768) {
                                                        height = 300;
                                                    }
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        width = 950;
                                                        height = 600;
                                                        $('#layout_change_mode').width(1350);
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        width = 800;
                                                        // $('div#left-contents').css('margin-top',"-20px");
                                                        if (window.outerHeight == 728 && window.outerWidth == 1280) {
                                                            $('html.sidebar-html').css('overflow', 'hidden');
                                                        }
                                                        $('#layout_change_mode').width(1160);
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        width = 550;
                                                        // $('div#left-contents').css('margin-top',"-20px");
                                                        if (window.outerHeight == 728 && window.outerWidth == 1024) {
                                                            $('html.sidebar-html').css('overflow', 'hidden');
                                                        }
                                                        $('#layout_change_mode').width(920);
                                                    }
                                                }
                                                else {
                                                    width = screen.width - 195 > 950 ? 950 : screen.width - 195;
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        height = 430;
                                                        $('#layout_change_mode').width(1350);
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        height = 170;
                                                        $('#layout_change_mode').width(1160);
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        height = 170;
                                                        $('#layout_change_mode').width(920);
                                                    }
                                                }
                                            }
                                            else {
                                                self.gridName = '#grid_matomeF';
                                                if (systemAtr == 0) {
                                                    width = screen.width - 450 > 865 ? 865 : screen.width - 450;
                                                    if (screen.height == 768) {
                                                        height = 300;
                                                        $('#container_treegrid3').height(300);
                                                        $('#treegrid3_scroll').height(275);
                                                        $('#treegrid3_container').height(275);
                                                        $('#layout_change_mode').width(920);
                                                    }
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        height = 600;
                                                        $('#container_treegrid3').height(470);
                                                        $('#treegrid3_scroll').height(360);
                                                        $('#treegrid3_container').height(360);
                                                        $('#layout_change_mode').width(1380);
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        width = 785;
                                                        $('#layout_change_mode').width(1190);
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        width = 545;
                                                        height = 300;
                                                    }
                                                }
                                                else {
                                                    width = screen.width - 195 > 950 ? 950 : screen.width - 195;
                                                    if (screen.height == 1080 && screen.width == 1920) {
                                                        $('#layout_change_mode').width(1380);
                                                    }
                                                    //1280 * 768
                                                    else if (screen.height == 768 && screen.width == 1280) {
                                                        $('#layout_change_mode').width(1190);
                                                    }
                                                    //1024*768
                                                    else if (screen.height == 768 && screen.width == 1024) {
                                                        $('#layout_change_mode').width(920);
                                                    }
                                                }
                                            }
                                        }
                                        if ($(self.gridName + '_container').length > 0) {
                                            $(self.gridName).ntsGrid("destroy");
                                        }
                                        self.items([]);
                                        self.lstData(lstRoot);
                                        _.each(lstRoot, function (root) {
                                            self.items.push(self.convertlistRoot(root));
                                        });
                                        var colorBackGr = self.fillColorbackGr(lstRoot);
                                        var heightG = systemAtr == 1 ? 430 : 530;
                                        if (mode == vmbase.MODE.SHINSEI) {
                                            heightG = 181;
                                        }
                                        heightG = height;
                                        $(self.gridName).ntsGrid({
                                            width: width,
                                            height: heightG,
                                            dataSource: self.items(),
                                            primaryKey: 'typeRoot',
                                            rowVirtualization: true,
                                            virtualization: true,
                                            hidePrimaryKey: true,
                                            virtualizationMode: 'continuous',
                                            autoFitWindow: false,
                                            columns: [
                                                { headerText: 'ID', key: 'typeRoot', dataType: 'string', ntsControl: "Label", width: "0px", hidden: true },
                                                { headerText: getText('CMM018_24'), key: 'appName', dataType: 'string', width: '130px' },
                                                { headerText: getText('CMM018_28'),
                                                    group: [{ headerText: getText('CMM018_30'), key: 'phase1', dataType: 'string', width: '100px' },
                                                        { headerText: '⇐' + getText('CMM018_31'), key: 'phase2', dataType: 'string', width: '100px' },
                                                        { headerText: '⇐' + getText('CMM018_32'), key: 'phase3', dataType: 'string', width: '100px' },
                                                        { headerText: '⇐' + getText('CMM018_33'), key: 'phase4', dataType: 'string', width: '100px' },
                                                        { headerText: '⇐' + getText('CMM018_34'), key: 'phase5', dataType: 'string', width: '100px' }]
                                                },
                                                { headerText: getText('CMM018_95'), key: 'deleteRoot', dataType: 'string', width: '75px' }
                                            ],
                                            features: [
                                                { name: 'Resizing',
                                                    columnSettings: [{
                                                            //                            columnKey: 'typeRoot', allowResizing: false, minimumWidth: 0,
                                                            columnKey: 'appName', allowResizing: false,
                                                            columnKey: 'phase1', allowResizing: false,
                                                            columnKey: 'phase2', allowResizing: false,
                                                            columnKey: 'phase3', allowResizing: false,
                                                            columnKey: 'phase4', allowResizing: false,
                                                            columnKey: 'phase5', allowResizing: false,
                                                            columnKey: 'deleteRoot', allowResizing: false
                                                        }],
                                                    columnResized: function (event, ui) {
                                                        if (rootType == vmbase.RootType.COMPANY) {
                                                            uk.localStorage.setItem(ui.columnKey + "_CMM018_A", ui.newWidth);
                                                        }
                                                        else if (rootType == vmbase.RootType.WORKPLACE) {
                                                            uk.localStorage.setItem(ui.columnKey + "_CMM018_B", ui.newWidth);
                                                        }
                                                        else {
                                                            uk.localStorage.setItem(ui.columnKey + "_CMM018_C", ui.newWidth);
                                                        }
                                                    }
                                                },
                                                { name: "MultiColumnHeaders" }
                                            ],
                                            ntsFeatures: [
                                                {
                                                    name: 'CellState',
                                                    rowId: 'rowId',
                                                    columnKey: 'columnKey',
                                                    state: 'state',
                                                    states: colorBackGr
                                                },
                                            ],
                                            ntsControls: [{ name: 'Button', controlType: 'Button', enable: true }],
                                        });
                                        setTimeout(function () {
                                            var width;
                                            var widthPhase1;
                                            var widthPhase2;
                                            var widthPhase3;
                                            var widthPhase4;
                                            var widthPhase5;
                                            var widthDeleteRoot;
                                            if (rootType == vmbase.RootType.COMPANY) {
                                                width = uk.localStorage.getItem("appName_CMM018_A");
                                                widthPhase1 = uk.localStorage.getItem("phase1_CMM018_A");
                                                widthPhase2 = uk.localStorage.getItem("phase2_CMM018_A");
                                                widthPhase3 = uk.localStorage.getItem("phase3_CMM018_A");
                                                widthPhase4 = uk.localStorage.getItem("phase4_CMM018_A");
                                                widthPhase5 = uk.localStorage.getItem("phase5_CMM018_A");
                                                widthDeleteRoot = uk.localStorage.getItem("deleteRoot_CMM018_A");
                                            }
                                            else if (rootType == vmbase.RootType.WORKPLACE) {
                                                width = uk.localStorage.getItem("appName_CMM018_B");
                                                widthPhase1 = uk.localStorage.getItem("phase1_CMM018_B");
                                                widthPhase2 = uk.localStorage.getItem("phase2_CMM018_B");
                                                widthPhase3 = uk.localStorage.getItem("phase3_CMM018_B");
                                                widthPhase4 = uk.localStorage.getItem("phase4_CMM018_B");
                                                widthPhase5 = uk.localStorage.getItem("phase5_CMM018_B");
                                                widthDeleteRoot = uk.localStorage.getItem("deleteRoot_CMM018_B");
                                            }
                                            else {
                                                width = uk.localStorage.getItem("appName_CMM018_C");
                                                widthPhase1 = uk.localStorage.getItem("phase1_CMM018_C");
                                                widthPhase2 = uk.localStorage.getItem("phase2_CMM018_C");
                                                widthPhase3 = uk.localStorage.getItem("phase3_CMM018_C");
                                                widthPhase4 = uk.localStorage.getItem("phase4_CMM018_C");
                                                widthPhase5 = uk.localStorage.getItem("phase5_CMM018_C");
                                                widthDeleteRoot = uk.localStorage.getItem("deleteRoot_CMM018_C");
                                            }
                                            if (width.isPresent()) {
                                                width = Number(width.get());
                                                /*
                                                    const widthPhase1 = self.calWidthPhase(widthStandardPhase, '.openK_Phase1 span');
                                                    const widthPhase2 = self.calWidthPhase(widthStandardPhase, '.openK_Phase2 span');
                                                    const widthPhase3 = self.calWidthPhase(widthStandardPhase, '.openK_Phase3 span');
                                                    const widthPhase4 = self.calWidthPhase(widthStandardPhase, '.openK_Phase4 span');
                                                    const widthPhase5 = self.calWidthPhase(widthStandardPhase, '.openK_Phase5 span');
                                                
                                                 */
                                                if (widthPhase1.isPresent()) {
                                                    widthPhase1 = Number(widthPhase1.get());
                                                }
                                                else {
                                                    $(self.gridName).igGridResizing("resize", "phase1");
                                                }
                                                if (widthPhase2.isPresent()) {
                                                    widthPhase2 = Number(widthPhase2.get());
                                                }
                                                else {
                                                    $(self.gridName).igGridResizing("resize", "phase2");
                                                }
                                                if (widthPhase3.isPresent()) {
                                                    widthPhase3 = Number(widthPhase3.get());
                                                }
                                                else {
                                                    $(self.gridName).igGridResizing("resize", "phase3");
                                                }
                                                if (widthPhase4.isPresent()) {
                                                    widthPhase4 = Number(widthPhase4.get());
                                                }
                                                else {
                                                    $(self.gridName).igGridResizing("resize", "phase4");
                                                }
                                                if (widthPhase5.isPresent()) {
                                                    widthPhase5 = Number(widthPhase5.get());
                                                }
                                                else {
                                                    $(self.gridName).igGridResizing("resize", "phase5");
                                                }
                                                widthDeleteRoot = Number(widthDeleteRoot.get());
                                            }
                                            else {
                                                var widthAppName_1 = 130;
                                                _.forEach(self.lstData(), function (item, index) {
                                                    var realWidth = (index == 0 ? self.cal(item.appTypeName) + 10 : self.cal(item.appTypeName));
                                                    widthAppName_1 = realWidth > widthAppName_1 ? realWidth : widthAppName_1;
                                                });
                                                width = widthAppName_1;
                                                var widthGrid = $(self.gridName).igGrid('option', 'width');
                                                var widthStandardPhase = (widthGrid - width - 75) / 5 - 4;
                                                widthPhase1 = widthStandardPhase;
                                                widthPhase2 = widthStandardPhase;
                                                widthPhase3 = widthStandardPhase;
                                                widthPhase4 = widthStandardPhase;
                                                widthPhase5 = widthStandardPhase;
                                                widthDeleteRoot = 75;
                                                if (rootType == vmbase.RootType.COMPANY) {
                                                    uk.localStorage.setItem("appName_CMM018_A", width);
                                                    uk.localStorage.setItem("phase1_CMM018_A", widthPhase1);
                                                    uk.localStorage.setItem("phase2_CMM018_A", widthPhase2);
                                                    uk.localStorage.setItem("phase3_CMM018_A", widthPhase3);
                                                    uk.localStorage.setItem("phase4_CMM018_A", widthPhase4);
                                                    uk.localStorage.setItem("phase5_CMM018_A", widthPhase5);
                                                    uk.localStorage.setItem("deleteRoot_CMM018_A", widthDeleteRoot);
                                                }
                                                else if (rootType == vmbase.RootType.WORKPLACE) {
                                                    uk.localStorage.setItem("appName_CMM018_B", width);
                                                    uk.localStorage.setItem("phase1_CMM018_B", widthPhase1);
                                                    uk.localStorage.setItem("phase2_CMM018_B", widthPhase2);
                                                    uk.localStorage.setItem("phase3_CMM018_B", widthPhase3);
                                                    uk.localStorage.setItem("phase4_CMM018_B", widthPhase4);
                                                    uk.localStorage.setItem("phase5_CMM018_B", widthPhase5);
                                                    uk.localStorage.setItem("deleteRoot_CMM018_B", widthDeleteRoot);
                                                }
                                                else {
                                                    uk.localStorage.setItem("appName_CMM018_C", width);
                                                    uk.localStorage.setItem("phase1_CMM018_C", widthPhase1);
                                                    uk.localStorage.setItem("phase2_CMM018_C", widthPhase2);
                                                    uk.localStorage.setItem("phase3_CMM018_C", widthPhase3);
                                                    uk.localStorage.setItem("phase4_CMM018_C", widthPhase4);
                                                    uk.localStorage.setItem("phase5_CMM018_C", widthPhase5);
                                                    uk.localStorage.setItem("deleteRoot_CMM018_C", widthDeleteRoot);
                                                }
                                            }
                                            if ($(self.gridName).length) {
                                                $(self.gridName).igGridResizing("resize", "appName", width);
                                                $(self.gridName).igGridResizing("resize", "phase1", widthPhase1);
                                                $(self.gridName).igGridResizing("resize", "phase2", widthPhase2);
                                                $(self.gridName).igGridResizing("resize", "phase3", widthPhase3);
                                                $(self.gridName).igGridResizing("resize", "phase4", widthPhase4);
                                                $(self.gridName).igGridResizing("resize", "phase5", widthPhase5);
                                                // set width column クリア #110014
                                                $(self.gridName).igGridResizing("resize", "deleteRoot", widthDeleteRoot);
                                            }
                                            _.forEach(["grid_matome", "grid_matomeA", "grid_matomeB", "grid_matomeC", "grid_matomeD", "grid_matomeE", "grid_matomeF"], function (gridName) {
                                                uk.localStorage.removeItem(uk.request.location.current.rawUrl + "/" + gridName);
                                            });
                                        }, 0);
                                        $(self.gridName).on("click", ".button-delete", function (evt, ui) {
                                            var _this = $(this);
                                            var id = _this.parents('tr').data('id');
                                            var empRType = id.split("_")[0];
                                            var appType = id.split("_")[1];
                                            self.deleteRowSub(empRType, appType);
                                        });
                                        //Phase1
                                        $(self.gridName).on("click", ".openK_Phase1", function (evt, ui) {
                                            var _this = $(this);
                                            var id = _this.parents('tr').data('id');
                                            var empRType = id.split("_")[0];
                                            var appType = id.split("_")[1];
                                            self.openDialogKSub(1, empRType, appType);
                                        });
                                        $(self.gridName).on("click", ".openK_Phase2", function (evt, ui) {
                                            var _this = $(this);
                                            var id = _this.parents('tr').data('id');
                                            var empRType = id.split("_")[0];
                                            var appType = id.split("_")[1];
                                            self.openDialogKSub(2, empRType, appType);
                                        });
                                        $(self.gridName).on("click", ".openK_Phase3", function (evt, ui) {
                                            var _this = $(this);
                                            var id = _this.parents('tr').data('id');
                                            var empRType = id.split("_")[0];
                                            var appType = id.split("_")[1];
                                            self.openDialogKSub(3, empRType, appType);
                                        });
                                        $(self.gridName).on("click", ".openK_Phase4", function (evt, ui) {
                                            console.log('Phase4');
                                            var _this = $(this);
                                            var id = _this.parents('tr').data('id');
                                            var empRType = id.split("_")[0];
                                            var appType = id.split("_")[1];
                                            self.openDialogKSub(4, empRType, appType);
                                        });
                                        $(self.gridName).on("click", ".openK_Phase5", function (evt, ui) {
                                            var _this = $(this);
                                            var id = _this.parents('tr').data('id');
                                            var empRType = id.split("_")[0];
                                            var appType = id.split("_")[1];
                                            self.openDialogKSub(5, empRType, appType);
                                        });
                                        // fix bug  109946
                                        if (systemAtr == 0) {
                                            $(self.gridName).igGrid("option", "width", width);
                                            $(self.gridName).igGrid("option", "height", height);
                                        }
                                        $(window).resize(function () {
                                            $('html.sidebar-html').css('overflow', 'visible');
                                        });
                                        clearInterval(this.intervalDetectResolution);
                                        this.intervalDetectResolution = (function () {
                                            var width1 = screen.width, height1 = screen.height;
                                            setInterval(function () {
                                                if (screen.width !== width1 || screen.height !== height1) {
                                                    width1 = screen.width;
                                                    height1 = screen.height;
                                                    $(window).trigger('resolutionchange');
                                                    //                        $('div#left-contents').css('margin-top',"0px");  
                                                    console.log('height, width: ' + width1 + ',' + height1);
                                                    var width_1 = 0;
                                                    var height_1 = 0;
                                                    if (rootType == vmbase.RootType.COMPANY) {
                                                        if (mode == vmbase.MODE.MATOME) {
                                                            self.gridName = '#grid_matome';
                                                            if (systemAtr == 0) {
                                                                width_1 = screen.width - 435 > 925 ? 925 : screen.width - 435;
                                                                if (screen.height == 768) {
                                                                    height_1 = 385;
                                                                }
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    width_1 = 950;
                                                                    height_1 = 700;
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    //                                     width = 750;
                                                                    width_1 = 860;
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    //                                width = 510;
                                                                    width_1 = 600;
                                                                }
                                                            }
                                                            else {
                                                                width_1 = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    height_1 = 430;
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    height_1 = 230;
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    height_1 = 230;
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            self.gridName = '#grid_matomeB';
                                                            if (systemAtr == 0) {
                                                                width_1 = screen.width - 435 > 920 ? 920 : screen.width - 435;
                                                                if (screen.height == 768) {
                                                                    height_1 = 385;
                                                                }
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    width_1 = 950;
                                                                    height_1 = 700;
                                                                    $('#treegrid1_scroll').height(359);
                                                                    $('#treegrid1_container').height(359);
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    width_1 = 845;
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    //                                width = 510;
                                                                    width_1 = 600;
                                                                }
                                                            }
                                                            else {
                                                                width_1 = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                            }
                                                        }
                                                    }
                                                    else if (rootType == vmbase.RootType.WORKPLACE) {
                                                        if (mode == vmbase.MODE.MATOME) {
                                                            self.gridName = '#grid_matomeC';
                                                            if (systemAtr == 0) {
                                                                width_1 = screen.width - 435 > 925 ? 925 : screen.width - 435;
                                                                if (screen.height == 768) {
                                                                    height_1 = 355;
                                                                }
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    width_1 = 950;
                                                                    height_1 = 650;
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    width_1 = 850;
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    width_1 = 600;
                                                                }
                                                            }
                                                            else {
                                                                width_1 = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    height_1 = 430;
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    height_1 = 180;
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    height_1 = 180;
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            self.gridName = '#grid_matomeD';
                                                            if (systemAtr == 0) {
                                                                width_1 = screen.width - 435 > 920 ? 920 : screen.width - 435;
                                                                if (screen.height == 768) {
                                                                    height_1 = 355;
                                                                    $('#treegrid2_scroll').height(330);
                                                                }
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    height_1 = 650;
                                                                    $('#treegrid2_scroll').height(359);
                                                                    $('#treegrid2_container').height(359);
                                                                }
                                                            }
                                                            else {
                                                                width_1 = screen.width - 124 > 950 ? 950 : screen.width - 124;
                                                            }
                                                        }
                                                    }
                                                    else { //PERSON
                                                        if (mode == vmbase.MODE.MATOME) {
                                                            self.gridName = '#grid_matomeE';
                                                            if (systemAtr == 0) {
                                                                width_1 = screen.width - 435 > 870 ? 870 : screen.width - 435;
                                                                if (screen.height == 768) {
                                                                    height_1 = 300;
                                                                }
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    width_1 = 950;
                                                                    height_1 = 600;
                                                                    $('#layout_change_mode').width(1350);
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    width_1 = 800;
                                                                    // $('div#left-contents').css('margin-top',"-20px");
                                                                    if (window.outerHeight == 728 && window.outerWidth == 1280) {
                                                                        $('html.sidebar-html').css('overflow', 'hidden');
                                                                    }
                                                                    $('#layout_change_mode').width(1160);
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    width_1 = 550;
                                                                    // $('div#left-contents').css('margin-top',"-20px");
                                                                    if (window.outerHeight == 728 && window.outerWidth == 1024) {
                                                                        $('html.sidebar-html').css('overflow', 'hidden');
                                                                    }
                                                                    $('#layout_change_mode').width(920);
                                                                }
                                                            }
                                                            else {
                                                                width_1 = screen.width - 195 > 950 ? 950 : screen.width - 195;
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    height_1 = 430;
                                                                    $('#layout_change_mode').width(1350);
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    height_1 = 170;
                                                                    $('#layout_change_mode').width(1160);
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    height_1 = 170;
                                                                    $('#layout_change_mode').width(920);
                                                                }
                                                            }
                                                        }
                                                        else {
                                                            self.gridName = '#grid_matomeF';
                                                            if (systemAtr == 0) {
                                                                width_1 = screen.width - 450 > 865 ? 865 : screen.width - 450;
                                                                if (screen.height == 768) {
                                                                    height_1 = 300;
                                                                    $('#treegrid3_scroll').height(275);
                                                                }
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    height_1 = 600;
                                                                    $('#container_treegrid3').height(470);
                                                                    $('#treegrid3_scroll').height(359);
                                                                    $('#treegrid3_container').height(359);
                                                                    $('#layout_change_mode').width(1380);
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    width_1 = 785;
                                                                    $('#layout_change_mode').width(1190);
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    height_1 = 300;
                                                                    width_1 = 545;
                                                                    $('#container_treegrid3').height(300);
                                                                    $('#treegrid3_scroll').height(275);
                                                                    $('#treegrid3_container').height(275);
                                                                    $('#layout_change_mode').width(920);
                                                                }
                                                            }
                                                            else {
                                                                width_1 = screen.width - 195 > 950 ? 950 : screen.width - 195;
                                                                if (screen.height == 1080 && screen.width == 1920) {
                                                                    $('#container_treegrid3').height(470);
                                                                    $('#treegrid3_scroll').height(359);
                                                                    $('#treegrid3_container').height(359);
                                                                    $('#layout_change_mode').width(1380);
                                                                }
                                                                //1280 * 768
                                                                else if (screen.height == 768 && screen.width == 1280) {
                                                                    $('#container_treegrid3').height(355);
                                                                    $('#treegrid3_scroll').height(260);
                                                                    $('#treegrid3_container').height(260);
                                                                    $('#layout_change_mode').width(1190);
                                                                }
                                                                //1024*768
                                                                else if (screen.height == 768 && screen.width == 1024) {
                                                                    $('#container_treegrid3').height(300);
                                                                    $('#treegrid3_scroll').height(200);
                                                                    $('#treegrid3_container').height(200);
                                                                    $('#layout_change_mode').width(920);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    if ($(self.gridName).igGrid("option", "width") != width_1) {
                                                        $(self.gridName).igGrid("option", "width", width_1);
                                                    }
                                                    if ($(self.gridName).igGrid("option", "height") != height_1) {
                                                        $(self.gridName).igGrid("option", "height", height_1);
                                                    }
                                                }
                                            }, 50);
                                        }());
                                        dfd.resolve();
                                        return dfd.promise();
                                    };
                                    ScreenModel.prototype.calWidthPhase = function (widthStandardPhase, nameDomByJquery) {
                                        var widthPhase = widthStandardPhase;
                                        _.forEach($(nameDomByJquery), function (el) {
                                            var widthReal = (el.offsetWidth) + 10;
                                            widthPhase = widthReal > widthPhase ? widthReal : widthPhase;
                                        });
                                        return widthPhase;
                                    };
                                    ScreenModel.prototype.resize1 = function () {
                                        var self = this;
                                        var a = __viewContext.viewModel.viewmodelSubA.items();
                                        var width = self.cal(a[0].phase1);
                                        $("#grid_matome").igGridResizing("resize", 'phase1', width);
                                    };
                                    ScreenModel.prototype.resize2 = function () {
                                        var self = this;
                                        var a = __viewContext.viewModel.viewmodelSubA.items();
                                        var width = self.cal(a[0].phase2);
                                        $("#grid_matome").igGridResizing("resize", 'phase2', width);
                                    };
                                    ScreenModel.prototype.resize3 = function () {
                                        var self = this;
                                        var a = __viewContext.viewModel.viewmodelSubA.items();
                                        var width = self.cal(a[0].phase3);
                                        $("#grid_matome").igGridResizing("resize", 'phase3', width);
                                    };
                                    ScreenModel.prototype.cal1 = function () {
                                        var self = this;
                                        var a = __viewContext.viewModel.viewmodelSubA.items();
                                        var width = self.cal(a[0].phase1);
                                        alert(width);
                                    };
                                    ScreenModel.prototype.cal = function (inputText) {
                                        var font = "14px DroidSansMono, Meiryo";
                                        var canvas = document.createElement("canvas");
                                        var context = canvas.getContext("2d");
                                        context.font = font;
                                        var width = context.measureText(inputText).width;
                                        var textPixel = Math.ceil(width);
                                        var halfPixel = nts.uk.text.countHalf(inputText) * 8;
                                        return (textPixel + halfPixel) / 2 + 5;
                                    };
                                    ScreenModel.prototype.convertlistRoot = function (root) {
                                        var self = this;
                                        var typeRoot = root.employRootAtr + '_' + root.appTypeValue;
                                        var appName = self.appNameHtml(root.appTypeName, root.employRootAtr);
                                        var phase1 = self.phaseHtml(root.appPhase1, root.appTypeValue, root.employRootAtr, 1);
                                        var phase2 = self.phaseHtml(root.appPhase2, root.appTypeValue, root.employRootAtr, 2);
                                        var phase3 = self.phaseHtml(root.appPhase3, root.appTypeValue, root.employRootAtr, 3);
                                        var phase4 = self.phaseHtml(root.appPhase4, root.appTypeValue, root.employRootAtr, 4);
                                        var phase5 = self.phaseHtml(root.appPhase5, root.appTypeValue, root.employRootAtr, 5);
                                        var deleteRoot = '<div class="td-delete"><button class="button-delete"></button></div>';
                                        return { typeRoot: typeRoot,
                                            appName: appName,
                                            phase1: phase1,
                                            phase2: phase2,
                                            phase3: phase3,
                                            phase4: phase4,
                                            phase5: phase5,
                                            deleteRoot: deleteRoot };
                                    };
                                    ScreenModel.prototype.phaseHtml = function (phase, appTypeValue, employRootAtr, phaseOrder) {
                                        var classPhase = 'openK_Phase' + phaseOrder;
                                        if (_.isEmpty(phase.approver) || phase.approver.length == 0) { //phase chua setting
                                            return '<div class="hyperlink approver-line ' + classPhase + '"><span>' + getText('CMM018_99') + '</span></div>';
                                        }
                                        var result = '<div class="approver">';
                                        _.each(phase.approver, function (approver) {
                                            result += '<div class="hyperlink approver-line ' + classPhase + '"><span>' + approver.name + approver.confirmName + '</span></div>';
                                        });
                                        result += '</div>' + '<div class="from">' + '（' + phase.appFormName + '）' + '</div>';
                                        return result;
                                    };
                                    ScreenModel.prototype.openDialogKSub = function (phaseOrder, empRType, appType) {
                                        var self = this;
                                        var root = self.findRoot(empRType, appType);
                                        var phase = null;
                                        if (_.isEmpty(root))
                                            return;
                                        if (phaseOrder == 1)
                                            phase = root.appPhase1;
                                        if (phaseOrder == 2)
                                            phase = root.appPhase2;
                                        if (phaseOrder == 3)
                                            phase = root.appPhase3;
                                        if (phaseOrder == 4)
                                            phase = root.appPhase4;
                                        if (phaseOrder == 5)
                                            phase = root.appPhase5;
                                        __viewContext.viewModel.viewmodelA.openDialogK(phase, root.approvalId, appType, empRType, phaseOrder);
                                    };
                                    ScreenModel.prototype.findRoot = function (empRType, appType) {
                                        var self = this;
                                        if (Number(empRType) == 0) { //common
                                            return _.find(self.lstData(), function (root) {
                                                return root.employRootAtr == 0;
                                            });
                                        }
                                        return _.find(self.lstData(), function (root) {
                                            return root.employRootAtr == Number(empRType) && root.appTypeValue == appType;
                                        });
                                    };
                                    ScreenModel.prototype.fillColorbackGr = function (lstRoot) {
                                        var self = this;
                                        var result = [];
                                        _.each(lstRoot, function (root) {
                                            var rowId = root.employRootAtr + '_' + root.appTypeValue;
                                            result.push(new vmbase.CellState(rowId, 'appName', ['appNameBgColor']));
                                            result.push(new vmbase.CellState(rowId, 'deleteRoot', ['phaseBgColorNot']));
                                            if (!_.isEmpty(root.appPhase1.approver) && root.appPhase1.approver.length > 0) {
                                                result.push(new vmbase.CellState(rowId, 'phase1', ['phaseBgColor']));
                                            }
                                            else {
                                                result.push(new vmbase.CellState(rowId, 'phase1', ['phaseBgColorNot']));
                                            }
                                            if (!_.isEmpty(root.appPhase2.approver) && root.appPhase2.approver.length > 0) {
                                                result.push(new vmbase.CellState(rowId, 'phase2', ['phaseBgColor']));
                                            }
                                            else {
                                                result.push(new vmbase.CellState(rowId, 'phase2', ['phaseBgColorNot']));
                                            }
                                            if (!_.isEmpty(root.appPhase3.approver) && root.appPhase3.approver.length > 0) {
                                                result.push(new vmbase.CellState(rowId, 'phase3', ['phaseBgColor']));
                                            }
                                            else {
                                                result.push(new vmbase.CellState(rowId, 'phase3', ['phaseBgColorNot']));
                                            }
                                            if (!_.isEmpty(root.appPhase4.approver) && root.appPhase4.approver.length > 0) {
                                                result.push(new vmbase.CellState(rowId, 'phase4', ['phaseBgColor']));
                                            }
                                            else {
                                                result.push(new vmbase.CellState(rowId, 'phase4', ['phaseBgColorNot']));
                                            }
                                            if (!_.isEmpty(root.appPhase5.approver) && root.appPhase5.approver.length > 0) {
                                                result.push(new vmbase.CellState(rowId, 'phase5', ['phaseBgColor']));
                                            }
                                            else {
                                                result.push(new vmbase.CellState(rowId, 'phase5', ['phaseBgColorNot']));
                                            }
                                        });
                                        return result;
                                    };
                                    ScreenModel.prototype.appNameHtml = function (appName, empRType) {
                                        if (empRType != 0)
                                            return appName;
                                        return appName + '<div style="display: inline-block;">'
                                            + '<button class="help-button-custom">?</button></div>';
                                    };
                                    ScreenModel.prototype.deleteRowSub = function (empRType, appType) {
                                        var self = this;
                                        var root = self.findRoot(empRType, appType);
                                        if (_.isEmpty(root))
                                            return;
                                        __viewContext.viewModel.viewmodelA.deleteRow(root.approvalId, empRType);
                                    };
                                    ScreenModel.prototype.setWidthCloseDialog = function (rootType, phaseOrder) {
                                        if (rootType == vmbase.RootType.COMPANY) {
                                            uk.localStorage.setItem("phase" + phaseOrder + "_CMM018_A", null);
                                        }
                                        else if (rootType == vmbase.RootType.WORKPLACE) {
                                            uk.localStorage.setItem("phase" + phaseOrder + "_CMM018_B", null);
                                        }
                                        else {
                                            uk.localStorage.setItem("phase" + phaseOrder + "_CMM018_C", null);
                                        }
                                        /*
                                            const widthPhase1 = $('#grid_matome_phase1').width();
                                            const widthPhase2 = $('#grid_matome_phase2').width();
                                            const widthPhase3 = $('#grid_matome_phase3').width();
                                            const widthPhase4 = $('#grid_matome_phase4').width();
                                            const widthPhase5 = $('#grid_matome_phase5').width();
                                            
                                            if (rootType == vmbase.RootType.COMPANY) {
                                                    uk.localStorage.setItem("phase1_CMM018_A", widthPhase1);
                                                    uk.localStorage.setItem("phase2_CMM018_A", widthPhase2);
                                                    uk.localStorage.setItem("phase3_CMM018_A", widthPhase3);
                                                    uk.localStorage.setItem("phase4_CMM018_A", widthPhase4);
                                                    uk.localStorage.setItem("phase5_CMM018_A", widthPhase5);
                            
                                            } else if (rootType == vmbase.RootType.WORKPLACE) {
                                                    uk.localStorage.setItem("phase1_CMM018_B", widthPhase1);
                                                    uk.localStorage.setItem("phase2_CMM018_B", widthPhase2);
                                                    uk.localStorage.setItem("phase3_CMM018_B", widthPhase3);
                                                    uk.localStorage.setItem("phase4_CMM018_B", widthPhase4);
                                                    uk.localStorage.setItem("phase5_CMM018_B", widthPhase5);
                                             } else {
                                                    uk.localStorage.setItem("phase1_CMM018_C", widthPhase1);
                                                    uk.localStorage.setItem("phase2_CMM018_C", widthPhase2);
                                                    uk.localStorage.setItem("phase3_CMM018_C", widthPhase3);
                                                    uk.localStorage.setItem("phase4_CMM018_C", widthPhase4);
                                                    uk.localStorage.setItem("phase5_CMM018_C", widthPhase5);
                                            }
                                        
                                         */
                                    };
                                    return ScreenModel;
                                }());
                                viewmodelSubA.ScreenModel = ScreenModel;
                            })(viewmodelSubA = sub.viewmodelSubA || (sub.viewmodelSubA = {}));
                        })(sub = a_1.sub || (a_1.sub = {}));
                    })(a = cmm018.a || (cmm018.a = {}));
                })(cmm018 = view.cmm018 || (view.cmm018 = {}));
            })(view = com.view || (com.view = {}));
        })(com = uk.com || (uk.com = {}));
    })(uk = nts.uk || (nts.uk = {}));
})(nts || (nts = {}));
//# sourceMappingURL=cmm018.sub.a.vm.js.map