KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportGlobalCommand = function () {
        XTemplate.addCommand('global', function (scopes, option) {
            return 'global-' + option.params[0];
        });

        var tpl = 'my {{global title}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});