/*
*** PIMP MY PROFILE v28.11.2018.17 ***
*/
/*
VARIABLES
*/
let icon, anchor, div, menuname, hue, radiobtn, themecont;
let pics = document.querySelectorAll(".imgview"), rightPane = document.querySelectorAll(".RightPaneButtonLinks")[0], search = document.querySelectorAll(".SearchTip")[0], btn = document.querySelectorAll(".RightSideButton"), modalWindow = document.querySelectorAll(".modal-window")[0], modalImage = document.querySelectorAll(".modal-image")[0], leftPane = document.querySelectorAll(".LeftPaneImages")[0], menu = document.querySelectorAll("#navbar .navbarItem>a"), triptych = document.querySelectorAll(".triptych"), walltitle = document.createElement("p"), wallslider = document.createElement("input"), wallp = document.querySelectorAll(".WALLPAPER")[0], paigecont = document.querySelectorAll(".pimpheader")[0], paige = document.createElement("video"), slider = document.createElement("input"), text = document.createElement("div"), parent1 = document.querySelectorAll(".musictext1")[0], child1 = document.createElement("div"), btn3 = document.createElement("button"), newscript = document.createElement("script"), player, npbox = document.createElement("div"), nptitle = document.createElement("p"), playpause = document.createElement("button"), ytslider = document.createElement("input"), track = document.createElement("p"), volCheck, instr = document.querySelectorAll(".instructions1")[0], blogtest = document.querySelectorAll(".announcement"), parent = document.querySelectorAll(".heading")[0], frame = document.createElement("iframe"), btn4 = document.createElement("button"), javatxt = document.querySelectorAll(".instructions")[0], replaytxt = document.querySelectorAll(".instructions")[1], jquiscr = document.createElement("script"), jqcss = document.createElement("link"), icons = document.createElement("link"), nustyle = document.createElement('style'), medal = document.querySelectorAll(".champ_medal")[0], font = document.querySelector("link"), profileHeader = document.querySelector("#profileTagHeader>div"), sectionHeader = document.querySelector("h1.sectionHeader"), hitCounter = document.querySelector(".PageHitCounter"), stickers = document.querySelectorAll(".sticker"), header = document.querySelector(".myheader"), summaryimgs = document.querySelectorAll("#summary img"), ptbimgs = document.querySelectorAll("#profileTagBody img"), overlayimgs = document.querySelectorAll("#overlay_buttons img"), cardstyle = document.querySelectorAll(".card")[0].style.cssText, playerStatus = document.querySelector("#playerStatus");
let trackedit = [/[\([][^)\]]+[\)\]]/gi,/[^\w]*h[dq].*/gi,/[^\w"]+(lyrics|extended|version|piano)/gi], headicons = ["fab","fa-facebook","https://www.facebook.com/scott.hope.969","facebook","fab","fa-twitter","https://twitter.com/ScottHope3","twitter","fab","fa-youtube","https://www.youtube.com/channel/UCBnFN6zr08FT9syLP0VUyAw/videos","youtube","fas","fa-at","mailto:scott.wgt@outlook.com","email"], themebuttons = ["red",64,311,"orange",37,16,"yellow",21,54,"green",89,76,"blue",64,166,"purple",79,231], links = ["http://bit.ly/2pQCoCJ","http://bit.ly/2qZpMd4","http://bit.ly/2sAlWEX","http://bit.ly/2uUGhXI","http://bit.ly/2tVFtR4","http://bit.ly/2w2jzwW","http://bit.ly/2u0rUDS","http://bit.ly/2uRSIoy","http://bit.ly/2vjwyMM","http://bit.ly/2vkar8Q","http://bit.ly/2uRu8nL","http://bit.ly/2vpHs4u","http://bit.ly/2uUPsHy","http://bit.ly/2ugvuVX","http://bit.ly/2u0GwDa","http://bit.ly/2f5tXzT","http://bit.ly/2f5l6y2","http://bit.ly/2tVqfeH","http://bit.ly/2wibqnp","http://bit.ly/2vjNuD1","http://bit.ly/2u0D9vZ","http://bit.ly/2f4wt9B","http://bit.ly/2uRE3tC","http://bit.ly/2vpGViL","http://bit.ly/2ugkE1T","http://bit.ly/2vjIqyk","http://bit.ly/2vk2MHN","http://bit.ly/2vklM8U","http://bit.ly/2uV84ax","http://bit.ly/2uRSXAl","http://bit.ly/2u0V06k","http://bit.ly/2uSj61W","http://bit.ly/2vfblnJ","http://bit.ly/2f5yCBN","http://bit.ly/2uV8my9","http://bit.ly/2whYmhZ","http://bit.ly/2uV1L6N","http://bit.ly/2vk2cJY","http://bit.ly/2wihOe6","http://bit.ly/2wi2qyw","http://bit.ly/2uUF3M1","http://bit.ly/2vpIf5m","http://bit.ly/2vpi3YB","http://bit.ly/2tVObi7","http://bit.ly/2uROGwH","http://bit.ly/2u0LzUl","http://bit.ly/2tVFIeO","http://bit.ly/2uS2PK7","http://bit.ly/2uS2PK7","http://bit.ly/2vjYIY7","http://bit.ly/2uUTO1s","http://bit.ly/2tVXn60","http://bit.ly/2tVXoa4","http://bit.ly/2uS6ojA","http://bit.ly/2uSgBfR","http://bit.ly/2uVwII6","http://bit.ly/2tW2L9u","http://bit.ly/2vf5kY7","http://bit.ly/2vpFiC0","http://bit.ly/2ugg9V2","http://bit.ly/2vpCd4H","http://bit.ly/2f5dlIp","http://bit.ly/2uRvgry","http://bit.ly/2tVGtoa","http://bit.ly/2vpFyks","http://bit.ly/2hkKgJO","http://bit.ly/2vk5ayf","http://bit.ly/2vfJyDo","http://bit.ly/2uValm7","http://bit.ly/2tW3qI0","http://bit.ly/2u1dFyR","http://bit.ly/2wi8wyQ","http://bit.ly/2w2DjjM","http://bit.ly/2vpK2aP","http://bit.ly/2f5Cxi5","http://bit.ly/2u0Rj04","http://bit.ly/2u0O0pU","http://bit.ly/2uRQohB","http://bit.ly/2u0U8OK","http://bit.ly/2vpzB6W","http://bit.ly/2hkvR0m","http://bit.ly/2uVaWnR","http://bit.ly/2ughbAo","http://bit.ly/2uVvGLS","http://bit.ly/2vfnCIO","http://bit.ly/2uV63Lj","http://bit.ly/2w2DQ5g","http://bit.ly/2uS9jc6","http://bit.ly/2vpIRYB","http://bit.ly/2vppb7e","http://bit.ly/2tW6uUh","http://bit.ly/2uSixoD","http://bit.ly/2tVZ4Ao","http://bit.ly/2vfc0oV","http://bit.ly/2wieY93","http://bit.ly/2uS8rnM","http://bit.ly/2uRwUJK","http://bit.ly/2uRRsSD","http://bit.ly/2w2H0q3","http://bit.ly/2u0v8r6","http://bit.ly/2uUZBEk","http://bit.ly/2hktHhl","http://bit.ly/2uVzxbZ","http://bit.ly/2uVzxbZ","http://bit.ly/2uVAfpF","http://bit.ly/2vk2bWG","http://bit.ly/2tWiTrk","http://bit.ly/2vpEk8D","http://bit.ly/2u0W6i9","http://bit.ly/2uVn9Zw","http://bit.ly/2hkXBSk","http://bit.ly/2uV0TiE","http://bit.ly/2f5ewrj","http://bit.ly/2u0VSaT","http://bit.ly/2ugTEPM","http://bit.ly/2wi2nD5","http://bit.ly/2uSlgyn","http://bit.ly/2vfqzJo","http://bit.ly/2tW8UT1","http://bit.ly/2hkPuW9","http://bit.ly/2f4Xl9y","http://bit.ly/2hkvG5a","http://bit.ly/2uUYTa2","http://bit.ly/2ugpuw5","http://bit.ly/2vpITjq","http://bit.ly/2uUKI4J","http://bit.ly/2uV9YYx","http://bit.ly/2vpyJiS","http://bit.ly/2w2qyG0","http://bit.ly/2vfoA7H","http://bit.ly/2vpNmTd","http://bit.ly/2f5yPVI","http://bit.ly/2tW5UpL","http://bit.ly/2uVCcTc","http://bit.ly/2ugKhjr","http://bit.ly/2f5Agn8","http://bit.ly/2w2EIak","http://bit.ly/2tVNAND","http://bit.ly/2ugv15K","http://bit.ly/2vetnGI","http://bit.ly/2uV5xgd","http://bit.ly/2uSbUm6","http://bit.ly/2w35LSH","http://bit.ly/2w2AyiF","http://bit.ly/2uS0jDS","http://bit.ly/2vjWoQV","http://bit.ly/2uSc64O","http://bit.ly/2vpt5Nq","http://bit.ly/2ugqIrb","http://bit.ly/2ugduef","http://bit.ly/2hkAgQN","http://bit.ly/2f5B6Ae","http://bit.ly/2vpOCpx","http://bit.ly/2vfI3W1","http://bit.ly/2vkhFd5","http://bit.ly/2vkjCGj","http://bit.ly/2vpN9iW","http://bit.ly/2u1iB6R","http://bit.ly/2ug8tCu","http://bit.ly/2wic7x5","http://bit.ly/2hk5BDc","http://bit.ly/2whR8dI","http://bit.ly/2vfr8mk","http://bit.ly/2vfhkZr","http://bit.ly/2hkFAnd","http://bit.ly/2vjRV0i","http://bit.ly/2f5yIJH","http://bit.ly/2uSr0IE","http://bit.ly/2whXSYT","http://bit.ly/2u0Co6n","http://bit.ly/2u1aS8D","http://bit.ly/2vzTIhS","http://bit.ly/2wbvEm8","http://bit.ly/2vThP8A","http://bit.ly/2vV9a5N","http://bit.ly/2ynw7Du","http://bit.ly/2zT8xit","http://bit.ly/2ACOmpV","http://bit.ly/2nYorDh","http://bit.ly/2BM8gLP","http://bit.ly/2lpC1Lu","http://bit.ly/2B6ONEk","http://bit.ly/2K4skh8","http://bit.ly/2FqqXWu","http://bit.ly/2Kwskq4","http://bit.ly/2KSEWHt","http://bit.ly/2KsIdAI","http://bit.ly/2xCGkZT"];
/*
Move hit counter into section header and add social media icons
*/
sectionHeader.appendChild(hitCounter);
hitCounter.removeAttribute("style");
for (i=0;i<4;i++){
anchor = document.createElement("a");
anchor.setAttribute("href",headicons[(i*4)+2]);
i !== 3 ? anchor.target = "_blank" : undefined;
icon = document.createElement("i");
icon.classList.add(headicons[i*4],headicons[(i*4)+1]);
icon.setAttribute("title",headicons[(i*4)+3]);
anchor.appendChild(icon);
sectionHeader.appendChild(anchor);
}
document.querySelector(".chamber5").innerHTML = "<h4 style=\"margin:0 0 3px;\"></h4>";
/*
Modify profile name. Used set timeout to prevent font size being applied before font family
*/
setTimeout(function(){
div = document.createElement("div");
div.id = "name";
profileHeader.appendChild(div);
div.appendChild(profileHeader.childNodes[2]);
},0)
/*
Right side links...remove inline style and youtube channel button
*/
for (i=0; i<btn.length; i++){
btn[i].removeAttribute("style");
btn[i].classList.remove("button_hover_green");
btn[i].parentElement.removeAttribute("style");
btn[i].className.search("tip")>-1 ? btn[i].title = "" : undefined;
btn[i].textContent === "My YouTube Channel" ? btn[i].parentElement.parentNode.removeChild(btn[i].parentElement) : undefined;
}
btn.length % 2 === 1 ? rightPane.lastElementChild.style.display = "" : rightPane.lastElementChild.style.display = "none";
stickers.forEach(function(a){a.removeAttribute("style")});
/*
Left side images...remove inline style
*/
for (i=0; i<pics.length; i++){
pics[i].style.cssText = pics[i].style.cssText.match(/background-image.+?;/g);
}
/*
Images lightbox
*/
modalWindow.addEventListener("click",closeModalWindow);
for (i=0;i<pics.length;i++){
pics[i].addEventListener("click",showModalImage);
pics[i].parentElement.removeAttribute("href");
}
function showModalImage(){
modalWindow.style.display = "flex";
modalImage.src = this.style.backgroundImage.match(/http.+(png|jpg)/)[0];
}
function closeModalWindow(){
modalWindow.style.display ="none";
}
/*
Apply variables to and style other elements
*/
if (document.querySelector("#navbar li").textContent.search("Home")>-1){aa="Home"}else{aa="Get Credits"};
menuname = [aa,"Pro Shop","My Profile","Community","Tournaments","Forums","Tee Times"];
for (i=0; i<menu.length; i++){
menu[i].querySelector("span").textContent = menuname[i];
}
leftPane.style.background = "";
rightPane.style.background = "";
search.style.background = "";
header.style.background = "";
medal.style.zIndex = "";
paigecont.style.textShadow = "";
parent.style.textShadow = "";
parent1.style.textShadow = "";
document.querySelector("#socialbuttons").style.background = "none";
document.querySelectorAll(".pimpscript")[1].style.display = "none";
document.querySelectorAll(".instructions2")[0].style.display = "none";
$(".announcementHeadline:eq(4), .announcementTimestamp:eq(4)").css({visibility:"hidden"});
for (i=0;i<3;i++){
triptych[i].style.boxShadow = "";
triptych[i].style.backgroundColor = "";
}
leftPane.style.top = $("#widget").height()+91+"px";
document.querySelector(".card").style.cssText = cardstyle.replace(/cornflowerblue|rgb\(119.*?\)/g,function(match){if(match === "cornflowerblue"){return "var(--wgtmenu)"}else{return "rgba(0,0,0,0.5)"}});
/*
Remove profile tag body text images, summary text images, overlay button images and replace with text divs
*/
summaryimgs[0].outerHTML = "<div class=\"subheaders\">TOP AWARDS</div>";
summaryimgs[6].outerHTML = "<div class=\"subheaders\">CURRENT EQUIPMENT</div>";
summaryimgs[17].outerHTML = "<div class=\"subheaders\">SCORE HISTORY</div>";
ptbimgs[0].outerHTML = "<div class=\"ptbtext\">LEVEL</div>";
ptbimgs[1].outerHTML = "<div class=\"ptbtext\">TIER</div>";
ptbimgs[2].outerHTML = "<div class=\"ptbtext\">AVG SCORE</div>";
ptbimgs[3].outerHTML = "<div class=\"ptbtext\">STATUS</div>";
ptbimgs[5].outerHTML = "<div class=\"ptbtext\">MEMBER SINCE</div>";
ptbimgs[6].outerHTML = "<div class=\"ptbtext\">CAREER EARNINGS</div>";
ptbimgs[7].outerHTML = "<div class=\"ptbtext\">FRIENDS</div>";
overlayimgs[0].outerHTML = "<div class=\"overlaybtns\">AWARDS</div>"
overlayimgs[1].outerHTML = "<div class=\"overlaybtns\">STATS</div>"
overlayimgs[2].outerHTML = "<div class=\"overlaybtns\">APPEARANCE</div>"
overlayimgs[3].outerHTML = "<div class=\"overlaybtns\">EQUIPMENT</div>"
overlayimgs[4].outerHTML = "<div class=\"overlaybtns\">SCORE HISTORY</div>"
let div = document.createElement("div");
div.id = "statusLamp";
playerStatus.insertBefore(div,playerStatus.childNodes[1]);
/*
Generate random colour and apply to CSS variable
*/
function colour(multiplier,start){
hue = Math.floor(Math.random()*multiplier+start), theme = "hsl(" + hue + ", 60%, 92%)", btnbg = "hsl(" + (hue + 20) + ", 60%, 85%)", wgtmenu = "hsl(" + hue + ", 60%, 75%)", tooltipbg = "hsla(" + hue + ", 60%, 20%, 0.7)", tools = "hsl(" + hue + ", 60%, 60%)", nubtn = "hsl(" + (hue - 90) + ", 60%, 85%)", modalbg = "hsla(" + hue + ", 60%, 5%, 0.7)", darkmain = "hsl(" + hue + ", 60%, 25%)";
document.querySelector(":root").style.setProperty("--theme",theme);
document.querySelector(":root").style.setProperty("--btnbg",btnbg);
document.querySelector(":root").style.setProperty("--wgtmenu",wgtmenu);
document.querySelector(":root").style.setProperty("--tooltipbg",tooltipbg);
document.querySelector(":root").style.setProperty("--tools",tools);
document.querySelector(":root").style.setProperty("--nubtn",nubtn);
document.querySelector(":root").style.setProperty("--modalbg",modalbg);
document.querySelector(":root").style.setProperty("--darkmain",darkmain);
}
/*
Add wallpaper controls
*/
walltitle.innerHTML = "WALLPAPER";
walltitle.style.cssText = "margin:5px 0 4px;color:cyan";
wallslider.className = "speed";
wallslider.type = "range";
wallslider.min = 0;
wallslider.max = 100;
wallslider.step = 5;
wallslider.value = 15;
wallslider.addEventListener("input",fader);
wallp.removeAttribute("style");
function fader(){wallp.style.opacity = wallslider.value/100};
fader();
/*
Paige Spiranac video clip
*/
text.textContent = "‒　　　PLAYBACK SPEED　　　+";
text.setAttribute("style","font-size:50%");
paige.setAttribute("class","paigeclip");
paige.setAttribute("controlsList","nodownload");
paige.setAttribute("poster","https://instagram.flhr4-2.fna.fbcdn.net/vp/7b8513c53e4d844a7a54990161759ae1/5C82721D/t51.2885-15/sh0.08/e35/p750x750/42603487_136480913976955_4314971776699730140_n.jpg");
paige.src = "https://instagram.flhr4-1.fna.fbcdn.net/vp/4c9e195a1307cdc3679c4bfe37946a5c/5B0EA28C/t50.2886-16/31879598_645903895753889_8513560929491746816_n.mp4";
paige.volume = 0.5;
paige.addEventListener("loadedmetadata",seeek);
paige.addEventListener("ended",seeek);
slider.type ="range";
slider.min = 0;
slider.max = 100;
slider.value = 40;
slider.className = "speed";
slider.addEventListener("input",spd);
paigecont.textContent = paigecont.textContent.replace("Pimp My Profile","Paige Spiranac");
paigecont.appendChild(paige);
//paigecont.appendChild(slider);
//paigecont.appendChild(text);
//document.querySelectorAll(".announcement")[1].style.maxHeight = "900px";
document.querySelectorAll(".announcementHeadline")[1].textContent = "EYE CANDY";
function spd(){paige.playbackRate = slider.value/100;};
function seeek(){paige.currentTime = 0.0};
spd();
/*
*** YOUTUBE VIDEO PLAYER v26.08.2017.5 ***
*/
/*
Create div, shuffle button and load YouTube API script
*/
child1.id = "player";
btn3.type = "button";
btn3.className = "btn";
btn3.addEventListener("click",shuffle);
btn3.innerHTML = "SHUFFLE PLAYLIST";
newscript.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(newscript);
/*
Add style to div
*/
parent1.style.height = "383px";
parent1.style.position = "relative";
/*
Add new div to blog
*/
parent1.appendChild(child1);
parent1.appendChild(btn3);
/*
Video Now Playing Box
*/
nptitle.setAttribute("style","margin:0 0 5px;color:cyan;");
track.setAttribute("style","margin:0;");
playpause.id = "playpause";
playpause.className = "btn";
playpause.addEventListener("click",state);
ytslider.className = "speed";
ytslider.type = "range";
ytslider.min = 0;
ytslider.max = 100;
ytslider.step = 1;
ytslider.value = 50;
ytslider.addEventListener("input",volume);
npbox.appendChild(nptitle);
npbox.appendChild(track);
npbox.appendChild(playpause);
npbox.appendChild(ytslider);
npbox.appendChild(walltitle);
npbox.appendChild(wallslider);
npbox.id = "nowplaying";
document.body.appendChild(npbox);
parent1.addEventListener("mouseleave",endCk);
parent1.addEventListener("mouseenter",startCk);
themecont = document.createElement("div");
themecont.id = "themecont";
themecont.innerHTML = "THEME<br>";
npbox.appendChild(themecont);
for (i=0; i<6; i++){
radiobtn = document.createElement("input");
radiobtn.type = "radio";
radiobtn.name = "theme";
radiobtn.id = themebuttons[i*3]
radiobtn.addEventListener("change",themecolour);
themecont.appendChild(radiobtn);
}
function themecolour(e){
themebuttons.forEach(function(x,y){x === e.target.id ? (a = themebuttons[y+1], b = themebuttons[y+2]) : undefined});
colour(a,b);
}
function volume(){
if(player.isMuted){player.unMute()};
player.setVolume(ytslider.value);
}
function state(){
if (player.getPlayerState() === 1){player.pauseVideo();playpause.style.backgroundPositionX = "-71px";}
else
{player.playVideo();playpause.style.backgroundPositionX = "-31px";}
}
function titletrim(track){
for (i=0; i<3; i++) {
track = track.replace(trackedit[i],"");
}
return track;
}
function startCk() {
    volCheck = setInterval(volTest, 250);
}
function volTest() {
    player.isMuted() ? ytslider.value = 0 : ytslider.value = player.getVolume();
}
function endCk() {
    clearInterval(volCheck)
}
/*
Create new YouTube player
*/
function onYouTubeIframeAPIReady() {player = new YT.Player('player',{playerVars:{rel:0,listType:'playlist',list:'PLXAUXNZRbv3uszsd_BeQHrOi1P9J8cExp',origin:'http://www.wgt.com'},events:{'onReady':shuffle,'onStateChange':changed}})}
function shuffle(){player.setShuffle(true);player.playVideoAt(0);player.setVolume(50);}
function changed(){if(player.getPlayerState() === 0) {nptitle.innerHTML = "ENDED";} else if(player.getPlayerState() === 1) {track.innerHTML = titletrim(player.getVideoData().title);nptitle.innerHTML = "NOW PLAYING";playpause.style.backgroundPositionX = "-31px";} else if(player.getPlayerState() === 2) {nptitle.innerHTML = "PAUSED";playpause.style.backgroundPositionX = "-71px";} else if (player.getPlayerState() === 3) {nptitle.innerHTML = "BUFFERING";} else if(player.getPlayerState() === 5) {nptitle.innerHTML = "VIDEO CUED";} else if(player.getPlayerState() === -1) {nptitle.innerHTML = "PROCESSING";} else {nptitle.innerHTML = "PROCESSING";}}
/*
Hide jscript and instructions and extend blog height
*/
instr.style.display = "none";
for (i=0;i<blogtest.length;i++){
if (blogtest[i].children[0].textContent === "MUSIC"){
blogtest[i].style.maxHeight = "550px";
}
}
/*
*** RANDOM REPLAY GENERATOR v21.07.2017.1 ***
*/
/*
Change replay function
*/
function change() {
var linknum = Math.floor(Math.random()*links.length);
var replay = links[linknum];
frame.src = replay;
links.splice(links.indexOf(replay),1);}
/*
Get parent element and add iframe and button
*/
/*
Set attributes for iframe and button
*/
parent.style.position = "relative";
frame.id = "replaywd";
frame.setAttribute("style","width: 520px;height: 348px;margin:10px auto 0;border:5px inset white;box-shadow:0 0 1px #000;background:black");
frame.frameborder = "0";
parent.appendChild(frame);
btn4.type = "button";
btn4.className = "btn";
btn4.addEventListener("click",change);
btn4.innerHTML = "NEXT RANDOM REPLAY";
parent.appendChild(btn4);
/*
Extend blog post height to prevent scrollbar appearing and add instructions
*/
for (i=0;i<blogtest.length;i++){
if (blogtest[i].children[0].textContent === "REPLAYS"){
blogtest[i].style.maxHeight = "600px";
}
}
javatxt.style.display = "none";
replaytxt.style.display = "block";
/*
Add jquery script, jquery css, font awesome CDN and Google Playball font
*/
jquiscr.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js";
document.head.appendChild(jquiscr);
jqcss.rel = "stylesheet";
jqcss.href = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/vader/jquery-ui.css";
document.head.appendChild(jqcss);
icons.href = "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
icons.rel = "stylesheet";
//icons.crossorigin = "anonymous";
document.head.appendChild(icons);
font.href = font.href + "|Playball|Niconne";
/*
Create stylesheet with rules and add to webpage
*/
nustyle.type = "text/css";
nustyle.id = "pimpstyle";
document.head.appendChild(nustyle);
document.querySelector("#pimpstyle").innerHTML = ":root{--shadow:6px 4px 8px rgba(0,0,0,0.4);--shadow1:0 0 0 1px #000,inset 0 0 0 1px #000;--txtshdw:-0.5px -0.5px 0.5px black,0px -0.5px 0.5px black,0.5px -0.5px 0.5px black,-0.5px 0px 0.5px black,0.5px 0px 0.5px black,-0.5px 0.5px 0.5px black,0px 0.5px 0.5px black,0.5px 0.5px 0.5px black;--highlight:-0.5px -0.5px 0.5px white,0px -0.5px 0.5px white,0.5px -0.5px 0.5px black,-0.5px 0px 0.5px white,0.5px 0px 0.5px black,-0.5px 0.5px 0.5px black,0px 0.5px 0.5px black,0.5px 0.5px 0.5px black;} body{background-image:none;background-color:var(--theme);} #wrapper{background:none;border:none;background-color:var(--theme);} .subnav_list>li a:hover{background:none;background-color:var(--wgtmenu);} .RightPaneButtonLinks, #profileTagBody, .LeftPaneImages, .button_hover_green:hover{background-color:var(--theme);} .imgview{box-shadow:var(--shadow);width:195px;height:125px;background-size:cover;border-radius:4px;border:4px ridge silver;margin-bottom:10px;background-blend-mode:luminosity;cursor:zoom-in;} #navbar .navbarItem>a{color:#bbb;} #navbar .navbarItem:hover>a span{color:white;} ul.subnav_list, .shadow_box{top:-10px;} .profileWallBody, .SearchTip{background:rgba(245,245,245,0.4);} #player{width:97%;height:292px;border:4px inset white;box-shadow:0 0 1px 1px gray;border-radius:5px;background:black;margin:10px auto 0;} .WALLPAPER{pointer-events: none; z-index: 3000; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px;background-blend-mode:luminosity;background-color:var(--theme);background-size:cover;background-position:center;background-repeat:no-repeat;background-image:url(https://imgur.com/tcWNHQ0.jpg);} .paigeclip{border:3px ridge silver;border-radius:10px;position:relative;top:10px;box-shadow:0 0 8px 2px #000;width:520px;-webkit-filter:brightness(1.0)contrast(1.0);filter:brightness(1.0)contrast(1.0);} .speed{-webkit-appearance:none;outline:none;height:4px;border-radius:5px;border:2px inset white;box-shadow:0 0 2px #000,inset 0 0 5px #000;background:#00b2ff;cursor:pointer;width:95%} .speed::-webkit-slider-thumb{-webkit-appearance:none;width:15px;height:15px;border-radius:50%;background:#00a6ee;border:3px outset white;box-shadow:0 0 2px #000,inset 0 0 5px #000;} .speed::-moz-range-thumb{-moz-appearance:none;width:11px;height:11px;border-radius:50%;background:#00a6ee;border:3px outset white;box-shadow:0 0 2px #000,inset 0 0 5px #000;} .RightSideButton{margin-bottom:4px;padding:4px 16px;border-radius:25px 25px 0px 0px;border:3px inset lavender;background-image:-webkit-radial-gradient(80px 10px,100px 5px, white,var(--btnbg));background-image:radial-gradient(100px 5px at 80px 10px,white,var(--btnbg));color:#000;box-shadow:black 0px 0px 10px 1px inset, black 0px 0px 4px;} a:nth-child(odd) li{border-radius:0px 0px 25px 25px;margin-bottom:6px;} .RightSideButton:hover{background-image:-webkit-radial-gradient(80px 12px,100px 5px, #fff,var(--tools));background-image:radial-gradient(100px 5px at 80px 12px,#fff,var(--tools));box-shadow:black 0px 0px 10px 1px inset, #000 0px 0px 3px, var(--tools) 0px 0px 10px 1px;} .newbtn{background-image:-webkit-radial-gradient(80px 10px,100px 5px, white,var(--nubtn));background-image:radial-gradient(100px 5px at 80px 10px,white,var(--nubtn))} .btn{box-shadow:0 0 5px 2px rgba(0,0,0,0.4);border-radius:5px;padding:4px 13px 6px;background-image:-webkit-linear-gradient(#4ec0ff,dodgerblue);linear-gradient(#4ec0ff,dodgerblue);border:none;outline:none;position:relative;top:-5px;font:0.5em tahoma;} .btn:hover{color:white;} .btn:active{box-shadow:0 0 5px 0px rgba(0,0,0,0.4)} .powerup_display_container{display:none!important;} video::-internal-media-controls-download-button{-webkit-appearance:none;} #profileButtonRow{min-height:21px;background:rgba(245,245,245,0.4);} #nowplaying{position:fixed;bottom:5px;left:5px;z-index:5000;background:#000;background:var(--tools);padding:5px 6px 7px;width:100px;text-align:center;color:#fff;border:2px inset #fff;border-radius:5px;box-shadow:0 0 3px #000,inset 0 0 10px 2px #000;opacity:0.75;text-shadow:var(--txtshdw);cursor:default;} .triptych{background:var(--theme);box-shadow:12px 0 3px -3px rgba(0,0,0,0.4);} #playpause{margin:14px 0 3px;font-size:1em;background:url(http://www.myiconfinder.com/uploads/iconsets/256-256-46c8ef7ada75656abe6b290f2931fc6c.png);background-position:-31px 3.6px;background-size:220%;background-repeat:no-repeat;width:50px;height:30px;background-color:#07f;} #playpause:hover{filter:hue-rotate(240deg);} .ProfilePictureShadow{display:none;} #profileTagAvatar>img{box-shadow:0 0 5px #000;position:relative;z-index:10;} #footer, .myheader{background:linear-gradient(to bottom,var(--darkmain),var(--theme));} .ui-widget-shadow{box-shadow:0 0 5px 2px rgba(0,0,0,0.5);} .ui-widget-content{background:var(--tooltipbg);} .ui-widget{font:1.1em tahoma;z-index:100;} .ui-tooltip{padding:4px 7px 5px;pointer-events:none;text-align:center;} .openShut{float:right;font-size:0.9em;} .Javascript div{display:none;} .modal-window{display:none;position:fixed;z-index:2600;width:100%;height:100%;top:0;left:0;background-color:var(--modalbg);cursor:zoom-out;} .modal-window-text{color:#fff;position:absolute;margin:5px 5px;cursor:zoom-out;} .modal-image{margin:auto;display:block;max-width:95%;max-height:95%;border-radius:5px;animation:zoom 1000ms 500ms backwards;} @keyframes zoom {from{transform:scale(0.5);opacity:0} to {transform:scale(1);opacity:1};} .course_data{height:136px;border-color:purple;} .birdie_streak{height:79px;} #logo{box-shadow:inset 0 0 8px #000, 0 0 2px #000;background: white;border:3px inset #eff7ff;border-radius: 10px;position:relative;width: 203px;margin: 11px;} #navbar .navbarItem>a{border: 3px inset lavender;background:var(--tooltipbg);border-radius: 10px;box-shadow:0 0 1px #000, inset 0 0 3px #000;} #navbar .navbarItem>a span{display:block;font:bold 1em tahoma;text-align:center;padding-top:1.5px;} .sectionHeader{opacity:0.5;border-radius:5px;} #uberwidget, #status, #country_club_status{mix-blend-mode:multiply;} #emptyHeader{background:var(--theme);} .pimpheader, .musictext1, .heading{text-shadow:var(--highlight);} #name{font-family:niconne;text-transform:none;font-weight:normal;position:absolute;margin:-65px 73px;text-shadow:var(--highlight),var(--shadow),var(--txtshdw);font-size:6rem;} .PageHitCounter{width:100px;float:right;margin:0.5px 3px;} .fab, .fas{float:right;margin: 1px 10px 0px 0px;color:var(--tools);text-shadow:var(--highlight);} .fab:hover, .fas:hover{color:white;} .alert::after{content:'';display:block;width:130px;height:130px;position:absolute;pointer-events:none;background-position:center;background-repeat:no-repeat;margin: -74px 130px;} .new::after{background-image:url(https://imgur.com/Q1kP6Jy.png);background-size:85%;} .updated::after{background-image:url(https://imgur.com/Nq9TuHz.png);background-size:100%;} .revised::after{background-image:url(https://imgur.com/12s6pbo.png);background-size:100%;} .latest::after{background-image:url(https://imgur.com/OS97NwC.png);background-size:90%;} .flash::after{background-image:url(https://imgur.com/y1cAPvP.png);background-size:100%;left:0;} .sticker{display:none;} .announcement{max-height:800px;} #themecont{margin:5px 0 0;color:cyan;} #themecont input[type=radio]{-webkit-appearance:none;width:12px;height:12px;border:1.5px solid #000;border-radius:50%;margin:4px 2px 1px;outline:none;cursor:pointer;} #themecont input[type=radio]:checked{-webkit-appearance:none;border-color:white;box-shadow:var(--shadow1);} #red{background:red;} #orange{background:orange;} #yellow{background:yellow;} #green{background:green;} #blue{background:blue;} #purple{background:purple;} #profileTagHeader, .profileTagScoreBody{background:var(--wgtmenu);} .datatable th{background:var(--tools);color:#fff;text-shadow:var(--txtshdw);} .datatable tbody tr:nth-child(even){background:var(--wgtmenu);} .datatable tbody tr:nth-child(odd){background:none;} .subheaders{font:1.1em open sans condensed;background:linear-gradient(90deg,#fff,#0000);padding:2px 8px;border-radius:2px;} #progress_meter_wrapper{margin-bottom:10px;} #current_equipment_panel{background:linear-gradient(var(--tools),var(--wgtmenu));} .ptbtext{font:1rem open sans condensed;position:relative;top:-2px;} .overlaybtns{width:106px;height:21px;background:linear-gradient(var(--wgtmenu),var(--tools));display:flex;justify-content:center;align-items:center;color:#000;border-radius:3px;font:1rem open sans condensed;box-shadow:0 2px 3px rgba(0,0,0,0.3),inset 0 0 2px #000;border:1px solid #fff;box-sizing:border-box;} .overlaybtns:hover{color:#fff;} .overlaybtns:active{box-shadow:inset 0 0 2px #000,0 1px 2px rgba(0,0,0,0.3);}";
/*
jquery script
*/
setTimeout(function(){
$(".RightSideButton,.PageHitCounter").tooltip({position:{my:"center top",at:"center bottom+10%"}},{show:{effect:"fadeIn",duration:0}},{hide:{effect:"fadeOut",duration:0}});
$(".PageHitCounter:eq(0)").attr("title","").tooltip({content:"Page Hit Counter"});
$(".RightSideButton.tip1").tooltip({content:"With Chrome versions later than 60ish,<br>this fix no longer works"});
$(".RightSideButton.tip2").tooltip({content:"Make your PlayNow/Friends box<br>stay in view while scrolling"});
$(".RightSideButton.tip3").tooltip({content:"Play one hole and choose your tee<br>and wind strength"});
$(".RightSideButton.tip4").tooltip({content:"Compare and filter clubs & balls"});
$(".RightSideButton.tip5").tooltip({content:"Posting scores etc,<br>looks so much nicer if the text lines up"});
$(".RightSideButton.tip6").tooltip({content:"All you need to know courtesy of EasyEdward"});
$(".RightSideButton.tip7").tooltip({content:"Some YouTube videos won't play on WGT's site<br>Here's what you should know"});
$(".RightSideButton.tip8").tooltip({content:"WGT countries & golf courses, where are they?"});
$(".RightSideButton.tip9").tooltip({content:"Keep track of your tracks"});
},5000);
document.querySelectorAll("#themecont input[type=radio]")[Math.floor(Math.random()*6)].click();
//end