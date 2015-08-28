$(document).ready(function(){
	$('#add-item').submit(function(e){
		e.preventDefault(); //Prevents refresh
		var listValue = $('#list-value').val();
		if(listValue == new String(""))
		{

		}
		else {
		var listHTML = '<li>' +  listValue +  '</li>';
		$('.shopping-list').prepend(listHTML); //Add list element
		$('#list-value').val('');
		$('#list-value').focus();
		}
	});
});