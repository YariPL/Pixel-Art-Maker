function makeGrid() {
	$('.gridForm').submit(function(e) {
		e.preventDefault();
		$('#pixels').html('');
		
		let x=$('#gridHeight').val(); // value of height
		let y=$('#gridWidth').val();  // value of width

		for(i=0; x>i;x--){
			$('#pixels').append('<tr><td></td></tr>');
		}

		for(j=1; y>j ;y--){
			$('tr').append('<td></td>');
		} 	
	});
}

function draw(){  
	$('table').on('click', "td", function() {
		let $c=$('#colorCanvas').val();
		$( this ).css({'background-color': $c });
	});
}

	

makeGrid();
draw();
