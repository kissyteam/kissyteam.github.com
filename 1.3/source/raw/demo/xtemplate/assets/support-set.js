KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportSet = function () {
        var tpl = '{{#each data}}' +
            '{{set n2=this*2 n3=this*3}}' +
            '{{n2}}-{{n3}}|' +
            '{{/each}}';

        var data = {
            data: [1, 2]
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});