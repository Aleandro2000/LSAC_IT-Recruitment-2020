function openForm() {
    document.getElementById("Chatbot").style.display = "block";
}

function closeForm() {
  document.getElementById("Chatbot").style.display = "none";
}

//robot programming
function robot()
{
    var trigger = [
        ["hi","hey","hello", "salut", "bonjour"],
        ["are you gay", "are you silly", "are you dumb", "are you a dumpass", "are you dumpass", "are you dump", "are you trump", "are you donald trump", "are you donalt trump",  "are you donalt dump",  "are you donald dump", "are you shitty", "are you a shit", "are you a bullshit", "do you like dick", "do you enjoy dick", "you like dick", "you enjoy dick", "like dick", "enjoy dick","do you like cum", "do you enjoy cum", "you like cum", "you enjoy cum", "like cum", "enjoy cum"],
		["how are you", "how is life", "how are things"],
		["are you ok", "are you okay", "are you okk", "are you okey"],
    	["what are you doing", "what is going on", "what do you do", "what do you"],
    	["how old are you", "are you old"],
    	["who are you", "who are yu", "who are y", "who are yo", "are you human", "are you bot", "are you human or bot"],
		["who is andrei", "who is alexandru", "who is carmici", "who is alexandru-andrei", "who is alexandru carmici", "who is andrei carmici"],
    	["your name please",  "your name", "may i know your name", "what is your name"],
        ["i love you",  "love",  "you", "i"],
    	["i want to talk with developer", "i want to collaborate with developer", "i want to see the developer", "i want to talk with alexandru", "i want to collaborate with alexandru", "i want to see the alexandru", "i want to talk with andrei", "i want to collaborate with andrei", "i want to see the andrei", "i want to talk with alexandru-andrei", "i want to collaborate with alexandru-andrei", "i want to see the alexandru-andrei",  "i want to talk with carmici", "i want to collaborate with carmici", "i want to see the carmici",  "i want to talk with alexandru-andrei carmici", "i want to collaborate with alexandru-andrei carmici", "i want to see the alexandru-andrei carmici"],
    	["bad", "bored", "tired"],
    	["help me", "tell me story", "tell me joke"],
    	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
		["bye", "good bye", "goodbye", "see you later"],
		["are you robot", "how do you do fellow human"],
		["go ahead", "fuck off", "fuck on", "try to go netflix and chill", "netflix and chill", "try netflix and chill", "fuck", "fuck you", "fuck me", "fuck andrei", "fuck alexandru", "fuck alexandru-andrei", "fuck alexandru-andrei carmici", "fuck carmici", "fuck the developer", "fuck developer", "fuck your developer", "fuck this developer", "fuck trump", "fuck donald trump", "fuck donald dump", "fuck donald", "fuck all", "fuck robots", "fuck the robots", "fuck the robot", "fuck this site", "fuck the site", "fuck this website", "fuck the website"],
		["go on", "continue"],
		["give up", "let me down", "let you down", "let the developer down", "let developer down", "let god down"],
		["no"],
		["are you loial" ,"you are loial"],
		["how may i do homework","how can i do homework","how may i buy homework","how may i do homework for someone else","i want to buy homework","i want to do homework","i want to do my homework","i want to copy homework","i want homework","homework"]
	];
    var reply = [
        ["Hi","Hey","Hello"],
        ["No! Are You?"], 
		["Fine", "Pretty well", "Fantastic"],
		["Yes, I am."],
    	["I answer your question with my possibility."],
    	["I am 1 seconds old", "I am 1 seconts old and I'm a baby bot."],
    	["I'm the bot", "I'm the bot. What are you?"],
		["He's an IT departament candidate."],
    	["I am Chatbot. Nice to meet you!"],
        ["I'm a simple robot. I don't know any feelings."],
    	["See website's contacts!"],
    	["Why?", "Why? You shouldn't!", "Try watching TV or Netflix!", "Try to watch Netflix and chill!"],
    	["I will", "What about?"],
    	["You are welcome!"],
		["Bye", "Goodbye", "See you later"],
		["I'm not a robot!", "I'm not a bot. Are you?"],
		["You're naughty! -.. --- .----. -. / - / -... . / -. .- ..- --. .... - -.-- / .-- .. - .... / ..- ... -.-.--"],
		["Ok!", "Ok! I do.", "Ok! I'll do.", "Ok ok okk, don't cry!"],
		["No! I don't.", "No!", "I don't betray!"],
		["Why not?"],
		["Yes! I am."],
		["Create or login account on this site and have a nice copying or doing homework!"]
	];
    var alternative = ["Write loudly!", "I don't understand!", "I'm only a simple chatbot!", "I understood the question, but I may not answer.", "I try to process!"];
    document.querySelector("#input").addEventListener("keypress", function(e){
    	var key = e.which || e.keyCode;
    	if(key === 13){ //Enter button
			var input = document.getElementById("input").value;
			input = input.replace(/;/gi,":-)");
			input = input + ":-)";
    		document.getElementById("user").innerText = input;
    		output(input);
    	}
    });
    function output(input){
    	try{
    		var product = input + "=" + eval(input);
    	} catch(e){
    		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and 
    		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
    		if(compare(trigger, reply, text)){
    			var product = compare(trigger, reply, text);
    		} else {
    			var product = alternative[Math.floor(Math.random()*alternative.length)];
    		}
    	}
    	document.getElementById("chatbot").innerHTML = product;
    	speak(product);
    	document.getElementById("input").value = ""; //clear input value
    }
    function compare(arr, array, string){
    	var item;
    	for(var x=0; x<arr.length; x++){
    		for(var y=0; y<array.length; y++){
    			if(arr[x][y] == string){
    				items = array[x];
    				item =  items[Math.floor(Math.random()*items.length)];
    			}
    		}
    	}
    	return item;
    }
    function speak(string){
    	var utterance = new SpeechSynthesisUtterance();
    	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
    	utterance.text = string;
    	utterance.lang = "en-US";
    	utterance.volume = 1; //0-1 interval
    	utterance.rate = 1;
    	utterance.pitch = 2; //0-2 interval
    	speechSynthesis.speak(utterance);
    }
}