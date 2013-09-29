Color
===============================================

|  颜色封装

.. code-block:: javascript

    KISSY.use('color',function(S,Color){
        // use color
        
    });


Class
-----------------------------------------------

  * :class:`Color`

Configs
-----------------------------------------------

  * :data:`~Color.config.a`
  * :data:`~Color.config.b`
  * :data:`~Color.config.g`
  * :data:`~Color.config.r`


Methods
-----------------------------------------------

  * :meth:`~Color.prototype.getHSL`
  * :meth:`~Color.prototype.getHSV`
  * :meth:`~Color.prototype.setHSL`
  * :meth:`~Color.prototype.setHSV`
  * :meth:`~Color.prototype.toHSL`
  * :meth:`~Color.prototype.toHSLA`
  * :meth:`~Color.prototype.toHex`
  * :meth:`~Color.prototype.toRGB`
  * :meth:`~Color.prototype.toRGBA`


Static Methods
---------------------------------------

  * :meth:`~Color.fromHSL`
  * :meth:`~Color.fromHSV`
  * :meth:`~Color.parse`


Class Detail
-----------------------------------------------

.. class:: Color
    
    | **Color** (config)
    
    :param Object config: 实例化 Color 对象的配置项, 详细见下节.

Configs Detail
-----------------------------------------------

.. data:: Color.config.a

    {Number} - alpha 值

.. data:: Color.config.r

    {Number} - red 值

.. data:: Color.config.g

    {Number} - green 值

.. data:: Color.config.b

    {Number} - blur 值


Methods Detail
-----------------------------------------------

.. method:: Color.prototype.getHSL

    | **getHSL( )**
    | 得到当前颜色属性对应的 hsl 表示

    :returns: {Object}

    .. code-block:: javascript

        {
            h:xx,
            s:xx,
            l:xx
        }

.. method:: Color.prototype.toHSL

    | **toHSL( )**
    | 得到当前颜色属性对应的 hsl 表示字符串

    :returns: {String}


.. method:: Color.prototype.toHSLA

    | **toHSLA( )**
    | 得到当前颜色属性对应的 hsla 表示字符串

    :returns: {String}

.. method:: Color.prototype.toRGB

    | **toRGB( )**
    | 得到当前颜色属性对应的 rgb 表示字符串

    :returns: {String}

.. method:: Color.prototype.toRGBA

    | **toRGBA( )**
    | 得到当前颜色属性对应的 rgba 表示字符串

    :returns: {String}

.. method:: Color.prototype.toHex

    | **toHex( )**
    | 得到当前颜色属性对应的 16 进制表示字符串

    :returns: {String}


.. method:: Color.prototype.getHSV

    | **getHSV( )**
    | 得到当前颜色属性对应的 hsv 表示

    :returns: {Object}

    .. code-block:: javascript

        {
            h:xx,
            s:xx,
            v:xx
        }


.. method:: Color.prototype.setHSV

    | **setHSV( hsv )**
    | 根据 hsv 对象修改当前颜色实例

    :params {Object} hsv: hsv 对象，例如：

    .. code-block:: javascript

        {
            h:xx,
            s:xx,
            v:xx
        }



.. method:: Color.prototype.setHSL

    | **setHSL( hsl )**
    | 根据 hsl 对象修改当前颜色实例

    :params {Object} hsl: hsl 对象，例如：

    .. code-block:: javascript

        {
            h:xx,
            s:xx,
            l:xx
        }


Static Methods Details
-------------------------------------------

.. method:: Color.parse

    | **parse(str) <static>**
    | 从字符串表示的颜色值中获取颜色对象

    :params {String} str: 支持一下格式： '#rrggbb'  '#rgb' or 'rgb(r,g,b)'  'rgba(r,g,b,a)'
    :returns: {Color}


.. method:: Color.fromHSL

    | **fromHSL(cfg) <static>**
    | 从 hsl 对象中生成颜色实例

    :params {Object} cfg: hsl 对象，例如

    .. code-block:: javascript

        {
            h:xx,
            s:xx,
            l:xx,
            a:xx
        }

    :returns: {Color}


.. method:: Color.fromHSV

    | **fromHSV(cfg) <static>**
    | 从 hsv 对象中生成颜色实例

    :params {Object} cfg: hsv 对象，例如

    .. code-block:: javascript

        {
            h:xx,
            s:xx,
            v:xx,
            a:xx
        }

    :returns: {Color}

