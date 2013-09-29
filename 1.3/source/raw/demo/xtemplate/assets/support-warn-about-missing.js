KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportWarnAboutMissing = function () {
        var log = S.log, msg2 = '';

        var tpl = 'this is \n' +
            '{{title}}';

        var data = {
            title2: 1
        };

        var render = new XTemplate(tpl).render(data);

        // 打开控制台
        alert(render);
    };

});