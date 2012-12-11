
使用KISSY UA(检测userAgent类型)
===============================

Refer
```````````````````````````````````````````````````

:mod:`ua`


在页面中引入UA
```````````````````````````````````````````````````
.. code-block:: html

    <script src="http://docs.kissyui.com/kissy/build/seed.js"></script>
    <script>
        KISSY.use('ua',function(S){
            alert(S.UA); //KISSY.UA可以使用了
        });
    </script>

也可以直接引入core来使用ua，ua是core的子模块（不推荐）

.. code-block:: html

    <script src="http://docs.kissyui.com/kissy/build/seed.js"></script>
    <script>
        KISSY.use('core',function(S){
            alert(S.UA); //KISSY.UA可以使用了
        });
    </script>

.. note::

    由于core里有许多其他模块，除非你确定你用到了core里面的其他模块，否则我们推荐使用第一种方式来引入ua 
    
判断浏览器类型
````````````````````````````````````````````````````````

.. code-block:: html

    <script>
        KISSY.use('ua',function(S,UA){
            if(UA.chrome > 0){
                alert('Your browser is chrome');
            }else if(UA.safari > 0){
                alert('Your browser is safari');
            }else if(UA.opera > 0){
                alert('Your browser is opera');
            }else if(UA.firefox > 0){
                alert('Your browser is firefox');
            }else if(UA.ie > 0){
                alert('Your browser is ie');
            }else{
                alert('Your browser is unknown');
            }
        });    
    </script>
    
判断浏览器版本
```````````````````````````````````````````````````````````

.. code-block:: html

    <script>
        KISSY.use('ua',function(S,UA){
            if(UA.ie == 6){
                alert('Your browser is ie and version is 6');
            }else if(UA.ie == 7){
                alert('Your browser is ie and version is 7');
            }
        });    
    </script>

.. note::

    版本号也可以通过UA[UA.shell]来获取，版本号遵循以下规则：

    #. 表示当前引擎或浏览器的版本。版本号 1.2.3.4 会转换为数值 1.234
    #. 如果不是当前引擎或浏览器，返回 0 或者 undefined
    #. 如果当前浏览器版本号无法准确判定，均返回 0.1
    
判断浏览器内核
```````````````````````````````````````````````````````````

.. code-block:: html

    <script>
        KISSY.use('ua',function(S,UA){
            if(UA.core == 'webkit'){
                var version = UA.webkit;
                alert('Your browser is webkit and version is' + version);
            }else if(UA.core == 'gecko'){
                alert('Your browser is gecko');
            }else if(UA.core == 'trident'){
                alert('Your browser is trident');
            }else if(UA.core == 'presto'){
                alert('Your browser is presto');
            }
        });    
    </script>

判断设备os类型及版本
``````````````````````````````````````````````````````````

.. code-block:: html

    <script>
        KISSY.use('ua',function(S,UA){
            if(UA.os == 'windows'){
                alert('Your os is Windows');
            }else if(UA.os == 'Linux'){
                alert('Your os is Linux');
            }else if(UA.os == 'ios'){
                alert('Your os is ios and version is' + UA.ios);
                if(UA.ipad > 0){
                    alert('Your device is iPad');
                }else if(UA.iphone > 0){
                    alert('Your device is iPhone');
                }else if(UA.ipod > 0){
                    alert('Your device is iPod')
                }
            }else if(UA.os == 'android'){
                alert('Your os is Android');
            }
        });    
    </script>
        
判断mobile浏览器类型
``````````````````````````````````````````````````````````

.. code-block:: html

    <script>
        KISSY.use('ua',function(S,UA){
            if(UA.mobile == 'apple'){
                alert('Your device is Apple');
            }else if(UA.mobile == 'nokia'){
                alert('Your device is Nokia');
            }else if(UA.mobile == 'android'){
                alert('Your device is Android');
            }else if(UA.mobile == 'opera mini' || UA.mobile == 'opera mobi'){
                alert('Your browser is opera mobile');
            }
        });    
    </script>
    
判断浏览器外壳
``````````````````````````````````````````````````````````

.. code-block:: html

     <script>
        KISSY.use('ua',function(S,UA){
            if(UA.shell == 'chrome'){
                alert('Your browser is chrome and the version is' + UA[UA.shell]);
            }else if(UA.shell == 'se360'){
                alert('Your browser is 360浏览器');
            }else if(UA.shell == 'tt'){
                alert('Your browser is 腾讯TT浏览器');
            }else if(UA.shell == 'maxthon'){
                alert('Your browser is 遨游浏览器');
            }
        });    
    </script>
    
.. note::

    此处的外壳表示广义的外壳，即 IE, Firefox, Chrome, Opera, Safari 等浏览器都属于外壳。可以利用此标识符直接识别浏览器类型。 可以首先使用 UA.shell 返回的标识符判断当前浏览器类型，若需浏览器具体版本信息，可以再通过 UA[UA.shell] 取出版本号。

