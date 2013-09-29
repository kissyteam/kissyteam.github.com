KISSY.use("node,button", function(S, Node, Button) {
    var $ = Node.all;

    var scrollUp = new Button({
        content: "滚动到下面的按钮",
        render: "#scrollUp"
    });
    scrollUp.render();
    scrollUp.on("click", function() {
        $(window).animate({
            scrollTop:$("#scrollDown").offset().top
        }, 1, "easeOut");
    });

    var scrollDown = new Button({
        content: "滚动到上面的按钮",
        render: "#scrollDown"
    });
    scrollDown.render();
    scrollDown.on("click", function() {
        $(window).animate({
            scrollTop:$("#scrollUp").offset().top
        }, 1, "easeOut");
    });

});

