KISSY.use("dd,node,dd/plugin/constrain", function (S, DD, Node,Constrain) {
    var $ = Node.all;

    var constrain=new Constrain({
        constrain: "#constrainContainer"
    });

    var drag = new DD.Draggable({
        node: "#d",
        move: 1,
        plugins:[
            constrain
        ]
    });

    $("#cd").on("click", function () {
        $("#d").css({
            left: "10px",
            top: "10px"
        });
        constrain.set("constrain", "#constrainContainer");
        drag.unplug(constrain);
        drag.plug(constrain);
    });

    $("#cw").on("click", function () {
        $("#d").css({
            left: "10px",
            top: "10px"
        });
        constrain.set("constrain", true);
        drag.unplug(constrain);
        drag.plug(constrain);
    });

    $("#cn").on("click", function () {
        $("#d").css({
            left: "10px",
            top: "10px"
        });
        drag.unplug(constrain);
    });
});