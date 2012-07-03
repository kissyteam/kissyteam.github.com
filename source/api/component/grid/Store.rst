.. currentmodule:: Grid

Store
===============================


| 数据缓冲对象

Class
---------------------------------

	* :class:`Store`

Configs
------------------------------------------------
	
	* :data:`~Store.config.url`
	* :data:`~Store.config.autoLoad`
	* :data:`~Store.config.dataType`
	* :data:`~Store.config.sortInfo`
	* :data:`~Store.config.proxy`
	* :data:`~Store.config.params`
	* :data:`~Store.config.remoteSort`
	* :data:`~Store.config.matchFunction`
	* :data:`~Store.config.compareFunction`
	

Methods
-----------------------------------------------	
	* :meth:`~Store.prototype.add`
	* :meth:`~Store.prototype.clear`
	* :meth:`~Store.prototype.contains`
	* :meth:`~Store.prototype.findIndexBy`
	* :meth:`~Store.prototype.find`
	* :meth:`~Store.prototype.findByIndex`
	* :meth:`~Store.prototype.findAll`
	* :meth:`~Store.prototype.findNextRecord`
	* :meth:`~Store.prototype.load`
	* :meth:`~Store.prototype.getResult`
	* :meth:`~Store.prototype.getCount`
	* :meth:`~Store.prototype.getTotalCount`
	* :meth:`~Store.prototype.remove`
	* :meth:`~Store.prototype.setResult`
	* :meth:`~Store.prototype.setValue`
	* :meth:`~Store.prototype.sort`
	* :meth:`~Store.prototype.update`
	

Events
--------------------------------------------------------

	* :func:`~Store.load`  
	* :func:`~Store.beforeload` 
	* :func:`~Store.beforeProcessLoad` 
	* :func:`~Store.addrecords` 
	* :func:`~Store.exception` 
	* :func:`~Store.removerecords` 
	* :func:`~Store.updaterecord` 
	* :func:`~Store.localsort` 
	

Class Detail
--------------------------

.. class:: Store

	| **Store** (config)

	* 此类用于缓存数据，可以在多个控件上同时使用，如：Grid、PaggingBar和loadMask,通过事件跟协调各个控件交互。

	:param Object config: 配置项.

Configs Detail
------------------------------------------------------

.. data:: Store.config.url

	{String} - 异步加载数据时的url，只有需要异步加载数据时才使用，此属性是proxy 属性中url的快捷设置方式。

.. data:: Store.config.autoLoad

	{Boolean} - 默认：false，生成store时自动加载数据，如果此属性设置为false,那么要使用load方法加载数据。

.. data:: Store.config.dataType

	{String} - 默认：'json',异步加载数据时使用的方式。有2个值'json':一般的同域ajax请求，'jsonp'，跨域请求
	
	1. json : 返回数据的类型为 {"rows" : [],result : 100,hasError : false,error : null}
		rows中是返回的数据集合
		result 是数据的总数，用于分页，此值不一定等于rows.length
		hasError 如果发生错误时，返回hasError = true,此时触发 exception事件
		error: 仅当hasError = true时此字段有意义
	2. jsonp : 返回有意义的jsonp格式 例如 callback123([{"a" : 122}]);

.. data:: Store.config.sortInfo

	{Object} - 默认：{ field: '', direction: 'ASC' },排序信息，加载数据时会把排序信息传输到后台。

	field : 排序字段
	direction: 排序方向 'ASC','DESC'
	.. code-block:: javascript
		new Store({
			url : 'data.json',
			sortInfo : {
				 field: 'a', direction: 'DESC' 
			}
		});

.. data:: Store.config.proxy

	{Object} - 默认 { method: 'post',url : '',memeryData : null}，用于获取数据的配置
	
	method : ajax 请求的方式 ,'post'或者'get'
	url : 请求数据的地址
	memeryData : 设置本地数据源，如果使用分页控件则进行前端分页，默认为null,仅当url为空时有效。

.. data:: Store.config.params

	{Object} - 默认：{start : 0,limit : 0} 查询数据的键值对,start ：查询数据的起点，limit：请求数据的个数，这两个参数常用于分页

	.. code-block:: javascript

		new Store({
			url : 'data.json',
			params : {
				start : 1,
				limit : 30,
				omit : false //自定义参数
			}
		});

.. data:: Store.config.remoteSort

	{Boolean} - 默认：false，是否后台排序，默认是在前端排序，如果没有前端分页，那么会根据当前缓冲的数据进行排序，同时触发localsort事件

.. data:: Store.config.matchFunction
	
	{Function} - 比较2个对象是否相等的函数，主要用在添加、删除和修改记录时匹配对象。默认是 function(obj1,obj2){ return  obj1 === obj2 }

.. data:: Store.config.compareFunction
	
	{Function} - 比较2个值是否相等，主要用于按字段升降序排序时


Methods Detail
-----------------------------------------------  

.. method:: Store.prototype.add

	| **add(data,noRepeat,match)**
	| 添加数据
	
	:param Array|Object data : 添加的数据，可以是数组，可以是单条记录
	:param Boolean noRepeat : 是否去重,可以为空，默认： false 
	:param Function match : 匹配函数，检测是否有重复的对象。可以为空,默认使用config 中的 matchFunction

	.. code-block:: javascript 

		store.add({a : 123},true,function(obj1,obj2){
			return obj1.a === obj2.a;
		});

.. method:: Store.prototype.clear

	| **clear()**
	| 清除数据,清空所有数据

.. method:: Store.prototype.contains

	| **contains(record,match)**
	| 验证是否存在指定记录
	
	:param Object record: 指定的记录
	:param Function match : 匹配函数，检测是否有重复的对象。可以为空,默认使用config 中的 matchFunction
	:returns: 否存在指定记录
    :rtype: Boolean

.. method:: Store.prototype.findIndexBy

	| **findIndexBy(target,match)**
	| 查找数据所在的索引位置,若不存在返回-1

	:param Object target: 指定的记录
	:param Function match : 匹配函数，检测是否有重复的对象。可以为空,默认使用config 中的 matchFunction
	:returns: 索引位置
    :rtype: Number

.. method:: Store.prototype.find
	
	| **find(field,value)**
	| 查找记录，仅返回第一条
	
	:param String field :字段名
	:param Object value: value 字段值
	:returns: 如果存在则返回记录，否则返回null
    :rtype: Object

.. method:: Store.prototype.findByIndex
	
	| **findByIndex(index)**
	| 根据索引查找记录,返回查找到的记录，否则返回null

	:param Number index :索引值
	:returns: 如果存在则返回记录，否则返回null
    :rtype: Object
	

.. method:: Store.prototype.findAll

	| **findAll(field,value)**
	| 查找记录，返回所有符合查询条件的记录.返回一个数组

	:param String field :字段名
	:param Object value: value 字段值
	:returns: 返回记录集合
    :rtype: Array

.. method:: Store.prototype.findNextRecord

	| **findNextRecord(record)**
	| 获取下一条记录

	:param Object record :当前记录
	:returns: 如果存在则返回下一条记录，否则返回null
    :rtype: Object

.. method:: Store.prototype.load

	| **load(params)**
	| 加载数据,若不提供参数时，按照上次请求的参数加载数据，可以通过ajax,jsonp或者本地缓存的数据中加载数据

	:param Object params :自定义参数以对象形式提供，以键值对的形式存在

.. method:: Store.prototype.getResult

	| **getResult()**
	| 获取Store中缓存的数据集合

	:returns: 数据集合
    :rtype: Array

.. method:: Store.prototype.getCount
	
	| **getCount()**
	| 获取Store中缓存的数据的条数

	:returns: 数据条数
    :rtype: Number
	

.. method:: Store.prototype.getTotalCount

	| **getTotalCount()**
	| 获取数据源的总记录数，用于分页时，此数据跟当前缓存的记录数不相等

	:returns: 总记录数
    :rtype: Number

.. method:: Store.prototype.remove

	| **remove(data,match)**
	| 移除数据触发 removerecords 事件
	
	:param Array|Object data : 移除的数据，可以是数组，可以是单条记录
	:param Function match : 匹配函数，用于匹配要删除的记录。可以为空,默认使用config 中的 matchFunction

	.. code-block:: javascript 
		store.remove({a : 123},function(obj1,obj2){
			return obj1.a === obj2.a;
		});

.. method:: Store.prototype.setResult
	
	| **setResult(data)**
	| 设置缓存的数据集合，会触发 load事件

	:param Array data : 缓存的数据集合

.. method:: Store.prototype.setValue
	
	| **setValue(obj,field,value,isMatch)**
	| 设置记录的值 ，触发 updaterecord 事件
	
	:param Object obj: 修改的记录
	:param String field: 修改的字段名
	:param Object value: 修改的字段值
	:param Boolean isMatch: 默认 ：false，是否需要进行匹配，检测指定的记录是否在集合中

.. method:: Store.prototype.sort

	| **sort(field,direction)**
	| 排序，根据Store的配置进行，前端排序或发送请求重新加载数据
	| 远程排序，触发load事件，前端排序触发localsort事件

	:param String field: 排序字段
	:param String direction: 排序方向，'ASC'或者'DESC'

.. method:: Store.prototype.update

	| **update(obj,isMatch)**
	| 更新记录 ，触发 updaterecord 事件
	
	:param Object obj: 修改的记录
	:param Boolean isMatch: 默认 ：false，是否需要进行匹配，检测指定的记录是否在集合中


Events Detail
------------------------------------------------------

.. function:: Store.load

	| **load(e)**
    | 数据加载完成后

.. function:: Store.beforeload

	| **beforeload(e)**
    | 数据加载数据前

.. function:: Store.beforeProcessLoad

	| **beforeProcessLoad(e)**
    | 数据从数据源获取到数据，但是还未进行处理，发生在beforeload之前，里面包含从数据源获取的原始数据，可以获取附加的store不识别的数据

	:param Object e.data : 从服务器端返回的数据
	

.. function:: Store.addrecords

	| **addrecords(e)**
    | 当添加数据时触发该事件

	:param Object e.data : 添加的数据集合

.. function:: Store.exception

	| **exception(e)**
    | 加载数据发生异常时触发，或者后台返回错误时触发

	:param Object e.error : 加载数据时返回的错误信息或者加载数据失败，如果是网络错误或服务器错误使用浏览器返回的信息（httpResponse 对象 的textStatus）
	:param Object e.responseText :网络或者浏览器加载数据发生错误是返回的httpResponse 对象的responseTex t

.. function:: Store.removerecords

	| **removerecords(e)**
    | 当删除数据是触发该事件

	:param Object e.data : 删除的数据集合
	

.. function:: Store.updaterecord

	| **updaterecord(e)**
    | 当更新数据指定字段时触发该事件

	:param Object e.record : 更新的数据
	:param String e.field: 更新的字段名,整条更新记录时，此字段无效
	:param Object e.value: 更新的字段值,整条更新记录时，此字段无效

	

.. function:: Store.localsort

	| **localsort(e)**
    | 前端发生排序时触发

	:param String e.field: 排序字段
	:param String e.direction: 排序方向，'ASC'或者'DESC'