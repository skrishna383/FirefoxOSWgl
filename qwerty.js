$(document).ready(function(){
var a;
    $('.rock').click(function(){
    $('.paper').fadeOut('fast');
	$('.scissors').fadeOut('fast');
	$(this).animate({
           width: '+=10px'
       });
	    a="rock";
		var c = Math.random();
	
if (c < 0.34) {
	c = "rock";
} else if(c <= 0.67) {
	c = "paper";
} else {
	c = "scissors";}
	
var comp = function (q,w)
{if(q===w)
return 0;
else if (q==="scissors")
{if (w==="paper")return 10;
else return 11;}
else if (q==="rock")
{if (w==="scissors")return 20;
else return 21;}
else if (q==="paper")
{if (w==="rock")return 30;
else return 31;}
}
var z=comp(a,c);
var a="you won.......";
var b="you lost.......";
var c="It's a tie"
if(z===0){document.getElementById("sai").innerHTML=c}
else if (z===10){document.getElementById("sai").innerHTML=a}
else if (z===11){document.getElementById("sai").innerHTML=b}
else if (z===20){document.getElementById("sai").innerHTML=a}
else if (z===21){document.getElementById("sai").innerHTML=b}
else if (z===30){document.getElementById("sai").innerHTML=a}
else if (z===31){document.getElementById("sai").innerHTML=b}

    });
	
	$('.paper').click(function(){
    $('.rock').fadeOut('fast');
	$('.scissors').fadeOut('fast');
	$(this).animate({
           width: '+=10px'
       });
	   a="paper";
	   var c = Math.random();
if (c < 0.34) {
	c = "rock";
} else if(c <= 0.67) {
	c = "paper";
} else {
	c = "scissors";}
var comp = function (q,w)
{if(q===w)
return 0;
else if (q==="scissors")
{if (w==="paper")return 10;
else return 11;}
else if (q==="rock")
{if (w==="scissors")return 20;
else return 21;}
else if (q==="paper")
{if (w==="rock")return 30;
else return 31;}
}
var z=comp(a,c);
var a="you won.......";
var b="you lost.......";
var c="It's a tie"
if(z===0){document.getElementById("sai").innerHTML=c}
else if (z===10){document.getElementById("sai").innerHTML=a}
else if (z===11){document.getElementById("sai").innerHTML=b}
else if (z===20){document.getElementById("sai").innerHTML=a}
else if (z===21){document.getElementById("sai").innerHTML=b}
else if (z===30){document.getElementById("sai").innerHTML=a}
else if (z===31){document.getElementById("sai").innerHTML=b}

    });
	
	 $('.scissors').click(function(){
    $('.paper').fadeOut('fast');
	$('.rock').fadeOut('fast');
	$(this).animate({
           width: '+=10px'
       });
	   a="scissors";
	   var c = Math.random();
if (c < 0.34) {
	c = "rock";
} else if(c <= 0.67) {
	c = "paper";
} else {
	c = "scissors";}
var comp = function (q,w)
{if(q===w)
return 0;
else if (q==="scissors")
{if (w==="paper")return 10;
else return 11;}
else if (q==="rock")
{if (w==="scissors")return 20;
else return 21;}
else if (q==="paper")
{if (w==="rock")return 30;
else return 31;}
}
var z=comp(a,c);
var a="you won.......";
var b="you lost.......";
var c="It's a tie"
if(z===0){document.getElementById("sai").innerHTML=c}
else if (z===10){document.getElementById("sai").innerHTML=a}
else if (z===11){document.getElementById("sai").innerHTML=b}
else if (z===20){document.getElementById("sai").innerHTML=a}
else if (z===21){document.getElementById("sai").innerHTML=b}
else if (z===30){document.getElementById("sai").innerHTML=a}
else if (z===31){document.getElementById("sai").innerHTML=b}

    });
	
})