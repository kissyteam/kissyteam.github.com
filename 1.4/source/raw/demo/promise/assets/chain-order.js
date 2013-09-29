KISSY.use('promise,node',function(S,Promise){
KISSY.all("button").on("click", function () {
    var d = new Promise.Defer();
    d.resolve(1); // 该位置也可以放在 then 前面
    var promise = d.promise;
    promise.then(function (v) {
        return v + 1;
    }).then(function (v) {
            alert(v); // => 2
        });
});
});