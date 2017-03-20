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
},3000);



function x(){
$.ajax({
	url: "https://www.omdbapi.com/?t=Detective Conan"


}).done(function(res){
	console.log(res);
	let html = `
	
	<div>
	<center><img src="img/bannerb.jpg" style="width:1348px;height:330px;"></center>
	</div>


   <h1><center><img src="img/2b.png" style="width:45px;height:75px;">${res.Title}<img src="img/2b.png" style="width:45px;height:75px;"></center></h>

    <h9><center>Manga cover</center></h9>
     <center><img src="img/Volume_1.jpg" style="width:445px;height:615px;"></center>

 <div>
    <p class="ridge"></p>
    </div>
    
    <div>
    <h8><center>Detective Conan is a Japanese detective manga series, anime series and movies. 
    You can read it's manga on this link <a href="http://www.mangatown.com/manga/detective_conan">
    "manga/detective_conan"</a>.
    And watch it's anime series and movies on this link <a href="https://ww1.gogoanime.io//search.html?keyword=detective%20conan">
    "gogoanime.io/detective_conan"</a></center></h8>
    </div>

 <div>
    <p class="ridge"></p>
    </div>

    <div>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">More Information</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/Characters">Characters</a></li>
        <li><a href="/Anime">Anime</a></li>
        <li><a href="/Manga">Manga</a></li>
      </ul>
    </div>
  </nav>
   </div>

  	<div>
	<center><img src="img/downhead.jpg" style="width:1348px;height:48px;"></center>
	</div>
	`;



$('#app').html(html);
$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({fullWidth: true});
$('.carousel').carousel()
$(document).ready(function(){
$('.carousel').carousel();
    });

});
}

