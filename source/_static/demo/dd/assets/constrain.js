KISSY.use("dd,node", function (S, DD, Node) {
    var $ = Node.all;
    var drag = new DD.Draggable({
        node: "#d",
        move: 1
    });
    var c = new DD.Constrain({
        constrain: "#constrainContainer"
    });

    c.attachDrag(drag);

    $("#cd").on("click", function () {
        $("#d").css({
            left: "10px",
            top: "10px"
        });
        c.set("constrain", "#constrainContainer");
        c.attachDrag(drag);
    });

    $("#cw").on("click", function () {
        $("#d").css({
            left: "10px",
            top: "10px"
        });
        c.set("constrain", true);
        c.attachDrag(drag);
    });

    $("#cn").on("click", function () {
        $("#d").css({
            left: "10px",
            top: "10px"
        });

        c.detachDrag(drag);
    });
});