KISSY.use("anim,node,button",function(S,Anim,Node,Button){
    //KISSY 1.2 以前可通过 var Node=S.Node ; var Anim=S.Anim
     var anim = Anim(
            '#test1',
            {
                'background-color':'#fcc',
                //'border': '5px dashed #999',
                'border-wdith':'5px',
                'border-color':"#999999",
                'border-style':"dashed",
                'width': '100px',
                'height': '50px',
                'left': '900px',
                'top': '285px',
                'opacity': '.5',
                'font-size': '48px',
                'padding': '30px 0',
                'color': '#FF3333'
            },5,
            'bounceOut',function(){
                alert('demo1 结束');
            });

     var b = new Button({
        content: "开始动画",
        prefixCls: "goog-"
    });
    b.render();
    b.on("click", function() {
        anim.run();
    });
});
