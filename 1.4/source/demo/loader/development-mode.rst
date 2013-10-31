.. currentmodule:: seed

development-mode 使用示例
===============================


    .. raw:: html

        <iframe width="100%" height="200" class="iframe-demo" src="/1.4/source/raw/demo/loader/run.html"></iframe>

    .. code-block:: javascript

        KISSY.config({
            'packages': {
                biz: {
                    base: './assets/',
                    combine: false
                }
            }
        });
        KISSY.use('biz/page/run,' +
            // simple css module
                'biz/z.css', function (S, run) {
            S.ready(function () {
                S.all('body').text(run);
            });
        });

