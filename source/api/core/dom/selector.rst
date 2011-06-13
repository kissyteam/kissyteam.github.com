.. currentmodule:: DOM

.. _dom-selector:


selector
==================================

|  KISSY 选择器内置仅支持 #id tag.class 常用形式，考虑 2/8 原则，支持以下选择器：
|      * #id
|      * tag
|      * .cls
|      * #id tag
|      * #id .cls
|      * tag.cls
|      * #id tag.cls

.. note::

  * tag 可以为 ``*`` 字符
  * 支持 ``,`` 号分组


例如:

.. code-block:: javascript

    KISSY.use("dom",function(S,DOM){
        // 获得class 为 J_on 的 a 元素
        var els=DOM.query("a.J_on");
    });    
    
    
当加载了 ``sizzle`` 模块时, KISSY 支持 jQuery 支持的所有 CSS 选择器，具体请参考： `Sizzle Documents <http://wiki.github.com/jeresig/sizzle/>`_

例如

.. code-block:: javascript

    /**
     *使用模块
     */
    KISSY.use("dom,sizzle",function(S,DOM){
        // 获得属于任意元素的第一个子元素的 a 元素
        var els=DOM.query("a:first-child");
    });  
    
    /**
     * 编写模块
     */
    KISSY.add("biz/custom",function(S,DOM){
        // 获得属于任意元素的第一个子元素的 a 元素
        var els=DOM.query("a:first-child");
    },{
        requires:["dom","sizzle"]
    });