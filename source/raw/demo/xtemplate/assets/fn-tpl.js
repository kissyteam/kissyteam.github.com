KISSY.use('xtemplate', function (S, XTemplate) {

    window.fnTpl = function () {
        var tpl = function (scopes) {
            return 'this is ' + scopes[0].title + '!';
        };

        var data = {
            title: 'o'
        };

        var render = new XTemplate(tpl).render(data);

        alert(render);
    };

});