(function () {
    var h = window.location.href, d = document;
    if (h.indexOf("localhost/kissy_git/") != -1) {
        d.write('<script src="http://localhost/kissy_git/kissy/build/kissy.js"' + ' charset="utf-8"><' + '/script>');
    }
    else if (h.indexOf("fed.ued.taobao.net/kissy-team/kissyteam/") != -1) {
        d.write('<script src="http://fed.ued.taobao.net/kissy-team/kissy/build/kissy.js"' + ' charset="utf-8">' + '<' + '/script>');
    }
    else {
        d.write('<script src="http://docs.kissyui.com/kissy/build/kissy.js"' + ' charset="utf-8">' + '<' + '/script>');
    }
})();