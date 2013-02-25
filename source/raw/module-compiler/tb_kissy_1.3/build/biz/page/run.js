/*
 Combined modules by KISSY Module Compiler: 

 biz/x
 biz/y
 biz/page/run
*/

KISSY.add("biz/x", function() {
    return 'x + overlay + switchable';
}, {requires:["overlay", "switchable"]});

KISSY.add("biz/y", function (S, x) {
    return 'y + ' + x;
}, {requires: ["./x"]});

KISSY.add("biz/page/run", function (S, y) {
    return 'run + ' + y;
}, {requires: ["../y"]});


