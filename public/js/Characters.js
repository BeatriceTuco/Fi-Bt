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


    <h1><center><img src="img/2b.png" style="width:45px;height:75px;">${res.Title}<img src="img/2b.png" style="width:45px;height:75px;"></center></h1>
    <h13><center>Characters</center></h13>



    <div>
    <h13><left-align>Protagonist</left-align</h13>
    <h15><center>
    <table class="table table-inverse">
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>English Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="c/Shinichi_Kudo_60px.jpg"></th>
      <td>Shinichi Kudo</td>
      <td>Jimmy Kudo</td>
      <td>Main character of the series and Ran's love interest.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Conan_Edogawa_60px.jpg"></th>
      <td>Conan Edogawa</td>
      <td>Conan Edogawa</td>
      <td>"Child" version of Shinichi Kudo. He's after the Black Organization to regain his original body.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Ran_Mouri_60px.jpg"></th>
      <td>Ran Mouri</td>
      <td>Rachel Moore</td>
      <td>Shinichi's childhood friend, and main love interest. She doesn't know Conan's real identity. She is also skilled in karate.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Kogoro_Mouri_60px.jpg"></th>
      <td>Kogoro Mouri</td>
      <td>Richard Moore</td>
      <td>Private eye and Ran's father. Separated from Eri Kisaki, Ran's mother.</td>
    </tr>
  </tbody>
    </table>
    </center>
    </h15>
    </div>



    <div>
    <h13><left-align>Detective Boys</left-align</h13>
    <h15><center>
    <table class="table table-inverse">
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>English Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="c/Ayumi_Yoshida_60px.jpg"></th>
      <td>Ayumi Yoshida</td>
      <td>Amy Yeager</td>
      <td>Member of the Detective Boys. She likes Conan and she considers Haibara like a best friend to her.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Mitsuhiko_Tsuburaya_60px.jpg"></th>
      <td>Mitsuhiko Tsuburaya</td>
      <td>Mitch Tennison</td>
      <td>Member of the Detective Boys. Has a crush on Ayumi and Haibara. The most intelligent true child in the Detective Boys.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Genta_Kojima_60px.jpg"></th>
      <td>Genta Kojima</td>
      <td>George Kaminski</td>
      <td>Member of the Detective Boys. Has a crush on Ayumi. Always saying he is the leader of Detective Boys.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Ai_Haibara_60px.jpg"></th>
      <td>Ai Haibara</td>
      <td>Anita Hailey </td>
      <td>Member of the Detective Boys & an adult shrunken. Her former identity was a Black Organization scientist codenamed "Sherry".</td>
    </tr>
  </tbody>
</table>
</center>
</h15>
</div>



    <div>
    <h13><left-align>Family & Friends</left-align</h11>
    <h15><center>
    <table class="table table-inverse">
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>English Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="c/Hiroshi_Agasa_60px.jpg"></th>
      <td>Hiroshi Agasa</td>
      <td>Herschel Agasa</td>
      <td> Professor who creates gadgets for Conan to use and the best friend of Yusaku Kudo. First to know about Conan's true identity.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Sonoko_Suzuki_60px.jpg"></th>
      <td>Sonoko Suzuki</td>
      <td>Serena Sebastian</td>
      <td>Ran's best friend. Youngest daughter of the wealthy Suzuki family.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Eri_Kisaki_60px.jpg"></th>
      <td>Eri Kisaki</td>
      <td>Eva Kadan</td>
      <td>Ran's mother, a very successful attorney. Married to, but currently living separately from Kogoro Mouri.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Yusaku_Kudo_60px.jpg"></th>
      <td>Yusaku Kudo</td>
      <td>Booker Kudo</td>
      <td>Shinichi's father. A famous mystery novel author who is well-known in both America and Japan.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Yukiko_Kudo_60px.jpg"></th>
      <td>Yukiko Kudo</td>
      <td>Vivian Kudo</td>
      <td>Shinichi's mother. A retired actress, she can disguise well and can mimic voices without a voice changer.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Heiji_Hattori_60px.jpg"></th>
      <td>Heiji Hattori</td>
      <td>Harley Hartwell</td>
      <td>Shinichi's rival detective and best friend from Osaka. Known as "Great Detective of the West".</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Kazuha_Toyama_60px.jpg"></th>
      <td>Kazuha Toyama</td>
      <td>Kirsten Thomas </td>
      <td>Shinichi's childhood friend, and main love interest. She doesn't know Conan's real identity. She is also skilled in karate.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Yoko_Okino_60px.jpg"></th>
      <td>Yoko Okino</td>
      <td>Yoko Okino</td>
      <td>Idol star who is worshiped by Kogoro Mouri.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Sumiko_Kobayashi_60px.jpg"></th>
      <td>Sumiko Kobayashi</td>
      <td>Liz Faulkner</td>
      <td>Conan's homeroom teacher and Ninzaburo Shiratori's girlfriend. Also the self-proclaimed manager of the Detective Boys.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Tomoaki_Araide_60px.jpg"></th>
      <td>Tomoaki Araide</td>
      <td>N/A</td>
      <td>Kogoro's doctor, Teitan school nurse, and a high school basketball coach. He was once impersonated by Vermouth.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Makoto_Kyogoku_60px.jpg"></th>
      <td>Makoto Kyogoku</td>
      <td>N/A</td>
      <td>Sonoko Suzuki's boyfriend, and a karate champion that has been admired by Ran.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Shizuka_Hattori_60px.jpg"></th>
      <td>Shizuka Hattori</td>
      <td>N/A</td>
      <td>Heiji Hattori's mother.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Jirokichi_Suzuki_60px.jpg"></th>
      <td>Jirokichi Suzuki</td>
      <td>N/A</td>
      <td>MaSonoko's uncle, obsessed with embarrassing and outsmarting the thief, Kaitou Kid.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Eisuke_Hondou_60px.jpg"></th>
      <td>Eisuke Hondou</td>
      <td>N/A</td>
      <td>Ran and Sonoko's classmate, whom Conan finds suspicious.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Azusa_Enomoto_60px.jpg"></th>
      <td>Azusa Enomoto</td>
      <td>N/A</td>
      <td>A kind worker at the coffee shop that is right under the Mouri Detective Agency.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Subaru_Okiya_60px.jpg"></th>
      <td>Subaru Okiyai</td>
      <td>N/A</td>
      <td>FBI agent Shuichi Akai's civilian persona after he faked his death to protect Kir. He lives in Shinichi Kudo's house and keeps an eye on Haibara.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Masumi_Sera_60px.jpg"></th>
      <td>Masumi Sera</td>
      <td>N/A</td>
      <td>A high school detective who transfers into Ran and Sonoko's high school class.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Shukichi_Haneda_60px.jpg"></th>
      <td>Shukichi Haneda</td>
      <td>N/A</td>
      <td>Yumi Miyamoto's ex-boyfriend and a professional shogi player.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Sakurako_Yonehara_60px.jpg"></th>
      <td>Sakurako Yoneharai</td>
      <td>N/A</td>
      <td>  A housekeeper and Naeko Miike and Kazunobu Chiba's childhood friend.</td>
    </tr>
  </tbody>
    </table>
    </center>
    </h15>
    </div>



     <div>
    <h13><left-align>Law enforcement</left-align</h11>
    <h15><center>
    <table class="table table-inverse">
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>English Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src="c/Juzo_Megure_60px.jpg"></th>
      <td>Juzo Megure</td>
      <td>Joseph Meguire</td>
      <td>Inspector from the Tokyo Metropolitan Police District.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Wataru_Takagi_60px.jpg"></th>
      <td>Wataru Takagi</td>
      <td>Harry Wildern</td>
      <td>Police officer who works with Inspector Megure. Currently involved with Detective Sato.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Miwako_Sato_60px.jpg"></th>
      <td>Miwako Sato</td>
      <td>Detective Simone</td>
      <td>Female police officer who works with Inspector Megure. Currently involved with Detective Takagi.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Ninzaburo_Shiratori_60px.jpg"></th>
      <td>Ninzaburo Shiratori</td>
      <td>Nicholas Santos</td>
      <td>Police inspector who works with Inspector Megure. Originally Detective Takagi's rival for Detective Sato's affection.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Yumi_Miyamoto_60px.jpg"></th>
      <td>Yumi Miyamoto</td>
      <td>N/A</td>
      <td>A traffic enforcer and Detective Sato's best friend who is a compulsive tease.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Kazunobu_Chiba_60px.jpg"></th>
      <td>Kazunobu Chiba</td>
      <td>Detective Chiba</td>
      <td>Police officer who often works with Inspector Megure. He is Naeko Miike's childhood friend and love interest.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Naeko_Miike_60px.jpg"></th>
      <td>Naeko Miike</td>
      <td>N/A</td>
      <td>A traffic enforcer working with Yumi Miyamoto. She is Kazunobu Chiba's childhood friend and love interest.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Kiyonaga_Matsumoto_60px.jpg"></th>
      <td>Kiyonaga Matsumoto</td>
      <td>Kristopher McLaughlin</td>
      <td>Senior Superintendent of the Tokyo Metropolitan Police 1st Division and Inspector Megure's superior.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Inspector_Yuminaga_60px.jpg"></th>
      <td>Inspector Yuminaga</td>
      <td>N/A</td>
      <td>The head inspector of the arson squad and Kogoro Mouri's former superior.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Shintaro_Chaki_60px.jpg"></th>
      <td>Shintaro Chaki</td>
      <td>Bernie Biggers</td>
      <td>Superintendent of the Tokyo Metropolitan Police 2nd Division and Ginzo Nakamori's superior.</td>
    </tr>
    <tr>
      <th scope="row"><img src="c/Hyoue_Kuroda_60px.jpg"></th>
      <td>Hyoue Kuroda</td>
      <td>N/A</td>
      <td>  Superintendent of the Tokyo Metropolitan Police 1st Division and Former Nagano Police Chief.</td>
    </tr>
  </tbody>
    </table>
    </center>
    </h15>
    </div>


    <div>
    <p class="ridge"></p>
    </div>


    <div>
    <h14><center>To learn more about the other characters you can visit this link <a href="http://www.detectiveconanworld.com/wiki/Characters">
    "Characters/detective_conan"</a>.</center></h14>
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
