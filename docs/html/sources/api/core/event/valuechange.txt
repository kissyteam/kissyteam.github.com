.. currentmodule:: Event

.. versionadded:: 1.2

valuechange
====================================

监控 input/textarea 的值变化，当值发生变化时在绑定元素上触发该事件.

**为什么不使用原生的 change keydown keyup**

#. change 只有在输入框失去焦点时触发.
#. keyup/down 对于国际语言的输入法不能全面支持（鼠标从输入法中选词）
#. keydown/up 需要过滤不可见字符
#. 程序设值不可以触发原生事件 

.. note::

    当输入框获得焦点，程序动态设值可触发 ``valuechange`` 事件，否则不触发该事件.

语法
--------------------------------


触发事件包括两个特殊属性

.. attribute:: valuechange.prevVal

    变化前的值
    
.. attribute:: valuechange.newVal

    当前（变化后）的值

    

.. note::
    此事件只能在 input 以及 textarea 上注册，注册到其他类型元素上无效！
    
.. code-block:: javascript

    KISSY.Event.on(input,"valuechange",function(e){
            alert(e.prevVal); // => 旧值
            alert(e.newVal); // => 新值
    });
    

示例
------------------------------------    

打开拼音输入法，输入时直接鼠标选词

.. literalinclude:: /_static/api/core/event/valuechange.html
       :language: html

.. raw:: html

    <iframe width="100%" height="135" src="../../../static/api/core/event/valuechange.html"></iframe>