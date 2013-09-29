KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportGlobalBlockCommand = function () {
        XTemplate.addCommand('global2', function (scopes, option) {
            return 'global2-' + option.fn(scopes);
        });

        var tpl = 'my {{#global2}}{{title}}{{/global2}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});