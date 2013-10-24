KISSY.config('packages', {
    yModule: {
        base: './assets/'
    }
});

KISSY.add('xModule', "{{include 'yModule'}}", {
  requires: ['./yModule']
});