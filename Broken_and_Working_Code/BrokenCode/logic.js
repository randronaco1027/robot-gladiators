//When factButton is clicked
$("#factButton").on("click", function() {
	//Generate random number between 0 and 4
	var number = Math.floor((Math.random() * booFacts.length));
	//Display random fact accordingly
	$("#factText").text(booFacts[number])
})

//All of the facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

//When textPink is pressed
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

//When textOrange is pressed
$("#textOrange").on("click", function() {
	$("#funText").css("color", "orange")
})

//When textGreen is pressed
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//When boxGrow is pressed
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

//When boxShrink is pressed
$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})