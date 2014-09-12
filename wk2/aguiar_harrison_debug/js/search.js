/*
  Harrison Aguiar
  Date: 9/7/14
 Assignment: Buggy Search v1 

 Programming for Web Applications I - Online
 Professor: FIALISHIA OLOUGHLIN
*/

// Create privatized scope using a self-executing function
(function(){		// self-executing function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),				//define DOM element for search RESULTS
		searchInput = document.forms[0].search,							//define DOM element for search INPUT
		currentSearch = ''												//define current search as empty string
;
	console.log("Begin Searching!");									//print to browser console.log "Begin Searching"
	
	// Validates search query
	var validate = function(query){										//assign anonymous function to variable validate
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){									//start while loop that to see if query is empty
			query = query.substring(1, query.length);					//extract empty space between index position 1 and the end of query
		};
		while(query.charAt(query.length-1) === ""){						//start while loop that to see if query last input is empty
			query = query.substring(0, query.length-1);					//extract empty space between start of query and the second last character
		};
		
		// Check search length, must have 3 characters
		if(query.length < 3){											//conditional logic to determine if search length is < 3 characters
			alert("Your search query is too small, try again.");		//if so, alert "Your search query is too small, try again."
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();										//return result
			return;
		};
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query){										//assign anonymous function to variable search
		
		// split the user's search query string into an array
		var queryArray = query.split(" ");								// define variable for search query into an array
		
		// array to store matched results from database.js
		var results = [];												//define variable for matched results from database into an array 

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){							//if one index of query is < than query in database length, execute the code that loops through each index of database array 

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');						//define variable for each database index to each title that ends with a pipe 
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);	//define variable for lowercase database index of video title
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){			//if two indexes of query is < than query in database length, execute the code that loops through each index of database array
				var qitem = queryArray[ii].tolowercase();				//define variable for lowercase search keyword
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);						//define variable to compare database item to index query item 
				if(compare !== -1){											//conditional logic to determine if compare is not equal to -1
					results.push(db[i]);									//add index from database index into the result query
				};
			};
			};
		
		results.sort();														//sort results
		
		// Check that matches were found, and run output functions
		if(results.length === 0){												//conditional logic to determine if	results length is equal to 0										
			noMatch();														//if so, no matching
		}else{																//else
			showMatches(results);											// show matching results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){												//assign anonymous function to variable to show no match
		var html = ''+														//define variable to html
			'<p>No Results found.</p>'+										//show 'No Results found'.
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' // show hint  'Try searching for "JavaScript".  Just an idea.'
	;
		resultsDIV.innerHTML = html;										//show variable html into html page
};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){									//assign anonymous function to variable to show matches
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 										//define variable to html showing list of results
			title, 															// show results' title	
			url																//show results' url
	};
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){						//if one index of query is < than query in search results length, execute the code that loops through each index of search results array 
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');							//results title end with index with pipe
			title = results[i].substring(0, titleEnd);					//pull the title's string between start of results and the title end
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //pull the video url after the video title
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //show video link results with the url and title of the video
		;
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. //show variable html into html page
		};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ 			//define DOM element for onsubmit event function 
		var query = searchInput.value;					//define variable for search input value
		validate(query);								//validate query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;								//return false to exit function
	};

})();