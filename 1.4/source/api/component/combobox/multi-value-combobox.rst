.. currentmodule:: combobox

MultiValueComboBox
===============================

|  复合输入框.
| :ref:`Demo <combobox-demo>`

.. code-block:: javascript

    KISSY.use('combobox',function(S,ComboBox){
        // use ComboBox.MultiValueComboBox
    });

Class
---------------------------------

    * :class:`MultiValueComboBox`

Configs
------------------------------------------
    * :data:`~MultiValueComboBox.config.multiple`
    * :data:`~MultiValueComboBox.config.separator`
    * :data:`~MultiValueComboBox.config.separatorType`
    * :data:`~MultiValueComboBox.config.literal`
    * :data:`~MultiValueComboBox.config.alignWithCursor`


Class Detail
--------------------------

.. class:: MultiValueComboBox

    | **MultiValueComboBox** (config)
    
    * 继承自 :class:`~ComboBox` , 包含其全部配置,属性,方法,事件.

Configs Detail
---------------------------------------------------
.. data:: MultiValueComboBox.config.multiple

    {Boolean} - 默认 false. 是否允许多个值的输入.

.. data:: MultiValueComboBox.config.separator

    {String} - 默认 ",;". 当允许多个值输入时，分割多个值的分隔符.

.. data:: MultiValueComboBox.config.separatorType

    {Boolean} - 默认 "suffix". 可取枚举值（"prefix","suffix"）. 表示分隔符在最前面( @xx 模式)还是在最后面(gmail 模式).

.. data:: MultiValueComboBox.config.alignWithCursor

    {Boolean} - 默认 false. 自动补全菜单是否和光标对齐.

.. data:: MultiValueComboBox.config.literal

    {String} - 默认 " . 在该字符内的所有字符（包括分隔符）都算作普通字符.