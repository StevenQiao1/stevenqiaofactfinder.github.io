var output;
var factImage;

function displayFact(itemNum) {
	switch (itemNum) {
		case 1:
			output = "Bats are the only mammal that can actually fly.";
			output += "<img src='images/bat.jpg' id='batimage' alt='a bat' />";
			document.querySelector("main").style.backgroundColor = "#00FFFF";
			document.querySelector("main").style.fontFamily = "'Bad Script', cursive";
			document.querySelector("main").style.boxShadow = "10px 10px #00D0FE";
			document.querySelector("#factdisplay").style.boxShadow = "7px 7px #00D0FE";
			document.querySelector("#factdisplay").style.border = "3px dotted #000";
			document.querySelector("body").style.backgroundColor = "#5fdd9d";
			break;
		case 2:
			output = "The heart of the blue whale, the largest animal on Earth, is five feet long and weighs 400 pounds. The whale in total weighs 40,000 pounds.";
			output += "<img src='images/whale.jpg' id='whaleimage' alt='a whale' />";
			document.querySelector("main").style.backgroundColor = "#CBE4FF";
			document.querySelector("main").style.fontFamily = "'Crimson Text', serif";
			document.querySelector("#factdisplay").style.boxShadow = "7px 7px #fbb1bd";
			document.querySelector("main").style.boxShadow = "10px 10px #fbb1bd";	
			document.querySelector("#factdisplay").style.border = "4px double #000";
			document.querySelector("body").style.backgroundColor = "#ffa630";
			break;
		case 3: 
			output = "7% of American adults believe that chocolate milk comes from brown cows.";
			output += "<img src='images/chocolatemilk.jpg' id='milkimage' alt='chocolate and milk' />";
			document.querySelector("main").style.backgroundColor = "#EFF9DA";
			document.querySelector("main").style.fontFamily = "'Karla', sans-serif";
			document.querySelector("#factdisplay").style.boxShadow = "7px 7px #FFE084";
			document.querySelector("main").style.boxShadow = "10px 10px #FFE084";
			document.querySelector("#factdisplay").style.border = "4px dashed #000";
			document.querySelector("body").style.backgroundColor = "#555B6E";
			break;
		case 4:
			output = "Bananas are curved because they grow towards the sun.";
			output += "<img src='images/banana.jpg' id='bananaimage' alt='bananas on a tree' />";
			document.querySelector("main").style.backgroundColor = "#F9D8D6";
			document.querySelector("main").style.fontFamily = "'Montserrat', sans-serif";
			document.querySelector("#factdisplay").style.boxShadow = "7px 7px #F88379";
			document.querySelector("main").style.boxShadow = "10px 10px #F88379";
			document.querySelector("#factdisplay").style.border = "4px inset #A9A9A9";
			document.querySelector("body").style.backgroundColor = "#bee3db";
			break;
		default:
			output = "The smallest bone in your body is in your ear.";
			output += "<img src='images/ear.jpg' id='earimage' alt='baby ear' />";
			document.querySelector("main").style.backgroundColor = "#98FB98";
			document.querySelector("main").style.fontFamily = "'Source Code Pro', monospace";
			document.querySelector("#factdisplay").style.boxShadow = "7px 7px #228B22";
			document.querySelector("main").style.boxShadow = "10px 10px #228B22";
			document.querySelector("#factdisplay").style.border = "4px outset #A9A9A9";
			document.querySelector("body").style.backgroundColor = "#bad4aa";
	}
	
	document.querySelector("#factdisplay").innerHTML = output;
}

