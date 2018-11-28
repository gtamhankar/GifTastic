function loadGifs(strSubject)
{	
	  // Constructing a queryURL using the subject name		
	  var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + strSubject + "&limit=9&offset=10&rating=PG-13&lang=en";
		
      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
         
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
			 i = 0 ;
		    while (i < results.length - 2)
			{
				var t1;
				var dd1;
				var dd2;
				var dd3;
				
				// using moment to format trending date 
				var dd = "N/A"
				if (results[i].trending_datetime == "0000-00-00 00:00:00")
					{dd1 = dd;}
				else
					{
						t1 = moment(results[i].trending_datetime).format('MM/DD/YYYY');
						dd1 = t1;
					}
				
				if (results[i+1].trending_datetime == "0000-00-00 00:00:00")
					{dd1 = dd;}
				else
					{
						t1 =  moment(results[i+1].trending_datetime).format('MM/DD/YYYY');  
						dd2 = t1;
					}

				if (results[i+2].trending_datetime == "0000-00-00 00:00:00")
					{dd1 = dd;}
				else
					{
						t1 = moment(results[i+2].trending_datetime).format('MM/DD/YYYY');
						dd3 = t1;
					}					
				
		  		  
		      var bigElement = $(
        `
		<div class="row">
			<div class="col-sm-4">
				<div class="card bg-success">
				<div class="card-title question"> 
					Title: ${results[i].title}<br>
					Rating: ${results[i].rating}<br>
					Trending Since: ${dd1}<br>
				</div>
				<div class="card-body options">
				<img class="card-img-top img-fluid gif border border-primary rounded bg-light" src=${results[i].images.fixed_height_still.url}  data-still=${results[i].images.fixed_height_still.url} data-animate=${results[i].images.fixed_height.url}  data-state='still' ></div>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="card bg-success">
				<div class="card-title">
					Title: ${results[i+1].title}<br>
					Rating: ${results[i+1].rating}<br>
					Trending Since: ${dd2}<br>
				</div>
				<div class="card-body">
    			<img class="card-img-top img-fluid gif border border-primary rounded bg-light" src=${results[i+1].images.fixed_height_still.url}  data-still=${results[i+1].images.fixed_height_still.url} data-animate=${results[i+1].images.fixed_height.url}  data-state='still' ></div>
			    </div>
			</div>
			<div class="col-sm-4">
				<div class="card bg-success">
				<div class="card-title">
					Title: ${results[i+1].title}<br>
					Rating: ${results[i+1].rating}<br>
					Trending Since: ${dd3}<br>
				</div>
    			<img class="card-img-top img-fluid gif border border-primary rounded bg-light" src=${results[i+2].images.fixed_height_still.url}  data-still=${results[i+2].images.fixed_height_still.url} data-animate=${results[i+2].images.fixed_height.url} data-state='still' ></div>
				</div>
			</div>
		</div>                                                  
		<div class="row"><br></div>
        `
        )
    $("#gifs-appear-here").append(bigElement);    

    i = i+3;
			
          }
        });
	
}

 
    // Adding click event listen listener to all buttons
    $(".searchgif").on("click", function() {      
      var strType = $(this).attr("data-catType");	 
      loadGifs(strType);		 		
    });  
	
		
	// pausing gifs-appear here
$(document).on("click", ".gif", function () {
	 console.log ("gif clicked **");
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    }); 

	
// clear the page
$("#btnClear").on("click", function() {
    document.getElementById("gifs-appear-here").innerHTML = "";
});	
	

// adds a new giphy each time
    $("#search-btn1").on("click", function() {

	var strCategory = $("#TextCategory").val().trim();
	if (strCategory.length == 0 )
	{
		alert ("Please enter search category.");
		return;
	}
    var bigElement1 = $(
        `
		<div class="row">
			<div class="col-sm-12">			           
			<button type="button" class="btn btn-link searchgif"  data-catType='${strCategory}' onclick="loadGifs('${strCategory}')";>${strCategory}</button>
		    </div>				
		</div>                                                  		
        `
        );
		
   $("#newButton").prepend(bigElement1);    
   loadGifs(strCategory);
   $("#TextCategory").val("");
   
	});	
	