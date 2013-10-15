.. currentmodule:: combobox

FilterSelect
===============================

|  限定范围的输入框.

.. code-block:: javascript

    KISSY.use('combobox',function(S,ComboBox){
        // use ComboBox.FilterSelect
    });

Class
---------------------------------

    * :class:`FilterSelect`

Configs
------------------------------------------
    * :data:`~FilterSelect.config.invalidMessage`


Class Detail
--------------------------

.. class:: FilterSelect

    | **FilterSelect** (config)
    
    * 继承自 :class:`~ComboBox` , 包含其全部配置,属性,方法,事件.

Configs Detail
---------------------------------------------------
.. data:: FilterSelect.config.invalidMessage

    {String} - 当用户的输入不匹配下拉提示的内容时的出错信息