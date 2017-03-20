$('#app').html(`

<div class="cssload-container">
	<div class="cssload-shaft1"></div>
	<div class="cssload-shaft2"></div>
	<div class="cssload-shaft3"></div>
	<div class="cssload-shaft4"></div>
	<div class="cssload-shaft5"></div>
	<div class="cssload-shaft6"></div>
	<div class="cssload-shaft7"></div>
	<div class="cssload-shaft8"></div>
	<div class="cssload-shaft9"></div>
	<div class="cssload-shaft10"></div>
</div>



	`);


setTimeout(function(){
	x();
},2000);



function x(){
$.ajax({
	url: "https://www.omdbapi.com/?t=Detective Conan: The Eleventh Striker"


}).done(function(res){
	console.log(res);
	let html = `
	
	<div>
	<center><img src="img/bannerb.jpg" style="width:1348px;height:330px;"></center>
	</div>

	<div class="row">
    <div class="col s12">
    <ul class="center-align" class="well">
            <a class="button" href="/"><img src="img/cute-little-house-png-image-2940.png" style="width:120px;height:170px;"></a>
            <a class="button" href="/movie1"><img src="img/1 (1).jpg" style="width:120px;height:170px;"></a>
            <a class="button" href="/movie2"><img src="img/1 (5).jpg" style="width:120px;height:170px;"></a>
            <a class="button" href="/movie3"><img src="img/1 (4).jpg" style="width:120px;height:170px;"></a>
            <a class="button" href="/movie5"><img src="img/1 (3).jpg" style="width:120px;height:170px;"></a>
            </ul>
            </div>
          </div>


	<h1><center>${res.Title}</center></h>
	<h3><center>${res.Plot}</center></h3>
	<h4><center>${res.Genre}</center></h4>
	<h4><center>${res.Year}</center></h4>
	<h6 class="center-align"><img src="${res.Poster}"/></h6>
	<h4><center>${res.Actors}</center></h4>

	<div>
  	<p class="ridge"></p>
    <p class="ridge"></p>
  	</div>

	
	<div>
	<h7><center>'Trailer'</center></h7>
	<center><iframe width="700" height="415" src="https://www.youtube.com/embed/vNIJRPAO7rw" frameborder="0" allowfullscreen></iframe></center>
	</div>


	<div>
  	<p class="ridge"></p>
    <p class="ridge"></p>
  	</div>


	<div>
    <h10><center>You can Watch the Movie on this link <a href="https://ww1.gogoanime.io/detective-conan-movie-16-the-eleventh-striker-episode-1">
    "Detective Conan: The Eleventh Striker"</a>.</center></h10>
    </div>


	<div>
	<center><img src="img/downhead.jpg" style="width:1348px;height:48px;"></center>
	</div>



	`;


$('#app').html(html);


});
}