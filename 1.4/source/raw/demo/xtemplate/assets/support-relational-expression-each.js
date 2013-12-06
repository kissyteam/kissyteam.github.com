KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportRelationalExpressionEach = function () {
        var tpl = '{{#each data}}' +
            '{{#if this>../limit+1}}' +
            '{{this+1}}-{{xindex+1}}-{{xcount}}|' +
            '{{/if}}' +
            '{{/each}}' +
            '';

        var data = {
            data: [11, 5, 12, 6, 19, 0],
            limit: 10
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});