使用示例
==================================================


使用构造器生成动画实例操作
-----------------------------------------------


.. raw:: html
    
    <button id="test1-btn">demo1:开始动画</button>

    <div id="test1" style="width: 10px; height: 20px; position: absolute; top: 20px; left: 120px; text-align: center; color: #999">^o^</div>

    <script>
        KISSY.use("anim,node",function(S,Anim,Node){
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
             S.one("#test1-btn").on("click",function(){
                anim.run();
             });
        });
    </script>

源码：

.. code-block:: javascript

        KISSY.use("anim,node",function(S,Anim,Node){
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
             S.one("#test1-btn").on("click",function(){
                anim.run();
             });
        });


节点实例动画操作
-----------------------------------------------



.. raw:: html

   <div style='width:100px;height:100px;border:1px solid red;' id='anim_show'>
       show/hide 动画
   </div>
    <br/>
   <button id='demo_show'>show/hide</button>
    <br/>
   <div style='width:100px;height:100px;border:1px solid red;' id='anim_slide'>
       slideUp/slideDown 动画
   </div>
    <br/>
   <button id='demo_slide'>slideUp/slideDown</button>
    <br/>
   <div style='width:100px;height:100px;border:1px solid red;' id='anim_fade'>
       fadeIn/fadeOut 动画
   </div>
    <br/>
   <button id='demo_fade'>fadeIn/fadeOut</button>

   <script>
        KISSY.use("anim",function(S,Anim){
            var demo_show=S.one("#demo_show"),
            demo_slide=S.one("#demo_slide"),
            demo_fade=S.one("#demo_fade");

            var anim_show=S.one("#anim_show"),
            anim_slide=S.one("#anim_slide"),
            anim_fade=S.one("#anim_fade");

            demo_show.on("click",function(){
                if(anim_show.css("display")==="none")
                anim_show.show(1);
                else
                anim_show.hide(1);
            });

            demo_slide.on("click",function(){
                if(anim_slide.css("display")==="none")
                anim_slide.slideDown();
                else
                anim_slide.slideUp();
            });

            demo_fade.on("click",function(){
                if(anim_fade.css("display")==="none")
                anim_fade.fadeIn();
                else
                anim_fade.fadeOut();
            });
        });
   </script>


源码：


.. code-block:: javascript

        KISSY.use("anim,node",function(S,Anim,Node){
            //KISSY 1.2 以前可通过 var Node=S.Node ; var Anim=S.Anim
            var demo_show=S.one("#demo_show"),
            demo_slide=S.one("#demo_slide"),
            demo_fade=S.one("#demo_fade");

            var anim_show=S.one("#anim_show"),
            anim_slide=S.one("#anim_slide"),
            anim_fade=S.one("#anim_fade");

            demo_show.on("click",function(){
                if(anim_show.css("display")==="none")
                anim_show.show(1);
                else
                anim_show.hide(1);
            });

            demo_slide.on("click",function(){
                if(anim_slide.css("display")==="none")
                anim_slide.slideDown();
                else
                anim_slide.slideUp();
            });

            demo_fade.on("click",function(){
                if(anim_fade.css("display")==="none")
                anim_fade.fadeIn();
                else
                anim_fade.fadeOut();
            });
        });