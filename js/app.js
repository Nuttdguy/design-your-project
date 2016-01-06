$(document).ready(function() {
	
	
	
	
	// Set-up input container to accept "URL", "PHOTO" AND MAYBE RANDOM COLOR
	
	
	// Create jSON function
	
	(function getColors() {
		
		
		var request = {
//			url: link,
			discover: 'true'
		}
		
		$.ajax({
			url: "http://www.colorfyit.com/api/swatches/list.json?url=http://www.html5rocks.com/en/tutorials/file/dndfiles&discover=true",
//			data: request,
			dataType: 'jsonp',
			type: 'GET'
		})
		.done(function(result) {
			
			console.log(result);
			
		})
	})();
	
//	getColors('http://www.html5rocks.com/en/tutorials/file/dndfiles');
	
	
})