(function () {
    var h = window.location.href, d = document;
    //now=+new Date();
    if (h.indexOf("localhost/kissy_git/") != -1) {
        d.write('<script src="http://localhost/kissy_git/kissy/build/kissy.js"' +
            ' charset="utf-8"><' + '/script>');
// ie write 行内脚本立即执行
        //d.write('<script>console.log("1:"+(+new Date()-now));</script>')
        d.write('<script src="http://localhost/kissy_git/kissyteam/assets/import-gallery.js"' +
            ' charset="utf-8"><' + '/script>');
    }
    else if (h.indexOf("chengyu.taobao.ali.com/kissy_git/") != -1) {
        d.write('<script src="http://chengyu.taobao.ali.com/kissy_git/kissy/build/kissy.js"' +
            ' charset="utf-8"><' + '/script>');
        d.write('<script src="http://chengyu.taobao.ali.com/kissy_git/kissyteam/assets/import-gallery.js"' +
            ' charset="utf-8"><' + '/script>');
    }
    else if (h.indexOf("fed.ued.taobao.net/kissy-team/kissyteam/") != -1) {
        d.write('<script src="http://fed.ued.taobao.net/kissy-team/kissy/build/kissy.js"' +
            ' charset="utf-8">' + '<' + '/script>');
        d.write('<script src="http://fed.ued.taobao.net/kissy-team/kissyteam/assets/import-gallery.js"' +
            ' charset="utf-8"><' + '/script>');
    }
    else {
        d.write('<script src="http://docs.kissyui.com/kissy/build/kissy.js"' +
            ' charset="utf-8">' + '<' + '/script>');
        d.write('<script src="http://docs.kissyui.com/assets/import-gallery.js"' +
            ' charset="utf-8"><' + '/script>');
    }
})();