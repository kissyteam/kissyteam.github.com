KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportLocalCommand = function () {
        var tpl = 'my {{global3 title}}';

        var data = {
            title: '1'
        };

        var render = new XTemplate(tpl, {
            commands: {
                'global3': function (scopes, option) {
                    return 'global3-' + option.params[0];
                }
            }
        }).render(data);

        alert(render);
    };

});