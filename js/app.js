$(document).ready(function(){

	$('#add-item').submit(function(e){
		e.preventDefault(); //Prevents refresh
		var listValue = $('#list-value').val();
		if(listValue == new String(""))
		{

		}
		else {
		var listHTML = '<li><a class="remove-item">X</a> • ' +  listValue +  '</li>';
		$('.shopping-list').prepend(listHTML); //Add list element
		$('#list-value').val('');
		$('#list-value').focus();
		}
	})
	
	$(document).on('click','.remove-item', function() {
		console.log("Works!");	
		 $(this).closest('li').remove();
		 $('#list-value').focus();
	})

});