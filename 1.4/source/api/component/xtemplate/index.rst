.. module:: xtemplate


xtemplate
===============================

| 富逻辑的 KISSY 模板引擎
| :ref:`demo<xtemplate_demo>`


.. code-block:: javascript

    KISSY.use('xtemplate',function(S,XTemplate){
        // use XTemplate
    });

Class
---------------------------------

    * :class:`XTemplate`

Configs
------------------------------------------------

    * :data:`~XTemplate.config.subTpls`
    * :data:`~XTemplate.config.commands`
    * :data:`~XTemplate.config.name`
    * :data:`~XTemplate.config.cache`

Methods
--------------------------------------------------------

    * :meth:`~XTemplate.prototype.removeSubTpl`
    * :meth:`~XTemplate.prototype.addSubTpl`
    * :meth:`~XTemplate.prototype.addCommand`
    * :meth:`~XTemplate.prototype.removeCommand`
    * :meth:`~XTemplate.prototype.compile`
    * :meth:`~XTemplate.prototype.render`

Static Methods
-------------------------------------------------

    * :func:`~XTemplate.addSubTpl`
    * :func:`~XTemplate.addCommand`

Class Detail
--------------------------

.. class:: XTemplate

    | **XTemplate** (tpl,config)

    :param {String|Function} tpl: 字符串模板或编译过的模板函数.
    :param Object config: 配置项.

Configs Detail
------------------------------------------------------

.. data:: XTemplate.config.subTpls

    {Object} - 局部自定义子模板的键值对，例如

    .. code-block:: javascript

        {
            'sub1':'{{title}}',
            'sub2':function( scopes ){
                return scopes[0].title2;
            }
        }


.. data:: XTemplate.config.commands

    {Object} - 局部自定义命令的键值对，例如

    .. code-block:: javascript

        {
            'cmd1':function( scopes,option ){
                return scopes[0].title2+option.params[0];
            }
        }


.. data:: XTemplate.config.name

    {Object} - 模版名称，可在 chrome dev tools 中看到以该值为名称的模板文件代码

.. data:: XTemplate.config.cache

    {Boolean} - 是否缓存生成的模板函数，默认 true.

Methods Detail
----------------------------------------------------------------------------------------------------------

.. method:: XTemplate.prototype.removeSubTpl

    | **removeSubTpl** (subTplName)
    | 删除指定的局部子模板

    :param String subTplName: 子模板名称


.. method:: XTemplate.prototype.addSubTpl

    | **addSubTpl** (subTplName, def)
    | 添加指定的局部子模板， 格式类似 :data:`~XTemplate.config.subTpls`

    :param String subTplName: 子模板名称
    :param String|Function def: 添加子模板定义


.. method:: XTemplate.prototype.removeCommand

    | **removeCommand** (commandName)
    | 删除指定的局部命令

    :param String commandName: 命令名称


.. method:: XTemplate.prototype.addCommand

    | **addCommand** (commandName,fn)
    | 添加局部命令， 格式类似 :data:`~XTemplate.config.commands`

    :param String commandName: 命令名称
    :param Function fn: 命令定义

.. method:: XTemplate.prototype.compile

    | **compile** ()
    | 编译模板

    :param String subTplName: 子模板名称
    :return: {Function} - 编译过的模板函数

.. method:: XTemplate.prototype.render

    | **render** ( data )
    | 渲染数据到模板

    :param Object data: 数据对象
    :return: {String} - 数据融合模版后的字符串


Static Methods Detail
-----------------------------------------------

.. function:: XTemplate.addSubTpl

    | **addSubTpl( subTplName, def )**
    | 添加全局子模板， 格式同 :meth:`~XTemplate.prototype.addSubTpl`


.. function:: XTemplate.addCommand

    | **addCommand( commandName, fn )**
    | 添加全局命令， 格式同 :meth:`~XTemplate.prototype.addCommand`
