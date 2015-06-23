$(function() {

	for (var i = 0; i < roles.length; i++) {
		$("#product-list").append("<div id='product-list-item"+ (i+1) +"' class='col-sm-6 col-md-3'><h4>"+roles[i].type+"</h4><img src='"+roles[i].image+"'/><strong class='price'>"+ roles[i].price +" XRP</strong><input type='radio' name='role' value='"+ (i+1)+ "'></div>");	
	}
	// JavaScript
	var borderEl = document.createElement("div");
		borderEl.id = "selected-border";
	// convert to jQuery
	var $borderEl = $(borderEl);
	
	$borderEl.hide();

	var borderT = $("#product-list-item1").position().top,
		borderL = $("#product-list-item1").position().left,
		borderW = $("#product-list-item1").outerWidth(),
		borderH = $("#product-list-item1").outerHeight();

	$("#product-list").append($borderEl);
	$borderEl.css({top: borderT, left: borderL, width: borderW, height: borderH });

	function borderPost(item) {
		borderT = $("#"+item).position().top;
		borderL = $("#"+item).position().left;
		borderW = $("#"+item).outerWidth();
		borderH = $("#"+item).outerHeight();
	}

	$("#product-list").on("click", function(e) {

		var $item = $(e.target).closest("div"),
			itemId = $item.attr("id"),
			input = $item.children("input");

		$borderEl.show();
		borderPost(itemId);

		$borderEl.animate({ top: borderT, left: borderL, width: borderW, height: borderH }, 
		400, "easeOutQuart");
		
		input.prop('checked', true);

		$(window).on("resize", function() {
			borderPost(itemId);
			$borderEl.css({ top: borderT, left: borderL, width: borderW, height: borderH });
		});
	});

});


