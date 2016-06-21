$(document).ready(function() {
	$("#add-item-button").click( function () {
		var mystring = "<li><input type='checkbox' id='new-needed-item' class='css-checkbox lrg'><label for='new-needed-item' name='new-needed-item_lbl' class='css-label lrg vlad'>" + $("input:text").val() + "</label><button type='button'>x</button></li>";
		$(".needed-items").prepend(mystring);
		$('input:text').val('');
		//alert($("input:text").val());
	});
})