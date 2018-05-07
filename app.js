"use strict";

'use strict'
function makeGrid() {
	$('.gridForm').submit(function(m) {
		m.preventDefault(); //prevent page reload
		$('#pixels').html(''); // prevent adding new cells to old
		
		let x=$('#gridHeight').val(); // value of height
		let y=$('#gridWidth').val();  // value of width

		for(let i=0; x>i;x--){
			$('#pixels').append('<tr><td></td></tr>'); //create table - height
		}

		for(let j=1; y>j ;y--){
			$('tr').append('<td></td>');//create table - width
		} 	
	});
}

function draw(){  
	$('table').on( "click", "td", function() {
		let $c=$('#colorCanvas').val();//take color from picker
		$( this ).css({'background-color': $c });//change td background
	});
}
function erase(){  
	$('table').on( "contextmenu", "td", function(e) {
		e.preventDefault();
		$( this ).css('background-color','white' ); // make td white on right clicks
	});
}

makeGrid();
draw();
erase();
