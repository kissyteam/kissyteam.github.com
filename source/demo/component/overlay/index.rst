Overlay
========================================================

从 markup 中构建 overlay
----------------------------------------------------------

最常见的场景，弹出层 html 已经在页面 html 中，前端要做的是适时将它显示出来，例如页面中存在以下 html ：

.. code-block:: html    

    <style>
        #popup1 {
            position:absolute;
            left:-9999px;
            top:-9999px;
        }
    </style>

    <div id='popup1'>
        我是一些提示信息
    </div>

    <button id="btn1">Show</button>
    <button id="btn2">Hide</button>



代码分解
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: html

    <style>
        #popup1 {
            position:absolute;
            left:-9999px;
            top:-9999px;
        }
    </style>
    
初始载入时，弹出层所在 div 是浮出在屏幕之外而隐藏的，当点击 Show 按钮时，该弹层对齐在 Hide 按钮旁边，当点击 Hide 按钮时，已经显示的弹层就隐藏了。


获得 overlay 对象
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


通过 srcNode 配置项配置从已存的 dom 节点来生成 :class:`~Overlay.Overlay` 对象 :

.. code-block:: javascript
    :linenos:   

    KISSY.use("overlay",function(S,Overlay){
        // 对于 kissy < 1.2 ,可使用 Overlay = S.Overlay; 获取构造器
        
        var popup = new Overlay({
            srcNode:S.one("#popup1"), // 配置已存在 dom 节点
            width: 300, // 配置宽度
            height: 200,    // 配置高度    
            align: {    // 配置对齐属性
                node: '#btn2',
                points: ['tr', 'tl'],
                offset: [50, 0]
            }
        });
        
    });
    

当点击 Show 按钮时会触发弹出层的显示，以及点击 Hide 按钮时会触发弹出层的隐藏。

.. code-block:: javascript
    :linenos: 

    S.one('#btn1').on('click', function() {
        // 根据对齐属性，显示在 Hide 按钮旁
        popup.show();
    });
    
    S.one('#btn2').on('click', function() {
        // 隐藏弹出层
        popup.hide();
    });
    
    
最终 demo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




.. raw:: html
    

    <style>
        button {
            margin:0;
            padding:0;
        }
        #popup1 {
            position:absolute;
            left:-9999px;
            top:-9999px;
            border:1px solid red;
            background-color:white;
        }
    </style>

    <div id='popup1'>
        我是一些提示信息
    </div>

    <div style='margin:10px 0;'>
        <button id="btn1">Show</button>
        <button id="btn2">Hide</button>
    </div>
    
    <script>
        KISSY.use("overlay",function(S,Overlay){
            // kissy < 1.2 ,可使用 Overlay = S.Overlay; 获取构造器
            
            var popup = new Overlay({
                srcNode:S.one("#popup1"), // 配置已存在 dom 节点
                width: 300, // 配置宽度
                height: 200,    // 配置高度    
                align: {    // 配置对齐属性
                    node: '#btn2',
                    points: ['tr', 'tl'],
                    offset: [50, 0]
                }
            });
            
            S.one('#btn1').on('click', function() {
                // 根据对齐属性，显示在 Hide 按钮旁
                popup.show();
            });
            
            S.one('#btn2').on('click', function() {
                // 隐藏弹出层
                popup.hide();
            });
            
        });
    </script>        
    

    
全新创建一个 Dialog
----------------------------------------------------------------------

有时可能弹窗本身并没有在 html 中存在，而是由脚本完全生成的，这时就不需要 :attr:`~Overlay.srcNode` 配置了，直接配置相关属性后即可完全由脚本生成所需的 dom 节点。 


生成 dialog 对象
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

注意：要使得弹出对话框头部可拖动，需要 ``use("dd")`` 使用拖放模块:

.. code-block:: javascript
    :linenos:

    KISSY.use("overlay,dd",function(S,Overlay){
        
        // if kissy >= 1.2
        var Dialog=Overlay.Dialog;
        
        // 所有 kissy 版本可用
        var Dialog=S.Dialog;
        
        // 脚本完全生成 dialog 对象
        var dialog = new Dialog({
            width: 400,  // 对话框宽度
            bodyStyle:{
                height: 300 // 对话框体的高度
            },
            headerContent: 'this is title', // 对话框头信息 html
            footerContent: 'footer',    // 对话框底部信息 html
            bodyContent: 'content', // 对话框体信息 html
            mask: true,  //  有遮罩层
            draggable: true // 允许头部可拖放
        });
        
    }); 
    
触发 dialog 对象显示
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
当点击按钮时，首先调用 :meth:`~Overlay.Overlay.render` 渲染 :class:`~Overlay.Dialog` 对象，使得 dialog 生成的 dom 节点加入到文档树中，再调用 :meth:`~Overlay.Overlay.center` 使得对话框位置在当前视窗中央，最后调用 :meth:`~Overlay.Overlay.show` 显示 dialog：

.. code-block:: javascript
    :linenos: 

    S.one("#btn4").on("click", function() {
        dialog.render();
        dialog.center();
        dialog.show();
    });
    
    
最终 demo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. raw:: html

    <link rel="stylesheet" href="http://yiminghe.github.com/kissy/src/overlay/assets/cool.css"/>
    
    <div style='margin:10px 0;'>
        <button id='btn4'>全新创建对话框</button>
    </div>
        
    <script>
        KISSY.use("overlay,dd",function(S,Overlay){
            
            // if kissy >= 1.2
            //var Dialog=Overlay.Dialog;
            
            // 所有 kissy 版本可用
            var Dialog=S.Dialog;
            
            // 脚本完全生成 dialog 对象
            var dialog = new Dialog({
                width: 400,  // 对话框宽度
                bodyStyle:{
                    height: 300 // 对话框体的高度
                },
                headerContent: 'this is title', // 对话框头信息 html
                footerContent: 'footer',    // 对话框底部信息 html
                bodyContent: 'content', // 对话框体信息 html
                mask: true,  //  有遮罩层
                draggable: true // 允许头部可拖放
            });
            
            S.one("#btn4").on("click", function() {
                dialog.render();
                dialog.center();
                dialog.show();
            });
            
        });
    </script>            


全部 demo
-------------------------------------------------------------------------------

`KISSY.Overlay 1.20 <http://yiminghe.github.com/kissy/src/overlay/demo.html>`_       

`KISSY.Overlay 1.16 <http://kissyteam.github.com/kissy/src/overlay/demo.html>`_         