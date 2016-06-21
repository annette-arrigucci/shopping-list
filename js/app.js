$(document).ready(function() {
	$("#add-item-button").click( function () {
		var itemname = $("input:text").val();
		var mystring = "<li><input type='checkbox' id='" + itemname + "' class='css-checkbox lrg'><label for='" + itemname +"' name='"+ itemname +"_lbl' class='css-label lrg vlad'>" + itemname + "</label><button type='button' class='delete-button'>x</button></li>";
		$(".needed-items").prepend(mystring);
		$('input:text').val('');
	})
    $('ul').on('click', '.css-checkbox', function(event){
    	
    	if ($(this).is(':checked'))
    	{
    		$(".checked-off-items").prepend($(this).parents("li"));
    	}
    	else if(!$(this).is(':checked')) {
    		$(".needed-items").prepend($(this).parents("li"));
    	}
    })
    $('ul').on('click', '.delete-button', function(event){
    	$(this).parents("li").remove();
    });
});