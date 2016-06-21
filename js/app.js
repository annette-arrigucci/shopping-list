$(document).ready(function() {
	$("#add-item-button").click( function () {
		var mystring = "<li><input type='checkbox' id='new-needed-item' class='css-checkbox lrg'><label for='new-needed-item' name='new-needed-item_lbl' class='css-label lrg vlad'>" + $("input:text").val() + "</label><button type='button'>x</button></li>";
		$(".needed-items").prepend(mystring);
		$('input:text').val('');
		//alert($("input:text").val());
	})
    $('ul').on('click', '.css-checkbox', function(event){
    	//if($(".css-checkbox").prop("checked")==true)
    	//if(this.checked) == true
    	if ($(this).is(':checked'))
    	{
    		$(".checked-off-items").prepend($(this).parents("li"));
    			//$(this).parents("li").hide();
    	}
    	else if(!$(this).is(':checked')) {
    		$(".needed-items").prepend($(this).parents("li"));
    	}
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
    });
});