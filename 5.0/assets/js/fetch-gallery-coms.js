KISSY.use(['node', 'io'], function(S, Node, IO){
    var $ = Node.all;
    
    function fetchGalleryComs(){
        IO({
            url : 'http://gallery.kissyui.com/api/star/list',
            data : {
                len : '4'
            },
            type : 'GET',
            dataType : 'jsonp',
            success : function(res){
                var comsData = res.result;
                var ulHtml = '<ul>';
                for(var i = 0; i < comsData.length; i++){
                    var comItem = comsData[i];
                    ulHtml += '<li><a class="coms-title" target="_blank" href="http://gallery.kissyui.com/' + comItem.name +'/doc/guide/index.html">' + comItem.name + '</a><p class="content" title="' + comItem.desc + '">' + comItem.desc + '</p></li>';
                }
                $('.gallery .list').html(ulHtml);
            }
        });
    }
    fetchGalleryComs();
});