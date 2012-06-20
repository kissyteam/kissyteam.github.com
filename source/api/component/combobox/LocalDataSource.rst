.. currentmodule:: combobox

LocalDataSource
===============================


|  本地数据源.

Class
---------------------------------

    * :class:`LocalDataSource`

Configs
------------------------------------------

    * :data:`~LocalDataSource.config.data`
    * :data:`~LocalDataSource.config.parse`

Class Detail
--------------------------

.. class:: LocalDataSource

    | **LocalDataSource** (config)
    
    :param Object config: 配置项. xclass 为 'combobox-LocalDataSource'


Configs Detail
---------------------------------------------------

.. data:: LocalDataSource.config.data

    {Object[]} - 静态数据数组

.. data:: LocalDataSource.config.parse

    {Function} - 可选. 如何根据用户输入对数据进行过滤。默认

    .. code-block:: javascript

        function parser(inputVal, data) {
            var ret = [],
                count = 0;

            if (!inputVal) {
                return data;
            }

            S.each(data, function (d) {
                if (d.indexOf(inputVal) != -1) {
                    ret.push(d);
                }
                count++;
            });

            return ret;
        }