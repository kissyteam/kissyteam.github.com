(function () {
    //console.log('2:'+(+new Date()-now));
    var h = window.location.href, d = document;
    if (h.indexOf("localhost/kissy_git/") != -1) {
        d.write("<script >KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://localhost/kissy_git/kissy-gallery/gallery-build/'" +
            "  }" +
            "});" +
            "KISSY.config({" +
            " base:'http://localhost/kissy_git/kissy/build/'"+
            "});</script>");
    }
    else if (h.indexOf("chengyu.taobao.ali.com/kissy_git/") != -1) {
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://chengyu.taobao.ali.com/kissy_git/kissy-gallery/gallery-build/'" +
            "  }" +
            "});" +
            "KISSY.config({" +
            " base:'http://chengyu.taobao.ali.com/kissy_git/kissy/build/'"+
            "});</script>");
    }
    else if (h.indexOf("fed.ued.taobao.net/kissy-team/kissyteam/") != -1) {
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://fed.ued.taobao.net/kissy-team/kissy-gallery/gallery-build/'" +
            "  }" +
            "});" +
            "KISSY.config({" +
            " base:'http://fed.ued.taobao.net/kissy-team/kissy/build/'"+
            "});</script>");
    }
    else {
        d.write("<script>KISSY.config('packages',{" +
            "gallery:{" +
            " base:'http://docs.kissyui.com/kissy-gallery/gallery-build/'" +
            "  }" +
            "});" +
            "KISSY.config({" +
            " base:'http://docs.kissyui.com/kissy/build/'"+
            "});</script>");
    }
})();