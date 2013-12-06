KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportRelationalExpressionWith = function () {
        var tpl = '{{#with data}}' +
            '{{#if n>../limit/5}}' +
            '{{n+1}}' +
            '{{/if}}' +
            '{{/with}}' +

            '';

        var data = {
            data: {
                n: 5
            },
            limit: 10
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});