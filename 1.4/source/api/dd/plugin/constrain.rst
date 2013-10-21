.. currentmodule:: dd

dd.plugin.Constrain
===============================================

|  :class:`~dd.Draggable` 插件，限制拖放对象在某个区域内

.. code-block:: javascript

    KISSY.use('dd/plugin/constrain',function(S,Constrain){
        // use Constrain plugin
    });


Class
-----------------------------------------------

  * :class:`~dd.plugin.Constrain`

Configs
-----------------------------------------------

  * :attr:`~dd.plugin.Constrain.config.constrain`


Class Detail
-----------------------------------------------

.. class:: dd.plugin.Constrain
    
    | **Constrain** (config)
    |  插件 id: dd/plugin/constrain

    :param Object config: 配置项, 详细见下方 **Configs Detail**
    

Configs Detail
-----------------------------------------------
    
.. attribute:: dd.plugin.Constrain.config.constrain

     { Boolean | String | KISSY.Node } -
        * 取值选择器字符串时, 则在限制拖动范围为根据该选择器字符串取到的第一个节点所在区域.
        * 取 KISSY.Node 时，则限制拖动范围为该节点所在区域.
        * 取值 true 时, 只能在当前视窗范围内拖动.
        * 取值 false 时, 可任意移动, 例如以扩充了该组件的 dialog 为例

         .. code-block:: javascript

             KISSY.use("dd,dd/plugin/constrain",function(S,DD,Constrain){
                new DD.Draggable({
                    node:'#drag',
                    plugins:[ new Constrain({
                        constrain:window // 限制拖动区域为视窗区域
                    }) ]
                });
             });

             KISSY.use("dd,dd/plugin/constrain",function(S,DD,Constrain){
                 new DD.Draggable({
                     node:'#drag',
                     plugins:[ new Constrain({
                         constrain:'#container' // 限制拖动区域为 container 节点所占据区域
                     }) ]
                 });
              });

Attributes Detail
-----------------------------------------------

.. attribute:: dd.plugin.Constrain.prototype.constrain

 { Boolean | String | KISSY.Node } - 可初始化都重新设置该属性.

