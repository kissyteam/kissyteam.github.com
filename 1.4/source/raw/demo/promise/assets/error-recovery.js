KISSY.use('promise,node',function(S,Promise){
KISSY.all("button").on("click", function () {
    var d = new Promise.Defer();
    d.reject("wrong");
    var promise = d.promise;
    promise.then(function (v) {
        return v + 1;
    },function (reason) {
        return 2;
    }).then(function (v) {
            alert(v); // => 2
        }, function (reason) {
            alert(reason); // 不执行
        });
});
});