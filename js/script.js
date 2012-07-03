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
	score1,
	score2,
	totalScore,
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
		score1 = $('#final1').val();
		score2 = $('#final2').val();
		totalScore = score1 + score2;
		crew1 = $('.crew1-name').val();
		crew2 = $('.crew2-name').val();
		$('#form-stuff').animate({
			left: '100%'}, 1000, function(){
			c++;
		});
	});
	// Advances Categories Upon Clicking
	$('html').click(function(){
		console.log(c);
		switch (c) {
			case 0:
				break;
			case 1:
				animateWin(fnd, "Foundation", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/found_big.png" />');
				break;
			case 2:
				animateWin(org, "Originality", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/og_big.png" />');
				break;
			case 3:
				animateWin(btl, "Battle", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/battle.png" />');
				break;
			case 4:
				animateWin(dyn, "Dynamics", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/dyna_big.png" />');
				break;
			case 5:
				animateWin(exe, "Execution", '<img class="cat-img" src="http://www.ourbboys.com/winners/img/exe_big.png" />');
				break;
			case 6:
				animateWin(winz, "the Battle", '' );
				break;
		}
	});


	// Runs Animation
	function animateWin(round, rnd, img) {
		win = round;
		winner = checkWinner(win);
		$('#main').html('<h2>The Winner of ' + rnd + ' is:</h2>' + img + '<h1 class="winner">' + winner + '</h1>').hide().fadeIn("slow");
		if (c == 6) {
			$('#main').append('<h3>With a score of ' + score1 + ' to ' + score2 + '</h3>');
		}
		c++;		
	}


	// Compares fields
	function checkWinner(win) {
		console.log(win);
		if (win == 'crew1') {
			return crew1;
		} else if (win == 'crew2') {
			return crew2;
		} else {
			return "tie";
		}
	}
});


