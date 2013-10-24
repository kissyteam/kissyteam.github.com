KISSY.use('promise,node',function(S, Promise, Node){
    var $ = Node.all;
    $("button").on("click", function () {
        var d = new Promise.Defer();
        setTimeout(function() {d.reject("reject")}, 1000);
        var promise = d.promise;
        promise.done(function(){
            console.log('success');
        }, function(message){
            alert(message); //如何不做回调去处理错误，会抛出异常，在控制台中输出。
        });
    });
});