$(function() {

	for (var i = 0; i < roles.length; i++) {
		$("#product-list").append("<div id='product-list-item"+ (i+1) +"' class='col-sm-6 col-md-3'><h4>"+roles[i].type+"</h4><img src='"+roles[i].image+"'/><strong class='price'>"+ roles[i].price +" XRP</strong><input type='radio' name='role' value='"+ (i+1)+ "'></div>");	
	}

	var borderEl = document.createElement("div");
		borderEl.id = "selected-border";
		$borderEl = $(borderEl);

	var boderTop = $("#product-list-item1").position().top;
		borderLeft = $("#product-list-item1").position().left;
		

	$("#product-list").append($borderEl);
	function() {
		$borderEl.css({top: borderTop, left: borderLeft, width:  });
	}

		// console.log($borderEl);

});