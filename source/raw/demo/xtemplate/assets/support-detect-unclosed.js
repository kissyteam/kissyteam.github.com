KISSY.use('xtemplate', function (S, XTemplate) {

    window.supportDetectUnclosed = function () {
        var tpl = '{{#if title}}\n' +
            'shoot\n' +
            '';

        var data = {
            title: 'o'
        };

        try {
            new XTemplate(tpl).render(data);
        } catch (e) {
            alert(e);
            throw e;
        }
    };

});