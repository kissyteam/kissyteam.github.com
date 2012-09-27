KISSY.all("button").on("click", function () {
    var d = new KISSY.Defer();
    d.resolve(1);
    var promise = d.promise;
    promise.then(function (v) {
        var d = new KISSY.Defer();
        setTimeout(function () {
            d.resolve(v + 1);
        }, 1000);
        return d.promise;
    }).then(function (v) {
            alert(v); // 一秒后弹出 2
        });
});