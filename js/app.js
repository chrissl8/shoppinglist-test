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
		var listSize = $('.shopping-list li').length;
		 if(listSize < 1)
		 {
			//$('.click-to-check').hide();
			$('.no-items').show();
		 }
		 else
		 {
			$('.no-items').hide();
			//$('.click-to-check').show();
		 }
		$('#list-value').focus();
		}
	})
	
	$(document).on('click','.remove-item', function() {
		 $(this).closest('li').remove();
		 $('#list-value').focus();
		 var listSize = $('.shopping-list li').length;
		 if(listSize < 1)
		 {
		 	//$('.click-to-check').hide();
			$('.no-items').show();
		 }
		 else
		 {
			$('.no-items').hide();
			//$('.click-to-check').show();
		 }
	})

	$('.shopping-list li').click().toggleClass (
    function(){$('.shopping-list li').css({'background-color': 'red'});},
    function(){$('.shopping-list li').css({'background-color': '#FF99CC'});
})

});

