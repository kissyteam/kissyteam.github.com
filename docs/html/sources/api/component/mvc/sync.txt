.. currentmodule:: mvc

mvc.sync
===============================

.. versionadded:: 1.2

|  同步函数.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/mvc/sync.js>`_


.. function:: mvc.sync

    | **sync( self , method , opts )**
    | 集合或模型发生改变时调用的函数
    
    :param Model|Collection self: 当前动作的所处对象
    
    :param String method: 同步的具体动作，包括
    
        #. create ：创建动作
        #. update ：更新动作
        #. delete ：删除动作
        #. read ：读取动作
        
    :param Object opts: 控制选项，包括
    
        .. attribute:: mvc.sync.opts.success
        
            操作成功后的回调
            
        .. attribute:: mvc.sync.opts.error
        
            操作失败后的回调
            
        .. attribute:: mvc.sync.opts.complete
        
            操作完成后的回调（成功或失败）               
    
        
        
.. note::

    系统自带的该函数会自动发请求给模型或集合对应的 url 函数返回的值，如果有特殊需要，可以进行覆盖               