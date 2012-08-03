KISSY.all("button").on("click", function () {
    var d = new KISSY.Defer();
    d.reject("wrong");
    var promise = d.promise;
    promise.then(function (v) {
        return v + 1;
    }).then(function (v) {
            alert(v);
        }, function (reason) {
            alert(reason); // => "wrong"
        });
});