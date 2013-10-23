.. currentmodule:: seed

guid
===============================



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
		    alert(S.guid('pre')); // => 输出 prex,pre(x+1),pre(x+2),pre(x+3),pre(x+4)
		                          // x 表示一个不确定的数字 ,(x+1) 表示对该数字运算得到的表达式     
		                          // 例如可能的结果：pre10,pre11,pre12,pre13,pre14
	    }
    