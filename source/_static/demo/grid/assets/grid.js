KISSY.use('grid',function(S,Grid){

	var columns = [{
				title : '表头1',
				dataIndex :'a',
				sortState :'ASC'
			},{
				id: '123',
				title : '表头2',
				dataIndex :'b',
				sortable:false
			},{
				title : '表头3',
				dataIndex : 'c'
			},{
				id : 'colhide',
				title : '隐藏',
				dataIndex : 'd',
				hide : true
		}];
	(function(){
		var data = [{a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2}],
			store = new Grid.Store({
				autoLoad : false
			});
			
		var grid = new Grid({
			render:'#J_Grid',
			columns : S.clone(columns),
			//width:800,
			//forceFit:true,
			store : store
		});
		grid.render();
		store.setResult(data);
	})();
	(function(){
		var data = [{a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2}],
			store = new Grid.Store({
				autoLoad : false
			});
			
		var grid = new Grid({
			render:'#J_Grid1',
			columns :  S.clone(columns),
			width:800,
			forceFit:true,
			loadMask : true,
			plugins:[Grid.Plugins.CheckSelection],
			store : store
		});
		grid.render();
		store.setResult(data);
	})();
	(function(){
		var data = [{a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},{a:'cdd',b:'edd'},{a:'c3dd',b:'edd'},{a:'c22dd',b:'2222'},{a:'cdd',b:'ed333d'}],
			store = new Grid.Store({
				autoLoad : false,
				pageSize : 3,
				remoteSort : true,
				proxy :{
					memeryData : data	
				}
			});
			
		var grid = new Grid({
			render:'#J_Grid2',
			columns :  S.clone(columns),
			width:800,
			forceFit:true,
			plugins:[Grid.Plugins.CheckSelection],
			store : store,
			bbar : {xclass:'number-paggingbar',store : store}
		});
		grid.render();
		store.load();
	})();

	(function(){
		var data = [{a:'123'},{a:'cdd',b:'edd'},{a:'1333',c:'eee',d:2},{a:'cdd',b:'edd'},{a:'c3dd',b:'edd'},{a:'c22dd',b:'2222'},{a:'cdd',b:'ed333d'}],
			store = new Grid.Store({
				autoLoad : false,
				pageSize : 3,
				remoteSort : true,
				proxy :{
					memeryData : data	
				}
			});
			
		var grid = new Grid({
			render:'#J_GridFit',
			columns :  S.clone(columns),
			height:500,
			width:800,
			forceFit:true,
			plugins:[Grid.Plugins.CheckSelection],
			store : store,
			bbar : {xclass:'number-paggingbar',store : store}
		});
		grid.render();
		store.load();
	})();/**/
 });