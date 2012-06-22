/* Author:
Scott Tolinski
*/


$(document).ready(function() {
	var crew1,
	crew2,
	c = 0;
	$('.crew1-name').focusout(function(){
		crew1 = $('.crew1-name').val();
		$('.radio1 span').html(crew1)
	})
	$('.crew2-name').focusout(function(){
		crew2 = $('.crew2-name').val();
		$('.radio2 span').html(crew2)
	})
	$('.go').click(function(){
		crew1 = $('.crew1-name').val();
		crew2 = $('.crew2-name').val();
		$('#form-stuff').fadeOut("slow", function(){
			c++;
			console.log(f);
		});
	});
	$('html').click(function(){
		console.log(c);
		if (c === 0) {
			return;
		} else if (c === 1) {
			var win = $('input:radio[name=optionsRadios]:checked').val();
			checkWinner(win);
			c++;
		}
	});
	function checkWinner(win) {
		console.log(win);

		if (win == 'crew1') {
			$('#main').html('<h1 class="winner">' + crew1 + '</h1>').hide().fadeIn("slow");	       
		} else {
			$('#main').html('<h1 class="winner">' + crew2 + '</h1>').hide().fadeIn("slow");
		}
	}
});


