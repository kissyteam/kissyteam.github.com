KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportRoot = function () {
        var tpl = '{{#each children}}{{name}} of {{root.name}}\n{{/each}}';
        var data = {
            name:'x',
            children:[{
                name :'x1'
            },{
                name: 'x2'
            }]
        }

        var render = new XTemplate(tpl).render(data);
        alert(render);
    };

});