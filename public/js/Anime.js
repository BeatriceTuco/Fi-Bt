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
  <h13><center>Episode List of Seasons</center></h13>



  <div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><table id="toc" class="toc"><div id="toctitle"><center><h2>Contents</h2></center></div>
  <h15><center>
  <li class="toclevel-1 tocsection-1"><a href="#Episodes"><span class="tocnumber"></span><span class="toctext">Episodes</span></a>
  <ul>
  <li class="toclevel-2 tocsection-2"><a href="#Season_1_-_Episodes_1-28"><span class="tocnumber">1.1</span> <span class="toctext">Season 1 - Episodes 1-28</span></a></li>
  <li class="toclevel-2 tocsection-3"><a href="#Season_2_-_Episodes_29-54"><span class="tocnumber">1.2</span> <span class="toctext">Season 2 - Episodes 29-54</span></a></li>
  <li class="toclevel-2 tocsection-4"><a href="#Season_3_-_Episodes_55-82"><span class="tocnumber">1.3</span> <span class="toctext">Season 3 - Episodes 55-82</span></a></li>
  <li class="toclevel-2 tocsection-5"><a href="#Season_4_-_Episodes_83-106"><span class="tocnumber">1.4</span> <span class="toctext">Season 4 - Episodes 83-106</span></a></li>
  <li class="toclevel-2 tocsection-6"><a href="#Season_5_-_Episodes_107-134"><span class="tocnumber">1.5</span> <span class="toctext">Season 5 - Episodes 107-134</span></a></li>
  <li class="toclevel-2 tocsection-7"><a href="#Season_6_-_Episodes_135-162"><span class="tocnumber">1.6</span> <span class="toctext">Season 6 - Episodes 135-162</span></a></li>
  <li class="toclevel-2 tocsection-8"><a href="#Season_7_-_Episodes_163-193"><span class="tocnumber">1.7</span> <span class="toctext">Season 7 - Episodes 163-193</span></a></li>
  <li class="toclevel-2 tocsection-9"><a href="#Season_8_-_Episodes_194-216"><span class="tocnumber">1.8</span> <span class="toctext">Season 8 - Episodes 194-216</span></a></li>
  <li class="toclevel-2 tocsection-10"><a href="#Season_9_-_Episodes_217-254"><span class="tocnumber">1.9</span> <span class="toctext">Season 9 - Episodes 217-254</span></a></li>
  <li class="toclevel-2 tocsection-11"><a href="#Season_10_-_Episodes_255-285"><span class="tocnumber">1.10</span> <span class="toctext">Season 10 - Episodes 255-285</span></a></li>
  <li class="toclevel-2 tocsection-12"><a href="#Season_11_-_Episodes_286-315"><span class="tocnumber">1.11</span> <span class="toctext">Season 11 - Episodes 286-315</span></a></li>
  <li class="toclevel-2 tocsection-13"><a href="#Season_12_-_Episodes_316-353"><span class="tocnumber">1.12</span> <span class="toctext">Season 12 - Episodes 316-353</span></a></li>
  <li class="toclevel-2 tocsection-14"><a href="#Season_13_-_Episodes_354-389"><span class="tocnumber">1.13</span> <span class="toctext">Season 13 - Episodes 354-389</span></a></li>
  <li class="toclevel-2 tocsection-15"><a href="#Season_14_-_Episodes_390-426"><span class="tocnumber">1.14</span> <span class="toctext">Season 14 - Episodes 390-426</span></a></li>
  <li class="toclevel-2 tocsection-16"><a href="#Season_15_-_Episodes_427-465"><span class="tocnumber">1.15</span> <span class="toctext">Season 15 - Episodes 427-465</span></a></li>
  <li class="toclevel-2 tocsection-17"><a href="#Season_16_-_Episodes_466-490"><span class="tocnumber">1.16</span> <span class="toctext">Season 16 - Episodes 466-490</span></a></li>
  <li class="toclevel-2 tocsection-18"><a href="#Season_17_-_Episodes_491-527"><span class="tocnumber">1.17</span> <span class="toctext">Season 17 - Episodes 491-527</span></a></li>
  <li class="toclevel-2 tocsection-19"><a href="#Season_18_-_Episodes_528-565"><span class="tocnumber">1.18</span> <span class="toctext">Season 18 - Episodes 528-565</span></a></li>
  <li class="toclevel-2 tocsection-20"><a href="#Season_19_-_Episodes_566-605"><span class="tocnumber">1.19</span> <span class="toctext">Season 19 - Episodes 566-605</span></a></li>
  <li class="toclevel-2 tocsection-21"><a href="#Season_20_-_Episodes_606-645"><span class="tocnumber">1.20</span> <span class="toctext">Season 20 - Episodes 606-645</span></a></li>
  <li class="toclevel-2 tocsection-22"><a href="#Season_21_-_Episodes_646-680"><span class="tocnumber">1.21</span> <span class="toctext">Season 21 - Episodes 646-680</span></a></li>
  <li class="toclevel-2 tocsection-23"><a href="#Season_22_-_Episodes_681-715"><span class="tocnumber">1.22</span> <span class="toctext">Season 22 - Episodes 681-715</span></a></li>
  <li class="toclevel-2 tocsection-24"><a href="#Season_23_-_Episodes_716-739"><span class="tocnumber">1.23</span> <span class="toctext">Season 23 - Episodes 716-739</span></a></li>
  <li class="toclevel-2 tocsection-25"><a href="#Season_24_-_Episodes_740-778"><span class="tocnumber">1.24</span> <span class="toctext">Season 24 - Episodes 740-778</span></a></li>
  <li class="toclevel-2 tocsection-26"><a href="#Season_25_-_Episodes_779-present"><span class="tocnumber">1.25</span> <span class="toctext">Season 25 - Episodes 779-present</span></a></li>
  <li class="toclevel-2 tocsection-27"><a href="#Manga_chapters_not_yet_scheduled_to_animate"><span class="tocnumber">1.26</span> <span class="toctext">Manga chapters not yet scheduled to animate</span></a></li>
  </ul>
  </li>
  </center>
  </h15>


    <div>
    <p class="ridge"></p>
    </div>


    <div>
    <h14><center>To learn more about the Episode lists you can visit this link <a href="http://www.detectiveconanworld.com/wiki/Anime">
    "Anime/detective_conan"</a>. Or Watch online on this link <a href="https://ww1.gogoanime.io/category/detective-conan">
    "Watch/detective_conan"</a>.</center></h14>
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


});
}

