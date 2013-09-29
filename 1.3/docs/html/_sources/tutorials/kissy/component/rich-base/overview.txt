
RichBase 概述
===========================

author: `左莫 <zuomo@taobao.com>`_

RichBase是一个基础类，通过继承RichBase可以以一种统一的方式创建自己的具有新的属性、并可作为事件目的(RichBase继承自Base，所以拥有Attribute，EventTarget的能力)的类。

如何引用
-------------------------------------

要使用RichBase，首先要引入KISSY的种子文件

html代码：


.. code-block:: html

    <script src="http://dev.kissyui.com/kissy/build/seed-min.js"></script>


.. code-block:: javascript

    KISSY.use('rich-base',function(S,RichBase){

    });


or


.. code-block:: javascript

    KISSY.add("brix/core/chunk", function(S, RichBase) {
        
    }, {
        requires: ["rich-base"]
    });



继承RichBase
-------------------------------------

下面的代码定义完，Chunk就和RichBase有了同样的功能


.. code-block:: javascript

    KISSY.add("brix/core/chunk", function(S, RichBase) {
        var Chunk = RichBase.extend({},{});
        return Chunk;
    }, {
        requires: ["rich-base"]
    });
    


接下来会为大家介绍更多……


构造函数
````````````````````````````````````````

我们上面定义的Chunk类并没有显示指定构造函数，RichBase内部会动态的构建一个function作为Chunk的构造函数，并且名字是"RichBaseDerived",要显示的指定名称，只需要在在继承的最后一个参数写上名称即可


.. code-block:: javascript

    var Chunk = RichBase.extend({},{},'Chunk');


那如果我们需要显示的定义构造函数应该怎么办呢,看下面的代码？


.. code-block:: javascript

    var Chunk = RichBase.extend({
        constructor: function Chunk() {
            var self = this;
            //显示的调用父类的构造函数，这句很重要。
            Chunk.superclass.constructor.apply(self, arguments);
        }
    },{});
    
    

初始化函数和析构函数
````````````````````````````````````````

RichBase在初始化时会自动调用各级类的initializer函数，在析构时会自动调用destructor函数，所以有初始或者析构处理只需定义相应的函数就可以了，不用显式调用父类的函数。


.. code-block:: javascript

    var Chunk = RichBase.extend({
        initializer: function() {

        },
        destructor: function() {

        }
    },{});



ATTRS属性
````````````````````````````````````````

可以用关联矩阵(associative array)的方式定义类的属性和配置参数,具体请查看“[Base ATTRS](http://docs.kissyui.com/docs/html/api/core/base/base.html)”



.. code-block:: javascript

    var Chunk = RichBase.extend({
    },{
        ATTRS: {
            attr: {
                valule:value,
                valueFn:function(){
                },
                setter:function(){
                },
                getter: function(s) {
                }
            }
    });
    

ATTRS的bind和sync
````````````````````````````````````````

RichBase提供了对属性值初始化的同步以及变化的事件监听。先看一下代码



.. code-block:: javascript

    var Chunk = RichBase.extend({
        _onSetName:function(){
        }
    },{
        ATTRS: {
            name: {
                valule:value,
                valueFn:function(){
                },
                setter:function(){
                },
                getter: function(s) {
                }
            }
    });
    
    

实例化Chunk类并设置attr属性值

.. code-block:: javascript

    var chunk = new Chunk({name:1});
    chunk.set('name',2);

上面的实例化和设置属性值，都会同步调用到类中定义的_onSetAttr函数。具体的调用可查看RichBase源码中的bindInternal和syncInternal函数。


Plugins
-------------------------------------

Plugins机制可以用来在类的实例（而不是类本身）上动态添加特性。RichBase提供了一个配置（plugins）和三个函数（plug、unplug和getPlugin）用来管理插件。

plugins
````````````````````````````````````````

plugins的类型是Array，在类实例化的时候实例化plugin，并调用plugin的pluginInitializer初始化函数。在销毁的时候调用pluginDestructor析构函数。

plug(plugin)
````````````````````````````````````````

参数plugin可以是类，也可以是实例，如果是类则无参实例化plugin。
两者都会调用plugin的pluginInitializer初始化函数

直接传实例化的示例代码：



.. code-block:: javascript

    new Editor().plug(new FontSize({
      default: '14px'
    }))
    


unplug(plugin)
````````````````````````````````````````

从plugins数组中移除plugin，并调用pluginDestructor析构函数。


getPlugin(id)
````````````````````````````````````````

通过类plugin定义的的p.get('pluginId') || p.pluginId来拿到plugin的实例。



扩展
-------------------------------------

RichBase的extend还提供了扩展功能，把一个主类与多个扩充类合并为一个新类。KISSY内部的很多组件都是基于这个完成的。

给个Overlay示例代码吧,具体的Overlay的实现并不仅仅如此


.. code-block:: javascript

    var Overlay = RichBase.extend([
            Extension.Box,
            Extension.Position,
            Loading,
            Extension.Align,
            Close,
            Mask,
            OverlayEffect
        ], {}, {
            ATTRS: {}
    });


listeners
-------------------------------------

这个配置项是用来在实例化类的时候增加事件的监听,看一下代码你就明白了。


.. code-block:: javascript

    var chunk = new Chunk({
            attr:1,
            listeners:{
                myfire:function(e){
                    
                },
                hefire :{
                    fn:function(){},
                    //上下文
                    context:{}  
               }
            }});
    chunk.fire('myfire');
    

总结
-------------------------------------

RichBase为我们提供了如此多的特性，采用KISSY开发模块和组件的同学，果断的用RichBase吧。