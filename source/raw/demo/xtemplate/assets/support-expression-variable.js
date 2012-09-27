KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportExpressionVariable = function () {
        var tpl = '{{n+3*4/2}}';

        var data = {
            n: 1
        };

        var render=new XTemplate(tpl).render(data);

        alert(render);
    };

});