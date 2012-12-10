KISSY.use('promise',function(S,Promise){
KISSY.all("button").on("click", function () {
    var d = new Promise.Defer();
    d.resolve(1);
    var promise = d.promise;
    promise.then(function (v) {
        throw v + 1;
    },function (reason) {
        return 2;
    }).then(function (v) {
            alert(v); // 不回调
        }, function (reason) {
            alert(reason); // =>2
        });
});
});