.. currentmodule:: rich-base

RichBase
===============================

|  插件基类，目前不建议外部使用，欢迎 review

Class
---------------------------------

    * :class:`RichBase`


Configs
------------------------------------

    * :data:`~RichBase.config.listeners`
    * :data:`~RichBase.config.plugins`
    
    
Methods
-----------------------------------------------

    * :meth:`~RichBase.prototype.plug`
    * :meth:`~RichBase.prototype.unplug`
    * :meth:`~RichBase.prototype.destroy`


Class Detail
--------------------------

.. class:: RichBase

    | **RichBase** (config)
    | 继承自 :class:`~base.Base` . 具备其所有配置，属性，方法.
    
    :param Object config: 配置项


Configs Detail
------------------------------------------------

    .. data:: RichBase.config.listeners

        {Object} - 配置组件的事件绑定. 例如

        .. code-block:: javascript

            {
                listeners:{
                    customEvent:function(e){
                        alert(e.type); // => "customEvent"
                    }
                }
            }

            or

            {
                listeners:{
                    customEvent:{
                        fn:function(e){
                            // e.type // => customEvent
                            // this.xx => 1
                        },
                        context:{xx:1}
                    }
                }
            }


    .. data:: RichBase.config.plugins

        {Function[]|Object[]} - 插件构造器数组或插件对象数组. 例如

        .. code-block:: javascript

            {
                plugins: [ Plugin1,Plugin2 ]
            }

            // or

            {
                plugins: [new Plugin1(cfg),new Plugin2(cfg)]
            }

        例如以下两个插件： :class:`component.plugin.Resize` 和 :class:`component.plugin.Drag` .



Methods Detail
-----------------------------------------------    

.. method:: RichBase.prototype.plug()

    | **plug ( plugin )**
    | 安装指定插件

    :param Function|Object: 指定的插件构造器或者插件对象.
    :return: 自身

    例如：

    .. code-block:: javascript

        KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
            new Overlay({
                content:'test'
            }).plug(new Resize({
                handlers:['t','t']
            }));
        });


.. method:: RichBase.prototype.unplug()

    | **unplug ( plugin )**
    | 卸载指定插件

    :param String|Object: 指定的插件 id 字符串或者插件对象.
    :return: 自身

    例如：

    .. code-block:: javascript

        KISSY.use('overlay,component/plugin/resize',function(S,Overlay,Resize){
            var o= new Overlay({
                content:'test'
            }).plug(new Resize({
                handlers:['t','t']
            }));

            o.unplug('component/plugin/resize'); // 卸载 resize 插件
        });
    
.. method:: RichBase.prototype.destroy()

    | **destroy ( )**

    销毁该组件
