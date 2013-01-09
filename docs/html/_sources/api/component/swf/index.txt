.. currentmodule:: swf

SWF
===============================================

|  动态插入 swf 功能

.. code-block:: javascript

    KISSY.use('swf',function(S,SWF){
        // use SWF
        var swf=new SWF({
            src:'xx.swf',
            attrs:{
                width:100
            },
            params:{
                flashVars:{
                    x:1
                }
            },
            render:'#container'
        });

        swf.get('el') // => 对应 swf dom 节点

        swf.callSWF('save',[key,value]);
    });


Class
-----------------------------------------------

  * :class:`SWF`

Configs
-----------------------------------------------

  * :data:`~SWF.config.attrs`
  * :data:`~SWF.config.document`
  * :data:`~SWF.config.elBefore`
  * :data:`~SWF.config.expressInstall`
  * :data:`~SWF.config.params`
  * :data:`~SWF.config.render`
  * :data:`~SWF.config.src`
  * :data:`~SWF.config.version`
  
Attributes
-----------------------------------------------

  * :attr:`~SWF.prototype.el`
  * :attr:`~SWF.prototype.html`
  * :attr:`~SWF.prototype.status`


Static Property
-----------------------------------------------

  * :attr:`~SWF.Status`
  
Methods
-----------------------------------------------

  * :meth:`~SWF.prototype.callSWF`
  * :meth:`~SWF.prototype.destroy`

Static Methods
-----------------------------------------------

  * :meth:`~SWF.fpv`
  * :meth:`~SWF.fpvGTE`
  * :meth:`~SWF.getSrc`


Class Detail
-----------------------------------------------

.. class:: SWF
    
    | **SWF** (config)
    | 继承自 :class:`~base.Base`. 请用 get 获取属性值.
    
    :param Object config: 实例化可拖放对象的配置项, 详细见下节.

Configs Detail
-----------------------------------------------

.. data:: SWF.config.attrs

    {Object} - 将要加到 flash 节点的属性键值对

.. data:: SWF.config.document

    {HTMLDocument} - 可选。插入 swf 所属的文档，默认当前文档

.. data:: SWF.config.elBefore

    {HTMLElement>} - 可选。 在此元素前插入 swf

.. data:: SWF.config.expressInstall

    {String} - 可选。版本低时显示的快速安装 swf ，默认为 kissy 自带地址.

.. data:: SWF.config.params

    {Object} - 将要加到 flash 节点的 param 键值对. 注意其中属性 ``flashVars`` 的大小写.
    
.. data:: SWF.config.render

    {HTMLElement} - 可选。在此元素内添加 swf。 若 render 与 swf 都不设置则插入到 body 节点中
    
.. data:: SWF.config.src

    {String} - 必选。 swf 元素的地址。

.. data:: SWF.config.version

    {String} - 可选。最低 flash 版本要求， 达不到要求显示 expressInstall。例如 9.1.234，默认 9.0


Attributes Detail
-----------------------------------------------

.. attribute:: SWF.prototype.el

    {HTMLElement} - swf 元素节点
    
.. attribute:: SWF.prototype.html

    {String} - swf 元素 html
    
.. attribute:: SWF.prototype.status

    {enum} - 取值枚举自 :attr:`~SWF.Status`


Static Properties Detail
-----------------------------------------------

.. attribute:: SWF.Status

    .. attribute:: SWF.Status.NOT_INSTALLED

        表示没有安装 flash 插件

    .. attribute:: SWF.Status.SUCCESS

        表示已成功插入 swf 元素

    .. attribute:: SWF.Status.TOO_LOW

        表示没有安装 flash 插件


Methods Detail
-----------------------------------------------

.. method:: SWF.prototype.callSWF

    | **callSWF( method, args )**
    | 调用 swf 的方法

    :param String method: 方法名
    :param Array args: 参数列表
    :returns: swf 方法返回值

.. method:: SWF.prototype.destroy

    | **destroy( )**
    | 销毁 swf 元素


Static Methods Detail
-----------------------------------------------

.. method:: SWF.fpv

    | **fpv( force ) <static>**
    | 获取 flash 版本数组

    :param Boolean force: 是否强制不从缓存中读取，默认 false
    :returns: {String[]} 版本号数组，例如 ['9','1','252']


.. method:: SWF.fpvGTE

    | **fpvGTE( ver, force ) <static>**
    | 检查当前版本是否比提供的参数版本高

    :param String ver: 待比较的版本号，例如 "9.1.252"
    :param Boolean force: 当前版本是否强制不从缓存中读取，默认 false
    :returns: {Boolean} 检查当前版本是否比提供的参数版本高


.. method:: SWF.getSrc

    | **getSrc( swf ) <static>**
    | swf 元素的地址素火星

    :param HTMLElement swf: swf 元素
    :returns: {String} swf 元素的地址属性