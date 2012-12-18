.. currentmodule:: combobox

ComboBox
===============================

|  复合输入框.
| :ref:`Demo <combobox-demo>`

.. code-block:: javascript

    KISSY.use('combobox',function(S,ComboBox){
        // use ComboBox
    });

Class
---------------------------------

    * :class:`ComboBox`

Configs
------------------------------------------

    * :data:`~ComboBox.config.hasTrigger`
    * :data:`~ComboBox.config.menu`
    * :data:`~ComboBox.config.dataSource`
    * :data:`~ComboBox.config.maxItemCount`
    * :data:`~ComboBox.config.matchElWidth`
    * :data:`~ComboBox.config.format`
    * :data:`~ComboBox.config.updateInputOnDownUp`
    * :data:`~rich-base.RichBase.config.plugins`
    * :data:`~component.UIBase.config.srcNode`


Attributes
----------------------------------------------------
    
    * :attr:`~ComboBox.prototype.input`
    * :attr:`~ComboBox.prototype.menu`
    * :attr:`~ComboBox.prototype.collapsed`

Methods
-----------------------------------------------

    * :meth:`~component.Controller.extend` <static>
    * :meth:`~ComboBox.prototype.sendRequest`
    
Events
--------------------------------------------------------

    * :func:`~ComboBox.Events.afterCollapsedChange`
    * :func:`~ComboBox.Events.click`

Class Detail
--------------------------

.. class:: ComboBox

    | **ComboBox** (config)
    
    * 继承自 :class:`~component.Controller` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 ComboBox 对象时：

        #. 元素节点标明类名 ``{prefixCls}combobox`` .
        #. html 符合一定规范，例如

        .. code-block:: html

                <div class="ks-combobox" id="combobox">
                    <div class="ks-combobox-input-wrap">
                        <input style="width:100%;height:100%;" aria-haspopup="true"
                               aria-combobox="list" role="combobox" combobox="off"
                               class="ks-combobox-input" tabindex="0"
                               id="inp"
                                />
                    </div>
                </div>


Configs Detail
---------------------------------------------------

.. data:: ComboBox.config.hasTrigger

    {Boolean} - 默认 true. 是否显示下拉按钮.

.. data:: ComboBox.config.menu

    {Object|Menu.PopupMenu} - 可选. xclass 形式的配置，例如指定特定的 align:

    .. code-block:: javascript

        {
            xclass:'popupmenu',
            align:{
                points:['tl','bl']
            }
        }

.. data:: ComboBox.config.dataSource

    {ComboBox.LocalDataSource|ComboBox.RemoteDataSource} - 数据源配置
                例如静态数据源的配置:

    .. code-block:: javascript

        new ComboBox.LocalDataSource({
            data:["abc","123"]
        })

.. data:: ComboBox.config.maxItemCount

    {Number} - 最多可显示的下拉菜单个数


.. data:: ComboBox.config.matchElWidth

    {Boolean} - 是否下拉菜单和自动补全框宽度一致。默认 true.


.. data:: ComboBox.config.format

    {Function} - 可选。自定义下拉菜单属性的函数，传入参数 query(自动补全框当前值) , data(匹配数据数组)。
    返回对象数组，其中对象的 content 属性表示菜单项显示内容，textContent 表示放入到自动补全框的内容，disabled 表示当前项是否被禁用.

    例如高亮的处理:

    .. code-block:: javascript

        {
            format:function(query, data){
                var ret = [];
                for (var i = 0; i < data.length; i++) {
                    ret[i] = {
                        content:(data[i] + "")
                                .replace(new RegExp(S.escapeRegExp(query), "g"),
                                "<b>$&</b>")
                    };
                }
                return ret;
            }
        }

.. data:: ComboBox.config.updateInputOnDownUp

    {Boolean} - 默认 true. 上下键是否导致高亮项填充入自动补全框.

.. data:: ComboBox.config.autoHighlightFirst

    {String} - 默认 false. 是否当自动补全菜单出现时高亮第一项.

Attributes Detail
-----------------------------------------------------

.. attribute:: ComboBox.prototype.input

    {KISSY.Node} - 关联的复合输入框.

.. attribute:: ComboBox.prototype.menu

    {ComboBox.Menu|Object} - 自动补全菜单的配置（在显示后转换为实例）或实例.

.. attribute:: ComboBox.prototype.collapsed

    {Boolean} - 自动补全菜单是否已经显示.


Methods Detail
-----------------------------------------------

.. method:: ComboBox.prototype.sendRequest

    | **sendRequest( value )**
    | 根据 value 自动补全并显示下拉菜单.

    :param String value: 自动补全的值


Events Detail
------------------------------------------------------

.. function:: ComboBox.Events.click

    | **click(e)**
    | 当用户选择自动补全下拉框内的项时触发

    :param {MenuItem} e.target: 选择的下拉菜单项


.. function:: ComboBox.Events.afterCollapsedChange

    | **afterCollapsedChange(e)**
    | 当下拉菜单显示或隐藏时触发

    :param {Boolean} e.newVal: 当前下拉菜单是否是隐藏状态