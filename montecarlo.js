$(document).ready(function(){

  var a = 1,
	r = x0 = y0 = a/2,
	random,
	pCircle = pSquare = 0,
	Pi,
	Suma = 0,
	n = 0,
	interval;
	
	liczPi = function() {
		randomX = Math.random();
		randomY = Math.random();
		
		d = Math.sqrt( Math.pow(randomX - x0, 2) + Math.pow(randomY - y0, 2) );
		
		(d <= r) ? pCircle++ : pSquare++;
		
		Pi = 4 * (pCircle / (pCircle + pSquare) );
		
		Suma += Pi;
		n++;
		
		console.log(Pi);
	}
	
	showStatictics = function() {
		var srednia = Suma / n;
		console.log('Wylosowanych liczb Pi: ' + n);
		console.log('Ich srednia: ' + srednia);
	}


	console.log('test');
	$('#start').on('click',function(){
		console.log('start');
		interval = setInterval(liczPi, 50);
	});

	$('#stop').on('click',function(){
		console.log('stop');
		clearInterval(interval);
		showStatictics();
	});
	
});
