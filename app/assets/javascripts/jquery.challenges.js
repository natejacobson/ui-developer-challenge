(function($){
	
	$(document).ready(function() {
	
		//Indicate active input on parent
		$('input[type="text"]').on("focus", function() {
			
			$(this).parent("dd").addClass("focused").prev("dt").addClass("focused");
			$(this).on("blur", function() {
				var value = $(this).val();
				if ( value != "" ) {
					$(this).parent("dd").removeClass("focused").addClass("edited").prev("dt").removeClass("focused").addClass("edited");
				} else {
					$(this).parent("dd").removeClass("focused").removeClass("edited").prev("dt").removeClass("focused").removeClass("edited");
				}
			});
			
		});
		
		//alert("hello");
	
	});

}(jQuery));

