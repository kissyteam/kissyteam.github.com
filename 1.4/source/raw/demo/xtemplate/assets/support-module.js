KISSY.config('packages', {
    xModule: {
        base: './assets/'
    }
});

KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportModule = function () {
        KISSY.use('xModule',function(S, myX){
            var tpl = new XTemplate(myX);
            alert(tpl.render({info:"(test module function)"}));
        });
    };

});