.. currentmodule:: seed

isPlainObject
===============================



Methods
-----------------------------------------------

.. function:: KISSY.isPlainObject

    | Boolean **KISSY.isPlainObject** (o)
    | 判断是否是普通对象, 通过 {} 或 new FunctionClass/Object() 创建的, 不包括内置对象以及宿主对象.
    
    :param o: 判断参数
    

    .. code-block:: javascript

        var S = KISSY;

        S.isPlainObject({}); // => true
        S.isPlainObject(new Date()); // => false
        S.isPlainObject(document.body); // => false   
		
    DEMO请参见 :ref:`KISSY seed-lang <seed-lang>`