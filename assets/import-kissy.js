(function () {
    var h = window.location.href, d = document;
    if (h.indexOf("localhost/kissy_git/") != -1) {
        d.write('<script src="http://localhost/kissy_git/kissy/build/kissy.js"' + ' charset="utf-8"><' + '/script>');
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://localhost/kissy_git/kissy-gallery/gallery-build/'" +
            "  }" +
            "});</script>");
    }
    else if (h.indexOf("chengyu.taobao.ali.com/kissy_git/") != -1) {
        d.write('<script src="http://chengyu.taobao.ali.com/kissy_git/kissy/build/kissy.js"' + ' charset="utf-8"><' + '/script>');
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://chengyu.taobao.ali.com/kissy_git/kissy-gallery/gallery-build/'" +
            "  }" +
            "});</script>");
    }
    else if (h.indexOf("fed.ued.taobao.net/kissy-team/kissyteam/") != -1) {
        d.write('<script src="http://fed.ued.taobao.net/kissy-team/kissy/build/kissy.js"' + ' charset="utf-8">' + '<' + '/script>');
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://fed.ued.taobao.net/kissy-team/kissy-gallery/gallery-build/'" +
            "  }" +
            "});</script>");
    }
    else {
        d.write('<script src="http://docs.kissyui.com/kissy/build/kissy.js"' + ' charset="utf-8">' + '<' + '/script>');
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://docs.kissyui.com/kissy-gallery/gallery-build/'" +
            "  }" +
            "});</script>");
    }
})()