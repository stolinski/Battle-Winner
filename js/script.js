/* Author:
Scott Tolinski
*/


$(document).ready(function() {
	var crew1,
	crew2,
	winner,
	win,
	fnd,
	org,
	btl,
	dyn,
	exe,
	winz,
	c = 0;
	// Sets Crew Names to categories 
	$('.crew1-name').focusout(function(){
		crew1 = $('.crew1-name').val();
		$('.radio1 span').html(crew1)
	})
	$('.crew2-name').focusout(function(){
		crew2 = $('.crew2-name').val();
		$('.radio2 span').html(crew2)
	})
	// Runs The show
	$('.go').click(function(){
		fnd = $('input:radio[name=fnd]:checked').val();
		org = $('input:radio[name=org]:checked').val();
		btl = $('input:radio[name=btl]:checked').val();
		dyn = $('input:radio[name=dyn]:checked').val();
		exe = $('input:radio[name=exe]:checked').val();
		winz = $('input:radio[name=win]:checked').val();
		crew1 = $('.crew1-name').val();
		crew2 = $('.crew2-name').val();
		$('#form-stuff').animate({
			left: '100%'}, 1000, function(){
			c++;
		});
	});
	// Advances Upon Clicking
	$('html').click(function(){
		console.log(c);
		switch (c) {
			case 0:
				break;
			case 1:
				animateWin(fnd, "Foundation");
				break;
			case 2:
				animateWin(org, "Originality");
				break;
			case 3:
				animateWin(btl, "Battle");
				break;
			case 4:
				animateWin(dyn, "Dynamics");
				break;
			case 5:
				animateWin(exe, "Execution");
				break;
			case 6:
				animateWin(winz, "the Battle");
				break;
		}
	});


	// Runs Animation
	function animateWin(round, rnd) {
		win = round;
		winner = checkWinner(win);
		$('#main').html('<h2>The Winner of ' + rnd + ' is:</h2><h1 class="winner">' + winner + '</h1>').hide().fadeIn("slow");
		c++;		
	}


	// Compares fields
	function checkWinner(win) {
		console.log(win);
		if (win == 'crew1') {
			return crew1;
		} else if (win == 'crew1') {
			return crew2;
		} else {
			return "tie";
		}
	}
});


