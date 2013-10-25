.. currentmodule:: combobox

RemoteDataSource
===============================


|  本地数据源.

.. code-block:: javascript

    KISSY.use('combobox',function(S,ComboBox){
        // use ComboBox.RemoteDataSource
    });

Class
---------------------------------

    * :class:`RemoteDataSource`

Configs
------------------------------------------

    * :data:`~RemoteDataSource.config.paramName`
    * :data:`~RemoteDataSource.config.allowEmpty`
    * :data:`~RemoteDataSource.config.cache`
    * :data:`~RemoteDataSource.config.parse`
    * :data:`~RemoteDataSource.config.xhrCfg`

Class Detail
--------------------------

.. class:: RemoteDataSource

    | **RemoteDataSource** (config)
    
    :param Object config: 配置项.


Configs Detail
---------------------------------------------------

.. data:: RemoteDataSource.config.paramName

    {String} - 用户输入发送到后端的参数名，默认 'q'

.. data:: RemoteDataSource.config.parse

    {Function} - 可选. 如何根据用户输入对后台返回数据进行过滤。默认

    .. code-block:: javascript

        function parser(
            // 用户输入
            inputVal,
            // 服务器返回数据
            data) {
            return data;
        }

.. data:: RemoteDataSource.config.allowEmpty

    {Boolean} - 默认 false. 用户输入为空时是否发请求

.. data:: RemoteDataSource.config.cache

    {Boolean} - 默认 false. 是否缓存服务器端数据

.. data:: RemoteDataSource.config.xhrCfg

    {Object} - 传递给 :class:`~io.IO` 的其他参数