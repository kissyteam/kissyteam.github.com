! function($) {

	$(function() {

		$('pre').addClass('prettyprint');
		prettyPrint();

		$('.bs-docs-content').find('table').addClass('table table-striped table-bordered');

		var h2_list = $('h2');
		var nav_list = $('.bs-docs-sidenav');
		for (var i = 0, len = h2_list.length; i < len; i++) {
			var cur_list = h2_list[i];
			var list_title = cur_list.innerHTML;
			var list_id = cur_list.id ? cur_list.id : cur_list.id = list_title.replace(/[&.?!;:\*\(\)\s]/g, '_');
			nav_list.append('<li><a href = "#' + list_id + '">' + list_title + '</a></li>');
		}

	});

}(window.jQuery);
