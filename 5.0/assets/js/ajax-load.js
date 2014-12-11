KISSY.use('node,tabs,io,util', function(S, Node, Tabs, Io,Util){
	var $ = Node.all;

	function editDemoOnlineInit(){
		$('.editor').each(function(item$){
			var demoHtml = Util.unEscapeHTML(item$.html().trim());
			var iframeWindow = item$.parent('.ks-tabs-body').all('.output')[0].contentWindow;
			iframeWindow.document.body.innerHTML = '';
			iframeWindow.document.write(demoHtml);
			console.log('document.write done');
			var editor = ace.edit(item$[0]);
			editor.setTheme("ace/theme/github");
	    	editor.getSession().setMode("ace/mode/html");
	    	console.log('editor init done');
	    	iframeWindow.editor = editor;
		});

		$('.ks-tabs').each(function(item$){
			new Tabs({
		    	srcNode : item$,
		    	listeners:{
		            afterSelectedTabChange:function(e){
		            	if(e.newVal.$el.html() === 'Output'){ //如果是切换到Output
		            		var iframeWindow = item$.all('.ks-tabs-body .output')[0].contentWindow;
		            		iframeWindow.document.body.innerHTML = '';
		    				iframeWindow.document.write(iframeWindow.editor.getValue());
		            	}
		            }
		        }
		    }).render();	
		});

		//生成二维码
		createQRCode();

	}

	function createQRCode(){
		$('.qrcode-addr').each(function(item$){
			var qrcodeAddr = item$.attr('qrcodeaddr'),
				qrcodeContainer$ = item$.parent('.qrcode-wrap').one('.qrcode');
            new QRCode(qrcodeContainer$[0], qrcodeAddr);   //生成二维码

		})
	}

	//demo页面初次加载时先初始化
	window.location.href.indexOf('/5.0/demos') > -1 && editDemoOnlineInit();

	// if(location.href.indexOf('5.0/guides') > -1){
		// var sidebar$ = $('#sidebar'),
		// 	sidebarLeft = sidebar$.offset().left,
		// 	sidebarTop = sidebar$.offset().top,
		// 	sidebarWidth = sidebar$.innerWidth();
		// window.onscroll = function(){
		// 	var scrollTop = document.body.scrollTop;
		// 	if(scrollTop > sidebarTop){
		// 		sidebar$.css({
		// 			position : 'fixed',
		// 			left : sidebarLeft,
		// 			top : 0,
		// 			width : sidebarWidth,
		// 			marginTop : '0px'
		// 		});
		// 	}else{
		// 		sidebar$.css({
		// 			position : '',
		// 			left : '0px',
		// 			marginTop : '100px'
		// 		});
		// 	}
		// }
	// }
});




