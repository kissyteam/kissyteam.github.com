KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportComment = function () {
        var tpl = 'my {{!\n' +
            'comment' +
            '\n}} {{title}}';

        var data = {
            title: 'oo'
        };


        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});