.. currentmodule:: seed

concat for production 使用示例
===============================


    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="/1.4/source/raw/demo/loader/build/run.html"></iframe>

    .. code-block:: javascript

        KISSY.config({
            'packages': {
                biz: {
                    base: './'
                }
            }
        });
        KISSY.importStyle('biz/page/run,biz/z.css');

        KISSY.use('biz/page/run', function (S, run) {
            S.ready(function () {
                S.all('body').text(run);
            });
        });

