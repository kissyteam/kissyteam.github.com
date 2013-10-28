var styleSheet1, styleSheet2;
KISSY.use("stylesheet,core", function (S, StyleSheet) {
    var $ = S.all;

    styleSheet1 = new StyleSheet(S.get("#link1"));
    styleSheet2 = new StyleSheet(S.get("#style1"));

    styleSheet3 = new StyleSheet(S.get("#style3"));

    $("#c1").on("click", function () {
        styleSheet1.set('.test1', {
            color: 'green'
        });
    });

    $("#c2").on("click", function () {
        styleSheet2.set('.test2', {
            color: 'red'
        });
    });

    $("#c3").on("click", function () {
        styleSheet1.set('.test1', {
            "fontSize": '20px'
        });
    });

    $("#c4").on("click", function () {
        styleSheet2.set('.test2', {
            "font-size": '20px'
        });
    });

    $("#c5").on("click", function () {
        alert(styleSheet1.get());
    });

    $("#c6").on("click", function () {
        alert(styleSheet2.get());
    });

    $("#c7").on("click", function () {
        styleSheet1.set(".test1", {
            fontSize: ""
        });
    });

    $("#c8").on("click", function () {
        styleSheet1.set(".test1", {
            fontSize: "",
            color: ""
        });
    });

    $("#c9").on("click", function () {
        styleSheet1.set(".test3", {
            fontSize: "20px",
            color: "green"
        });
    });

    $("#c10").on("click", function () {
        styleSheet1.disable();
    });

    $("#c11").on("click", function () {
        styleSheet3.set('.test3', {
            width: '200px'
        });
    });
});