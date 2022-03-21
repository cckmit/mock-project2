var service;
(function (service) {
    var ajax = nts.uk.request.ajax;
    service.fetch = {
        histList: function (masterId) { return ajax("/bs/employee/workplace/hist/" + masterId); }
    };
})(service || (service = {}));
//# sourceMappingURL=service.js.map