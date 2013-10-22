.. currentmodule:: dom

toggleClass
=================================

Module
-----------------------------------------------

  :mod:`dom <dom>`


Methods
-----------------------------------------------

.. function:: toggleClass

    | void **toggleClass** ( selector, classNames  )
    | 操作符合选择器的所有元素, 如果存在值为 classNames 的 class, 则移除掉, 反之添加.

    :param string|HTMLCollection|Array<HTMLElement> selector: 字符串格式参见 :ref:`KISSY selector <dom-selector>`
    :param string classNames: 样式类 class, 多个用空格分隔 , 需要 toggle 的样式类

    .. note::

        只有两个参数，第三个参数无效

    例如：

    .. code-block:: js

	    KISSY.ready(function(S){
		    var DOM = S.DOM,Event = S.Event;
		    //点击 id 为 btn 的元素来控制 id 为 t1 的元素样式 show prev 交替出现
		    Event.on("#btn","click",function(e){
			    DOM.toggleClass("#t1","show prev");
		    });
	    });