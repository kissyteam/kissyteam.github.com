.. currentmodule:: seed

guid
===============================

Module
-----------------------------------------------

  :mod:`seed`


Methods
-----------------------------------------------

.. function:: KISSY.guid

    | String **KISSY.guid** (prefix)
    | 返回全局唯一 id.
    
    :param string prefix: 唯一 id 前缀
	
    举例
    
    .. code-block:: javascript
	
	    var S = KISSY;
	    for(var i=0;i<5;i++){
		    alert(S.guid('pre')); // => 输出 pre1,pre2,pre3,pre4,pre5
	    }
    