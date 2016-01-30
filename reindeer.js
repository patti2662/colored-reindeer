var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
//var boot = ["Bird", "Tamis", "Sister"]
var hohohoElement = document.getElementById("coloredReindeer");




// var i declares the 0 position-blue and dasher; we indicate that i is greater 
// than the length of reindeer which makes the loop run all the way through 
// the length of the array. I set it to reindeer instead of colors or boot because 
// reindeer has the LEAST number of elements in the array. If is used colors.length
// i would get undefined because there are more colors than reindeer; i++ indicates
// i'm adding 1 each time the loop runs; i use colors [1] and reindeer [1]
// because i declared that as my counter variable. I could have named it
// var shoe and it would worked.// sfor ( var shoe = 0; shoe < reindeer.length; shoe++) {
// hohohoElement.innerHTML += "<div>" + colors [shoe] + reindeer [shoe] + "</div>";
// }

for ( var i = 0; i < reindeer.length; i++) {
  hohohoElement.innerHTML += "<div>" + colors [i] + reindeer [i] + "</div>";
}