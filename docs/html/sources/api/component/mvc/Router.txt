.. currentmodule:: mvc

mvc.Router
===============================

.. versionadded:: 1.2

|  路由类.
|  `源码 <https://github.com/kissyteam/kissy/tree/master/src/mvc/>`_


Class
---------------------------------

    * :class:`Router`
    
    
Config Attributes
-----------------------------------------------

    * :data:`~Router.config.routes`
    
    
Methods
-----------------------------------------------

    * :meth:`~Router.prototype.addRoutes`
    * :meth:`~Router.prototype.navigate`
    * :meth:`~Router.prototype.start`
    
Events
--------------------------------------------------

    * :func:`~Router.events.route`
    * :func:`~Router.events.route:x`    
    
    
Class Detail
--------------------------

.. class:: Router

    | **Router** (config)
    
    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    * 路由代表一个对 url 路由的策略和处理规则
    
    :param Object config: 配置项.详细见下方 **Config Attributes Detail** .
    
    
Config Attributes Detail
-----------------------------------------------

.. data:: Router.config.routes

    {Object} - 可选，路由策略和规则
    
    .. code-block:: javascript
    
        {
            "":"index",
            "/edit/:id":function(paths,query){
                // /editor/99?q=1
                alert(paths.id);  // => 99
                alert(query.q); // => 1
            },
            "/new/*u":function(paths){
               // /new/kissy-mvc-is-good/right
               alert(paths.u); // => kissy-mvc-is-good/right
            }
        }
        
    用于指定当 url 符合一定规则时执行指定的函数，当函数字符串时指定路由实例上的函数，规则有两种
    
    
    #.  :id 用于匹配 url / 间部分    
    #.  \*u 用户匹配从当前位置到结尾的 url 部分
    
    
    调用函数形式为
    
    .. function:: Router.config.routes.fn
    
        | **fn( paths [ , querys ] )**        
        
        :param Object paths: 包含规则路径参数以及和当前 url 匹配值为键值对的对象
        :param Object querys: 包含当前url的查询参数和值为键值对的对象
    
    
Methods Detail
-----------------------------------------------  

.. method:: Router.prototype.addRoutes

    | **addRoutes ( routes )**
    | 添加路由
    
    :param Object routes : 格式同 :data:`~Router.config.routes` 配置.      
    
    
.. method:: Router.prototype.navigate

    | **navigate ( path [ , opts ] )**
    | 导航 url 到 path
    
    :param String path: 将要设置的 url 值
    :param Object opts: 包括以下控制选项
    
        .. attribute::  Router.prototype.navigate.opts.triggerRoute
        
            {boolean} - 默认 false。是否强制触发对应该路径的路由处理。默认如果当前路径和 path 相同则不会发生任何动作.
            
.. method:: Router.prototype.start

    | **start( [ opts ] )**             
    | 开始路由规则处理
    
    :param Object opts: 包括以下控制选项
    
        .. attribute:: Router.prototype.start.opts.triggerRoute
        
            {boolean} - 默认 false。是否触发当前路径的路由处理函数，默认只有当下次 url 发生变化时才处理.
            
            
Events Detail
----------------------------------------------------------

.. function:: Router.events.route

    | **route( e )**
    | 当发生路由处理时触发
    
    :param String e.name: 当前的路由处理规则名称
    :param Object e.paths: 同 :func:`~Router.config.routes.fn` 中 paths 格式     
    :param Object e.query: 同 :func:`~Router.config.routes.fn` 中 query 格式    
    
            
.. function:: Router.events.route:x

    | **route( e )**
    | 当发生路由处理时触发, x 替换为当前的规则名，例如 url 改变到 "/" 时触发 "route:/"
    
    :param String e.name: 当前的路由处理规则名称
    :param Object e.paths: 同 :func:`~Router.config.routes.fn` 中 paths 格式     
    :param Object e.query: 同 :func:`~Router.config.routes.fn` 中 query 格式    