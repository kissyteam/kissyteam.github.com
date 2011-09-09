.. currentmodule:: seed

.. _seed-indexOf:


indexOf
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.indexOf

    | Number **KISSY.indexof** (elem,arr)
    | 返回元素 elem 在数组 arr 中的序号.
    
    :param elem: 任意对象
    :param arr: 数组
    :returns: elem 在数组 arr 中的序号.
    :rtype: number

	
    举例
	
    .. code-block:: javascript
	
	    var S = KISSY;
	    function IndexDemo(){ 
		    var arry1 = [1,2,3,4,5,6]; 
		    var s = KISSY.indexOf(5,arry1); 
		    return(s);  // => 4
	    }