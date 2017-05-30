$(document).ready(function() {

var qts = [
	["you can't win them all", " - Connie Mack"],
	["you don't always get what you want", " - The Rolling Stones"],
	["but if you try, sometimes... you get what you need", " - The Rolling Stones"],
	["it's the end of the world as we know it", " - REM"],
	["and I feel fine", " - REM"],
	["let me tell you how it will be", " - The Beatles"],
	["one is the loneliest number", " - Harry Nillson"],
	["two can be as bad as one it's the loneliest number since the number one", " - Harry Nillson"],
	["hang the DJ", " - The Smiths"],
  ["love is a battlefield", " - Pat Benatar"],
  ["it's a long way to the top, if you wanna rock n roll", " = AC/DC"],
  ["let's dance", " - David Bowie"],
  ["it's been a hard days night", " - The Beatles"],
  ["don't bring me down", " - ELO"],
  ["we learned more from a three minute record than we ever learned in school", " - Bruce Springsteen"],
  ["but i can't help...falling in love with you", " - Elvis Presley"],
  ["war is not the answer, because only love can conquer hate", " - Marvin Gaye"],
  ["i'd rather be a hammer than a nail", " - Simon and Garfunkel"],
  ["it's better to burn out, than to fade away", " - Neil Young"],
  ["because the night, belongs to lovers", " - Patti Smith"]
  ];
       //random color generator
function genColors() {
  var colors = '';
  var hexNum = '';
  var hexDigits = "1234567890abcdef";
  for (i = 0; i < 6; i++) 
 hexNum += hexDigits.charAt(Math.floor(Math.random() * hexDigits.length));
  colors = hexNum;
  $('body').css({'background-color': '#' + colors});
  $('body, #button').css({'color': '#' + colors});
}; 
genColors();

  //adjust quote position depending on length
function assesSize(size) {
  var fromBottom = "";
  switch (true) {
    case (size < 45):
      fromBottom = "28%";
    break;
    case (size > 71):
      fromBottom = "4%";
    break;
    default:
      fromBottom = "15%";
    break;
 };
  $('.quoteBox').css("bottom", fromBottom);
}; 
  
//generate first random quote and author
var rndQt = '';
var auth = ''; 
var noRepeat;
function genQt() {
var x = Math.floor(Math.random() * qts.length);
  if (x == noRepeat) { genQt()};
  console.log(x);
rndQt = qts[x][0];
auth = qts[x][1];
noRepeat = x
console.log(noRepeat);
};
genQt();
assesSize(rndQt.length + auth.length);
 
$('#quote').html(rndQt);
$('#author').text(auth);

						//tweet quote
function createTweet() {

var makeAnchor = document.createElement('a')
$('#tweetButton').append(makeAnchor);
$('a').attr({href:"https://twitter.com/share", 
	class:"twitter-share-button", 
	"data-size":"large", 
	"data-text":rndQt + auth});	
};
createTweet();		

						//click event
$('#button').on('click', function() {
  
//delete last tweet
	$('#tweetButton').empty();
  $('i').fadeOut(500);
	$('#quote').fadeOut(500);
	$('#author').fadeOut(500);
  
//create and fade in new quote
	genQt();
	setTimeout (function() {
  assesSize(rndQt.length + auth.length);
  $('i').fadeIn(500);
	$('#quote').fadeIn(500).text(rndQt);
	$('#author').fadeIn(500).text(auth);
	}, 500);

	//make new tweet button
	createTweet();
	console.log($('a').attr("data-text"));//check to see if tweet text is correct
	twttr.widgets.load(document.getElementsByTagName("a"));//reload tweet
  
  genColors();
});

					//load twitter button
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));


});