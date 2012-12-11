.. module:: json

json
====================================

|  KISSY 直接采用了 Douglas Crockford 的 json2.js

    .. note::

        为何不自己去写？原因有二：
            1. 老道已经写得足够好足够健壮；
            2. IE6/7 江河日下，相信不久的将来，就不需要这个模块了。


.. code-block:: javascript

    KISSY.use('json',function(S,JSON){
        // use JSON
    });


Module
-----------------------------------------------

  :mod:`json`

Methods
-----------------------------------------------

.. function:: parse

    | Object **parse** ( text[, reviver] )
    | 将字符串解析为json对象，解析器
    
    :param String text: 字符串
    :param function reviver: 过滤器，可选`

    :returns: {Object} - 解析之后返回传入数据的一个对象表示

.. function:: stringify

    | String **stringify** ( value[, replacer, space] )
    | 将json对象或者数组转化为字符串，序列化器
    
    :param Object|array value: 要序列化的对象`
    :param function|array replacer: 替换函数，可选`
    :param string|number space: 缩进说明符，可选`
	
	:returns: {String} - 返回JSON字符串
	
	
DEMO
--------------------------------------------------

注意 ``json`` 字符串的格式，属性必须要双引号括起来

.. code-block:: html

    KISSY.JSON.parse('{"x":1}'); // => ok
    KISSY.JSON.parse("{'x':1}"); // => exception : SyntaxError
    KISSY.JSON.parse("{x:1}"); // => exception : SyntaxError
    
    
    KISSY.JSON.stringify({"x":1}); // => '{"x":1}'
    KISSY.JSON.stringify({x:1}); // => '{"x":1}'
    KISSY.JSON.stringify({'x':1}); // => '{"x":1}'