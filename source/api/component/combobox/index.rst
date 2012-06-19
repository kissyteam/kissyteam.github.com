.. currentmodule:: combobox

combobox
===============================

|  复合输入框.
| :ref:`Demo <combobox-demo>`

Class
---------------------------------

    * :class:`Combobox`

Configs
------------------------------------------

    * :data:`~Combobox.config.hasTrigger`
    * :data:`~Combobox.config.menu`
    * :data:`~Combobox.config.dataSource`
    * :data:`~Combobox.config.maxItemCount`
    * :data:`~Combobox.config.matchElWidth`
    * :data:`~Combobox.config.format`
    * :data:`~Combobox.config.multiple`
    * :data:`~Combobox.config.separator`
    * :data:`~Combobox.config.separatorType`
    * :data:`~Combobox.config.updateInputOnDownUp`
    * :data:`~Combobox.config.literal`
    * :data:`~Combobox.config.alignWithCursor`
    * :data:`~component.UIBase.config.plugins`
    * :data:`~component.UIBase.config.srcNode`


Attributes
----------------------------------------------------
    
    * :attr:`~Combobox.prototype.input`
    * :attr:`~Combobox.prototype.menu`
    * :attr:`~Combobox.prototype.collapsed`

Methods
-----------------------------------------------

    * :meth:`~component.Controller.extend` <static>
    * :meth:`~Combobox.prototype.sendRequest`
    
Events
--------------------------------------------------------

    * :func:`~Combobox.events.afterCollapsedChange`
    * :func:`~Combobox.events.click`

Class Detail
--------------------------

.. class:: Combobox

    | **Combobox** (config)
    
    * 继承自 :class:`~component.Controller` , 包含其全部配置,属性,方法,事件.
    
    :param Object config: 配置项.
    
    .. note::

        从已有元素实例 Combobox 对象时：

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

.. data:: Combobox.config.hasTrigger

    {Boolean} - 默认 true. 是否显示下拉按钮.

.. data:: Combobox.config.menu

    {Object|Combobox.Menu} - 可选. Combobox.Menu 对象实例或者 xclass 形式的配置，例如指定特定的 align:

    .. code-block:: javascript

        {
            xclass:'combobox-menu',
            align:{
                points:['tl','bl']
            }
        }

.. data:: Combobox.config.dataSource

    {Object|Combobox.LocalDataSource|Combobox.RemoteDataSource} - 数据源配置或者 xclass 形式的配置，例如静态数据源的配置:

    .. code-block:: javascript

        {
            xclass:'combobox-LocalDataSource',
            data:["abc","123"]
        }

.. data:: Combobox.config.maxItemCount

    {Number} - 最多可显示的下拉菜单个数


.. data:: Combobox.config.matchElWidth

    {Boolean} - 是否下拉菜单和自动补全框宽度一致。默认 true.


.. data:: Combobox.config.format

    {Function} - 可选。自定义下拉菜单属性的函数，传入参数 query(自动补全框当前值) , data(匹配数据数组)。
    返回对象数组，其中对象的 content 属性表示菜单项显示内容，textContent 表示放入到自动补全框的内容，disabled 表示当前项是否被禁用.

    例如高亮的处理:

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

.. data:: Combobox.config.multiple

    {Boolean} - 默认 false. 是否允许多个值的输入.

.. data:: Combobox.config.separator

    {String} - 默认 ",;". 当允许多个值输入时，分割多个值的分隔符.

.. data:: Combobox.config.separatorType

    {Boolean} - 默认 "suffix". 可取枚举值（"prefix","suffix"）. 表示分隔符在最前面( @xx 模式)还是在最后面(gmail 模式).

.. data:: Combobox.config.updateInputOnDownUp

    {Boolean} - 默认 true. 上下键是否导致高亮项填充入自动补全框.

.. data:: Combobox.config.alignWithCursor

    {Boolean} - 默认 false. 自动补全菜单是否和光标对齐.

.. data:: Combobox.config.literal

    {String} - 默认 " . 在该字符内的所有字符（包括分隔符）都算作普通字符.

.. data:: Combobox.config.autoHighlightFirst

    {String} - 默认 false. 是否当自动补全菜单出现时高亮第一项.

Attributes Detail
-----------------------------------------------------

.. attribute:: Combobox.prototype.input

    {KISSY.Node} - 关联的复合输入框.

.. attribute:: Combobox.prototype.menu

    {ComboBox.Menu|Object} - 自动补全菜单的配置（在显示后转换为实例）或实例.

.. attribute:: Combobox.prototype.collapsed

    {Boolean} - 自动补全菜单是否已经显示.


Methods Detail
-----------------------------------------------

.. method:: Combobox.prototype.sendRequest

    | **sendRequest( value )**
    | 根据 value 自动补全并显示下拉菜单.

    :param String value: 自动补全的值


Events Detail
------------------------------------------------------

.. function:: Combobox.events.click

    | **click(e)**
    | 当用户选择自动补全下拉框内的项时触发

    :param {MenuItem} e.target: 选择的下拉菜单项


.. function:: Combobox.events.afterCollapsedChange

    | **afterCollapsedChange(e)**
    | 当下拉菜单显示或隐藏时触发

    :param {Boolean} e.newVal: 当前下拉菜单是否是隐藏状态