$(function() {

	for (var i = 0; i < roles.length; i++) {
		$("#product-list").append("<div id='product-list-item"+ (i+1) +"' class='col-sm-6 col-md-3'><h4>"+roles[i].type+"</h4><img src='"+roles[i].image+"'/><strong class='price'>"+ roles[i].price +" XRP</strong><input type='radio' name='role' value='"+ (i+1)+ "'></div>");	
	}

	var borderEl = document.createElement("div");
		borderEl.id = "selected-border";
		$borderEl = $(borderEl);

	var testTop = $("#product-list-item1").position().top;
		testLeft = $("#product-list-item1").position().left;
		testWidth = $("#product-list-item1").outerWidth();
		testHeight = $("#product-list-item1").outerHeight();

	$("#product-list").append($borderEl);
	$borderEl.css({top: testTop, left: testLeft, width: testWidth, height: testHeight });

		// console.log($borderEl);

});